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
        className="w-full min-w-0 rounded-full bg-paper/10 px-4 py-2 text-sm text-paper placeholder:text-paper/50 outline-none ring-orange focus:ring-2"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-orange px-4 py-2 text-sm font-display font-semibold uppercase text-ink transition-colors hover:bg-orange-deep"
      >
        {cta}
      </button>
    </form>
  );
}
