import type { Metadata } from "next";
import { Zilla_Slab } from "next/font/google";
import { getLocale } from "@/lib/get-locale";
import { AccountProvider } from "@/context/account-context";
import { TopNav } from "@/components/nav/top-nav";
import { BottomNav } from "@/components/nav/bottom-nav";
import { Footer } from "@/components/nav/footer";
import { BookmarkRibbon } from "@/components/bookmark-ribbon";
import "./globals.css";

// Stand-in for the real brand fonts (Daddy in Space DEMO, Museo), which
// aren't on Google Fonts and aren't licensed for commercial use as the demo
// file. A single serif family covers both headings and body text until the
// licensed font files are in hand; see the Design foundations section in
// README.md.
const body = Zilla_Slab({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Loulou & Lou",
  description:
    "The world of Loulou & Lou: music, videos, stories and the characters who tell them, all in one place.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={`${body.variable} antialiased`}>
        <AccountProvider>
          <TopNav locale={locale} />
          <BookmarkRibbon locale={locale} />
          <main className="animate-fade-in pb-20 sm:pb-0">{children}</main>
          <Footer locale={locale} />
          <BottomNav locale={locale} />
        </AccountProvider>
      </body>
    </html>
  );
}
