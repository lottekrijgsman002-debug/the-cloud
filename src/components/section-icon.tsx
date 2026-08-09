import type { SectionKey } from "@/data/site";
import {
  NoteIcon,
  FilmIcon,
  BookIcon,
  MaskIcon,
  SparkleFriendsIcon,
  InfoHeartIcon,
} from "@/components/icons";

const iconMap: Record<SectionKey, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  music: NoteIcon,
  sprookjesfilm: FilmIcon,
  stories: BookIcon,
  theatershow: MaskIcon,
  world: SparkleFriendsIcon,
  about: InfoHeartIcon,
};

export function SectionIcon({
  section,
  className,
}: {
  section: SectionKey;
  className?: string;
}) {
  const Icon = iconMap[section];
  return <Icon className={className} />;
}
