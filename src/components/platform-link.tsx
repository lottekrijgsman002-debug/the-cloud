export function PlatformLink({
  href,
  label,
  Icon,
  colorClass,
}: {
  href: string;
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  colorClass: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-2xl border-2 border-ink/10 bg-white/70 px-5 py-4 font-semibold text-plum shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <span className={`flex h-9 w-9 items-center justify-center rounded-full ${colorClass}`}>
        <Icon className="h-[18px] w-[18px]" />
      </span>
      {label}
    </a>
  );
}
