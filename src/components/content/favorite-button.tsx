"use client";

import { useAccount } from "@/context/account-context";
import { HeartIcon } from "@/components/icons";

export function FavoriteButton({ contentId, size = "md" }: { contentId: string; size?: "sm" | "md" }) {
  const { isFavorite, toggleFavorite, ready } = useAccount();
  const active = ready && isFavorite(contentId);
  const dim = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  const iconDim = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        toggleFavorite(contentId);
      }}
      aria-pressed={active}
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
      className={`flex ${dim} shrink-0 items-center justify-center rounded-full shadow-sm transition-colors ${
        active ? "bg-coral text-white" : "bg-white text-ink-soft hover:text-coral-deep"
      }`}
    >
      <HeartIcon className={iconDim} fill={active ? "currentColor" : "none"} />
    </button>
  );
}
