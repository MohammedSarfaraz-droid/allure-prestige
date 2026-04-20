import { useEffect, useRef, useState } from "react";

/**
 * useCountUp — animates from 0 to `to` over `duration` once visible.
 * Returns [ref, value]. Attach ref to any element you want to observe.
 */
export function useCountUp(to: number, duration = 1600) {
  const ref = useRef<HTMLElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || started.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const start = () => {
      started.current = true;
      if (reduced) {
        setValue(to);
        return;
      }
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(to * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            start();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return [ref, value] as const;
}
