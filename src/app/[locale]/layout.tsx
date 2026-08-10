import type { Metadata } from "next";
import { Luckiest_Guy, Caveat, Nunito } from "next/font/google";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "../globals.css";

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-luckiest-guy",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "nl";
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body className={`${luckiestGuy.variable} ${caveat.variable} ${nunito.variable} antialiased`}>
        <Header locale={locale} dict={dict} />
        <main>{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
