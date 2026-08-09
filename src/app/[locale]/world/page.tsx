import { resolveLocale } from "@/i18n/resolve-locale";
import { PageHeader } from "@/components/page-header";
import { EditableNote } from "@/components/placeholder-card";

export default async function WorldPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const p = dict.pages.world;

  const characters = [
    { name: "Loulou", emoji: "🦊", color: "bg-coral" },
    { name: "Lou", emoji: "🐻", color: "bg-sky" },
    { name: "?", emoji: "✨", color: "bg-gold" },
    { name: "?", emoji: "✨", color: "bg-sage" },
  ];

  return (
    <>
      <PageHeader
        locale={locale}
        eyebrow={p.eyebrow}
        title={p.title}
        intro={p.intro}
        backLabel={dict.common.backHome}
        accentClassName="text-coral-deep"
      />

      <section className="bg-parchment">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {characters.map((c, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded-3xl border-2 border-ink/10 bg-white/60 p-6 text-center shadow-sm"
              >
                <div
                  className={`flex h-24 w-24 items-center justify-center rounded-full text-4xl shadow-inner ${c.color}`}
                >
                  {c.emoji}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-plum">{c.name}</h3>
              </div>
            ))}
          </div>
          <EditableNote>{p.note}</EditableNote>
        </div>
      </section>
    </>
  );
}
