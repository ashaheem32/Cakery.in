# The Cakery — website

Animated marketing site for **The Cakery**, a cake, dessert and pastry shop in
Kannur, Pappinisseri and Taliparamba (Kerala).

All content was sourced from [instagram.com/the_cakery.in](https://www.instagram.com/the_cakery.in)
and the existing thecakery.in landing page.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # serve the production build
npm run lint
```

## Stack

| Concern       | Choice                                                          |
| ------------- | --------------------------------------------------------------- |
| Build         | Vite 8 + React 19                                               |
| Styling       | Tailwind CSS v4 (`@theme` tokens in `src/index.css`)            |
| Animation     | Framer Motion (reveals, parallax, tilt, layout), GSAP ticker    |
| Smooth scroll | Lenis, driven off the GSAP ticker so ScrollTrigger stays synced |
| Icons         | lucide-react (+ one hand-drawn Instagram glyph)                 |

No 3D / WebGL. An earlier build had a Three.js hero cake; it was replaced by the
arch-framed photography hero, and `three` / `@react-three/*` were uninstalled —
that removed ~250 KB gzipped from the payload.

## Design language

The site is built on one motif: the **arch**. It frames the hero photograph, the
smaller inset image, the signature product cards and the category icon niches
(`rounded-t-full` on a portrait box). Supporting rules: hairline gold rules,
small-caps tracked labels, `01`–`06` editorial numbering, and a rotating
circular seal (`ui/SpinBadge.jsx`) as the hero's focal accent.

## Editing content

**`src/data/site.js` is the single source of truth.** Phone numbers, locations,
menu items, testimonials, the grand-opening date and all body copy live there —
you should not need to touch a component to change wording or add a product.

Prices are `null` by default and render as _"On request"_. Set a number
(`price: 850`) and it renders as `₹850`.

## Adding photos

Product cards fall back to a generated brand placeholder when no image exists,
so the layout never looks broken. Drop real photos into `public/images/` using
the filenames listed in [`public/images/README.md`](public/images/README.md) and
they appear immediately.

Instagram serves its images from signed CDN URLs that expire, so they cannot be
linked directly — export the originals from the phone or design files they were
posted from.

## Brand

| Token            | Value                 | Use                          |
| ---------------- | --------------------- | ---------------------------- |
| `forest-950/900` | `#04170f` / `#07281d` | Page and section backgrounds |
| `forest-850/800` | `#092f22` / `#0b3b2b` | Cards, panels                |
| `cream`          | `#f4efe4`             | Body text, the leaf mark     |
| `gold`           | `#c9a227`             | CTAs, accents, countdown     |

Type: **Fraunces** (display) · **Plus Jakarta Sans** (body) · **Caveat** (script accents).

The leaf mark is redrawn as vector in `src/components/ui/Logo.jsx` and
`public/favicon.svg`, so it stays crisp at any size and recolours with
`currentColor`.

## Structure

```
src/
├── data/site.js           ← all content
├── hooks/useLenis.js      ← smooth scroll + GSAP ticker
├── components/
│   ├── Hero.jsx           ← arch composition + parallax layers
│   ├── Nav.jsx  Preloader.jsx  Cursor.jsx
│   ├── Categories.jsx  Signature.jsx  MenuList.jsx
│   ├── Story.jsx  Opening.jsx  Testimonials.jsx  Visit.jsx
│   ├── Marquee.jsx  Footer.jsx  WhatsAppFab.jsx
│   └── ui/                ← Logo, SpinBadge, Reveal, TiltCard,
│                            ProductImage, SectionHeading, Icons
```

## Mobile layout

Mobile is not a squeezed desktop — several sections change shape below `sm`/`lg`
so the type stays readable:

| Section        | Mobile                                    | Desktop             |
| -------------- | ----------------------------------------- | ------------------- |
| Hero fact rail | Below the photo (3rd grid child)          | Under the copy      |
| Categories     | Two-up tiles, icon + name only            | 3-col cards + blurb |
| Signature      | Swipe rail, one card at 76vw, snap points | 3-col grid          |
| Testimonials   | One drifting row                          | Two rows            |
| Contact strip  | Two-up                                    | 4-up                |
| Order button   | Icon-only circle                          | Labelled pill       |

Section padding is `py-14 sm:py-24 lg:py-32` throughout — keep that ladder when
adding sections. Mobile page height is ~8,300px (it was 13,000px before these
changes), so check the number hasn't crept back up.

A variant that mirrored the desktop column counts on mobile was tried and
reverted: it packed tighter (~6,100px) but drove body copy down to ~9px.

## Testing the mobile layout

Chrome's window can't be resized below ~600px on macOS, which makes narrow
breakpoints hard to check. The reliable trick is an iframe — media queries
inside one resolve against the *iframe's* width, not the window's. Drop a
throwaway file in `public/` and open it:

```html
<!-- public/__mobile.html — delete when done -->
<body style="margin:0;background:#222;display:flex;justify-content:center">
  <iframe src="/" style="width:390px;height:844px;border:0"></iframe>
</body>
```

Drive it from the console with
`document.querySelector('iframe').contentWindow.scrollTo(0, y)`.

## Notes for future edits

- **Never put `transition-all` on a Framer Motion element.** A CSS transition on
  `transform` fights Motion's inline transform and can strand the animation
  mid-flight (this happened to the header).
- Scroll reveals use `viewport={{ once: true, amount: 0.15 }}` with no negative
  margin — a shrunk detection box can leave content stuck at `opacity: 0` after
  a long programmatic scroll.
- `Reveal`, `RevealWords` and `TiltCard` all bail out to static markup under
  `prefers-reduced-motion`.
- **Don't put a `position` utility in a component's base className** if callers
  might pass their own. Tailwind emits `relative` after `absolute`, so a base
  `relative` silently wins and the caller's `absolute` is ignored — this dropped
  the hero's inset arch back into normal flow.
- Page content is **not** gated behind an entrance animation. Animations are
  rAF-driven and rAF is frozen in a hidden tab, so gating `<main>` on an
  animated opacity can render the whole site blank until the tab is focused.
  The preloader is an opaque overlay on top of live content instead.

## Deploying

Static output — `npm run build`, then serve `dist/`. Works as-is on Netlify,
Vercel or Cloudflare Pages (build `npm run build`, publish `dist`).
