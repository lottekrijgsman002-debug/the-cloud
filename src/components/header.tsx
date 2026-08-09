"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { sections } from "@/data/site";
import { LanguageSwitcher } from "@/components/language-switcher";
import { SectionIcon } from "@/components/section-icon";
import { MenuIcon, CloseIcon, StarIcon } from "@/components/icons";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);

  const navItems = sections.map((s) => ({
    key: s.key,
    href: `/${locale}${s.href}`,
    label: dict.nav[s.key],
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-parchment/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-plum"
        >
          <StarIcon className="h-5 w-5 text-gold" />
          Loulou &amp; Lou
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="flex items-center gap-1.5 text-sm font-semibold text-ink-soft transition-colors hover:text-coral-deep"
            >
              <SectionIcon section={item.key} className="h-4 w-4 opacity-70" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher locale={locale} />
          </div>
          <button
            className="rounded-full border border-ink/15 p-2 lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-parchment px-5 pb-5 lg:hidden">
          <nav className="flex flex-col gap-1 pt-3">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-ink-soft hover:bg-ink/5"
              >
                <SectionIcon section={item.key} className="h-4 w-4 opacity-70" />
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 sm:hidden">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      )}
    </header>
  );
}
