import Link from "next/link";
import type { Character } from "@/lib/types";
import { accentClasses } from "@/lib/accent";

/**
 * Placeholder for the character's real hero illustration: a name in a
 * dashed circle in the character's accent color. Swap the inner circle for
 * real artwork once it's available; the layout and link target stay the
 * same.
 */
export function CharacterChip({ character, size = 84 }: { character: Character; size?: number }) {
  const accent = accentClasses[character.accentToken];

  return (
    <Link href={`/characters/${character.slug}`} className="flex flex-col items-center gap-2 text-center">
      <div
        className={`flex shrink-0 items-center justify-center rounded-full border-[3px] border-dashed bg-white p-2 shadow-sm ${accent.border}`}
        style={{ width: size, height: size }}
      >
        <span
          className="font-display font-semibold leading-tight text-ink"
          style={{ fontSize: Math.max(10, size * 0.12) }}
        >
          {character.name}
        </span>
      </div>
      <span className="max-w-[6rem] font-display text-xs font-semibold text-ink-soft">{character.name}</span>
    </Link>
  );
}
