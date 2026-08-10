"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";
import { sections } from "@/data/site";
import { SectionIcon } from "@/components/section-icon";
import { MenuIcon, CloseIcon } from "@/components/icons";
import { Logo } from "@/components/logo";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const langHref = (l: "nl" | "en") => {
    const segments = pathname.split("/");
    segments[1] = l;
    return segments.join("/") || `/${l}`;
  };

  const navItems = [
    { key: "home" as const, href: `/${locale}`, label: dict.nav.home },
    ...sections.map((s) => ({
      key: s.key,
      href: `/${locale}${s.href}`,
      label: dict.nav[s.key],
    })),
  ];

  return (
    <header className="sticky top-0 z-50 bg-sky/40 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-3 items-center px-5 py-3">
        <button
          className="flex items-center gap-2 justify-self-start font-display text-sm font-semibold text-ink"
          aria-label="Menu"
          onClick={() => setOpen(true)}
        >
          <MenuIcon className="h-6 w-6" />
          {dict.nav.menu}
        </button>

        <Link href={`/${locale}`} className="justify-self-center">
          <Logo />
        </Link>

        <div className="flex items-center gap-2 justify-self-end font-display text-sm font-semibold">
          {(["nl", "en"] as const).map((l, i) => (
            <span key={l} className="flex items-center gap-2">
              {i > 0 && <span className="text-ink/30">/</span>}
              <Link
                href={langHref(l)}
                aria-current={l === locale}
                className={l === locale ? "text-ink" : "text-ink/40 hover:text-ink"}
              >
                {l.toUpperCase()}
              </Link>
            </span>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink text-cream">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3">
            <span className="font-display text-sm font-semibold">{dict.nav.menu}</span>
            <Logo variant="light" />
            <button aria-label="Close" onClick={() => setOpen(false)}>
              <CloseIcon className="h-7 w-7" />
            </button>
          </div>

          <nav className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-2 px-5">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex w-full items-center justify-center gap-3 py-3 font-display text-3xl font-semibold transition-colors hover:text-sunshine sm:text-4xl"
              >
                {item.key !== "home" && (
                  <SectionIcon
                    section={item.key}
                    className="h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100"
                  />
                )}
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
