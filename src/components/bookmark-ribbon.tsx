import Link from "next/link";
import type { Locale } from "@/lib/types";
import { t } from "@/lib/locale";
import { ui } from "@/lib/ui-strings";
import { HeartIcon } from "@/components/icons";

export function BookmarkRibbon({ locale }: { locale: Locale }) {
  return (
    <Link
      href="/favorites"
      aria-label={t(ui.nav.favorites, locale)}
      transitionTypes={["nav-forward"]}
      className="fixed right-0 top-24 z-50 flex flex-col items-center gap-2 rounded-l-2xl bg-magenta px-3 pb-9 pt-4 text-white shadow-lg transition-all hover:-translate-x-1 hover:shadow-xl sm:top-28"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 94%, 0 100%)",
        borderLeft: "2px dashed rgba(255,255,255,0.55)",
      }}
    >
      <HeartIcon className="h-5 w-5 shrink-0" fill="currentColor" />
      <span className="font-display text-[0.6rem] font-bold uppercase tracking-wide [writing-mode:vertical-rl]">
        {t(ui.nav.favorites, locale)}
      </span>
    </Link>
  );
}
