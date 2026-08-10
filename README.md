# Loulou & Lou App

A bilingual (Dutch primary, English toggle), storybook-styled web app for the
Loulou & Lou world, built from the Build Plan doc: Music, Watch & Imagine,
Verhalen (stories & audiobooks), Character World, Favorites, the Loulou & Lou
Club, and an Account/child-profile area. This is the "web-first, mobile-ready
content and discovery app" described in Section 1 of the plan (platform
handoff to Spotify/Apple Music/YouTube, not custom streaming).

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript, Tailwind CSS v4
- **Data layer**: local seed data today, shaped exactly like the plan's
  content model (Section 4) behind an async repository
  (`src/lib/content-repository.ts`), so it's a contained swap once real
  services are connected. Nothing that calls this module needs to change.
- **Backend (not yet wired up)**: the plan calls for Supabase (auth, parent
  account, favorites, Postgres) and Sanity (CMS for characters and content).
  Both need real projects created by you, since account signup isn't
  something this session can do on your behalf. Until then, the account,
  favorites and continue-listening features work for real, just against
  `localStorage` on your device instead of Supabase (see
  `src/context/account-context.tsx`).
- **Analytics**: PostHog is specified (Section 6) but not wired up; there's
  nowhere to send events without a project.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/
    page.tsx                 Home
    listen/, watch/,          Pillar hubs (browse, filter by character/new)
    stories/, shows/
    characters/[slug]/       Character page template (5 in v1)
    content/[id]/             Content detail page, external platform handoff
    favorites/                Unified saved + continue-listening
    club/                     Loulou & Lou Club signup (email capture only)
    account/                  Child profile (name + age band) + language
    search/                   Client-side search over characters/content
  components/
    nav/                     Top nav (desktop) + bottom nav (mobile) + footer
    content/                 Shelf, ContentCard, FavoriteButton, PillarHub, etc.
  context/account-context.tsx Local stand-in for Supabase (see above)
  data/                      Seed characters.ts + content-items.ts
  lib/
    types.ts                 The data model from Build Plan Section 4
    content-repository.ts    The Supabase/Sanity swap point
    ui-strings.ts             Static UI copy (nav, buttons), localized {nl,en}
    accent.ts                 Per-character accent color -> Tailwind classes
    get-locale.ts / locale.ts Cookie-based language, no locale prefix in URLs
```

## Design foundations

- **Colors**: sampled from real loulou-lou.com screenshots rather than the
  Build Plan's starting guess: white/paper background, Magenta, Green,
  Mustard and Orange as the four brand hues, black (`ink`) for text, buttons
  and borders. Each of the 5 v1 characters is assigned one of the 4 hues
  (`src/data/characters.ts`); Orange is reused for a second character since
  there are 5 characters and 4 confirmed colors. Defined as CSS custom
  properties in `src/app/globals.css`, with a small class-mapping helper at
  `src/lib/accent.ts` (`accentClasses`) used everywhere a hero/card needs a
  background, tint, or matching text color. These hex values are read off
  screenshots, not color-picked from source files, so treat them as close
  rather than pixel-exact; swap in the real values in `globals.css` if you
  have them from the brand's style guide.
- **Fonts**: Baloo 2 (headings), Nunito (body), Caveat (logo script accent).
  Still unconfirmed against the real brand, swap in `src/app/layout.tsx`.
- **Characters**: `CharacterAvatar` and the character-page hero render a name
  in a dashed circle rather than a guessed illustration. Swap in the real
  artwork from Emerson once it's exported; the layout doesn't need to change.

## Data model

`src/lib/types.ts` mirrors Build Plan Section 4 field for field: `Character`,
`ContentItem` (with `externalRef: {platform, uri}` for the Spotify/Apple
Music/YouTube handoff), `UserAccount`, `ChildProfile` (age band only, no
birth date, no child PII), `Favorite`, `ContinueListeningEntry`,
`ClubSignup`. Seed data lives in `src/data/`.

## Make it yours

1. **Connect Supabase**: create a project, then replace
   `src/context/account-context.tsx`'s localStorage read/write with real
   Supabase queries. The `useAccount()` hook's API is designed to stay the
   same at every call site.
2. **Connect Sanity**: create a project with the schema in
   `src/lib/types.ts`, then replace the bodies of the functions in
   `src/lib/content-repository.ts` with real Sanity queries.
3. **Real content and links**: `src/data/characters.ts` and
   `src/data/content-items.ts` are seeded with the v1 roster (Loulou & Lou,
   Guru Woof, Maestro Mozy, JazzCat Louis, Captain Clock). Every
   `externalRef` currently points at your general channel/profile link in
   `src/lib/site-config.ts`; swap in real per-track/per-video URIs as they're
   confirmed.
4. **Colors, fonts, character art**: see Design foundations above.
5. **Copy**: static UI strings live in `src/lib/ui-strings.ts`; content text
   lives per-field on each character/content item in `src/data/`. Both are
   `{nl, en}` objects, matching the plan's "localized from day one" approach
   (Section 5).

## Notes

- No locale prefix in URLs, matching the plan's sitemap (Section 2) exactly.
  Language is a cookie-backed toggle (in Account, or the header), not a
  route segment.
- Filtering on the Listen/Watch/Stories/Shows hubs is done via query params
  (`?character=`, `?filter=new`) so it works without client JS; the pages
  themselves are Server Components.
