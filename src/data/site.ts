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

export type SectionKey =
  | "music"
  | "sprookjesfilm"
  | "stories"
  | "theatershow"
  | "world"
  | "about";

export const sections: { key: SectionKey; href: string; accent: string }[] = [
  { key: "music", href: "/music", accent: "mustard" },
  { key: "sprookjesfilm", href: "/sprookjesfilm", accent: "orange" },
  { key: "stories", href: "/stories", accent: "green" },
  { key: "theatershow", href: "/theatershow", accent: "red" },
  { key: "world", href: "/world", accent: "magenta" },
  { key: "about", href: "/about", accent: "ink" },
];
