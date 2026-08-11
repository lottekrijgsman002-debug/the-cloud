import Link from "next/link";
import type { CSSProperties } from "react";
import type { ContentItem, Locale } from "@/lib/types";
import { t } from "@/lib/locale";
import { ui } from "@/lib/ui-strings";
import { accentClasses } from "@/lib/accent";
import { NoteIcon, FilmIcon, BookIcon, MaskIcon } from "@/components/icons";
import { FavoriteButton } from "@/components/content/favorite-button";
import { EqualizerBars } from "@/components/equalizer-bars";

const pillarIcon = { listen: NoteIcon, watch: FilmIcon, stories: BookIcon, shows: MaskIcon };

export function ContentCard({
  item,
  locale,
  accentToken,
  featured = false,
}: {
  item: ContentItem;
  locale: Locale;
  accentToken: keyof typeof accentClasses;
  featured?: boolean;
}) {
  const Icon = pillarIcon[item.pillar];
  const accent = accentClasses[accentToken];

  return (
    <Link
      href={`/content/${item.id}`}
      transitionTypes={["nav-forward"]}
      className={`content-card-glow group flex w-56 shrink-0 flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-md transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-[1.06] hover:rotate-1 sm:w-full ${
        featured ? "sm:flex-row sm:h-56" : ""
      }`}
      style={{ "--glow-color": `${accent.borderColorStrong}80`, "--glow-color-solid": accent.borderColorStrong } as CSSProperties}
    >
      <div
        className={`relative flex h-32 w-full shrink-0 items-center justify-center ${accent.bgSoft} transition-all duration-300 group-hover:brightness-105 ${
          featured ? "sm:h-full sm:w-2/5" : ""
        }`}
      >
        {item.pillar === "listen" ? (
          <div
            className={`${featured ? "h-10 sm:h-12" : "h-7"} ${accent.text} transition-transform duration-300 ease-out group-hover:scale-125`}
          >
            <EqualizerBars />
          </div>
        ) : (
          <Icon
            className={`${featured ? "h-14 w-14 sm:h-16 sm:w-16" : "h-10 w-10"} ${accent.text} transition-transform duration-300 ease-out group-hover:scale-150 group-hover:-translate-y-1 group-hover:rotate-12`}
          />
        )}
        <div className="absolute right-2 top-2">
          <FavoriteButton contentId={item.id} size="sm" />
        </div>
        {featured && (
          <div
            className="absolute -left-12 top-4 w-40 -rotate-45 py-1.5 text-center font-display text-[0.65rem] font-bold uppercase tracking-wider text-white shadow-lg"
            style={{ backgroundColor: accent.borderColorStrong }}
          >
            {t(ui.common.featuredBadge, locale)}
          </div>
        )}
        {item.isNew && (
          <span className={`absolute left-2 rounded-full bg-white/90 px-2.5 py-1 font-display text-[0.65rem] font-semibold text-ink ${featured ? "top-9" : "top-2"}`}>
            {t(ui.common.newBadge, locale)}
          </span>
        )}
        {item.isBedtimePick && !item.isNew && (
          <span className={`absolute left-2 rounded-full bg-white/90 px-2.5 py-1 font-display text-[0.65rem] font-semibold text-ink ${featured ? "top-9" : "top-2"}`}>
            {t(ui.common.bedtimeBadge, locale)}
          </span>
        )}
        {item.pillar === "shows" && (
          <span className={`absolute left-2 rounded-full bg-white/90 px-2.5 py-1 font-display text-[0.65rem] font-semibold text-ink ${featured ? "top-9" : "top-2"}`}>
            {t(ui.common.archiveBadge, locale)}
          </span>
        )}
      </div>
      <div className={`flex flex-1 flex-col justify-center p-4 ${featured ? "sm:p-6" : ""}`}>
        <h3 className={`font-display font-semibold text-ink ${featured ? "text-lg sm:text-xl" : "text-base"}`}>
          {t(item.title, locale)}
        </h3>
        <p className={`mt-1 line-clamp-2 flex-1 leading-relaxed text-ink-soft ${featured ? "text-sm sm:line-clamp-3" : "text-xs"}`}>
          {t(item.description, locale)}
        </p>
      </div>
    </Link>
  );
}
