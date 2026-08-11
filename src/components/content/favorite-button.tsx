"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { useAccount } from "@/context/account-context";
import { HeartIcon } from "@/components/icons";

const confettiColors = ["#a11f8a", "#33ae4c", "#c2ab00", "#f17422"];
const confettiParticles = Array.from({ length: 8 }, (_, i) => {
  const angle = (i / 8) * Math.PI * 2;
  return {
    tx: Math.round(Math.cos(angle) * 22),
    ty: Math.round(Math.sin(angle) * 22),
    color: confettiColors[i % confettiColors.length],
    delay: (i % 3) * 30,
  };
});

export function FavoriteButton({ contentId, size = "md" }: { contentId: string; size?: "sm" | "md" }) {
  const { isFavorite, toggleFavorite, ready } = useAccount();
  const [burst, setBurst] = useState(false);
  const active = ready && isFavorite(contentId);
  const dim = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  const iconDim = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          const wasActive = active;
          toggleFavorite(contentId);
          if (!wasActive) {
            setBurst(true);
            window.setTimeout(() => setBurst(false), 650);
          }
        }}
        aria-pressed={active}
        aria-label={active ? "Remove from favorites" : "Add to favorites"}
        className={`flex ${dim} shrink-0 items-center justify-center rounded-full shadow-sm transition-colors ${
          active ? "bg-orange text-white" : "bg-white text-ink-soft hover:text-orange-deep"
        }`}
      >
        <HeartIcon className={iconDim} fill={active ? "currentColor" : "none"} />
      </button>
      {burst && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
          {confettiParticles.map((p, i) => (
            <span
              key={i}
              className="confetti-particle absolute h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: p.color, "--tx": `${p.tx}px`, "--ty": `${p.ty}px`, animationDelay: `${p.delay}ms` } as CSSProperties}
            />
          ))}
        </div>
      )}
    </div>
  );
}
