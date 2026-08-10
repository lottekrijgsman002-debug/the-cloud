import { getLocale } from "@/lib/get-locale";
import { SearchView } from "@/components/content/search-view";

export default async function SearchPage() {
  const locale = await getLocale();
  return <SearchView locale={locale} />;
}
