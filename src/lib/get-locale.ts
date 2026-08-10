import "server-only";
import { cookies } from "next/headers";
import type { Locale } from "@/lib/types";
import { defaultLocale, locales, LOCALE_COOKIE } from "@/lib/locale";

export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  return locales.includes(value as Locale) ? (value as Locale) : defaultLocale;
}
