import type { ContentItem } from "@/lib/types";
import { siteConfig } from "@/lib/site-config";

const spotify = { platform: "spotify" as const, uri: siteConfig.social.spotify };
const youtube = { platform: "youtube" as const, uri: siteConfig.social.youtube };

// Seed content matching the content_items schema (Section 4). Every item
// links to a real channel/profile for now; swap `externalRef` for the real
// per-track/per-video URI once this moves into Sanity. Items with
// `externalRef: null` still need a listening link added before launch.
export const contentItems: ContentItem[] = [
  {
    id: "song-loulou-op-avontuur",
    type: "song",
    characterId: "loulou-lou",
    title: { nl: "Op Avontuur", en: "On an Adventure" },
    description: {
      nl: "Een vrolijk meezingliedje voor onderweg.",
      en: "A cheerful singalong for on the go.",
    },
    externalRef: spotify,
    localeAvailable: ["nl", "en"],
    pillar: "listen",
    ageBands: ["3-6", "6-9"],
    tags: ["adventure", "singalong"],
    isCampaign: true,
    image: "/campaign/op-avontuur.jpg",
  },
  {
    id: "story-loulou-verdwenen-ster",
    type: "story",
    characterId: "loulou-lou",
    title: { nl: "Het Sprookje van de Verdwenen Ster", en: "The Tale of the Missing Star" },
    description: {
      nl: "Een origineel sprookje van Loulou & Lou, perfect voor het slapengaan.",
      en: "An original Loulou & Lou fairytale, perfect for bedtime.",
    },
    externalRef: null,
    localeAvailable: ["nl", "en"],
    pillar: "stories",
    ageBands: ["3-6"],
    tags: ["fairytale", "bedtime"],
    isBedtimePick: true,
  },
  {
    id: "video-loulou-dansen",
    type: "video",
    characterId: "loulou-lou",
    title: { nl: "Dansen met Loulou & Lou", en: "Dancing with Loulou & Lou" },
    description: {
      nl: "Sta op en dans mee met Loulou & Lou.",
      en: "Get up and dance along with Loulou & Lou.",
    },
    externalRef: youtube,
    localeAvailable: ["nl", "en"],
    pillar: "watch",
    ageBands: ["0-3", "3-6"],
    tags: ["singalong", "dance"],
    isNew: true,
  },
  {
    id: "story-guru-adem-in-adem-uit",
    type: "story",
    characterId: "guru-woof",
    title: { nl: "Adem in, Adem uit", en: "Breathe In, Breathe Out" },
    description: {
      nl: "Een rustige, muzikale meditatie om samen tot rust te komen.",
      en: "A calm, musical meditation to settle down together.",
    },
    externalRef: spotify,
    localeAvailable: ["nl", "en"],
    pillar: "stories",
    ageBands: ["3-6", "6-9"],
    tags: ["meditation", "calm", "bedtime"],
    isBedtimePick: true,
  },
  {
    id: "story-guru-slaap-lekker",
    type: "story",
    characterId: "guru-woof",
    title: { nl: "Slaap Lekker met Guru Woof", en: "Sweet Dreams with Guru Woof" },
    description: {
      nl: "Een zachte meditatiegids die helpt bij het inslapen.",
      en: "A gentle meditation guide to help drift off to sleep.",
    },
    externalRef: spotify,
    localeAvailable: ["nl", "en"],
    pillar: "stories",
    ageBands: ["0-3", "3-6"],
    tags: ["meditation", "sleep"],
    isBedtimePick: true,
  },
  {
    id: "song-guru-rustig-liedje",
    type: "song",
    characterId: "guru-woof",
    title: { nl: "Rustig Liedje", en: "Quiet Song" },
    description: {
      nl: "Een zacht liedje om even helemaal tot rust te komen.",
      en: "A soft song for a moment of total calm.",
    },
    externalRef: spotify,
    localeAvailable: ["nl", "en"],
    pillar: "listen",
    ageBands: ["0-3", "3-6"],
    tags: ["calm"],
  },
  {
    id: "song-mozy-pianodans",
    type: "song",
    characterId: "maestro-mozy",
    title: { nl: "Pianodans", en: "Piano Dance" },
    description: {
      nl: "Een sprankelend pianostuk voor kleine muziekliefhebbers.",
      en: "A sparkling piano piece for little music lovers.",
    },
    externalRef: spotify,
    localeAvailable: ["nl", "en"],
    pillar: "listen",
    ageBands: ["3-6", "6-9"],
    tags: ["classical", "piano"],
  },
  {
    id: "video-mozy-middag",
    type: "video",
    characterId: "maestro-mozy",
    title: { nl: "Een Middag met Maestro Mozy", en: "An Afternoon with Maestro Mozy" },
    description: {
      nl: "Maestro Mozy neemt je mee de concertzaal in.",
      en: "Maestro Mozy takes you into the concert hall.",
    },
    externalRef: youtube,
    localeAvailable: ["nl", "en"],
    pillar: "watch",
    ageBands: ["3-6", "6-9"],
    tags: ["classical", "educational"],
  },
  {
    id: "song-jazzcat-swing",
    type: "song",
    characterId: "jazzcat-louis",
    title: { nl: "Swing met JazzCat Louis", en: "Swing with JazzCat Louis" },
    description: {
      nl: "Een swingend meezinger op de gitaar.",
      en: "A swinging singalong on the guitar.",
    },
    externalRef: spotify,
    localeAvailable: ["nl", "en"],
    pillar: "listen",
    ageBands: ["3-6", "6-9"],
    tags: ["jazz", "singalong"],
    isNew: true,
  },
  {
    id: "video-jazzcat-gitaarles",
    type: "video",
    characterId: "jazzcat-louis",
    title: { nl: "Gitaarles met JazzCat Louis", en: "Guitar Lesson with JazzCat Louis" },
    description: {
      nl: "JazzCat Louis leert je de eerste akkoorden.",
      en: "JazzCat Louis teaches you the first few chords.",
    },
    externalRef: youtube,
    localeAvailable: ["nl", "en"],
    pillar: "watch",
    ageBands: ["6-9"],
    tags: ["jazz", "educational"],
  },
  {
    id: "story-clock-ridderjaren",
    type: "story",
    characterId: "captain-clock",
    title: { nl: "Reis naar de Ridderjaren", en: "Journey to the Age of Knights" },
    description: {
      nl: "Captain Clock reist terug in de tijd naar een kasteel vol raadsels.",
      en: "Captain Clock travels back in time to a castle full of riddles.",
    },
    externalRef: null,
    localeAvailable: ["nl", "en"],
    pillar: "stories",
    ageBands: ["6-9"],
    tags: ["time-travel", "adventure"],
    isCampaign: true,
  },
  {
    id: "song-clock-tik-tak",
    type: "song",
    characterId: "captain-clock",
    title: { nl: "Tik Tak Tijdreis", en: "Tick Tock Time Trip" },
    description: {
      nl: "Een avontuurlijk meezingliedje over reizen door de tijd.",
      en: "An adventurous singalong about traveling through time.",
    },
    externalRef: spotify,
    localeAvailable: ["nl", "en"],
    pillar: "listen",
    ageBands: ["3-6", "6-9"],
    tags: ["adventure", "singalong"],
    isNew: true,
  },
  {
    id: "show-sprookjesshow",
    type: "episode",
    characterId: "loulou-lou",
    title: { nl: "De Sprookjesshow", en: "The Sprookjes Show" },
    description: {
      nl: "Een live sprookjesavontuur met de volledige Loulou & Lou-band. Terug te kijken in het archief.",
      en: "A live fairytale adventure with the full Loulou & Lou band. Revisit it in the archive.",
    },
    externalRef: null,
    localeAvailable: ["nl", "en"],
    pillar: "shows",
    ageBands: ["3-6", "6-9"],
    tags: ["theater", "live-band", "archive"],
  },
  {
    id: "show-sinterklaasshow",
    type: "episode",
    characterId: "loulou-lou",
    title: { nl: "De Sinterklaasshow", en: "The Sinterklaas Show" },
    description: {
      nl: "Onze geliefde Sinterklaas-theatershow, elk seizoen teruggehaald uit het archief.",
      en: "Our beloved Sinterklaas theatershow, brought back from the archive every season.",
    },
    externalRef: null,
    localeAvailable: ["nl", "en"],
    pillar: "shows",
    ageBands: ["3-6", "6-9"],
    tags: ["theater", "sinterklaas", "archive"],
  },
];

export function getContentById(id: string): ContentItem | undefined {
  return contentItems.find((c) => c.id === id);
}

export function getContentByCharacter(characterId: string): ContentItem[] {
  return contentItems.filter((c) => c.characterId === characterId);
}

export function getContentByPillar(pillar: ContentItem["pillar"]): ContentItem[] {
  return contentItems.filter((c) => c.pillar === pillar);
}
