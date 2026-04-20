import { useEffect, useRef } from "react";

/**
 * useScrollReveal — adds `.is-visible` to elements with `.reveal` or `.img-wipe`
 * once they intersect the viewport. Disconnects after triggering for perf.
 *
 * Stagger via `data-reveal-delay="120"` (ms) on individual children.
 */
export function useScrollReveal(deps: ReadonlyArray<unknown> = []) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(
      (rootRef.current ?? document).querySelectorAll<HTMLElement>(".reveal, .img-wipe"),
    ).filter((el) => !el.classList.contains("is-visible"));

    if (reduced) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset.revealDelay ?? 0);
            window.setTimeout(() => el.classList.add("is-visible"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return rootRef;
}
