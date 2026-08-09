# Loulou & Lou — App

The first version of the Loulou & Lou web app: a bilingual (EN/NL), storybook-styled
home for the whole Loulou & Lou world — music, the Sprookjesfilm, stories &
audiobooks, the theatershow, the characters, and links out to YouTube, Spotify and
Apple Music.

This is a **starting point**, built with placeholder content and a proposed color
palette so there's something real to react to. See "Make it yours" below for where
to plug in the real brand.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- Custom lightweight i18n (no external i18n library) — `/en` and `/nl` routes,
  auto-detected from the visitor's browser language, switchable any time

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to
`/en` or `/nl` depending on your browser language.

## Project structure

```
src/
  app/[locale]/          Every page, nested under the language segment
    page.tsx             Home
    music/                Music & Albums
    sprookjesfilm/         Sprookjesfilm episodes
    stories/               Stories & Audiobooks
    theatershow/            Theatershow
    world/                   Meet the characters
    about/                    About us / contact
  components/            Header, Footer, cards, icons, decorative SVGs
  data/site.ts            Social links + section list — edit real URLs here
  i18n/
    dictionaries/en.json  All English text
    dictionaries/nl.json  All Dutch text
  proxy.ts                Locale detection & redirect (Next's "middleware")
```

## Make it yours

This scaffold is intentionally easy to re-skin once you have real brand assets:

1. **Colors** — `src/app/globals.css`, the `:root` block at the top. Swap the
   `--color-*` hex values for your real Loulou & Lou palette from loulou-lou.com.
2. **Fonts** — `src/app/[locale]/layout.tsx` loads `Fraunces` (headings) and
   `Quicksand` (body text) from Google Fonts as a storybook-feeling placeholder
   pairing. Swap for your real brand fonts the same way.
3. **Real links** — `src/data/site.ts` has your YouTube/Spotify/Apple
   Music/Instagram/Facebook URLs and contact email, all marked `TODO`.
4. **Real content** — the Music, Sprookjesfilm, Stories and Theatershow pages
   currently render placeholder cards (dashed borders, "coming soon" badges).
   Replace the placeholder arrays in each `src/app/[locale]/.../page.tsx` with
   your real albums, episodes, stories and shows (titles, cover art, links).
5. **Characters** — `src/app/[locale]/world/page.tsx` and the homepage use emoji
   as stand-ins for Loulou, Lou and friends. Swap these for real character
   illustrations once available.
6. **Copy** — all text lives in `src/i18n/dictionaries/en.json` and `nl.json`,
   organized by page. Edit directly; both files must stay in sync (same keys).

## Notes

- Locale routing lives in `src/proxy.ts` (Next.js 16 renamed `middleware.ts` to
  `proxy.ts`). It reads a `NEXT_LOCALE` cookie first, then the browser's
  `Accept-Language` header, defaulting to Dutch.
- No audio/video is embedded yet — every section links out to YouTube / Spotify /
  Apple Music. In-app playback (e.g. embedding players) is a natural next step
  once you're happy with the direction.
