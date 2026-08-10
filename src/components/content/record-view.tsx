"use client";

import { useEffect } from "react";
import { useAccount } from "@/context/account-context";

/** Invisible: records this content item into continue_listening on view. */
export function RecordView({ contentId }: { contentId: string }) {
  const { recordView, ready } = useAccount();

  useEffect(() => {
    if (ready) recordView(contentId);
  }, [ready, contentId, recordView]);

  return null;
}
