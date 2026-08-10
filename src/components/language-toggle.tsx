"use client";

import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/types";
import { locales, LOCALE_COOKIE } from "@/lib/locale";

function setLocaleCookie(next: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000`;
}

export function LanguageToggle({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const router = useRouter();

  function switchTo(next: Locale) {
    if (next === locale) return;
    setLocaleCookie(next);
    router.refresh();
  }

  return (
    <div className={`flex items-center gap-1 rounded-full bg-white/70 p-1 ${compact ? "text-xs" : "text-sm"}`}>
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          aria-current={l === locale}
          className={`rounded-full px-3 py-1 font-display font-semibold transition-colors ${
            l === locale ? "bg-ink text-white" : "text-ink-soft hover:text-ink"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
