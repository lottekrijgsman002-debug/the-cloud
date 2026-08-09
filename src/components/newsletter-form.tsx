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
        className="w-full min-w-0 rounded-full bg-parchment/10 px-4 py-2 text-sm text-parchment placeholder:text-parchment/50 outline-none ring-gold focus:ring-2"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-coral px-4 py-2 text-sm font-semibold text-plum transition-colors hover:bg-coral-deep"
      >
        {cta}
      </button>
    </form>
  );
}
