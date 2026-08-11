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
import { WaveDivider } from "@/components/wave-divider";
import { AmbientSparkles } from "@/components/ambient-sparkles";
import { FlourishIcon } from "@/components/icons";
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
  const voiceLine = t(character.voiceLine, locale);

  return (
    <>
      <section
        className={`relative overflow-hidden ${accent.bg} ${accent.pattern}`}
        style={{ boxShadow: "inset 0 0 0 3px rgba(255,255,255,0.4), inset 0 0 0 11px rgba(255,255,255,0.15)" }}
      >
        <SkyScene />
        <CharacterDecorations character={character} />
        <FlourishIcon className="pointer-events-none absolute left-6 top-6 h-7 w-11 text-white/60" aria-hidden="true" />
        <FlourishIcon className="pointer-events-none absolute right-6 top-6 h-7 w-11 -scale-x-100 text-white/60" aria-hidden="true" />
        <FlourishIcon className="pointer-events-none absolute bottom-6 left-6 h-7 w-11 -scale-y-100 text-white/60" aria-hidden="true" />
        <FlourishIcon className="pointer-events-none absolute bottom-6 right-6 h-7 w-11 -scale-x-100 -scale-y-100 text-white/60" aria-hidden="true" />
        <WaveDivider />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-5 py-20 text-center sm:gap-10 sm:py-28">
          <div className="animate-bob flex h-48 w-48 overflow-hidden rounded-full bg-white/15 sm:h-56 sm:w-56" style={{ borderWidth: "12px", borderColor: accent.borderColorStrong, boxShadow: `0 0 0 4px rgba(255,255,255,0.5), 0 0 24px ${accent.borderColorStrong}80, 0 12px 24px rgba(0,0,0,0.3)` }}>
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
                className={`rounded-full px-4 py-2 font-display text-sm font-semibold ${accent.text} transition-all hover:scale-110 hover:shadow-xl`}
                style={{
                  borderWidth: "4px",
                  borderColor: accent.borderColorStrong,
                  borderStyle: "solid",
                  backgroundColor: accent.borderColorSoft,
                  color: accent.textDeep,
                  boxShadow: `0 4px 12px ${accent.borderColorStrong}40`
                }}
              >
                {t(word, locale)}
              </span>
            ))}
          </div>
          <h1 className={`font-display text-5xl font-bold sm:text-6xl leading-tight ${accent.onBg} relative inline-block pb-6`} style={{ backgroundImage: `linear-gradient(to right, transparent calc(50% - 5.5rem), ${accent.borderColorStrong} calc(50% - 5.5rem), ${accent.borderColorStrong} calc(50% + 5.5rem), transparent calc(50% + 5.5rem))`, backgroundSize: "100% 6px", backgroundPosition: "0 100%", backgroundRepeat: "no-repeat", textShadow: `0 2px 4px rgba(0,0,0,0.1)` }}>{character.name}</h1>
          <p className={`max-w-2xl text-xl leading-relaxed ${accent.onBgSoft}`}>
            <span className="drop-cap-letter font-display">{voiceLine.charAt(0)}</span>
            {voiceLine.slice(1)}
          </p>
        </div>
      </section>

      <div className="relative mx-auto max-w-6xl space-y-14 px-5 py-14">
        <AmbientSparkles color={accent.borderColorStrong} />
        <Shelf
          title={`${t(ui.character.listenWith, locale)} ${character.name}`}
          items={listenItems}
          characters={allCharacters}
          locale={locale}
          accentColor={accent.borderColorStrong}
        />
        <Shelf
          title={`${t(ui.character.moreFrom, locale)} ${character.name}`}
          items={otherItems}
          characters={allCharacters}
          locale={locale}
          accentColor={accent.borderColorStrong}
        />
      </div>
    </>
  );
}
