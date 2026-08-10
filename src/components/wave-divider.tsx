export function WaveDivider({ className }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute bottom-0 left-0 w-full ${className ?? ""}`}
      style={{ height: "56px" }}
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 30 C 120 58 240 2 360 22 C 480 42 600 58 720 38 C 840 18 960 2 1080 22 C 1200 42 1320 58 1440 30 L1440 60 L0 60 Z"
        fill="var(--color-paper)"
      />
    </svg>
  );
}
