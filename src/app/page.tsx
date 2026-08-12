import Link from "next/link";
import Image from "next/image";
import { getLocale } from "@/lib/get-locale";
import { t } from "@/lib/locale";
import { ui } from "@/lib/ui-strings";
import { contentRepository } from "@/lib/content-repository";
import { accentClasses } from "@/lib/accent";
import { SkyScene } from "@/components/sky-scene";
import { WaveDivider } from "@/components/wave-divider";
import { AmbientSparkles } from "@/components/ambient-sparkles";
import { PageTurn } from "@/components/page-turn";
import { CharacterChip } from "@/components/content/character-chip";
import { Shelf } from "@/components/content/shelf";
import { ChevronRight, FlourishIcon } from "@/components/icons";

export default async function HomePage() {
  const locale = await getLocale();
  const [characters, campaignPick, bedtimePicks, newThisWeek] = await Promise.all([
    contentRepository.getCharacters(),
    contentRepository.getCampaignPick(),
    contentRepository.getBedtimePicks(),
    contentRepository.getNewThisWeek(),
  ]);

  const campaignCharacter = campaignPick
    ? characters.find((c) => c.id === campaignPick.characterId)
    : undefined;
  const heroAccent = accentClasses[campaignCharacter?.accentToken ?? "magenta"];

  return (
    <PageTurn>
      {/* Hero: campaign/seasonal pick wins the slot, background matches its character */}
      <section
        className={`relative overflow-hidden ${heroAccent.bg} ${heroAccent.pattern}`}
        style={{ boxShadow: "inset 0 0 0 3px rgba(255,255,255,0.4), inset 0 0 0 11px rgba(255,255,255,0.15)" }}
      >
        <SkyScene />
        <FlourishIcon className="pointer-events-none absolute left-6 top-6 h-7 w-11 text-white/60" aria-hidden="true" />
        <FlourishIcon className="pointer-events-none absolute right-6 top-6 h-7 w-11 -scale-x-100 text-white/60" aria-hidden="true" />
        <FlourishIcon className="pointer-events-none absolute bottom-6 left-6 h-7 w-11 -scale-y-100 text-white/60" aria-hidden="true" />
        <FlourishIcon className="pointer-events-none absolute bottom-6 right-6 h-7 w-11 -scale-x-100 -scale-y-100 text-white/60" aria-hidden="true" />
        <WaveDivider />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <span className={`inline-flex items-center gap-2 rounded-full bg-white/25 px-4 py-1.5 font-display text-sm font-semibold ${heroAccent.onBg}`}>
              {t(ui.home.heroEyebrow, locale)} Loulou &amp; Lou
            </span>
            <h1 className={`mt-5 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl ${heroAccent.onBg}`}>
              {t(ui.home.heroTitle, locale)}
            </h1>
            <p className={`mt-5 max-w-lg text-lg leading-relaxed ${heroAccent.onBgSoft}`}>
              {t(ui.home.heroSubtitle, locale)}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/characters/loulou-lou"
                transitionTypes={["nav-forward"]}
                className="rounded-full bg-ink px-6 py-3 font-display font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-ink/80"
              >
                {t(ui.home.ctaPrimary, locale)}
              </Link>
              <Link
                href="/listen"
                transitionTypes={["nav-forward"]}
                className={`rounded-full border-2 px-6 py-3 font-display font-semibold transition-transform hover:-translate-y-0.5 ${heroAccent.onBg} ${heroAccent.onBg === "text-white" ? "border-white/50 hover:border-white" : "border-ink/25 hover:border-ink/50"}`}
              >
                {t(ui.home.ctaSecondary, locale)}
              </Link>
            </div>
          </div>

          {campaignPick && (
            <Link
              href={`/content/${campaignPick.id}`}
              transitionTypes={["nav-forward"]}
              className="group relative mx-auto flex aspect-square w-full max-w-sm flex-col items-center justify-center gap-4 overflow-hidden rounded-full bg-white p-10 text-center shadow-xl transition-transform hover:-translate-y-1"
            >
              {campaignPick.image ? (
                <Image
                  src={campaignPick.image}
                  alt={t(campaignPick.title, locale)}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <>
                  <div className={`flex h-20 w-20 items-center justify-center rounded-full ${heroAccent.bgSoft}`}>
                    <ChevronRight className={`h-8 w-8 ${heroAccent.text}`} />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-ink">{t(campaignPick.title, locale)}</h2>
                  <p className="text-sm text-ink-soft">{t(campaignPick.description, locale)}</p>
                </>
              )}
            </Link>
          )}
        </div>
      </section>

      <div className="relative mx-auto max-w-6xl space-y-14 px-5 py-14">
        <AmbientSparkles color={heroAccent.borderColorStrong} />
        {/* Character shortcuts */}
        <div>
          <h2 className="mb-6 text-center font-display text-2xl font-semibold text-ink sm:text-3xl">
            {t(ui.home.charactersTitle, locale)}
          </h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {characters.map((character) => (
              <CharacterChip key={character.id} character={character} />
            ))}
          </div>
        </div>

        <Shelf
          title={t(ui.home.bedtimeTitle, locale)}
          items={bedtimePicks}
          characters={characters}
          locale={locale}
          seeAllHref="/stories"
          accentColor={accentClasses.magenta.borderColorStrong}
        />

        <Shelf
          title={t(ui.home.newTitle, locale)}
          items={newThisWeek}
          characters={characters}
          locale={locale}
          accentColor={accentClasses.orange.borderColorStrong}
        />

        {/* Shows archive teaser */}
        <Link
          href="/shows"
          transitionTypes={["nav-forward"]}
          className="flex flex-col items-center gap-3 rounded-[2rem] bg-orange/10 px-8 py-10 text-center transition-transform hover:-translate-y-0.5 sm:flex-row sm:justify-between sm:text-left"
        >
          <div>
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              {t(ui.home.showsTeaserTitle, locale)}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-ink-soft">{t(ui.home.showsTeaserBody, locale)}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white px-5 py-2.5 font-display text-sm font-semibold text-ink shadow-sm">
            {t(ui.nav.shows, locale)}
            <ChevronRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </PageTurn>
  );
}
