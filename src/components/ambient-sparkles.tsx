import { StarIcon } from "@/components/icons";

const sparkles = [
  { top: "3%", left: "6%", size: 12, delay: 0 },
  { top: "12%", left: "94%", size: 9, delay: 0.6 },
  { top: "32%", left: "2%", size: 8, delay: 1.1 },
  { top: "48%", left: "97%", size: 11, delay: 0.3 },
  { top: "68%", left: "5%", size: 9, delay: 1.6 },
  { top: "82%", left: "92%", size: 13, delay: 0.9 },
  { top: "95%", left: "12%", size: 8, delay: 1.3 },
];

export function AmbientSparkles({ color = "#c2ab00" }: { color?: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {sparkles.map((s, i) => (
        <StarIcon
          key={i}
          className="absolute animate-twinkle"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            color,
            opacity: 0.4,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
