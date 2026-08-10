import Link from "next/link";
import { resolveLocale } from "@/i18n/resolve-locale";
import { sections, secondarySections, siteConfig } from "@/data/site";
import { SectionCard } from "@/components/section-card";
import { HeroScene } from "@/components/hero-scene";
import { SkyScene } from "@/components/divider";
import { PlatformLink } from "@/components/platform-link";
import { SparkleFriendsIcon } from "@/components/icons";
import { YoutubeIcon, SpotifyIcon, AppleMusicIcon } from "@/components/icons";
import { CharacterAvatar } from "@/components/character-avatar";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-sunshine">
        <SkyScene showSun={false} />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/50 px-4 py-1.5 font-display text-sm font-semibold text-ink">
              {dict.hero.eyebrow} Loulou &amp; Lou
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              {dict.hero.title}
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
              {dict.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/${locale}/world`}
                className="rounded-full bg-coral px-6 py-3 font-display font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-coral-deep"
              >
                {dict.hero.ctaPrimary}
              </Link>
              <Link
                href={`/${locale}/music`}
                className="rounded-full border-2 border-ink/25 px-6 py-3 font-display font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:border-ink/50"
              >
                {dict.hero.ctaSecondary}
              </Link>
            </div>
          </div>
          <HeroScene />
        </div>
      </section>

      {/* World grid */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-display text-sm font-semibold text-coral-deep">
              {dict.home.worldEyebrow}
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
              {dict.home.worldTitle}
            </h2>
            <p className="mt-3 text-ink-soft">{dict.home.worldSubtitle}</p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
      </section>

      {/* Listen everywhere */}
      <section className="relative overflow-hidden bg-sky/25">
        <SkyScene showSun={false} />
        <div className="relative mx-auto max-w-6xl px-5 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-display text-sm font-semibold text-sky-deep">
              {dict.home.listenEyebrow}
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
              {dict.home.listenTitle}
            </h2>
            <p className="mt-3 text-ink-soft">{dict.home.listenSubtitle}</p>
          </div>

          <div className="mx-auto mt-8 flex flex-wrap justify-center gap-4">
            <PlatformLink href={siteConfig.social.youtube} label="YouTube" Icon={YoutubeIcon} />
            <PlatformLink href={siteConfig.social.spotify} label="Spotify" Icon={SpotifyIcon} />
            <PlatformLink href={siteConfig.social.appleMusic} label="Apple Music" Icon={AppleMusicIcon} />
          </div>
        </div>
      </section>

      {/* Characters teaser */}
      <section className="relative overflow-hidden bg-coral/15">
        <SkyScene showSun={false} />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 font-display text-sm font-semibold text-coral-deep">
              {dict.home.charactersEyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              {dict.home.charactersTitle}
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
              {dict.home.charactersBody}
            </p>
            <Link
              href={`/${locale}/world`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-display font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-coral-deep"
            >
              <SparkleFriendsIcon className="h-[18px] w-[18px]" />
              {dict.home.charactersCta}
            </Link>
          </div>
          <div className="flex justify-center gap-6">
            <CharacterAvatar name="Loulou" accent="coral" size={128} />
            <CharacterAvatar name="Lou" accent="sky" size={128} className="mt-8" />
          </div>
        </div>
      </section>

      {/* More of our world, coming soon */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-display text-sm font-semibold text-sunshine-deep">
              {dict.home.comingSoonEyebrow}
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
              {dict.home.comingSoonTitle}
            </h2>
            <p className="mt-3 text-ink-soft">{dict.home.comingSoonBody}</p>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl gap-5 sm:grid-cols-2">
            {secondarySections.map((s) => (
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
      </section>
    </>
  );
}
