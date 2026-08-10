"use client";

import { useState } from "react";
import type { Locale, Pillar } from "@/lib/types";
import { t } from "@/lib/locale";
import { ui } from "@/lib/ui-strings";
import { useAccount } from "@/context/account-context";
import { characters } from "@/data/characters";
import { getContentById } from "@/data/content-items";
import { ContentCard } from "@/components/content/content-card";

const pillars: Pillar[] = ["listen", "watch", "stories", "shows"];

export function FavoritesView({ locale }: { locale: Locale }) {
  const { favoriteIds, continueListeningIds, ready } = useAccount();
  const [filter, setFilter] = useState<Pillar | "all">("all");

  if (!ready) return null;

  const favoriteItems = favoriteIds
    .map((id) => getContentById(id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .filter((item) => filter === "all" || item.pillar === filter);

  const continueItems = continueListeningIds
    .map((id) => getContentById(id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .filter((item) => filter === "all" || item.pillar === filter);

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{t(ui.favorites.title, locale)}</h1>
      <p className="mt-3 max-w-2xl text-ink-soft">{t(ui.favorites.intro, locale)}</p>

      <div className="mt-8 flex flex-wrap gap-2">
        <FilterChip active={filter === "all"} onClick={() => setFilter("all")} label={t(ui.favorites.filterAll, locale)} />
        {pillars.map((p) => (
          <FilterChip key={p} active={filter === p} onClick={() => setFilter(p)} label={t(ui.nav[p], locale)} />
        ))}
      </div>

      {favoriteItems.length === 0 && continueItems.length === 0 ? (
        <p className="mt-10 max-w-md text-ink-soft">{t(ui.favorites.empty, locale)}</p>
      ) : (
        <div className="mt-10 space-y-12">
          {continueItems.length > 0 && (
            <section>
              <h2 className="mb-4 font-display text-xl font-semibold text-ink">
                {t(ui.favorites.continueSectionTitle, locale)}
              </h2>
              <div className="flex flex-wrap gap-5">
                {continueItems.map((item) => {
                  const character = characters.find((c) => c.id === item.characterId);
                  return (
                    <ContentCard key={item.id} item={item} locale={locale} accentToken={character?.accentToken ?? "orange"} />
                  );
                })}
              </div>
            </section>
          )}

          {favoriteItems.length > 0 && (
            <section>
              <h2 className="mb-4 font-display text-xl font-semibold text-ink">
                {t(ui.favorites.savedTitle, locale)}
              </h2>
              <div className="flex flex-wrap gap-5">
                {favoriteItems.map((item) => {
                  const character = characters.find((c) => c.id === item.characterId);
                  return (
                    <ContentCard key={item.id} item={item} locale={locale} accentToken={character?.accentToken ?? "orange"} />
                  );
                })}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}

function FilterChip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 font-display text-sm font-semibold transition-colors ${
        active ? "bg-ink text-white" : "bg-white text-ink-soft hover:text-ink"
      }`}
    >
      {label}
    </button>
  );
}
