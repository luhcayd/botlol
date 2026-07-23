import time
import random
import requests
from datetime import datetime

import config

# Track if a keyword was seen on a search site before (for appearance-based alerts)
last_seen_keywords = {}

# Track last known status of product pages
last_product_status = {}

# Cache validators (ETag / Last-Modified) per URL so unchanged pages cost
# almost nothing: the server replies 304 Not Modified with no body.
conditional_cache = {}

# Cache the last fetched body per URL so a 304 can reuse it without re-downloading.
body_cache = {}

# Rotate through realistic user agents (stealth)
USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
]

# Simple heuristics for product-page stock detection
IN_STOCK_WORDS = [
    "add to cart",
    "add to basket",
    "in stock",
    "ship it",
    "pickup",
    "add for pickup",
    "available for pickup"
]

OUT_OF_STOCK_WORDS = [
    "out of stock",
    "sold out",
    "unavailable",
    "no longer available"
]

def log(message: str) -> None:
    """Write a line to a local log file with timestamp (no Discord spam)."""
    ts = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")
    line = f"[{ts} UTC] {message}\n"
    try:
        with open("bot.log", "a", encoding="utf-8") as f:
            f.write(line)
    except Exception as e:
        print("Log error:", e)

def send(msg: str) -> None:
    """Send a message to Discord via your webhook and log it."""
    try:
        requests.post(config.DISCORD_WEBHOOK_URL, json={"content": msg}, timeout=10)
        log(f"ALERT SENT: {msg.replace(chr(10), ' | ')}")
    except Exception as e:
        print("Send error:", e)
        log(f"Send error: {e}")

def fetch(url: str) -> str:
    """Fetch a page politely, using conditional requests to stay lightweight.

    If we've seen this URL before, we send the cached ETag / Last-Modified so the
    server can reply 304 Not Modified with no body — near-zero cost when nothing
    changed, which is the common case between drops.
    """
    headers = {
        "User-Agent": random.choice(USER_AGENTS),
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Connection": "close",
    }
    # Reuse cached validators so the server can short-circuit with a 304.
    validators = conditional_cache.get(url, {})
    if "etag" in validators:
        headers["If-None-Match"] = validators["etag"]
    if "last_modified" in validators:
        headers["If-Modified-Since"] = validators["last_modified"]

    # Short random delay before each request so we don't hammer sites.
    time.sleep(random.uniform(1.0, 3.0))

    resp = requests.get(url, headers=headers, timeout=20)

    # Nothing changed since last time — reuse the cached body, no re-download.
    if resp.status_code == 304:
        log(f"Not modified (304), reusing cache: {url}")
        return body_cache.get(url, "")

    if resp.status_code in (403, 429):
        warn = f"Got status {resp.status_code} (rate-limited or blocked) for {url}"
        print(warn)
        log(warn)
        return ""

    resp.raise_for_status()

    # Store fresh validators for next time so future checks can be conditional.
    new_validators = {}
    if resp.headers.get("ETag"):
        new_validators["etag"] = resp.headers["ETag"]
    if resp.headers.get("Last-Modified"):
        new_validators["last_modified"] = resp.headers["Last-Modified"]
    conditional_cache[url] = new_validators

    body = resp.text.lower()
    body_cache[url] = body
    return body

def get_keywords_for_site(site_url: str):
    """Return per-store keywords if defined, else global KEYWORDS."""
    for domain_substring, kw_list in config.STORE_KEYWORDS.items():
        if domain_substring in site_url:
            return kw_list
    return config.KEYWORDS

def check_search_sites():
    """Appearance-based alerts on search result pages."""
    for site in config.SEARCH_SITES:
        try:
            html = fetch(site)
            if not html:
                continue  # blocked or empty, skip for now

            kws = get_keywords_for_site(site)
            for kw in kws:
                key = (site, kw)
                now_present = kw.lower() in html
                was_present = last_seen_keywords.get(key, False)

                # NEW appearance -> alert once
                if now_present and not was_present:
                    last_seen_keywords[key] = True
                    msg = f"<@{config.USER_ID_TO_PING}> 🔥 NEW ITEM APPEARED (keyword: '{kw}')\n{site}"
                    send(msg)
                else:
                    last_seen_keywords[key] = now_present

        except Exception as e:
            err = f"Error checking search site {site}: {e}"
            print(err)
            log(err)

def infer_product_status(html: str) -> str:
    """Infer whether a product page looks in-stock or not."""
    if not html:
        return "unknown"

    text = html
    in_hit = any(word in text for word in IN_STOCK_WORDS)
    out_hit = any(word in text for word in OUT_OF_STOCK_WORDS)

    if in_hit and not out_hit:
        return "in_stock"
    if out_hit and not in_hit:
        return "not_in_stock"
    if in_hit and out_hit:
        return "unknown"
    return "unknown"

def check_product_pages():
    """Check specific product pages using stock-text heuristics."""
    for product in config.PRODUCT_PAGES:
        url = product.get("url")
        name = product.get("name", url)
        try:
            html = fetch(url)
            status = infer_product_status(html)
            prev = last_product_status.get(url, "unknown")

            if status == "in_stock" and prev != "in_stock":
                last_product_status[url] = "in_stock"
                msg = f"<@{config.USER_ID_TO_PING}> 🔥 PRODUCT IN STOCK: {name}\n{url}"
                send(msg)
            else:
                last_product_status[url] = status

        except Exception as e:
            err = f"Error checking product '{name}': {e}"
            print(err)
            log(err)

def main():
    print("Restock monitor running. Only alerts when NEW items appear or products go IN STOCK.\n")
    log("Bot started.")

    while True:
        check_search_sites()
        check_product_pages()

        # Randomized sleep between full rounds to look less bot-like
        sleep_time = config.CHECK_INTERVAL + random.uniform(-10, 10)
        if sleep_time < 20:
            sleep_time = 20  # never spam faster than ~20s between full loops
        log(f"Sleeping for {int(sleep_time)} seconds before next round.")
        time.sleep(sleep_time)

if __name__ == "__main__":
    main()
