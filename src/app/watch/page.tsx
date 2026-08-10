import { getLocale } from "@/lib/get-locale";
import { ui } from "@/lib/ui-strings";
import { PillarHub } from "@/components/content/pillar-hub";

export default async function WatchPage({
  searchParams,
}: {
  searchParams: Promise<{ character?: string; filter?: string }>;
}) {
  const locale = await getLocale();
  const { character, filter } = await searchParams;

  return (
    <PillarHub
      pillar="watch"
      title={ui.hubs.watchTitle}
      intro={ui.hubs.watchIntro}
      locale={locale}
      characterSlug={character}
      onlyNew={filter === "new"}
    />
  );
}
