import Image from "next/image";
import Link from "next/link";
import type { Character } from "@/lib/types";
import { accentClasses } from "@/lib/accent";

export function CharacterChip({ character, size = 84 }: { character: Character; size?: number }) {
  const accent = accentClasses[character.accentToken];

  return (
    <Link
      href={`/characters/${character.slug}`}
      transitionTypes={["nav-forward"]}
      className="flex flex-col items-center gap-2 text-center"
    >
      <div
        className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full border-[3px] bg-white shadow-sm ${
          character.portrait ? accent.border : `border-dashed p-2 ${accent.border}`
        }`}
        style={{ width: size, height: size }}
      >
        {character.portrait ? (
          <Image
            src={character.portrait}
            alt={character.name}
            width={size}
            height={size}
            className="h-full w-full object-cover"
          />
        ) : (
          <span
            className="font-display font-semibold leading-tight text-ink"
            style={{ fontSize: Math.max(10, size * 0.12) }}
          >
            {character.name}
          </span>
        )}
      </div>
      <span className="max-w-[6rem] font-display text-xs font-semibold text-ink-soft">{character.name}</span>
    </Link>
  );
}
