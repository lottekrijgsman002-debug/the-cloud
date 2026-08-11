import Link from "next/link";
import type { Locale } from "@/lib/types";
import { t } from "@/lib/locale";
import { primaryNavItems } from "@/lib/nav";
import { Logo } from "@/components/logo";
import { LanguageToggle } from "@/components/language-toggle";
import { ProfileMenu } from "@/components/nav/profile-menu";

export function TopNav({ locale }: { locale: Locale }) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3">
        <Logo size={52} />

        <nav className="hidden items-center gap-1 sm:flex">
          {primaryNavItems.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              transitionTypes={[href === "/" ? "nav-back" : "nav-forward"]}
              className="flex items-center gap-1.5 rounded-full px-3 py-2 font-display text-sm font-semibold text-ink-soft transition-colors hover:bg-orange/10 hover:text-ink"
            >
              <Icon className="h-4 w-4 opacity-70" />
              {t(label, locale)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle locale={locale} compact />
          <ProfileMenu locale={locale} />
        </div>
      </div>
    </header>
  );
}
