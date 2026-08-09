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
        bgClassName="bg-red"
        tone="light"
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-center font-display text-2xl font-semibold uppercase text-ink">
            {p.showsTitle}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {shows.map((show) => (
              <div
                key={show.title}
                className="flex flex-col rounded-3xl border-2 border-ink bg-white p-7 shadow-[4px_4px_0_var(--color-ink)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red/15 text-red-deep">
                  <MaskIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold uppercase text-ink">{show.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {show.description}
                </p>
                <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-orange/15 px-3 py-1 font-display text-xs font-semibold uppercase text-orange-deep">
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
