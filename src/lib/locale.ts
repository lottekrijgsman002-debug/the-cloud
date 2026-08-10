import type { Locale, Localized } from "@/lib/types";

export const locales: Locale[] = ["nl", "en"];
export const defaultLocale: Locale = "nl";
export const LOCALE_COOKIE = "loulou_locale";

export function t(field: Localized, locale: Locale): string {
  return field[locale] ?? field[defaultLocale];
}
