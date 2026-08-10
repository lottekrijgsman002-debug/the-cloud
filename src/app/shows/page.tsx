import { getLocale } from "@/lib/get-locale";
import { ui } from "@/lib/ui-strings";
import { PillarHub } from "@/components/content/pillar-hub";

export default async function ShowsPage({
  searchParams,
}: {
  searchParams: Promise<{ character?: string }>;
}) {
  const locale = await getLocale();
  const { character } = await searchParams;

  return (
    <PillarHub
      pillar="shows"
      title={ui.hubs.showsTitle}
      intro={ui.hubs.showsIntro}
      locale={locale}
      characterSlug={character}
    />
  );
}
