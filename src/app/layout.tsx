import type { Metadata } from "next";
import { Baloo_2, Caveat, Nunito } from "next/font/google";
import { getLocale } from "@/lib/get-locale";
import { AccountProvider } from "@/context/account-context";
import { TopNav } from "@/components/nav/top-nav";
import { BottomNav } from "@/components/nav/bottom-nav";
import { Footer } from "@/components/nav/footer";
import "./globals.css";

const baloo = Baloo_2({ subsets: ["latin"], variable: "--font-baloo" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Loulou & Lou",
  description:
    "The world of Loulou & Lou: music, videos, stories and the characters who tell them, all in one place.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={`${baloo.variable} ${caveat.variable} ${nunito.variable} antialiased`}>
        <AccountProvider>
          <TopNav locale={locale} />
          <main className="pb-20 sm:pb-0">{children}</main>
          <Footer locale={locale} />
          <BottomNav locale={locale} />
        </AccountProvider>
      </body>
    </html>
  );
}
