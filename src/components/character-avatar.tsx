const borderByAccent: Record<string, string> = {
  sunshine: "border-sunshine-deep",
  sky: "border-sky-deep",
  coral: "border-coral-deep",
};

/**
 * Placeholder badge for a character: a name in a dashed-border circle,
 * standing in for the real logotype/illustration until the brand team
 * supplies the actual artwork.
 */
export function CharacterAvatar({
  name,
  accent = "coral",
  size = 96,
  className = "",
}: {
  name: string;
  accent?: string;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full border-[3px] border-dashed bg-white text-center shadow-sm ${borderByAccent[accent] ?? borderByAccent.coral} ${className}`}
      style={{ width: size, height: size }}
    >
      <span
        className="font-display px-2 font-semibold leading-tight text-ink"
        style={{ fontSize: Math.max(10, size * 0.13) }}
      >
        {name}
      </span>
    </div>
  );
}
