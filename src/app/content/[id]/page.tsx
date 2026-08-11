import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocale } from "@/lib/get-locale";
import { t } from "@/lib/locale";
import { ui } from "@/lib/ui-strings";
import { contentRepository } from "@/lib/content-repository";
import { contentItems } from "@/data/content-items";
import { accentClasses } from "@/lib/accent";
import { SkyScene } from "@/components/sky-scene";
import { WaveDivider } from "@/components/wave-divider";
import { PageTurn } from "@/components/page-turn";
import { FavoriteButton } from "@/components/content/favorite-button";
import { Shelf } from "@/components/content/shelf";
import { RecordView } from "@/components/content/record-view";
import { NoteIcon, FilmIcon, BookIcon, MaskIcon, YoutubeIcon, SpotifyIcon, AppleMusicIcon, ChevronRight } from "@/components/icons";

const pillarIcon = { listen: NoteIcon, watch: FilmIcon, stories: BookIcon, shows: MaskIcon };
const platformIcon = { spotify: SpotifyIcon, "apple-music": AppleMusicIcon, youtube: YoutubeIcon };
const platformLabel = { spotify: "Spotify", "apple-music": "Apple Music", youtube: "YouTube" };

export function generateStaticParams() {
  return contentItems.map((c) => ({ id: c.id }));
}

export default async function ContentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const locale = await getLocale();
  const item = await contentRepository.getContent(id);
  if (!item) notFound();

  const [characters, related] = await Promise.all([
    contentRepository.getCharacters(),
    contentRepository.getRelatedContent(item),
  ]);
  const character = characters.find((c) => c.id === item.characterId);
  const accent = accentClasses[character?.accentToken ?? "orange"];
  const Icon = pillarIcon[item.pillar];

  return (
    <PageTurn>
      <RecordView contentId={item.id} />

      <section className={`relative overflow-hidden ${accent.bg} ${accent.pattern}`}>
        <SkyScene />
        <WaveDivider />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5 px-5 py-14 text-center sm:py-20">
          <Link
            href={character ? `/characters/${character.slug}` : "/"}
            transitionTypes={["nav-back"]}
            className={`inline-flex items-center gap-1 text-sm font-semibold opacity-80 transition-opacity hover:opacity-100 ${accent.onBg}`}
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            {character?.name ?? t(ui.common.backToHome, locale)}
          </Link>
          <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ${accent.text}`}>
            <Icon className="h-7 w-7" />
          </div>
          <h1 className={`font-display text-3xl font-semibold sm:text-4xl ${accent.onBg}`}>{t(item.title, locale)}</h1>
          <p className={`max-w-xl text-lg leading-relaxed ${accent.onBgSoft}`}>{t(item.description, locale)}</p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            {item.externalRef ? (
              (() => {
                const PlatformIcon = platformIcon[item.externalRef.platform];
                return (
                  <a
                    href={item.externalRef.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-display font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
                  >
                    <PlatformIcon className="h-4 w-4" />
                    {t(ui.common.listenOn, locale)} {platformLabel[item.externalRef.platform]}
                  </a>
                );
              })()
            ) : (
              <span className="rounded-full border-2 border-dashed border-ink/25 bg-white/70 px-5 py-2.5 text-sm text-ink-soft">
                {t(ui.common.addLinkNote, locale)}
              </span>
            )}
            <FavoriteButton contentId={item.id} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-14">
        <Shelf
          title={t(ui.common.relatedTitle, locale)}
          items={related}
          characters={characters}
          locale={locale}
          accentColor={accent.borderColorStrong}
        />
      </div>
    </PageTurn>
  );
}
