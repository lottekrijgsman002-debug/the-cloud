"use client";

export function NewsletterForm({
  placeholder,
  cta,
}: {
  placeholder: string;
  cta: string;
}) {
  return (
    <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        required
        placeholder={placeholder}
        className="w-full min-w-0 rounded-full border-2 border-ink bg-white px-4 py-2 text-sm text-ink placeholder:text-ink/40 outline-none ring-orange focus:ring-2"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-ink px-4 py-2 text-sm font-display font-semibold uppercase text-white transition-colors hover:bg-ink/80"
      >
        {cta}
      </button>
    </form>
  );
}
