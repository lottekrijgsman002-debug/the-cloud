import { resolveLocale } from "@/i18n/resolve-locale";
import { PageHeader } from "@/components/page-header";
import { CharacterAvatar } from "@/components/character-avatar";

export default async function WorldPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const p = dict.pages.world;

  const characters: { key: keyof typeof dict.characters; accent: string }[] = [
    { key: "loulou", accent: "coral" },
    { key: "lou", accent: "sky" },
    { key: "guruWoof", accent: "sunshine" },
    { key: "maestroMozy", accent: "coral" },
    { key: "jazzCat", accent: "sky" },
    { key: "cowboyJack", accent: "sunshine" },
    { key: "musicbox", accent: "coral" },
    { key: "yinAndJan", accent: "sky" },
    { key: "mamaCozy", accent: "sunshine" },
    { key: "loustock", accent: "coral" },
  ];

  return (
    <>
      <PageHeader
        locale={locale}
        eyebrow={p.eyebrow}
        title={p.title}
        intro={p.intro}
        backLabel={dict.common.backHome}
        tintClassName="bg-coral/15"
        accentClassName="text-coral-deep"
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {characters.map((c) => {
              const character = dict.characters[c.key];
              return (
                <div
                  key={c.key}
                  className="flex flex-col items-center rounded-[2rem] bg-white p-6 text-center shadow-md"
                >
                  <CharacterAvatar name={character.name} accent={c.accent} size={100} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {character.name}
                  </h3>
                  {character.role && (
                    <p className="mt-1 font-display text-xs font-semibold text-coral-deep">
                      {character.role}
                    </p>
                  )}
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
