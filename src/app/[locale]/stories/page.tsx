import { resolveLocale } from "@/i18n/resolve-locale";
import { PageHeader } from "@/components/page-header";
import { PlaceholderCard, EditableNote } from "@/components/placeholder-card";
import { BookIcon } from "@/components/icons";
import { FlankedHeading } from "@/components/flanked-heading";

export default async function StoriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const p = dict.pages.stories;

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
        <div className="mx-auto max-w-6xl px-5 py-14">
          <FlankedHeading className="text-ink">{p.storiesTitle}</FlankedHeading>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <PlaceholderCard
                key={i}
                icon={<BookIcon className="h-6 w-6" />}
                title={`Story ${i}`}
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
