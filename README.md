# Loulou & Lou App

The first version of the Loulou & Lou web app: a bilingual (EN/NL), storybook-styled
home for the whole Loulou & Lou world. Music, Verhalen (stories and audiobooks) and
the Character World are the primary sections, with the Sprookjesfilm and Theatershow
following as Phase 2, matching the roadmap in the App Spec doc supplied by the team.

This is a **web preview** of that vision, not the native app itself. The App Spec
calls for a native iOS/Android app (React Native, in-app audio streaming, accounts,
offline downloads, parental gates, COPPA/GDPR-K compliance, a headless CMS). That is
a separate, larger engineering effort. This repo focuses on the brand, layout and
information architecture so there is something real to react to, built with
placeholder content where the real assets are not yet available.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- Custom lightweight i18n (no external i18n library): `/en` and `/nl` routes,
  auto-detected from the visitor's browser language, switchable any time

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), you'll be redirected to
`/en` or `/nl` depending on your browser language.

## Project structure

```
src/
  app/[locale]/          Every page, nested under the language segment
    page.tsx             Home
    music/                Music & Albums
    stories/               Verhalen & Luisterverhalen (Stories & Audiobooks)
    world/                  Character World ("Meet the World")
    about/                   For Grown-ups (trust, safety, contact)
    sprookjesfilm/            Sprookjesfilm (Phase 2, still built and reachable)
    theatershow/               Theatershow (Phase 2, still built and reachable)
  components/            Header, Footer, cards, icons, decorative SVGs
  data/site.ts            Social links + primary/secondary section lists
  i18n/
    dictionaries/en.json  All English text
    dictionaries/nl.json  All Dutch text
  proxy.ts                Locale detection & redirect (Next's "middleware")
```

## Design foundations

Palette and design principles come from Section 4 of the App Spec doc:

- **Colors**: Sunshine Yellow `#F5B733` (hero backgrounds, primary buttons),
  Sky Blue `#6EC6E8` (navigation, headers), Warm Coral `#F0754F` (highlights,
  badges, calls to action), a warm near-black Ink `#2B2420` for text, and a
  Cream `#FFF8EC` page background. Defined as CSS custom properties at the top
  of `src/app/globals.css`. The spec itself flags these as a starting palette
  pending the official brand style guide, so swap the hex values there once
  you have the confirmed brand colors.
- **Fonts**: Baloo 2 (headings), Nunito (body) and Caveat (the logo's script
  accent), loaded in `src/app/[locale]/layout.tsx`.
- **Principles**: storybook, not dashboard. Rounded shapes, soft shadows
  instead of hard UI chrome, a gentle drifting sun-and-clouds motif
  (`src/components/divider.tsx`), and characters used as navigation wherever
  possible.

## Make it yours

1. **Colors and fonts**, see above.
2. **Real links**: `src/data/site.ts` has your YouTube/Spotify/Apple
   Music/Instagram/Facebook URLs and contact email, all marked `TODO`.
3. **Real content**: the Music, Sprookjesfilm, Stories and Theatershow pages
   currently render placeholder cards (dashed borders, "coming soon" badges).
   Replace the placeholder arrays in each `src/app/[locale]/.../page.tsx` with
   your real albums, episodes, stories and shows (titles, cover art, links).
4. **Characters**: `CharacterAvatar` (`src/components/character-avatar.tsx`)
   renders a name in a dashed circle rather than attempting a likeness of your
   real character illustrations by Emerson. Swap it for the real artwork once
   you have it exported.
5. **Copy**: all text lives in `src/i18n/dictionaries/en.json` and `nl.json`,
   organized by page. Edit directly; both files must stay in sync (same keys).

## Notes

- Locale routing lives in `src/proxy.ts` (Next.js 16 renamed `middleware.ts`
  to `proxy.ts`). It reads a `NEXT_LOCALE` cookie first, then the browser's
  `Accept-Language` header, defaulting to Dutch.
- No audio/video is embedded yet, every section links out to YouTube, Spotify
  and Apple Music. In-app playback, accounts, offline downloads and the other
  native-app features in the App Spec are future work for the native build.
