import { resolveLocale } from "@/i18n/resolve-locale";
import { PageHeader } from "@/components/page-header";
import { PlaceholderCard, EditableNote } from "@/components/placeholder-card";
import { NoteIcon } from "@/components/icons";
import { PlatformLink } from "@/components/platform-link";
import { YoutubeIcon, SpotifyIcon, AppleMusicIcon } from "@/components/icons";
import { siteConfig } from "@/data/site";
import { FlankedHeading } from "@/components/flanked-heading";

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
        bgClassName="bg-mustard"
        tone="dark"
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex flex-wrap justify-center gap-4">
            <PlatformLink href={siteConfig.social.youtube} label="YouTube" Icon={YoutubeIcon} />
            <PlatformLink href={siteConfig.social.spotify} label="Spotify" Icon={SpotifyIcon} />
            <PlatformLink href={siteConfig.social.appleMusic} label="Apple Music" Icon={AppleMusicIcon} />
          </div>

          <FlankedHeading className="mt-16 text-ink">{p.albumsTitle}</FlankedHeading>
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
