import { useCountUp } from "@/hooks/useCountUp";

const Stat = ({
  numeric,
  display,
  label,
  sub,
  index,
}: {
  numeric: number | null;
  display: string;
  label: string;
  sub?: string;
  index: number;
}) => {
  const [ref, value] = useCountUp(numeric ?? 0, 1400 + index * 150);
  const shown = numeric === null ? display : `${value}${display.includes("+") ? "+" : ""}`;
  return (
    <div className="px-6 lg:px-10 text-center lg:text-left">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="font-serif italic text-gold leading-none"
        style={{ fontSize: "clamp(56px, 7vw, 84px)" }}
      >
        {shown}
      </div>
      <div className="overline text-stone mt-3" style={{ color: "hsl(var(--stone))" }}>
        {label}
      </div>
      {sub && (
        <div className="font-sans text-[10px] text-stone-dark mt-1" style={{ letterSpacing: "0.02em" }}>
          {sub}
        </div>
      )}
    </div>
  );
};

export const StatsBar = () => {
  const stats = [
    { numeric: 19, display: "19+", label: "Years of Excellence", sub: "Est. 2005" },
    { numeric: 25, display: "25+", label: "Years of Financial Expertise" },
    { numeric: null, display: "GAAP", label: "Compliant Reporting", sub: "Every Month" },
    { numeric: null, display: "CAI", label: "Certified Management", sub: "Licensed Managers" },
  ];

  return (
    <section className="bg-ink py-[100px]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: "hsl(var(--stone-dark))" }}>
        {stats.map((s, i) => (
          <div key={s.label} className="py-10 sm:py-0" style={{ borderColor: "hsl(var(--stone-dark))" }}>
            <Stat numeric={s.numeric} display={s.display} label={s.label} sub={s.sub} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
};
