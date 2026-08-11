"use client";

import { useEffect, useRef } from "react";
import { CloudIcon, StarIcon } from "@/components/icons";

const clouds = [
  { top: "8%", left: "4%", size: 70, animation: "animate-float-slow", parallax: 0.12 },
  { top: "62%", left: "-2%", size: 54, animation: "animate-float-slower", parallax: 0.22 },
  { top: "14%", left: "82%", size: 60, animation: "animate-float-slower", parallax: 0.08 },
  { top: "70%", left: "86%", size: 46, animation: "animate-float-slow", parallax: 0.18 },
];
const stars = [
  { top: "30%", left: "48%", size: 14 },
  { top: "80%", left: "40%", size: 10 },
  { top: "20%", left: "62%", size: 10 },
];

export function SkyScene({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    function apply() {
      raf = 0;
      const container = containerRef.current;
      if (!container) return;
      const y = window.scrollY;
      container.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const factor = parseFloat(el.dataset.parallax ?? "0");
        el.style.transform = `translateY(${y * factor}px)`;
      });
    }
    function onScroll() {
      if (!raf) raf = requestAnimationFrame(apply);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    apply();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={containerRef} className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`} aria-hidden="true">
      {clouds.map((c, i) => (
        <div
          key={i}
          data-parallax={c.parallax}
          className="absolute"
          style={{ top: c.top, left: c.left, width: c.size, height: c.size }}
        >
          <CloudIcon className={`h-full w-full fill-white/85 text-white/85 ${c.animation}`} />
        </div>
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
