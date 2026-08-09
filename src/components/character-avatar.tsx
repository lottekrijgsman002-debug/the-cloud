export type CharacterVariant = "loulou" | "lou" | "guru-woof" | "maestro-mozy" | "jazz-cat";

const bgByVariant: Record<CharacterVariant, string> = {
  loulou: "bg-magenta",
  lou: "bg-orange",
  "guru-woof": "bg-green",
  "maestro-mozy": "bg-mustard",
  "jazz-cat": "bg-red",
};

function LoulouFace() {
  return (
    <g>
      <path d="M18 42c0-15 7-24 22-24s22 9 22 24v6c0 3-2 5-4 6l-4 10c-1 3-4 4-6 4H32c-2 0-5-1-6-4l-4-10c-2-1-4-3-4-6Z" fill="#fff" stroke="#141414" strokeWidth="3" />
      <path d="M16 40c-2-16 6-27 24-27s26 11 24 27c-6-10-14-15-24-15s-18 5-24 15Z" fill="#141414" />
      <rect x="36" y="16" width="6" height="10" rx="2" fill="#f17422" transform="rotate(-18 39 21)" />
      <circle cx="30" cy="46" r="3" fill="#141414" />
      <circle cx="50" cy="46" r="3" fill="#141414" />
      <path d="M29 57q11 8 22 0" stroke="#141414" strokeWidth="3" fill="none" strokeLinecap="round" />
    </g>
  );
}

function LouFace() {
  return (
    <g>
      <path d="M18 44c0-16 7-25 22-25s22 9 22 25v4c0 3-2 5-4 6l-4 9c-1 3-4 4-6 4H32c-2 0-5-1-6-4l-4-9c-2-1-4-3-4-6Z" fill="#fff" stroke="#141414" strokeWidth="3" />
      <path d="M15 38c2-15 10-23 25-23s21 9 24 21c-3-3-8-6-12-4-4 2-4-4-9-4s-6 6-10 5-6-6-10-4c-4 2-6 6-8 9Z" fill="#141414" />
      <circle cx="30" cy="47" r="3" fill="#141414" />
      <circle cx="50" cy="47" r="3" fill="#141414" />
      <path d="M29 58q11 7 22-1" stroke="#141414" strokeWidth="3" fill="none" strokeLinecap="round" />
      <rect x="37" y="59" width="6" height="5" fill="#fff" stroke="#141414" strokeWidth="2" />
    </g>
  );
}

function GuruWoofFace() {
  return (
    <g>
      <path d="M40 18c-14 0-22 10-22 24 0 12 9 21 22 21s22-9 22-21c0-14-8-24-22-24Z" fill="#fff" stroke="#141414" strokeWidth="3" />
      <path d="M20 34c-6-4-8-14-4-18 5 3 8 9 9 15Z" fill="#141414" />
      <path d="M60 34c6-4 8-14 4-18-5 3-8 9-9 15Z" fill="#141414" />
      <path d="M22 20c8-8 28-8 36 0-6 4-10 10-18 10s-12-6-18-10Z" fill="#e9a94a" />
      <circle cx="32" cy="45" r="2.6" fill="#141414" />
      <circle cx="48" cy="45" r="2.6" fill="#141414" />
      <ellipse cx="40" cy="54" rx="4" ry="3" fill="#141414" />
      <path d="M33 60q7 5 14 0" stroke="#141414" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </g>
  );
}

function MaestroMozyFace() {
  return (
    <g>
      <circle cx="40" cy="42" r="26" fill="#fff" stroke="#141414" strokeWidth="3" />
      <circle cx="18" cy="26" r="9" fill="#141414" />
      <circle cx="62" cy="26" r="9" fill="#141414" />
      <circle cx="18" cy="26" r="4" fill="#c2ab00" />
      <circle cx="62" cy="26" r="4" fill="#c2ab00" />
      <circle cx="26" cy="16" r="3" fill="#141414" />
      <ellipse cx="24" cy="44" rx="7" ry="6" fill="#141414" opacity="0.08" />
      <ellipse cx="56" cy="44" rx="7" ry="6" fill="#141414" opacity="0.08" />
      <circle cx="31" cy="42" r="2.8" fill="#141414" />
      <circle cx="49" cy="42" r="2.8" fill="#141414" />
      <ellipse cx="40" cy="50" rx="5" ry="3.5" fill="#141414" />
      <path d="M32 58q8 5 16 0" stroke="#141414" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </g>
  );
}

function JazzCatFace() {
  return (
    <g>
      <path d="M16 30 26 12 34 26Z" fill="#141414" />
      <path d="M64 30 54 12 46 26Z" fill="#141414" />
      <path d="M40 18c-14 0-24 10-24 24s10 22 24 22 24-8 24-22-10-24-24-24Z" fill="#fff" stroke="#141414" strokeWidth="3" />
      <circle cx="30" cy="45" r="2.8" fill="#141414" />
      <circle cx="50" cy="45" r="2.8" fill="#141414" />
      <path d="M40 48l-3 5h6Z" fill="#141414" />
      <path d="M14 46h14M14 52h12M52 52h12M52 46h14" stroke="#141414" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M34 56q6 4 12 0" stroke="#141414" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </g>
  );
}

const faceByVariant: Record<CharacterVariant, () => React.JSX.Element> = {
  loulou: LoulouFace,
  lou: LouFace,
  "guru-woof": GuruWoofFace,
  "maestro-mozy": MaestroMozyFace,
  "jazz-cat": JazzCatFace,
};

export function CharacterAvatar({
  variant,
  size = 96,
  className = "",
}: {
  variant: CharacterVariant;
  size?: number;
  className?: string;
}) {
  const Face = faceByVariant[variant];
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full shadow-md ${bgByVariant[variant]} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 80 80" width={size * 0.82} height={size * 0.82}>
        <Face />
      </svg>
    </div>
  );
}
