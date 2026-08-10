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
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">{title}</h2>
        {seeAllHref && (
          <Link
            href={seeAllHref}
            className="flex items-center gap-1 font-display text-sm font-semibold text-orange-deep"
          >
            {t(ui.common.seeAll, locale)}
            <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </div>
      <div className="-mx-5 flex gap-4 overflow-x-auto px-5 pb-2">
        {items.map((item) => {
          const character = characters.find((c) => c.id === item.characterId);
          return (
            <ContentCard
              key={item.id}
              item={item}
              locale={locale}
              accentToken={character?.accentToken ?? "orange"}
            />
          );
        })}
      </div>
    </div>
  );
}
