"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { AgeBand, ChildProfile } from "@/lib/types";

/**
 * Stands in for the Supabase-backed parent account, single child profile,
 * favorites and continue_listening tables (Section 4 / 6 of the Build Plan).
 * Persists to localStorage on this device only. When Supabase is connected,
 * this provider's internals swap for real queries; the hook API below
 * (useAccount) should not need to change at call sites.
 */

const STORAGE_KEY = "loulou.account.v1";

interface StoredState {
  child: ChildProfile | null;
  favoriteIds: string[];
  continueListening: Record<string, string>; // contentId -> updatedAt ISO
  clubEmail: string | null;
}

const emptyState: StoredState = {
  child: null,
  favoriteIds: [],
  continueListening: {},
  clubEmail: null,
};

interface AccountContextValue {
  child: ChildProfile | null;
  favoriteIds: string[];
  continueListeningIds: string[];
  clubEmail: string | null;
  ready: boolean;
  setChild: (displayName: string, ageBand: AgeBand) => void;
  isFavorite: (contentId: string) => boolean;
  toggleFavorite: (contentId: string) => void;
  recordView: (contentId: string) => void;
  signUpForClub: (email: string) => void;
}

const AccountContext = createContext<AccountContextValue | null>(null);

function loadState(): StoredState {
  if (typeof window === "undefined") return emptyState;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState;
    return { ...emptyState, ...JSON.parse(raw) };
  } catch {
    return emptyState;
  }
}

export function AccountProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<StoredState>(emptyState);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Deferred to after mount so the client's first render matches the
    // server's (localStorage doesn't exist server-side); not derived state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(loadState());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, ready]);

  const setChild = useCallback((displayName: string, ageBand: AgeBand) => {
    setState((s) => ({
      ...s,
      child: { id: s.child?.id ?? "local-child", userId: "local-parent", displayName, ageBand },
    }));
  }, []);

  const isFavorite = useCallback(
    (contentId: string) => state.favoriteIds.includes(contentId),
    [state.favoriteIds]
  );

  const toggleFavorite = useCallback((contentId: string) => {
    setState((s) => ({
      ...s,
      favoriteIds: s.favoriteIds.includes(contentId)
        ? s.favoriteIds.filter((id) => id !== contentId)
        : [...s.favoriteIds, contentId],
    }));
  }, []);

  const recordView = useCallback((contentId: string) => {
    setState((s) => ({
      ...s,
      continueListening: { ...s.continueListening, [contentId]: new Date().toISOString() },
    }));
  }, []);

  const signUpForClub = useCallback((email: string) => {
    setState((s) => ({ ...s, clubEmail: email }));
  }, []);

  const continueListeningIds = useMemo(
    () =>
      Object.keys(state.continueListening).sort((a, b) =>
        state.continueListening[b].localeCompare(state.continueListening[a])
      ),
    [state.continueListening]
  );

  const value = useMemo<AccountContextValue>(
    () => ({
      child: state.child,
      favoriteIds: state.favoriteIds,
      continueListeningIds,
      clubEmail: state.clubEmail,
      ready,
      setChild,
      isFavorite,
      toggleFavorite,
      recordView,
      signUpForClub,
    }),
    [state.child, state.favoriteIds, continueListeningIds, state.clubEmail, ready, setChild, isFavorite, toggleFavorite, recordView, signUpForClub]
  );

  return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>;
}

export function useAccount(): AccountContextValue {
  const ctx = useContext(AccountContext);
  if (!ctx) throw new Error("useAccount must be used within AccountProvider");
  return ctx;
}
