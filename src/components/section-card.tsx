import Link from "next/link";
import type { SectionKey } from "@/data/site";
import { SectionIcon } from "@/components/section-icon";
import { ChevronRight } from "@/components/icons";

const accentStyles: Record<string, { iconWrap: string; cta: string; ring: string }> = {
  sunshine: { iconWrap: "bg-sunshine/20 text-sunshine-deep", cta: "text-sunshine-deep", ring: "hover:border-sunshine" },
  sky: { iconWrap: "bg-sky/20 text-sky-deep", cta: "text-sky-deep", ring: "hover:border-sky" },
  coral: { iconWrap: "bg-coral/15 text-coral-deep", cta: "text-coral-deep", ring: "hover:border-coral" },
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
      className={`group flex flex-col rounded-[2rem] border-2 border-transparent bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg ${style.ring}`}
    >
      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${style.iconWrap}`}>
        <SectionIcon section={section} className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{description}</p>
      <span className={`mt-4 inline-flex items-center gap-1 text-sm font-display font-semibold ${style.cta}`}>
        {cta}
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
