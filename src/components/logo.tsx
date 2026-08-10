import Link from "next/link";

export function Logo({ size = 56 }: { size?: number }) {
  return (
    <Link
      href="/"
      className="relative flex shrink-0 -rotate-3 flex-col items-center justify-center rounded-[46%_54%_52%_48%/48%_44%_56%_52%] bg-ink shadow-sm ring-2 ring-inset ring-white/15"
      style={{ width: size, height: size }}
      aria-label="Loulou & Lou, home"
    >
      <span className="font-script leading-none text-white" style={{ fontSize: size * 0.28 }}>
        Loulou
      </span>
      <span
        className="font-display -mt-0.5 font-semibold uppercase leading-none text-white"
        style={{ fontSize: size * 0.18 }}
      >
        &amp; Lou!
      </span>
    </Link>
  );
}
