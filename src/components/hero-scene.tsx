import { CharacterAvatar } from "@/components/character-avatar";

function OpenBook() {
  return (
    <svg viewBox="0 0 160 70" className="h-auto w-40">
      <path d="M2 15 C 30 2 55 2 78 15 L78 65 C 55 52 30 52 2 65 Z" fill="#fff8ec" stroke="#2b2420" strokeWidth="3" />
      <path d="M158 15 C 130 2 105 2 82 15 L82 65 C 105 52 130 52 158 65 Z" fill="#fff8ec" stroke="#2b2420" strokeWidth="3" />
      <path d="M14 22 C 33 15 49 15 64 24 M14 35 C 33 28 49 28 64 37 M14 48 C 33 41 49 41 64 50" stroke="#2b2420" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />
      <path d="M146 22 C 127 15 111 15 96 24 M146 35 C 127 28 111 28 96 37 M146 48 C 127 41 111 41 96 50" stroke="#2b2420" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export function HeroScene() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-full bg-white shadow-xl">
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-end gap-6">
          <CharacterAvatar name="Loulou" accent="coral" size={128} />
          <CharacterAvatar name="Lou" accent="sky" size={112} className="mb-2" />
        </div>
        <OpenBook />
      </div>
    </div>
  );
}
