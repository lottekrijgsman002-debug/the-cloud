// Central place for real-world links & contact details.
// TODO: replace every placeholder below with your real URLs.
export const siteConfig = {
  name: "Loulou & Lou",
  url: "https://loulou-lou.com",
  email: "hello@loulou-lou.com",
  social: {
    youtube: "https://www.youtube.com/@louloulou",
    spotify: "https://open.spotify.com/artist/",
    appleMusic: "https://music.apple.com/artist/",
    instagram: "https://www.instagram.com/louloulou/",
    facebook: "https://www.facebook.com/louloulou",
  },
};

export type PrimarySectionKey = "music" | "stories" | "world" | "about";
export type SecondarySectionKey = "sprookjesfilm" | "theatershow";
export type SectionKey = PrimarySectionKey | SecondarySectionKey;

// Primary pillars per the App Spec (Section 5, Table 3): Music, Verhalen
// (Stories), Character World and the Grown-ups corner. "Home" is handled
// separately in Header/Footer since it links to "/" rather than a sub-page.
export const sections: { key: PrimarySectionKey; href: string; accent: string }[] = [
  { key: "music", href: "/music", accent: "sunshine" },
  { key: "stories", href: "/stories", accent: "sky" },
  { key: "world", href: "/world", accent: "coral" },
  { key: "about", href: "/about", accent: "sky" },
];

// Phase 2 pillars per the App Spec (Section 14.2): still built and reachable,
// just not part of the primary tab structure yet.
export const secondarySections: { key: SecondarySectionKey; href: string; accent: string }[] = [
  { key: "sprookjesfilm", href: "/sprookjesfilm", accent: "coral" },
  { key: "theatershow", href: "/theatershow", accent: "sunshine" },
];
