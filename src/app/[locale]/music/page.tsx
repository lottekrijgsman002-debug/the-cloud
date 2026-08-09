import { resolveLocale } from "@/i18n/resolve-locale";
import { PageHeader } from "@/components/page-header";
import { PlaceholderCard, EditableNote } from "@/components/placeholder-card";
import { NoteIcon } from "@/components/icons";
import { PlatformLink } from "@/components/platform-link";
import { YoutubeIcon, SpotifyIcon, AppleMusicIcon } from "@/components/icons";
import { siteConfig } from "@/data/site";

export default async function MusicPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const p = dict.pages.music;

  return (
    <>
      <PageHeader
        locale={locale}
        eyebrow={p.eyebrow}
        title={p.title}
        intro={p.intro}
        backLabel={dict.common.backHome}
        accentClassName="text-coral-deep"
      />

      <section className="bg-parchment">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-3">
            <PlatformLink href={siteConfig.social.youtube} label="YouTube" Icon={YoutubeIcon} colorClass="bg-[#ff0033]/10 text-[#ff0033]" />
            <PlatformLink href={siteConfig.social.spotify} label="Spotify" Icon={SpotifyIcon} colorClass="bg-[#1DB954]/10 text-[#1DB954]" />
            <PlatformLink href={siteConfig.social.appleMusic} label="Apple Music" Icon={AppleMusicIcon} colorClass="bg-[#fb5c74]/10 text-[#fb5c74]" />
          </div>

          <h2 className="mt-16 text-center font-display text-2xl font-semibold text-plum">
            {p.albumsTitle}
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <PlaceholderCard
                key={i}
                icon={<NoteIcon className="h-6 w-6" />}
                title={`Album ${i}`}
                description={p.note}
                badge={dict.common.comingSoonBadge}
              />
            ))}
          </div>
          <EditableNote>{p.note}</EditableNote>
        </div>
      </section>
    </>
  );
}
