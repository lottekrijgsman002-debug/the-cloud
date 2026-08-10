import type { Character, ContentItem, Pillar } from "@/lib/types";
import { characters, getCharacterBySlug } from "@/data/characters";
import { contentItems, getContentByCharacter, getContentByPillar, getContentById } from "@/data/content-items";

/**
 * Content access layer. Every function here is async on purpose: it reads
 * local seed data today, but the shape matches what a Sanity query would
 * return. Swapping the bodies below for real Sanity/Supabase calls is a
 * contained change; nothing that calls this module needs to know the
 * difference.
 */
export const contentRepository = {
  async getCharacters(): Promise<Character[]> {
    return characters;
  },
  async getCharacter(slug: string): Promise<Character | undefined> {
    return getCharacterBySlug(slug);
  },
  async getAllContent(): Promise<ContentItem[]> {
    return contentItems;
  },
  async getContent(id: string): Promise<ContentItem | undefined> {
    return getContentById(id);
  },
  async getContentForCharacter(characterId: string): Promise<ContentItem[]> {
    return getContentByCharacter(characterId);
  },
  async getContentForPillar(pillar: Pillar): Promise<ContentItem[]> {
    return getContentByPillar(pillar);
  },
  async getCampaignPick(): Promise<ContentItem | undefined> {
    return contentItems.find((c) => c.isCampaign);
  },
  async getBedtimePicks(): Promise<ContentItem[]> {
    return contentItems.filter((c) => c.isBedtimePick);
  },
  async getNewThisWeek(): Promise<ContentItem[]> {
    return contentItems.filter((c) => c.isNew);
  },
  async getRelatedContent(item: ContentItem, limit = 4): Promise<ContentItem[]> {
    return contentItems
      .filter((c) => c.id !== item.id && (c.characterId === item.characterId || c.pillar === item.pillar))
      .slice(0, limit);
  },
};
