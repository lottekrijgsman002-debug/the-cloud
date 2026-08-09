import { resolveLocale } from "@/i18n/resolve-locale";
import { PageHeader } from "@/components/page-header";
import { NoteIcon, FilmIcon } from "@/components/icons";
import { siteConfig } from "@/data/site";

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
        accentClassName="text-sky-deep"
      />

      <section className="bg-parchment">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border-2 border-ink/10 bg-white/60 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/15 text-sage-deep">
                <NoteIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-plum">{p.bandTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.bandBody}</p>
            </div>
            <div className="rounded-3xl border-2 border-ink/10 bg-white/60 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky/15 text-sky-deep">
                <FilmIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-plum">
                {p.animatorTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.animatorBody}</p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-plum px-8 py-10 text-center text-parchment">
            <h3 className="font-display text-xl font-semibold">{p.contactTitle}</h3>
            <p className="mt-2 text-parchment/80">{p.contactBody}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 inline-block rounded-full bg-gold px-6 py-3 font-semibold text-plum transition-transform hover:-translate-y-0.5"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
