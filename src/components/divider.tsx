export function WaveDivider({
  className,
  color = "var(--color-parchment-deep)",
  flip = false,
}: {
  className?: string;
  color?: string;
  flip?: boolean;
}) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className={`h-10 w-full ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0 30 C 180 60 360 0 540 30 C 720 60 900 0 1080 30 C 1260 60 1350 15 1440 30 L1440 60 L0 60 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function StarField({ className }: { className?: string }) {
  const stars = [
    { top: "12%", left: "8%", size: 10, delay: "0s" },
    { top: "22%", left: "88%", size: 14, delay: "0.6s" },
    { top: "62%", left: "4%", size: 8, delay: "1.1s" },
    { top: "75%", left: "92%", size: 12, delay: "1.7s" },
    { top: "8%", left: "45%", size: 8, delay: "0.3s" },
    { top: "85%", left: "60%", size: 10, delay: "2s" },
  ];
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`} aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute animate-twinkle text-gold"
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        >
          <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1.5l2.6 6.9 7.4.5-5.7 4.8 1.9 7.2L12 16.9l-6.2 4-1.9-7.2-5.7-4.8 7.4-.5L12 1.5Z" />
          </svg>
        </span>
      ))}
    </div>
  );
}
