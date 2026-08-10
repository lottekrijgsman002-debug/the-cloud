import { getLocale } from "@/lib/get-locale";
import { t } from "@/lib/locale";
import { ui } from "@/lib/ui-strings";
import { SkyScene } from "@/components/sky-scene";
import { ClubForm } from "@/components/content/club-form";

export default async function ClubPage() {
  const locale = await getLocale();

  return (
    <>
      <section className="relative overflow-hidden bg-coral/15">
        <SkyScene />
        <div className="relative mx-auto max-w-3xl px-5 py-14 text-center sm:py-20">
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">{t(ui.club.title, locale)}</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">{t(ui.club.intro, locale)}</p>
        </div>
      </section>

      <div className="mx-auto max-w-lg px-5 py-14">
        <ClubForm locale={locale} />
      </div>
    </>
  );
}
