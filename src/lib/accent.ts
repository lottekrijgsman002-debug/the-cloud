import type { Character } from "@/lib/types";

type AccentClasses = {
  /** Full-strength background, for hero/header takeovers. */
  bg: string;
  /** Light tint, for card surfaces and icon badges. */
  bgSoft: string;
  text: string;
  textDeep: string;
  border: string;
  /** Text color to use on top of the full-strength `bg`. */
  onBg: string;
  /** Softer/secondary text color to use on top of the full-strength `bg`. */
  onBgSoft: string;
};

export const accentClasses: Record<Character["accentToken"], AccentClasses> = {
  magenta: {
    bg: "bg-magenta",
    bgSoft: "bg-magenta/15",
    text: "text-magenta-deep",
    textDeep: "text-magenta-deep",
    border: "border-magenta",
    onBg: "text-white",
    onBgSoft: "text-white/80",
  },
  green: {
    bg: "bg-green",
    bgSoft: "bg-green/15",
    text: "text-green-deep",
    textDeep: "text-green-deep",
    border: "border-green",
    onBg: "text-white",
    onBgSoft: "text-white/80",
  },
  mustard: {
    bg: "bg-mustard",
    bgSoft: "bg-mustard/20",
    text: "text-mustard-deep",
    textDeep: "text-mustard-deep",
    border: "border-mustard",
    onBg: "text-ink",
    onBgSoft: "text-ink-soft",
  },
  orange: {
    bg: "bg-orange",
    bgSoft: "bg-orange/15",
    text: "text-orange-deep",
    textDeep: "text-orange-deep",
    border: "border-orange",
    onBg: "text-white",
    onBgSoft: "text-white/80",
  },
};
