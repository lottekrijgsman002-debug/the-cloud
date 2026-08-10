import { HouseIcon, NoteIcon, FilmIcon, BookIcon, MaskIcon } from "@/components/icons";
import { ui } from "@/lib/ui-strings";

export const primaryNavItems = [
  { href: "/", label: ui.nav.home, Icon: HouseIcon },
  { href: "/listen", label: ui.nav.listen, Icon: NoteIcon },
  { href: "/watch", label: ui.nav.watch, Icon: FilmIcon },
  { href: "/stories", label: ui.nav.stories, Icon: BookIcon },
  { href: "/shows", label: ui.nav.shows, Icon: MaskIcon },
] as const;
