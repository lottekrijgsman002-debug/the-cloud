export function FlankedHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center gap-3 sm:gap-4 ${className}`}>
      <span className="h-[3px] w-8 shrink-0 rounded-full bg-current sm:w-14" />
      <h2 className="font-display text-2xl uppercase sm:text-3xl">{children}</h2>
      <span className="h-[3px] w-8 shrink-0 rounded-full bg-current sm:w-14" />
    </div>
  );
}
