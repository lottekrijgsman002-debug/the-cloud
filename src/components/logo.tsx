export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const badgeBg = variant === "dark" ? "bg-ink" : "bg-paper";
  const textColor = variant === "dark" ? "text-paper" : "text-ink";

  return (
    <div
      className={`relative flex h-[74px] w-[74px] shrink-0 -rotate-3 flex-col items-center justify-center rounded-[46%_54%_52%_48%/48%_44%_56%_52%] ${badgeBg} shadow-sm ring-2 ring-inset ring-white/15 ${className}`}
    >
      <span className={`font-script text-[1.05rem] leading-none ${textColor}`}>Loulou</span>
      <span className={`font-display -mt-0.5 text-[0.8rem] font-semibold uppercase leading-none ${textColor}`}>
        &amp; Lou!
      </span>
    </div>
  );
}
