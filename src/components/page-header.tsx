import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { ChevronRight } from "@/components/icons";
import { SkyScene } from "@/components/divider";

export function PageHeader({
  locale,
  eyebrow,
  title,
  intro,
  backLabel,
  tintClassName = "bg-coral/15",
  accentClassName = "text-coral-deep",
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  intro: string;
  backLabel: string;
  tintClassName?: string;
  accentClassName?: string;
}) {
  return (
    <section className={`relative overflow-hidden ${tintClassName}`}>
      <SkyScene showSun={false} />
      <div className="relative mx-auto max-w-4xl px-5 py-14 text-center sm:py-20">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-ink-soft hover:text-ink"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
          {backLabel}
        </Link>
        <div className={`mt-4 font-display text-sm font-semibold uppercase tracking-wide ${accentClassName}`}>
          {eyebrow}
        </div>
        <h1 className="mt-2 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>
      </div>
    </section>
  );
}
