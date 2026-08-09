import Link from "next/link";
import { resolveLocale } from "@/i18n/resolve-locale";
import { sections, siteConfig } from "@/data/site";
import { SectionCard } from "@/components/section-card";
import { HeroScene } from "@/components/hero-scene";
import { WaveDivider } from "@/components/divider";
import { PlatformLink } from "@/components/platform-link";
import { SparkleFriendsIcon, NoteIcon } from "@/components/icons";
import { YoutubeIcon, SpotifyIcon, AppleMusicIcon } from "@/components/icons";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-parchment">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-coral/15 px-4 py-1.5 text-sm font-semibold text-coral-deep">
              {dict.hero.eyebrow} Loulou &amp; Lou
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-plum sm:text-5xl lg:text-6xl">
              {dict.hero.title}
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
              {dict.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/${locale}/world`}
                className="rounded-full bg-coral px-6 py-3 font-semibold text-plum shadow-md shadow-coral/30 transition-transform hover:-translate-y-0.5 hover:bg-coral-deep"
              >
                {dict.hero.ctaPrimary}
              </Link>
              <Link
                href={`/${locale}/music`}
                className="rounded-full border-2 border-plum/20 bg-white/60 px-6 py-3 font-semibold text-plum transition-transform hover:-translate-y-0.5 hover:border-plum/40"
              >
                {dict.hero.ctaSecondary}
              </Link>
            </div>
          </div>
          <HeroScene />
        </div>
        <WaveDivider color="var(--color-parchment-deep)" />
      </section>

      {/* World grid */}
      <section className="bg-parchment-deep">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-sage-deep">
              {dict.home.worldEyebrow}
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-plum sm:text-4xl">
              {dict.home.worldTitle}
            </h2>
            <p className="mt-3 text-ink-soft">{dict.home.worldSubtitle}</p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((s) => (
              <SectionCard
                key={s.key}
                href={`/${locale}${s.href}`}
                section={s.key}
                accent={s.accent}
                title={dict.sections[s.key].title}
                description={dict.sections[s.key].short}
                cta={dict.common.learnMore}
              />
            ))}
          </div>
        </div>
        <WaveDivider color="var(--color-parchment)" />
      </section>

      {/* Listen everywhere */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-coral-deep">
              {dict.home.listenEyebrow}
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-plum sm:text-4xl">
              {dict.home.listenTitle}
            </h2>
            <p className="mt-3 text-ink-soft">{dict.home.listenSubtitle}</p>
          </div>

          <div className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
            <PlatformLink
              href={siteConfig.social.youtube}
              label="YouTube"
              Icon={YoutubeIcon}
              colorClass="bg-[#ff0033]/10 text-[#ff0033]"
            />
            <PlatformLink
              href={siteConfig.social.spotify}
              label="Spotify"
              Icon={SpotifyIcon}
              colorClass="bg-[#1DB954]/10 text-[#1DB954]"
            />
            <PlatformLink
              href={siteConfig.social.appleMusic}
              label="Apple Music"
              Icon={AppleMusicIcon}
              colorClass="bg-[#fb5c74]/10 text-[#fb5c74]"
            />
          </div>
        </div>
      </section>

      {/* Characters teaser */}
      <section className="relative overflow-hidden bg-plum text-parchment">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-parchment/10 px-4 py-1.5 text-sm font-semibold text-gold">
              {dict.home.charactersEyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              {dict.home.charactersTitle}
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-parchment/80">
              {dict.home.charactersBody}
            </p>
            <Link
              href={`/${locale}/world`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-plum shadow-md transition-transform hover:-translate-y-0.5"
            >
              <SparkleFriendsIcon className="h-[18px] w-[18px]" />
              {dict.home.charactersCta}
            </Link>
          </div>
          <div className="flex justify-center gap-6">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-coral text-5xl shadow-lg sm:h-36 sm:w-36">
              🦊
            </div>
            <div className="mt-8 flex h-28 w-28 items-center justify-center rounded-full bg-sky text-5xl shadow-lg sm:h-36 sm:w-36">
              🐻
            </div>
          </div>
        </div>
      </section>

      {/* Live band */}
      <section className="bg-parchment-deep">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-16 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage/20 text-sage-deep">
            <NoteIcon className="h-7 w-7" />
          </div>
          <span className="text-sm font-semibold uppercase tracking-wide text-sage-deep">
            {dict.home.bandEyebrow}
          </span>
          <h2 className="max-w-2xl font-display text-3xl font-semibold text-plum sm:text-4xl">
            {dict.home.bandTitle}
          </h2>
          <p className="max-w-xl text-ink-soft">{dict.home.bandBody}</p>
          <Link
            href={`/${locale}/theatershow`}
            className="mt-2 rounded-full border-2 border-plum/20 bg-white/70 px-6 py-3 font-semibold text-plum transition-transform hover:-translate-y-0.5 hover:border-plum/40"
          >
            {dict.sections.theatershow.title}
          </Link>
        </div>
      </section>
    </>
  );
}
