import Link from "next/link";
import type { SectionKey } from "@/data/site";
import { SectionIcon } from "@/components/section-icon";
import { ChevronRight } from "@/components/icons";

const accentStyles: Record<string, { bg: string; text: string; iconWrap: string }> = {
  magenta: { bg: "bg-magenta", text: "text-white", iconWrap: "bg-white text-magenta" },
  green: { bg: "bg-green", text: "text-ink", iconWrap: "bg-ink text-green" },
  mustard: { bg: "bg-mustard", text: "text-ink", iconWrap: "bg-ink text-mustard" },
  red: { bg: "bg-red", text: "text-white", iconWrap: "bg-white text-red" },
  orange: { bg: "bg-orange", text: "text-ink", iconWrap: "bg-ink text-orange" },
};

export function SectionCard({
  href,
  section,
  accent,
  title,
  description,
  cta,
}: {
  href: string;
  section: SectionKey;
  accent: string;
  title: string;
  description: string;
  cta: string;
}) {
  const style = accentStyles[accent] ?? accentStyles.magenta;

  return (
    <Link
      href={href}
      className={`group flex flex-col rounded-3xl border-2 border-ink p-6 shadow-[4px_4px_0_var(--color-ink)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--color-ink)] ${style.bg} ${style.text}`}
    >
      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${style.iconWrap}`}>
        <SectionIcon section={section} className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold uppercase">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed opacity-90">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-display font-semibold uppercase">
        {cta}
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
