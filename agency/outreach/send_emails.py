#!/usr/bin/env python3
"""
Reelo email sender.

Reads a CSV (columns: Email Address, Subject, Body) and sends each row as a real
email from your Gmail account over SMTP. Built for cold outreach, so it defaults
to a DRY RUN and throttles between sends to protect your sender reputation.

------------------------------------------------------------------------------
ONE-TIME SETUP
------------------------------------------------------------------------------
1. Turn on 2-Step Verification on your Google account (required for app passwords):
   https://myaccount.google.com/security
2. Create a Gmail App Password (pick "Mail"):
   https://myaccount.google.com/apppasswords
   You'll get a 16-character code like "abcd efgh ijkl mnop". Remove the spaces.
3. In your terminal, set two environment variables (this session only):
       export GMAIL_ADDRESS="cayden.w.sims@gmail.com"
       export GMAIL_APP_PASSWORD="abcdefghijklmnop"
   (Never paste the app password into the script or commit it anywhere.)

------------------------------------------------------------------------------
RUN IT
------------------------------------------------------------------------------
Preview only (default, sends nothing):
    python3 send_emails.py prospects/afternoon-25.csv

Actually send, 5 at a time to start, 90s apart:
    python3 send_emails.py prospects/afternoon-25.csv --send --limit 5

Send the whole file:
    python3 send_emails.py prospects/afternoon-25.csv --send

Options:
    --send            Actually send. Without this, it only previews.
    --limit N         Send at most N emails this run.
    --delay S         Seconds to wait between sends (default 90).
    --from-name NAME  Display name on the From header (default "Cayden Sims").
    --log FILE        Sent-log path (default sent-log.txt). Addresses already in
                      here are skipped, so it is safe to re-run.

------------------------------------------------------------------------------
IMPORTANT
------------------------------------------------------------------------------
* Gmail limits ~500 sends/day, but for COLD email keep it small (20-40/day) and
  ramp up slowly, or Google will start flagging you. Spread sends out.
* This is your personal domain. If outreach volume grows, move to a dedicated
  sending domain + a tool like Instantly or Smartlead so a spam complaint never
  touches your main inbox.
* Cold commercial email should be honest (real name, real subject) and give an
  easy way to opt out. Keep it respectful and low volume.
"""
import argparse
import csv
import os
import smtplib
import ssl
import sys
import time
from email.message import EmailMessage
from email.utils import formataddr


def load_rows(csv_path):
    rows = []
    with open(csv_path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        # tolerate slight header variations
        def col(d, *names):
            for n in names:
                for k in d:
                    if k.strip().lower() == n:
                        return d[k]
            return ""
        for d in reader:
            to = col(d, "email address", "email", "to").strip()
            subject = col(d, "subject").strip()
            body = col(d, "body", "message")
            if to and subject:
                rows.append({"to": to, "subject": subject, "body": body})
    return rows


def load_sent(log_path):
    if not os.path.exists(log_path):
        return set()
    with open(log_path, encoding="utf-8") as f:
        return {line.strip().lower() for line in f if line.strip()}


def record_sent(log_path, address):
    with open(log_path, "a", encoding="utf-8") as f:
        f.write(address.lower() + "\n")


def main():
    p = argparse.ArgumentParser(description="Send Reelo outreach emails from Gmail.")
    p.add_argument("csv", help="CSV with columns: Email Address, Subject, Body")
    p.add_argument("--send", action="store_true", help="Actually send (default: preview only)")
    p.add_argument("--limit", type=int, default=0, help="Max emails to send this run (0 = all)")
    p.add_argument("--delay", type=float, default=90.0, help="Seconds between sends (default 90)")
    p.add_argument("--from-name", default="Cayden Sims", help='From display name')
    p.add_argument("--log", default="sent-log.txt", help="Sent-log file (skips duplicates)")
    args = p.parse_args()

    address = os.environ.get("GMAIL_ADDRESS", "").strip()
    app_password = os.environ.get("GMAIL_APP_PASSWORD", "").strip()

    if args.send and (not address or not app_password):
        print("ERROR: set GMAIL_ADDRESS and GMAIL_APP_PASSWORD env vars first. See the top of this file.")
        sys.exit(1)

    rows = load_rows(args.csv)
    already = load_sent(args.log)
    queue = [r for r in rows if r["to"].lower() not in already]

    print(f"Loaded {len(rows)} rows from {args.csv}")
    if already:
        print(f"Skipping {len(rows) - len(queue)} already in {args.log}")
    if args.limit:
        queue = queue[: args.limit]
    print(f"{'SENDING' if args.send else 'PREVIEW (no send)'} {len(queue)} emails, {args.delay}s apart\n")

    if not queue:
        print("Nothing to do.")
        return

    server = None
    if args.send:
        context = ssl.create_default_context()
        server = smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context)
        server.login(address, app_password)

    try:
        for i, r in enumerate(queue, 1):
            print(f"[{i}/{len(queue)}] {r['to']}  |  {r['subject']}")
            if not args.send:
                continue
            msg = EmailMessage()
            msg["From"] = formataddr((args.from_name, address))
            msg["To"] = r["to"]
            msg["Subject"] = r["subject"]
            msg.set_content(r["body"])
            server.send_message(msg)
            record_sent(args.log, r["to"])
            print("        sent.")
            if i < len(queue):
                time.sleep(args.delay)
    finally:
        if server:
            server.quit()

    if args.send:
        print(f"\nDone. Logged to {args.log}.")
    else:
        print("\nPreview complete. Re-run with --send to actually send.")


if __name__ == "__main__":
    main()
