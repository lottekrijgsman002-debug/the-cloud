import Image from "next/image";
import { notFound } from "next/navigation";
import { getLocale } from "@/lib/get-locale";
import { t } from "@/lib/locale";
import { ui } from "@/lib/ui-strings";
import { contentRepository } from "@/lib/content-repository";
import { characters } from "@/data/characters";
import { accentClasses } from "@/lib/accent";
import { SkyScene } from "@/components/sky-scene";
import { CharacterDecorations } from "@/components/character-decorations";
import { Shelf } from "@/components/content/shelf";

export function generateStaticParams() {
  return characters.map((c) => ({ slug: c.slug }));
}

export default async function CharacterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = await getLocale();
  const character = await contentRepository.getCharacter(slug);
  if (!character) notFound();

  const allCharacters = await contentRepository.getCharacters();
  const content = await contentRepository.getContentForCharacter(character.id);
  const listenItems = content.filter((c) => c.pillar === "listen");
  const otherItems = content.filter((c) => c.pillar !== "listen");
  const accent = accentClasses[character.accentToken];

  return (
    <>
      <section className={`relative overflow-hidden ${accent.bg}`}>
        <SkyScene />
        <CharacterDecorations character={character} />
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent`}></div>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-5 py-20 text-center sm:gap-10 sm:py-28">
          <div className={`flex h-48 w-48 overflow-hidden rounded-full border-[6px] ${accent.border} bg-white/15 shadow-2xl sm:h-56 sm:w-56 ring-4 ring-white/20`}>
            {character.portrait ? (
              <Image
                src={character.portrait}
                alt={character.name}
                width={224}
                height={224}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className={`flex w-full items-center justify-center font-display px-3 text-center text-2xl font-semibold ${accent.onBg}`}>
                {character.name}
              </span>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {character.moodWords.map((word) => (
              <span
                key={word.en}
                className={`rounded-full bg-white px-4 py-2 font-display text-sm font-semibold ${accent.text} border-2 ${accent.border} transition-all hover:scale-110 hover:shadow-lg hover:border-opacity-100 border-opacity-40`}
              >
                {t(word, locale)}
              </span>
            ))}
          </div>
          <h1 className={`font-display text-5xl font-bold sm:text-6xl leading-tight ${accent.onBg} relative inline-block pb-3 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-32 after:bg-current after:rounded-full after:opacity-30`}>{character.name}</h1>
          <p className={`max-w-2xl text-xl leading-relaxed ${accent.onBgSoft}`}>{t(character.voiceLine, locale)}</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-14 px-5 py-14">
        <Shelf
          title={`${t(ui.character.listenWith, locale)} ${character.name}`}
          items={listenItems}
          characters={allCharacters}
          locale={locale}
        />
        <Shelf
          title={`${t(ui.character.moreFrom, locale)} ${character.name}`}
          items={otherItems}
          characters={allCharacters}
          locale={locale}
        />
      </div>
    </>
  );
}
