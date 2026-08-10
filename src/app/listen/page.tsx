import { getLocale } from "@/lib/get-locale";
import { ui } from "@/lib/ui-strings";
import { PillarHub } from "@/components/content/pillar-hub";

export default async function ListenPage({
  searchParams,
}: {
  searchParams: Promise<{ character?: string; filter?: string }>;
}) {
  const locale = await getLocale();
  const { character, filter } = await searchParams;

  return (
    <PillarHub
      pillar="listen"
      title={ui.hubs.listenTitle}
      intro={ui.hubs.listenIntro}
      locale={locale}
      characterSlug={character}
      onlyNew={filter === "new"}
    />
  );
}
