import Image from "next/image";
import Link from "next/link";

export function Logo({ size = 56 }: { size?: number }) {
  return (
    <Link
      href="/"
      className="relative flex shrink-0 items-center justify-center"
      style={{ width: size, height: size }}
      aria-label="Loulou & Lou, home"
    >
      <Image src="/logo.webp" alt="Loulou & Lou" width={size} height={size} priority className="h-full w-full object-contain" />
    </Link>
  );
}
