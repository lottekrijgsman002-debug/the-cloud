const bars = [
  { delay: "0s", duration: "0.9s" },
  { delay: "0.15s", duration: "1.1s" },
  { delay: "0.3s", duration: "0.8s" },
  { delay: "0.1s", duration: "1s" },
];

export function EqualizerBars({ className }: { className?: string }) {
  return (
    <div className={`flex h-full items-end gap-[3px] ${className ?? ""}`} aria-hidden="true">
      {bars.map((b, i) => (
        <span
          key={i}
          className="eq-bar w-[3px] rounded-full bg-current sm:w-1"
          style={{ animationDelay: b.delay, animationDuration: b.duration }}
        />
      ))}
    </div>
  );
}
