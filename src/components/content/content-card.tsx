import Link from "next/link";
import type { ContentItem, Locale } from "@/lib/types";
import { t } from "@/lib/locale";
import { ui } from "@/lib/ui-strings";
import { accentClasses } from "@/lib/accent";
import { NoteIcon, FilmIcon, BookIcon, MaskIcon } from "@/components/icons";
import { FavoriteButton } from "@/components/content/favorite-button";

const pillarIcon = { listen: NoteIcon, watch: FilmIcon, stories: BookIcon, shows: MaskIcon };

export function ContentCard({
  item,
  locale,
  accentToken,
}: {
  item: ContentItem;
  locale: Locale;
  accentToken: keyof typeof accentClasses;
}) {
  const Icon = pillarIcon[item.pillar];
  const accent = accentClasses[accentToken];

  return (
    <Link
      href={`/content/${item.id}`}
      className="group flex w-56 shrink-0 flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2"
    >
      <div className={`relative flex h-32 items-center justify-center ${accent.bgSoft} transition-all duration-300 group-hover:brightness-110`}>
        <Icon className={`h-10 w-10 ${accent.text} transition-transform duration-300 group-hover:scale-125`} />
        <div className="absolute right-2 top-2">
          <FavoriteButton contentId={item.id} size="sm" />
        </div>
        {item.isNew && (
          <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2.5 py-1 font-display text-[0.65rem] font-semibold text-ink">
            {t(ui.common.newBadge, locale)}
          </span>
        )}
        {item.isBedtimePick && !item.isNew && (
          <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2.5 py-1 font-display text-[0.65rem] font-semibold text-ink">
            {t(ui.common.bedtimeBadge, locale)}
          </span>
        )}
        {item.pillar === "shows" && (
          <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2.5 py-1 font-display text-[0.65rem] font-semibold text-ink">
            {t(ui.common.archiveBadge, locale)}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-base font-semibold text-ink">{t(item.title, locale)}</h3>
        <p className="mt-1 line-clamp-2 flex-1 text-xs leading-relaxed text-ink-soft">
          {t(item.description, locale)}
        </p>
      </div>
    </Link>
  );
}
