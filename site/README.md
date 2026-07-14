# Agency Website

A premium single-page site for the studio, built in plain HTML, CSS, and JavaScript. No framework, no build step. Open `index.html` in a browser and it works.

Sections: Hero, Value strip, Portfolio, Services, Pricing, Process, FAQ, Contact.

## Files

- `index.html` — all the page content and structure
- `styles.css` — all styling (dark premium theme, fully responsive)
- `script.js` — nav behavior, mobile menu, scroll reveal animations
- `assets/` — where your local images should live (see below)

## Run it locally

Just open `index.html` in your browser. Or serve it:

```
cd site
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy it

Any static host works. Easiest options:

- **Netlify:** drag the `site` folder onto app.netlify.com/drop
- **Vercel:** `vercel` in the `site` folder, or connect the repo
- **GitHub Pages:** push and enable Pages on the folder

## Before you go live: three things to set

### 1. Localize the images and videos (recommended)

The hero and portfolio use short UGC video clips plus poster images, all
generated with Higgsfield and currently loading from Higgsfield's CDN. That
works, but for a site you own you want the media hosted with the site so it
never breaks. On your own computer (not the sandbox), download the files listed
in `assets/IMAGE-SOURCES.txt` (images) and `assets/VIDEO-SOURCES.txt` (videos)
into `site/assets/`, then in `index.html` swap each
`https://d8j0ntlcm91z4.cloudfront.net/...` `src` for the matching local
`assets/...` path. When you have your real UGC videos, just drop those in
instead, same filenames.

### 2. Wire up the contact form

Open `index.html` and find the contact form. Two options:

- **Formspree (easiest):** make a free form at formspree.io, then replace
  `YOUR_FORM_ID` in the form's `action` with your endpoint. Submissions email you.
- **Just email:** delete the `<form>` block and keep the email button below it.

The email button is already set to `cayden.w.sims@gmail.com`. Change it if you
use a different address.

### 3. Add your Meta Pixel (when your ad account is ready)

In the `<head>` of `index.html` there is a commented Meta Pixel block. Uncomment
it and replace `PIXEL_ID` with your real Pixel ID. This lets you track visitors,
see who contacts you, and retarget people who did not. It is the link between your
Meta ads and this site.

## Making the portfolio videos playable

Each portfolio card has a play button. To make one open your real video, add a
`data-video="https://your-video-link"` attribute to that card's
`<button class="play">`. The script wires the rest.

## Notes

- Fully responsive with a mobile menu. Almost all Meta traffic is mobile, so the
  phone layout was a priority.
- Fonts load from Google Fonts. If you localize everything for full offline use,
  you can self-host Inter too, but this is optional.
- All spec work is labeled "Spec Concept" and the footer states it, so nothing
  implies a client relationship that does not exist.
