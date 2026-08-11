export function ChapterLabel({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={`absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/20 px-4 py-1 font-display text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-sm sm:top-6 ${className ?? ""}`}
    >
      {label}
    </span>
  );
}
