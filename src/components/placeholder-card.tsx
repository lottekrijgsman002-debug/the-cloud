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
    <div className="flex flex-col rounded-3xl border-2 border-dashed border-ink/15 bg-white/50 p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink/5 text-ink-soft">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-plum">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
      {badge && (
        <span className="mt-4 inline-flex w-fit items-center rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold-deep">
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
