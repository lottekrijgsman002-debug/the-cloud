import type { Character } from "@/lib/types";

type AccentClasses = {
  bg: string;
  bgSoft: string;
  text: string;
  textDeep: string;
  border: string;
};

export const accentClasses: Record<Character["accentToken"], AccentClasses> = {
  sunshine: {
    bg: "bg-sunshine",
    bgSoft: "bg-sunshine/20",
    text: "text-sunshine-deep",
    textDeep: "text-sunshine-deep",
    border: "border-sunshine",
  },
  sky: {
    bg: "bg-sky",
    bgSoft: "bg-sky/20",
    text: "text-sky-deep",
    textDeep: "text-sky-deep",
    border: "border-sky",
  },
  coral: {
    bg: "bg-coral",
    bgSoft: "bg-coral/15",
    text: "text-coral-deep",
    textDeep: "text-coral-deep",
    border: "border-coral",
  },
  leaf: {
    bg: "bg-leaf",
    bgSoft: "bg-leaf/15",
    text: "text-leaf-deep",
    textDeep: "text-leaf-deep",
    border: "border-leaf",
  },
  berry: {
    bg: "bg-berry",
    bgSoft: "bg-berry/15",
    text: "text-berry-deep",
    textDeep: "text-berry-deep",
    border: "border-berry",
  },
};
