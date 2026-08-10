"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/types";
import { t } from "@/lib/locale";
import { ui } from "@/lib/ui-strings";
import { HeartIcon, MailIcon, UserIcon, SearchIcon, MenuIcon, CloseIcon } from "@/components/icons";

export function ProfileMenu({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const items = [
    { href: "/search", label: ui.nav.search, Icon: SearchIcon },
    { href: "/favorites", label: ui.nav.favorites, Icon: HeartIcon },
    { href: "/club", label: ui.nav.club, Icon: MailIcon },
    { href: "/account", label: ui.nav.account, Icon: UserIcon },
  ];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-label={t(ui.nav.menu, locale)}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink transition-colors hover:bg-ink/10"
      >
        {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-50 w-56 rounded-[1.5rem] bg-white p-2 shadow-lg">
          {items.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold text-ink-soft transition-colors hover:bg-orange/10 hover:text-ink"
            >
              <Icon className="h-[18px] w-[18px]" />
              {t(label, locale)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
