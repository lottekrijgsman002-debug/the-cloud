import { getLocale } from "@/lib/get-locale";
import { ui } from "@/lib/ui-strings";
import { PillarHub } from "@/components/content/pillar-hub";

export default async function StoriesPage({
  searchParams,
}: {
  searchParams: Promise<{ character?: string; filter?: string }>;
}) {
  const locale = await getLocale();
  const { character, filter } = await searchParams;

  return (
    <PillarHub
      pillar="stories"
      title={ui.hubs.storiesTitle}
      intro={ui.hubs.storiesIntro}
      locale={locale}
      characterSlug={character}
      onlyNew={filter === "new"}
    />
  );
}
