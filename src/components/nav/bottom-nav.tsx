import Link from "next/link";
import type { Locale } from "@/lib/types";
import { t } from "@/lib/locale";
import { primaryNavItems } from "@/lib/nav";

export function BottomNav({ locale }: { locale: Locale }) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex items-stretch justify-around border-t border-ink/10 bg-white/95 backdrop-blur sm:hidden">
      {primaryNavItems.map(({ href, label, Icon }) => (
        <Link
          key={href}
          href={href}
          transitionTypes={[href === "/" ? "nav-back" : "nav-forward"]}
          className="flex flex-1 flex-col items-center gap-0.5 px-1 py-2 text-ink-soft"
        >
          <Icon className={`h-5 w-5 ${href === "/listen" ? "animate-note-bounce" : ""}`} />
          <span className="font-display text-[0.65rem] font-semibold leading-none">{t(label, locale)}</span>
        </Link>
      ))}
    </nav>
  );
}
