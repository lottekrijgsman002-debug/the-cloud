import { resolveLocale } from "@/i18n/resolve-locale";
import { PageHeader } from "@/components/page-header";
import { PlaceholderCard, EditableNote } from "@/components/placeholder-card";
import { FilmIcon } from "@/components/icons";
import { siteConfig } from "@/data/site";

export default async function SprookjesfilmPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const p = dict.pages.sprookjesfilm;

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
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex justify-center">
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-sky px-6 py-3 font-semibold text-plum shadow-md shadow-sky/30 transition-transform hover:-translate-y-0.5"
            >
              {dict.common.listenOn} YouTube
            </a>
          </div>

          <h2 className="mt-14 text-center font-display text-2xl font-semibold text-plum">
            {p.episodesTitle}
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4].map((i) => (
              <PlaceholderCard
                key={i}
                icon={<FilmIcon className="h-6 w-6" />}
                title={`Episode ${i}`}
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
