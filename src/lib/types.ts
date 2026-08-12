export type Locale = "nl" | "en";

export type Localized = { nl: string; en: string };

export type AgeBand = "0-3" | "3-6" | "6-9";

export type Pillar = "listen" | "watch" | "stories" | "shows";

export type ContentType = "song" | "video" | "story" | "episode";

export type Platform = "spotify" | "apple-music" | "youtube";

export interface ExternalRef {
  platform: Platform;
  uri: string;
}

export interface Character {
  id: string;
  slug: string;
  name: string;
  moodWords: Localized[];
  accentToken: "magenta" | "green" | "mustard" | "orange";
  voiceLine: Localized;
  /** Path under /public to the character's real illustration, if exported yet. */
  portrait?: string;
}

export interface ContentItem {
  id: string;
  type: ContentType;
  characterId: string;
  title: Localized;
  description: Localized;
  externalRef: ExternalRef | null;
  localeAvailable: Locale[];
  pillar: Pillar;
  ageBands: AgeBand[];
  tags: string[];
  isNew?: boolean;
  isBedtimePick?: boolean;
  isCampaign?: boolean;
  /** Path under /public to the item's real artwork, if exported yet. */
  image?: string;
}

/** Parent account. Single child profile per account in v1. */
export interface UserAccount {
  id: string;
  email: string;
  localePref: Locale;
  createdAt: string;
}

/** No independent account or PII for the child: a display name and a
 * parent-selected coarse age band only. */
export interface ChildProfile {
  id: string;
  userId: string;
  displayName: string;
  ageBand: AgeBand;
}

export interface Favorite {
  userId: string;
  contentId: string;
  createdAt: string;
}

export interface ContinueListeningEntry {
  userId: string;
  contentId: string;
  progressMarker?: string;
  updatedAt: string;
}

export interface ClubSignup {
  email: string;
  userId?: string;
  createdAt: string;
}
