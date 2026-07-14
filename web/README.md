# Agency Website (React + Vite)

The upgraded, premium version of the site: a React app with React Bits-style
animated components and a sleek glassy aesthetic. This replaces the plain static
version in `../site` (that folder is kept as a simple fallback).

## What's inside

- **Silk WebGL background** (`src/components/Silk.jsx`) — a flowing aurora
  gradient rendered with a shader, in the brand palette.
- **React Bits-style components** (`src/components/bits.jsx`):
  - `Reveal` — scroll-in animations
  - `GradientText` / `ShinyText` — animated text
  - `TiltCard` — 3D tilt toward the cursor (portfolio cards)
  - `SpotlightCard` — glass card with a cursor-following glow
  - `Magnet` — button that leans toward the cursor
  - `CountUp` — stats that roll up when scrolled into view
- Glassy, frosted UI throughout, fully responsive with a mobile menu.

## Run it locally

```
cd web
npm install      # first time only
npm run dev      # opens a live dev server, usually http://localhost:5173
```

## Build for production

```
cd web
npm run build    # outputs a static site to web/dist
npm run preview  # preview the built site locally
```

## Deploy

`npm run build` produces a normal static bundle in `web/dist` that any host serves:

- **Netlify:** connect the repo (build command `npm run build`, publish dir
  `web/dist`), or drag the built `web/dist` folder onto app.netlify.com/drop
- **Vercel:** import the repo, set the root to `web`, framework Vite, done
- **GitHub Pages:** push `web/dist` to a Pages branch (or use an action)

## Before you go live

1. **Media** — the hero and portfolio load videos/images from Higgsfield's CDN
   (URLs live in `src/App.jsx`, in the `media` object). For a site you own,
   download them and put them in `public/`, then point the paths there. Swap in
   your real UGC videos the same way.
2. **Contact form** — in `src/App.jsx`, replace `YOUR_FORM_ID` with a free
   Formspree endpoint, or delete the form and keep the email button. The email
   is set to cayden.w.sims@gmail.com.
3. **Meta Pixel** — uncomment the Pixel block in `index.html` and set your
   Pixel ID once your ad account is live.
4. **Brand name** — "Studio" is a placeholder in the nav and footer.

## Notes

- Respects `prefers-reduced-motion`: animations and the shader ease off for
  users who ask for less motion.
- The old static version in `../site` still works if you ever want a
  zero-build fallback.
