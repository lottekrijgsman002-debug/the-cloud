import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { ChevronRight } from "@/components/icons";
import { DoodleField } from "@/components/divider";

export function PageHeader({
  locale,
  eyebrow,
  title,
  intro,
  backLabel,
  bgClassName = "bg-magenta",
  tone = "light",
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  intro: string;
  backLabel: string;
  bgClassName?: string;
  tone?: "light" | "dark";
}) {
  const textColor = tone === "light" ? "text-white" : "text-ink";
  const subtleColor = tone === "light" ? "text-white/70 hover:text-white" : "text-ink/70 hover:text-ink";
  const eyebrowColor = tone === "light" ? "text-white/85" : "text-ink/80";

  return (
    <section className={`relative overflow-hidden ${bgClassName}`}>
      <DoodleField />
      <div className="relative mx-auto max-w-4xl px-5 py-14 text-center sm:py-20">
        <Link
          href={`/${locale}`}
          className={`inline-flex items-center gap-1 text-sm font-semibold ${subtleColor}`}
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
          {backLabel}
        </Link>
        <div className={`mt-4 font-display text-sm font-semibold uppercase tracking-wide ${eyebrowColor}`}>
          {eyebrow}
        </div>
        <h1 className={`mt-2 font-display text-4xl font-semibold uppercase leading-tight sm:text-5xl ${textColor}`}>
          {title}
        </h1>
        <p className={`mx-auto mt-4 max-w-2xl text-lg leading-relaxed ${subtleColor}`}>{intro}</p>
      </div>
    </section>
  );
}
