import { resolveLocale } from "@/i18n/resolve-locale";
import { PageHeader } from "@/components/page-header";
import { NoteIcon, FilmIcon, InfoHeartIcon } from "@/components/icons";
import { siteConfig } from "@/data/site";
import { SkyScene } from "@/components/divider";
import { FlankedHeading } from "@/components/flanked-heading";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const p = dict.pages.about;

  return (
    <>
      <PageHeader
        locale={locale}
        eyebrow={p.eyebrow}
        title={p.title}
        intro={p.intro}
        backLabel={dict.common.backHome}
        tintClassName="bg-sky/25"
        accentClassName="text-sky-deep"
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-7 shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coral/15 text-coral-deep">
                <NoteIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{p.bandTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.bandBody}</p>
            </div>
            <div className="rounded-[2rem] bg-white p-7 shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sunshine/25 text-sunshine-deep">
                <FilmIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {p.animatorTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.animatorBody}</p>
            </div>
          </div>

          <div className="mt-6 rounded-[2rem] bg-sky/20 p-7 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-sky-deep">
              <InfoHeartIcon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-ink">{p.safetyTitle}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">{p.safetyBody}</p>
          </div>

          <div className="mt-6 rounded-[2rem] border-2 border-dashed border-ink/20 px-7 py-6 text-center sm:px-8">
            <h3 className="font-display text-base font-semibold text-ink">{p.comingTitle}</h3>
            <p className="mx-auto mt-1 max-w-xl text-sm leading-relaxed text-ink-soft">{p.comingBody}</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-sunshine/25">
        <SkyScene showSun={false} />
        <div className="relative mx-auto max-w-4xl px-5 py-14 text-center">
          <FlankedHeading className="text-ink">{p.givingBackTitle}</FlankedHeading>
          <p className="mx-auto mt-3 max-w-2xl text-ink-soft">{p.givingBackBody}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {p.givingBackBadges.map((badge, i) => (
              <span
                key={badge}
                className="inline-flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-ink/40 bg-white p-3 text-center font-display text-xs font-semibold leading-tight text-ink"
                style={{ transform: `rotate(${i % 2 === 0 ? -4 : 4}deg)` }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <div className="rounded-[2rem] bg-white px-8 py-10 text-center shadow-md">
            <h3 className="font-display text-xl font-semibold text-ink">{p.contactTitle}</h3>
            <p className="mt-2 text-ink-soft">{p.contactBody}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 inline-block rounded-full bg-coral px-6 py-3 font-display font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-coral-deep"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
