import { resolveLocale } from "@/i18n/resolve-locale";
import { PageHeader } from "@/components/page-header";
import { CharacterAvatar, type CharacterVariant } from "@/components/character-avatar";

export default async function WorldPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const p = dict.pages.world;

  const characters: { variant: CharacterVariant; key: keyof typeof dict.characters }[] = [
    { variant: "loulou", key: "loulou" },
    { variant: "lou", key: "lou" },
    { variant: "guru-woof", key: "guruWoof" },
    { variant: "maestro-mozy", key: "maestroMozy" },
    { variant: "jazz-cat", key: "jazzCat" },
  ];

  return (
    <>
      <PageHeader
        locale={locale}
        eyebrow={p.eyebrow}
        title={p.title}
        intro={p.intro}
        backLabel={dict.common.backHome}
        bgClassName="bg-magenta"
        tone="light"
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {characters.map((c) => {
              const character = dict.characters[c.key];
              return (
                <div
                  key={c.key}
                  className="flex flex-col items-center rounded-3xl border-2 border-ink p-6 text-center shadow-[4px_4px_0_var(--color-ink)]"
                >
                  <CharacterAvatar variant={c.variant} size={104} />
                  <h3 className="mt-4 font-display text-lg font-semibold uppercase text-ink">
                    {character.name}
                  </h3>
                  <p className="mt-1 font-display text-xs font-semibold uppercase tracking-wide text-magenta-deep">
                    {character.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {character.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
