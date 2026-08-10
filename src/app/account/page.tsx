import { getLocale } from "@/lib/get-locale";
import { t } from "@/lib/locale";
import { ui } from "@/lib/ui-strings";
import { LanguageToggle } from "@/components/language-toggle";
import { AccountForm } from "@/components/content/account-form";

export default async function AccountPage() {
  const locale = await getLocale();

  return (
    <div className="mx-auto max-w-lg px-5 py-14">
      <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{t(ui.account.title, locale)}</h1>
      <p className="mt-3 text-ink-soft">{t(ui.account.intro, locale)}</p>

      <div className="mt-8 space-y-6">
        <AccountForm locale={locale} />

        <div className="rounded-[2rem] bg-sky/15 p-8">
          <h2 className="font-display text-lg font-semibold text-ink">{t(ui.account.languageSectionTitle, locale)}</h2>
          <div className="mt-4">
            <LanguageToggle locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}
