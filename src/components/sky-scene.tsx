import { CloudIcon, StarIcon } from "@/components/icons";

export function SkyScene({ className }: { className?: string }) {
  const clouds = [
    { top: "8%", left: "4%", size: 70, animation: "animate-float-slow" },
    { top: "62%", left: "-2%", size: 54, animation: "animate-float-slower" },
    { top: "14%", left: "82%", size: 60, animation: "animate-float-slower" },
    { top: "70%", left: "86%", size: 46, animation: "animate-float-slow" },
  ];
  const stars = [
    { top: "30%", left: "48%", size: 14 },
    { top: "80%", left: "40%", size: 10 },
    { top: "20%", left: "62%", size: 10 },
  ];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`} aria-hidden="true">
      {clouds.map((c, i) => (
        <CloudIcon
          key={i}
          className={`absolute fill-white/85 text-white/85 ${c.animation}`}
          style={{ top: c.top, left: c.left, width: c.size, height: c.size }}
        />
      ))}
      {stars.map((s, i) => (
        <StarIcon
          key={i}
          className="absolute animate-twinkle text-white/70"
          style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: `${i * 0.4}s` }}
        />
      ))}
    </div>
  );
}
