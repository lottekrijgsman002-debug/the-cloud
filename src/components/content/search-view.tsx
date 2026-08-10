"use client";

import { useState, useMemo } from "react";
import type { Locale } from "@/lib/types";
import { t } from "@/lib/locale";
import { ui } from "@/lib/ui-strings";
import { characters } from "@/data/characters";
import { contentItems } from "@/data/content-items";
import { ContentCard } from "@/components/content/content-card";
import { CharacterChip } from "@/components/content/character-chip";
import { SearchIcon } from "@/components/icons";

export function SearchView({ locale }: { locale: Locale }) {
  const [query, setQuery] = useState("");

  const normalized = query.trim().toLowerCase();

  const matchedCharacters = useMemo(
    () => (normalized ? characters.filter((c) => c.name.toLowerCase().includes(normalized)) : []),
    [normalized]
  );

  const matchedContent = useMemo(
    () =>
      normalized
        ? contentItems.filter(
            (item) => t(item.title, locale).toLowerCase().includes(normalized) || item.tags.some((tag) => tag.includes(normalized))
          )
        : [],
    [normalized, locale]
  );

  const hasResults = matchedCharacters.length > 0 || matchedContent.length > 0;

  return (
    <div className="mx-auto max-w-4xl px-5 py-14">
      <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{t(ui.search.title, locale)}</h1>

      <div className="relative mt-6">
        <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-soft" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t(ui.search.placeholder, locale)}
          className="w-full rounded-full border-2 border-ink/15 bg-white py-3.5 pl-12 pr-5 text-sm text-ink outline-none ring-coral focus:ring-2"
        />
      </div>

      {normalized && !hasResults && <p className="mt-10 text-ink-soft">{t(ui.search.noResults, locale)}</p>}

      {matchedCharacters.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-6">
          {matchedCharacters.map((c) => (
            <CharacterChip key={c.id} character={c} />
          ))}
        </div>
      )}

      {matchedContent.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-5">
          {matchedContent.map((item) => {
            const character = characters.find((c) => c.id === item.characterId);
            return (
              <ContentCard key={item.id} item={item} locale={locale} accentToken={character?.accentToken ?? "coral"} />
            );
          })}
        </div>
      )}
    </div>
  );
}
