import { resolveLocale } from "@/i18n/resolve-locale";
import { PageHeader } from "@/components/page-header";
import { EditableNote } from "@/components/placeholder-card";
import { MaskIcon, NoteIcon } from "@/components/icons";

export default async function TheatershowPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const p = dict.pages.theatershow;

  const shows = [p.sprookjesShow, p.sinterklaasShow];

  return (
    <>
      <PageHeader
        locale={locale}
        eyebrow={p.eyebrow}
        title={p.title}
        intro={p.intro}
        backLabel={dict.common.backHome}
        accentClassName="text-sage-deep"
      />

      <section className="bg-parchment">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-center font-display text-2xl font-semibold text-plum">
            {p.showsTitle}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {shows.map((show) => (
              <div
                key={show.title}
                className="flex flex-col rounded-3xl border-2 border-ink/10 bg-white/60 p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/15 text-sage-deep">
                  <MaskIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-plum">{show.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {show.description}
                </p>
                <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold-deep">
                  <NoteIcon className="h-3.5 w-3.5" />
                  {dict.common.comingSoonBadge}
                </span>
              </div>
            ))}
          </div>
          <EditableNote>{p.note}</EditableNote>
        </div>
      </section>
    </>
  );
}
