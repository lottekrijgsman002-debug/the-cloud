import Link from "next/link";
import type { SectionKey } from "@/data/site";
import { SectionIcon } from "@/components/section-icon";
import { ChevronRight } from "@/components/icons";

const accentStyles: Record<string, { ring: string; iconWrap: string; icon: string }> = {
  coral: {
    ring: "hover:border-coral/50 hover:shadow-coral/20",
    iconWrap: "bg-coral/15 text-coral-deep",
    icon: "text-coral-deep",
  },
  sky: {
    ring: "hover:border-sky/50 hover:shadow-sky/20",
    iconWrap: "bg-sky/15 text-sky-deep",
    icon: "text-sky-deep",
  },
  gold: {
    ring: "hover:border-gold/50 hover:shadow-gold/20",
    iconWrap: "bg-gold/20 text-gold-deep",
    icon: "text-gold-deep",
  },
  sage: {
    ring: "hover:border-sage/50 hover:shadow-sage/20",
    iconWrap: "bg-sage/15 text-sage-deep",
    icon: "text-sage-deep",
  },
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
  const style = accentStyles[accent] ?? accentStyles.coral;

  return (
    <Link
      href={href}
      className={`group flex flex-col rounded-3xl border-2 border-ink/10 bg-white/60 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${style.ring}`}
    >
      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${style.iconWrap}`}>
        <SectionIcon section={section} className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold text-plum">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{description}</p>
      <span className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${style.icon}`}>
        {cta}
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
