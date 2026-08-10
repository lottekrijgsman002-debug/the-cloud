import { getLocale } from "@/lib/get-locale";
import { FavoritesView } from "@/components/content/favorites-view";

export default async function FavoritesPage() {
  const locale = await getLocale();
  return <FavoritesView locale={locale} />;
}
