import Link from "next/link";
import type { Locale, Localized, Pillar } from "@/lib/types";
import { t } from "@/lib/locale";
import { ui } from "@/lib/ui-strings";
import { contentRepository } from "@/lib/content-repository";
import { accentClasses } from "@/lib/accent";
import { ContentCard } from "@/components/content/content-card";
import { SkyScene } from "@/components/sky-scene";
import { WaveDivider } from "@/components/wave-divider";
import { AmbientSparkles } from "@/components/ambient-sparkles";
import { ChapterLabel } from "@/components/chapter-label";
import { PageTurn } from "@/components/page-turn";
import { FlourishIcon } from "@/components/icons";

const pillarAccent: Record<Pillar, keyof typeof accentClasses> = {
  listen: "mustard",
  watch: "orange",
  stories: "magenta",
  shows: "green",
};

export async function PillarHub({
  pillar,
  title,
  intro,
  locale,
  characterSlug,
  onlyNew,
}: {
  pillar: Pillar;
  title: Localized;
  intro: Localized;
  locale: Locale;
  characterSlug?: string;
  onlyNew?: boolean;
}) {
  const [items, characters] = await Promise.all([
    contentRepository.getContentForPillar(pillar),
    contentRepository.getCharacters(),
  ]);

  const activeCharacter = characterSlug ? characters.find((c) => c.slug === characterSlug) : undefined;
  const filtered = items
    .filter((item) => !activeCharacter || item.characterId === activeCharacter.id)
    .filter((item) => !onlyNew || item.isNew);

  const basePath = `/${pillar}`;
  const accent = accentClasses[pillarAccent[pillar]];

  return (
    <PageTurn>
      <section
        className={`relative overflow-hidden ${accent.bg} ${accent.pattern}`}
        style={{ boxShadow: "inset 0 0 0 3px rgba(255,255,255,0.4), inset 0 0 0 11px rgba(255,255,255,0.15)" }}
      >
        <SkyScene />
        <FlourishIcon className="pointer-events-none absolute left-6 top-6 h-7 w-11 text-white/60" aria-hidden="true" />
        <FlourishIcon className="pointer-events-none absolute right-6 top-6 h-7 w-11 -scale-x-100 text-white/60" aria-hidden="true" />
        <FlourishIcon className="pointer-events-none absolute bottom-6 left-6 h-7 w-11 -scale-y-100 text-white/60" aria-hidden="true" />
        <FlourishIcon className="pointer-events-none absolute bottom-6 right-6 h-7 w-11 -scale-x-100 -scale-y-100 text-white/60" aria-hidden="true" />
        <ChapterLabel label={`${t(ui.hubs.partLabel, locale)} — ${t(title, locale)}`} className={accent.onBg} />
        <WaveDivider />
        <div className="relative mx-auto max-w-4xl px-5 py-14 text-center sm:py-20">
          <h1 className={`font-display text-4xl font-semibold sm:text-5xl ${accent.onBg}`}>{t(title, locale)}</h1>
          <p className={`mx-auto mt-4 max-w-2xl text-lg leading-relaxed ${accent.onBgSoft}`}>{t(intro, locale)}</p>
        </div>
      </section>

      <div className="relative mx-auto max-w-6xl px-5 py-14">
        <AmbientSparkles color={accent.borderColorStrong} />
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <FilterChip href={basePath} active={!activeCharacter && !onlyNew} label={t(ui.hubs.filterAll, locale)} />
          <FilterChip
            href={`${basePath}?filter=new`}
            active={!!onlyNew}
            label={t(ui.hubs.filterNew, locale)}
          />
          {characters.map((c) => (
            <FilterChip
              key={c.id}
              href={`${basePath}?character=${c.slug}`}
              active={activeCharacter?.id === c.id}
              label={c.name}
            />
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-ink-soft">{t(ui.search.noResults, locale)}</p>
        ) : (
          <div className="flex flex-wrap gap-5">
            {filtered.map((item) => {
              const character = characters.find((c) => c.id === item.characterId);
              return (
                <ContentCard
                  key={item.id}
                  item={item}
                  locale={locale}
                  accentToken={character?.accentToken ?? "orange"}
                />
              );
            })}
          </div>
        )}
      </div>
    </PageTurn>
  );
}

function FilterChip({ href, active, label }: { href: string; active: boolean; label: string }) {
  return (
    <Link
      href={href}
      className={`rounded-full px-4 py-2 font-display text-sm font-semibold transition-colors ${
        active ? "bg-ink text-white" : "bg-white text-ink-soft hover:text-ink"
      }`}
    >
      {label}
    </Link>
  );
}
