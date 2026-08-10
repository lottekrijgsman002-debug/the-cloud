"use client";

import { useState, useEffect } from "react";
import type { AgeBand, Locale } from "@/lib/types";
import { t } from "@/lib/locale";
import { ui } from "@/lib/ui-strings";
import { useAccount } from "@/context/account-context";

const ageBands: AgeBand[] = ["0-3", "3-6", "6-9"];

export function AccountForm({ locale }: { locale: Locale }) {
  const { child, setChild, ready } = useAccount();
  const [name, setName] = useState("");
  const [ageBand, setAgeBand] = useState<AgeBand>("3-6");
  const [savedFlash, setSavedFlash] = useState(false);

  useEffect(() => {
    // Syncs the editable copy once the account (loaded from localStorage
    // after mount) becomes available; not derived render state.
    if (child) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setName(child.displayName);
      setAgeBand(child.ageBand);
    }
  }, [child]);

  if (!ready) return null;

  return (
    <form
      className="rounded-[2rem] bg-white p-8 shadow-md"
      onSubmit={(e) => {
        e.preventDefault();
        if (!name) return;
        setChild(name, ageBand);
        setSavedFlash(true);
        setTimeout(() => setSavedFlash(false), 2000);
      }}
    >
      <h2 className="font-display text-lg font-semibold text-ink">{t(ui.account.childSectionTitle, locale)}</h2>

      <label className="mt-4 block">
        <span className="mb-1 block font-display text-sm font-semibold text-ink">{t(ui.account.nameLabel, locale)}</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-full border-2 border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none ring-coral focus:ring-2"
        />
      </label>

      <div className="mt-4">
        <span className="mb-2 block font-display text-sm font-semibold text-ink">{t(ui.account.ageLabel, locale)}</span>
        <div className="flex flex-wrap gap-2">
          {ageBands.map((band) => (
            <button
              key={band}
              type="button"
              onClick={() => setAgeBand(band)}
              className={`rounded-full px-4 py-2 font-display text-sm font-semibold transition-colors ${
                ageBand === band ? "bg-ink text-white" : "bg-sky/20 text-ink-soft hover:text-ink"
              }`}
            >
              {band}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 rounded-full bg-coral px-6 py-3 font-display font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-coral-deep"
      >
        {savedFlash ? t(ui.account.saved, locale) : t(ui.account.save, locale)}
      </button>

      <p className="mt-6 text-xs leading-relaxed text-ink-soft">{t(ui.account.privacyNote, locale)}</p>
    </form>
  );
}
