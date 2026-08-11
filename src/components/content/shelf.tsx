import Link from "next/link";
import type { Character, ContentItem, Locale } from "@/lib/types";
import { t } from "@/lib/locale";
import { ui } from "@/lib/ui-strings";
import { ContentCard } from "@/components/content/content-card";
import { ChevronRight, FlourishIcon } from "@/components/icons";

export function Shelf({
  title,
  items,
  characters,
  locale,
  seeAllHref,
  accentColor = "#f17422",
}: {
  title: string;
  items: ContentItem[];
  characters: Character[];
  locale: Locale;
  seeAllHref?: string;
  accentColor?: string;
}) {
  if (items.length === 0) return null;

  return (
    <div>
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="flex items-center gap-2.5 font-display text-2xl font-bold text-ink sm:text-4xl">
            <FlourishIcon className="h-6 w-9 sm:h-7 sm:w-10" style={{ color: accentColor }} />
            {title}
          </h2>
          <span className="heading-squiggle mt-2 block h-[7px] w-20 sm:w-28" style={{ backgroundColor: accentColor }} />
        </div>
        {seeAllHref && (
          <Link
            href={seeAllHref}
            className="group/link flex items-center gap-1.5 rounded-full border-2 border-orange px-4 py-2 font-display text-sm font-bold text-orange-deep transition-all duration-200 hover:gap-3 hover:bg-orange hover:text-white hover:shadow-lg"
          >
            {t(ui.common.seeAll, locale)}
            <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>
        )}
      </div>
      <div className="-mx-5 flex gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-12 sm:gap-6 sm:overflow-visible sm:px-0">
        {items.map((item, idx) => {
          const character = characters.find((c) => c.id === item.characterId);
          const colSpan = idx === 0 ? "sm:col-span-7" : idx === 1 ? "sm:col-span-5" : "sm:col-span-4";
          return (
            <div key={item.id} className={`animate-card-in ${colSpan}`} style={{ animationDelay: `${Math.min(idx, 8) * 70}ms` }}>
              <ContentCard
                item={item}
                locale={locale}
                accentToken={character?.accentToken ?? "orange"}
                featured={idx === 0}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
