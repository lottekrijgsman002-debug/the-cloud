import type { Character } from "@/lib/types";

// V1 roster per the Build Plan, Section 1. Five character pages, one shared template.
export const characters: Character[] = [
  {
    id: "loulou-lou",
    slug: "loulou-lou",
    name: "Loulou & Lou",
    moodWords: [
      { nl: "verhalen", en: "storytelling" },
      { nl: "avontuur", en: "adventure" },
      { nl: "vriendschap", en: "friendship" },
    ],
    accentToken: "magenta",
    voiceLine: {
      nl: "Twee beste vrienden, altijd op zoek naar het volgende avontuur.",
      en: "Two best friends, always on the hunt for the next adventure.",
    },
    portrait: "/characters/loulou-lou.jpg",
  },
  {
    id: "guru-woof",
    slug: "guru-woof",
    name: "Guru Woof",
    moodWords: [
      { nl: "rustig", en: "calm" },
      { nl: "meditatie", en: "meditation" },
      { nl: "zacht", en: "gentle" },
    ],
    accentToken: "green",
    voiceLine: {
      nl: "Rustig ademen, samen met Guru Woof. Tijd om tot rust te komen.",
      en: "Slow breaths, together with Guru Woof. Time to wind all the way down.",
    },
    portrait: "/characters/guru-woof.jpg",
  },
  {
    id: "maestro-mozy",
    slug: "maestro-mozy",
    name: "Maestro Mozy",
    moodWords: [
      { nl: "klassiek", en: "classical" },
      { nl: "piano", en: "piano" },
      { nl: "elegant", en: "elegant" },
    ],
    accentToken: "mustard",
    voiceLine: {
      nl: "Een beetje concertzaalmagie, gespeeld op de piano, voor elk klein oor.",
      en: "A little concert-hall magic, played on the piano, for every little ear.",
    },
    portrait: "/characters/maestro-mozy.jpg",
  },
  {
    id: "jazzcat-louis",
    slug: "jazzcat-louis",
    name: "JazzCat Louis",
    moodWords: [
      { nl: "jazz", en: "jazz" },
      { nl: "cool", en: "cool" },
      { nl: "speels", en: "playful" },
    ],
    accentToken: "orange",
    voiceLine: {
      nl: "Cool, relaxed en altijd in voor een geïmproviseerd deuntje op de gitaar.",
      en: "Cool, relaxed and always ready for an improvised tune on the guitar.",
    },
    portrait: "/characters/jazzcat-louis.jpg",
  },
  {
    id: "captain-clock",
    slug: "captain-clock",
    name: "Captain Clock",
    moodWords: [
      { nl: "avontuur", en: "adventure" },
      { nl: "tijdreizen", en: "time-travel" },
      { nl: "nieuwsgierig", en: "curious" },
    ],
    accentToken: "orange",
    voiceLine: {
      nl: "Een nieuwsgierige reiziger door de tijd, met voor elk tijdperk een lied.",
      en: "A curious traveler through time, with a song for every era.",
    },
  },
];

export function getCharacterBySlug(slug: string): Character | undefined {
  return characters.find((c) => c.slug === slug);
}
