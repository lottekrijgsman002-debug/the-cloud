import { StarField } from "@/components/divider";

export function HeroScene() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <StarField />
      <svg viewBox="0 0 400 400" className="h-full w-full drop-shadow-xl">
        <defs>
          <radialGradient id="skyGlow" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fff6df" />
            <stop offset="100%" stopColor="#fbe7c9" />
          </radialGradient>
        </defs>

        <circle cx="200" cy="200" r="190" fill="url(#skyGlow)" />

        {/* moon */}
        <circle cx="290" cy="100" r="34" fill="var(--color-gold)" opacity="0.9" />
        <circle cx="278" cy="90" r="30" fill="var(--color-parchment)" opacity="0.55" />

        {/* hills */}
        <path d="M0 260 C 80 220 140 300 220 250 C 300 205 340 260 400 240 L400 400 L0 400 Z" fill="var(--color-sage)" opacity="0.55" />
        <path d="M0 300 C 90 270 170 330 260 295 C 320 272 360 310 400 295 L400 400 L0 400 Z" fill="var(--color-sage-deep)" opacity="0.6" />

        {/* open storybook */}
        <g transform="translate(120 250)">
          <path d="M0 20 C 30 5 55 5 80 20 L80 75 C 55 60 30 60 0 75 Z" fill="var(--color-parchment)" stroke="var(--color-plum)" strokeWidth="3" />
          <path d="M160 20 C 130 5 105 5 80 20 L80 75 C 105 60 130 60 160 75 Z" fill="var(--color-parchment)" stroke="var(--color-plum)" strokeWidth="3" />
          <path d="M14 28 C 34 20 50 20 66 30 M14 42 C 34 34 50 34 66 44 M14 56 C 34 48 50 48 66 58" stroke="var(--color-ink-soft)" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5" />
          <path d="M146 28 C 126 20 110 20 94 30 M146 42 C 126 34 110 34 94 44 M146 56 C 126 48 110 48 94 58" stroke="var(--color-ink-soft)" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5" />
        </g>

        {/* two friendly companions */}
        <g transform="translate(78 230)">
          <ellipse cx="30" cy="70" rx="30" ry="10" fill="var(--color-plum)" opacity="0.08" />
          <circle cx="30" cy="40" r="34" fill="var(--color-coral)" />
          <circle cx="19" cy="36" r="4.2" fill="var(--color-plum)" />
          <circle cx="41" cy="36" r="4.2" fill="var(--color-plum)" />
          <path d="M18 50 Q30 60 42 50" stroke="var(--color-plum)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M8 16 L14 2 M52 16 L46 2" stroke="var(--color-coral-deep)" strokeWidth="5" strokeLinecap="round" />
        </g>
        <g transform="translate(255 245)">
          <ellipse cx="28" cy="62" rx="28" ry="9" fill="var(--color-plum)" opacity="0.08" />
          <circle cx="28" cy="34" r="30" fill="var(--color-sky)" />
          <circle cx="18" cy="31" r="3.8" fill="var(--color-plum)" />
          <circle cx="38" cy="31" r="3.8" fill="var(--color-plum)" />
          <path d="M17 44 Q28 52 39 44" stroke="var(--color-plum)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="28" cy="2" r="6" fill="var(--color-sky-deep)" />
        </g>
      </svg>
    </div>
  );
}
