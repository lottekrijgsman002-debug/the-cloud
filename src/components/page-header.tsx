import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { ChevronRight } from "@/components/icons";

export function PageHeader({
  locale,
  eyebrow,
  title,
  intro,
  backLabel,
  accentClassName = "text-coral-deep",
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  intro: string;
  backLabel: string;
  accentClassName?: string;
}) {
  return (
    <section className="bg-parchment-deep">
      <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:py-20">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-ink-soft hover:text-plum"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
          {backLabel}
        </Link>
        <div className={`mt-4 text-sm font-semibold uppercase tracking-wide ${accentClassName}`}>
          {eyebrow}
        </div>
        <h1 className="mt-2 font-display text-4xl font-semibold leading-tight text-plum sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>
      </div>
    </section>
  );
}
