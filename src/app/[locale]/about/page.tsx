import { resolveLocale } from "@/i18n/resolve-locale";
import { PageHeader } from "@/components/page-header";
import { NoteIcon, FilmIcon } from "@/components/icons";
import { siteConfig } from "@/data/site";
import { DoodleField } from "@/components/divider";
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
        bgClassName="bg-orange"
        tone="dark"
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border-2 border-ink bg-white p-7 shadow-[4px_4px_0_var(--color-ink)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red/15 text-red-deep">
                <NoteIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold uppercase text-ink">{p.bandTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.bandBody}</p>
            </div>
            <div className="rounded-3xl border-2 border-ink bg-white p-7 shadow-[4px_4px_0_var(--color-ink)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/15 text-orange-deep">
                <FilmIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold uppercase text-ink">
                {p.animatorTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.animatorBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-green">
        <DoodleField className="text-white/20" />
        <div className="relative mx-auto max-w-4xl px-5 py-14 text-center">
          <FlankedHeading className="text-ink">{p.givingBackTitle}</FlankedHeading>
          <p className="mx-auto mt-3 max-w-2xl text-ink/80">{p.givingBackBody}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {p.givingBackBadges.map((badge, i) => (
              <span
                key={badge}
                className="inline-flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-ink bg-white p-3 text-center font-display text-xs font-semibold uppercase leading-tight text-ink"
                style={{ transform: `rotate(${i % 2 === 0 ? -4 : 4}deg)` }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <div className="rounded-3xl border-2 border-ink bg-white px-8 py-10 text-center shadow-[4px_4px_0_var(--color-ink)]">
            <h3 className="font-display text-xl font-semibold uppercase text-ink">{p.contactTitle}</h3>
            <p className="mt-2 text-ink-soft">{p.contactBody}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 inline-block rounded-full bg-ink px-6 py-3 font-display font-semibold uppercase text-white transition-transform hover:-translate-y-0.5"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
