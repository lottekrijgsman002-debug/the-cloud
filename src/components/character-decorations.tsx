import type { Character } from "@/lib/types";

const decorations: Record<string, { symbols: string[]; positions: string[] }> = {
  "loulou-lou": {
    symbols: ["✨", "⭐", "🎉", "🌙"],
    positions: [
      "top-12 left-8",
      "top-32 right-12",
      "bottom-24 left-6",
      "bottom-16 right-8",
    ],
  },
  "maestro-mozy": {
    symbols: ["♪", "♫", "♬", "🎵"],
    positions: [
      "top-16 left-10",
      "top-40 right-8",
      "bottom-20 left-12",
      "bottom-12 right-10",
    ],
  },
  "guru-woof": {
    symbols: ["◉", "●", "○", "◎"],
    positions: [
      "top-20 left-6",
      "top-36 right-10",
      "bottom-24 left-10",
      "bottom-14 right-12",
    ],
  },
  "jazzcat-louis": {
    symbols: ["♪", "♭", "♯", "🎷"],
    positions: [
      "top-14 left-12",
      "top-32 right-6",
      "bottom-22 left-8",
      "bottom-10 right-14",
    ],
  },
  "captain-clock": {
    symbols: ["⏰", "⌛", "🕐", "⚙"],
    positions: [
      "top-18 left-10",
      "top-38 right-12",
      "bottom-20 right-8",
      "bottom-12 left-14",
    ],
  },
};

export function CharacterDecorations({ character }: { character: Character }) {
  const deco = decorations[character.id];
  if (!deco) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {deco.symbols.map((symbol, i) => (
        <div
          key={i}
          className={`absolute text-2xl opacity-40 sm:text-3xl sm:opacity-50 ${
            i % 2 === 0 ? "animate-float-slow" : "animate-float-slower"
          } ${deco.positions[i]}`}
        >
          {symbol}
        </div>
      ))}
    </div>
  );
}
