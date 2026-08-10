import Link from "next/link";
import type { Character, ContentItem, Locale } from "@/lib/types";
import { t } from "@/lib/locale";
import { ui } from "@/lib/ui-strings";
import { ContentCard } from "@/components/content/content-card";
import { ChevronRight } from "@/components/icons";

export function Shelf({
  title,
  items,
  characters,
  locale,
  seeAllHref,
}: {
  title: string;
  items: ContentItem[];
  characters: Character[];
  locale: Locale;
  seeAllHref?: string;
}) {
  if (items.length === 0) return null;

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
        {seeAllHref && (
          <Link
            href={seeAllHref}
            className="flex items-center gap-1 font-display text-sm font-semibold text-orange-deep transition-all hover:gap-2 hover:translate-x-1"
          >
            {t(ui.common.seeAll, locale)}
            <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </div>
      <div className="-mx-5 flex gap-4 overflow-x-auto px-5 pb-2 sm:grid sm:grid-cols-12 sm:gap-6 sm:overflow-visible sm:px-0">
        {items.map((item, idx) => {
          const character = characters.find((c) => c.id === item.characterId);
          const isFirst = idx === 0;
          const isSecond = idx === 1;
          const colSpan = isFirst ? "sm:col-span-6" : isSecond ? "sm:col-span-6" : "sm:col-span-4";

          return (
            <div key={item.id} className={colSpan}>
              <ContentCard
                item={item}
                locale={locale}
                accentToken={character?.accentToken ?? "orange"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
