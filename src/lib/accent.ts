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
  /** Subtle background pattern class for character pages. */
  pattern: string;
  /** CSS color value for borders/accents */
  borderColor: string;
  /** Semi-transparent border color for subtle styling */
  borderColorSoft: string;
};

export const accentClasses: Record<Character["accentToken"], AccentClasses> = {
  magenta: {
    bg: "bg-magenta",
    bgSoft: "bg-magenta/15",
    text: "text-magenta-deep",
    textDeep: "text-magenta-deep",
    border: "border-magenta",
    borderColor: "#a11f8a",
    borderColorSoft: "rgba(161, 31, 138, 0.4)",
    onBg: "text-white",
    onBgSoft: "text-white/80",
    pattern: "pattern-loulou",
  },
  green: {
    bg: "bg-green",
    bgSoft: "bg-green/15",
    text: "text-green-deep",
    textDeep: "text-green-deep",
    border: "border-green",
    borderColor: "#33ae4c",
    borderColorSoft: "rgba(51, 174, 76, 0.4)",
    onBg: "text-white",
    onBgSoft: "text-white/80",
    pattern: "pattern-guru",
  },
  mustard: {
    bg: "bg-mustard",
    bgSoft: "bg-mustard/20",
    text: "text-mustard-deep",
    textDeep: "text-mustard-deep",
    border: "border-mustard",
    borderColor: "#c2ab00",
    borderColorSoft: "rgba(194, 171, 0, 0.4)",
    onBg: "text-ink",
    onBgSoft: "text-ink-soft",
    pattern: "pattern-mozy",
  },
  orange: {
    bg: "bg-orange",
    bgSoft: "bg-orange/15",
    text: "text-orange-deep",
    textDeep: "text-orange-deep",
    border: "border-orange",
    borderColor: "#f17422",
    borderColorSoft: "rgba(241, 116, 34, 0.4)",
    onBg: "text-white",
    onBgSoft: "text-white/80",
    pattern: "pattern-clock",
  },
};
