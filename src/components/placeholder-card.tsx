export function PlaceholderCard({
  icon,
  title,
  description,
  badge,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}) {
  return (
    <div className="flex flex-col rounded-[2rem] border-2 border-dashed border-ink/25 bg-white/70 p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink/5 text-ink-soft">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
      {badge && (
        <span className="mt-4 inline-flex w-fit items-center rounded-full bg-coral/15 px-3 py-1 font-display text-xs font-semibold text-coral-deep">
          {badge}
        </span>
      )}
    </div>
  );
}

export function EditableNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-dashed border-ink/20 bg-ink/5 px-5 py-4 text-center text-sm text-ink-soft">
      {children}
    </div>
  );
}
