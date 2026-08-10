"use client";

import { useState } from "react";
import type { Locale } from "@/lib/types";
import { t } from "@/lib/locale";
import { ui } from "@/lib/ui-strings";
import { useAccount } from "@/context/account-context";

export function ClubForm({ locale }: { locale: Locale }) {
  const { clubEmail, signUpForClub } = useAccount();
  const [email, setEmail] = useState("");

  if (clubEmail) {
    return (
      <div className="rounded-[2rem] bg-white px-8 py-10 text-center shadow-md">
        <p className="font-display text-lg font-semibold text-ink">{t(ui.club.thanks, locale)}</p>
        <p className="mt-2 text-sm text-ink-soft">{clubEmail}</p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-3 rounded-[2rem] bg-white px-8 py-10 shadow-md sm:flex-row sm:items-end"
      onSubmit={(e) => {
        e.preventDefault();
        if (email) signUpForClub(email);
      }}
    >
      <label className="flex-1 text-left">
        <span className="mb-1 block font-display text-sm font-semibold text-ink">
          {t(ui.club.emailLabel, locale)}
        </span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-full border-2 border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none ring-coral focus:ring-2"
        />
      </label>
      <button
        type="submit"
        className="shrink-0 rounded-full bg-coral px-6 py-3 font-display font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-coral-deep"
      >
        {t(ui.club.submit, locale)}
      </button>
    </form>
  );
}
