import { ViewTransition } from "react";

/**
 * Wraps a page's content so navigating to/from it animates like a page
 * turning in a book, driven by the `nav-forward` / `nav-back` transition
 * types set on <Link transitionTypes={[...]}>. Falls back to no animation
 * for browser back/forward, refreshes, or untagged navigations.
 */
export function PageTurn({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition
      enter={{ "nav-forward": "page-turn-forward", "nav-back": "page-turn-back", default: "none" }}
      exit={{ "nav-forward": "page-turn-forward", "nav-back": "page-turn-back", default: "none" }}
      default="none"
    >
      {children}
    </ViewTransition>
  );
}
