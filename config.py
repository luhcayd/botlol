"""
Config v5: Stealth mode + appearance-based alerts on search pages,
per-store keywords, and product-page monitoring.
"""

import os

# Secrets are read from environment variables so they are never committed.
# Set these before running, e.g. in a .env or your shell:
#   export DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/..."
#   export USER_ID_TO_PING="123456789012345678"
# NOTE: the webhook that used to live here was leaked in git history and must be
# rotated (delete it in Discord > Server Settings > Integrations, create a new one).
DISCORD_WEBHOOK_URL = os.environ.get("DISCORD_WEBHOOK_URL", "")
USER_ID_TO_PING = os.environ.get("USER_ID_TO_PING", "")

# Base delay between full rounds of checks (in seconds)
CHECK_INTERVAL = 60

# Search pages to scan (appearance-based alerts)
SEARCH_SITES = [
    "https://www.walmart.com/search?q=pokemon",
    "https://www.target.com/s?searchTerm=pokemon",
    "https://www.costco.com/CatalogSearch?dept=All&keyword=pokemon",
    "https://www.dollargeneral.com/search.html?query=pokemon",
    "https://www.bestbuy.com/site/searchpage.jsp?st=pokemon",
    "https://www.pokemoncenter.com/en-us/search?q=pokemon",
    "https://www.macys.com/shop/featured/pokemon",
    "https://www.gamestop.com/search/?q=pokemon"
]

# Global keywords (used if no per-store override is defined)
KEYWORDS = [
    "pokemon cards",
    "pokemon trading card game",
    "tcg",
    "booster pack",
    "booster box",
    "etb",
    "elite trainer box",
    "premium collection",
    "ultra premium collection",
    "UPC",
    "tin",
    "mini tin",
    "collection box",
    "blister",
    "3-pack blister",
    "galaxy foil",
    "paldea",
    "scarlet & violet",
    "sv",
    "Scarlet & Violet",
    "Paldea Evolved",
    "Obsidian Flames",
    "Paradox Rift",
    "Temporal Forces",
    "Twilight Masquerade",
    "Shrouded Fable",
    "151",
    "Celebrations",
    "Crown Zenith",
    "Lost Origin",
    "Silver Tempest",
    "Evolving Skies",
    "Astral Radiance",
    "Brilliant Stars",
    "Fusion Strike"
]

# Optional: per-store keyword overrides.
# If a store domain (substring) appears in the URL, these are used instead of KEYWORDS.
STORE_KEYWORDS = {
    "walmart.com": [
        "booster box",
        "booster pack",
        "etb",
        "elite trainer box",
        "blister",
        "3-pack blister",
        "tin",
        "mini tin",
        "collection box"
    ],
    "target.com": [
        "pokemon cards",
        "etb",
        "elite trainer box",
        "booster pack",
        "booster box",
        "blister",
        "151",
        "Crown Zenith"
    ],
    "pokemoncenter.com": [
        "premium collection",
        "ultra premium collection",
        "Paldea Evolved",
        "Obsidian Flames",
        "Paradox Rift",
        "Twilight Masquerade",
        "Shrouded Fable",
        "151",
        "Crown Zenith"
    ]
}

# Product pages to monitor with stock-text heuristics
PRODUCT_PAGES = [
    {
        "name": "Walgreens – Pokémon Trading Card Game",
        "url": "https://www.walgreens.com/store/c/pokemon-trading-card-game/ID=300443630-product"
    },
    {
        "name": "Dollar General – SV Poster Collection Box",
        "url": "https://www.dollargeneral.com/p/pok-mon-tcg-scarlet-violet-poster-collection-box-with-foil-promo-cards-and-booster-packs/196214130449"
    },
    {
        "name": "Target – Black Kyurem EX & Melmetal EX Box",
        "url": "https://www.target.com/p/pok-233-mon-trading-card-game-black-kyurem-ex-38-melmetal-ex/-/A-94827546#lnk=sametab"
    }
]
