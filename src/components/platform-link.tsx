export function PlatformLink({
  href,
  label,
  Icon,
  size = 56,
}: {
  href: string;
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: number;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center rounded-full bg-white text-ink shadow-md transition-transform hover:-translate-y-1"
      style={{ width: size, height: size }}
    >
      <Icon className="h-[42%] w-[42%]" />
    </a>
  );
}
