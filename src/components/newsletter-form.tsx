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
        className="w-full min-w-0 rounded-full border-2 border-ink/15 bg-white px-4 py-2 text-sm text-ink placeholder:text-ink/40 outline-none ring-coral focus:ring-2"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-coral px-4 py-2 text-sm font-display font-semibold text-white transition-colors hover:bg-coral-deep"
      >
        {cta}
      </button>
    </form>
  );
}
