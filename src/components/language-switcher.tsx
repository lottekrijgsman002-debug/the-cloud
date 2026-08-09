"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";

function setLocaleCookie(next: Locale) {
  document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000`;
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    if (next === locale) return;
    setLocaleCookie(next);
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || `/${next}`);
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-ink/15 bg-white/70 p-1 text-sm font-semibold">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => switchTo(l)}
          aria-current={l === locale}
          className={`rounded-full px-3 py-1 transition-colors ${
            l === locale
              ? "bg-plum text-parchment"
              : "text-ink-soft hover:bg-ink/5"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
