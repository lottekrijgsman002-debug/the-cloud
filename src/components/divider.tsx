import {
  StarIcon,
  HeartIcon,
  SpiralIcon,
  RainbowIcon,
  CloudIcon,
  BookIcon,
} from "@/components/icons";

const doodleIcons = [StarIcon, HeartIcon, SpiralIcon, RainbowIcon, CloudIcon, BookIcon];

export function DoodleField({ className }: { className?: string }) {
  const doodles = [
    { top: "10%", left: "6%", size: 34, rotate: -12, icon: 2 },
    { top: "18%", left: "90%", size: 30, rotate: 10, icon: 0 },
    { top: "58%", left: "3%", size: 28, rotate: 8, icon: 4 },
    { top: "72%", left: "93%", size: 32, rotate: -8, icon: 1 },
    { top: "4%", left: "42%", size: 22, rotate: 15, icon: 0 },
    { top: "85%", left: "55%", size: 26, rotate: -6, icon: 3 },
    { top: "40%", left: "12%", size: 24, rotate: 20, icon: 1 },
    { top: "30%", left: "78%", size: 26, rotate: -14, icon: 5 },
  ];
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden text-white/25 ${className ?? ""}`}
      aria-hidden="true"
    >
      {doodles.map((d, i) => {
        const Icon = doodleIcons[d.icon];
        return (
          <Icon
            key={i}
            className="absolute animate-twinkle"
            style={{
              top: d.top,
              left: d.left,
              width: d.size,
              height: d.size,
              transform: `rotate(${d.rotate}deg)`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        );
      })}
    </div>
  );
}
