import { resolveLocale } from "@/i18n/resolve-locale";
import { PageHeader } from "@/components/page-header";
import { EditableNote } from "@/components/placeholder-card";
import { MaskIcon, NoteIcon } from "@/components/icons";
import { FlankedHeading } from "@/components/flanked-heading";

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
        tintClassName="bg-sunshine/25"
        accentClassName="text-sunshine-deep"
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <FlankedHeading className="text-ink">{p.showsTitle}</FlankedHeading>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {shows.map((show) => (
              <div
                key={show.title}
                className="flex flex-col rounded-[2rem] bg-white p-7 shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sunshine/20 text-sunshine-deep">
                  <MaskIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">{show.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {show.description}
                </p>
                <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-coral/15 px-3 py-1 font-display text-xs font-semibold text-coral-deep">
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
