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
      className="flex items-center gap-3 rounded-full border-2 border-ink bg-white px-5 py-3 font-display font-semibold uppercase text-ink shadow-[3px_3px_0_var(--color-ink)] transition-all hover:-translate-y-0.5 hover:shadow-[5px_5px_0_var(--color-ink)]"
    >
      <span className={`flex h-9 w-9 items-center justify-center rounded-full ${colorClass}`}>
        <Icon className="h-[18px] w-[18px]" />
      </span>
      {label}
    </a>
  );
}
