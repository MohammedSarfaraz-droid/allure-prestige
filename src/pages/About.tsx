import { useScrollReveal } from "@/hooks/useScrollReveal";
import { IMG } from "@/lib/images";

const milestones = [
  { year: "2005", text: "Founded in Hamburg, NJ — built on the conviction that property management could be both rigorous and human." },
  { year: "2008", text: "First HOA contracts secured across northern New Jersey." },
  { year: "2012", text: "Achieved fully GAAP-compliant monthly reporting system." },
  { year: "2016", text: "Joined CAI and IREM — formalizing our commitment to the highest professional standards." },
  { year: "2019", text: "Expanded financial services division with dedicated reserve study and budgeting practice." },
  { year: "2024", text: "19+ years of uninterrupted excellence — entrusted by communities across the state." },
];

const values = [
  {
    title: "Community First",
    body: "Buildings are made of brick and stone. Communities are made of people. We never confuse the two.",
    img: IMG.valueCommunity,
  },
  {
    title: "Financial Integrity",
    body: "Twenty-five years of accounting expertise distilled into reporting that is transparent, audited, and never late.",
    img: IMG.valueIntegrity,
  },
  {
    title: "Licensed Excellence",
    body: "Certified managers. Licensed practice. Continuing education built into how we work — not bolted on.",
    img: IMG.valueLicensed,
  },
];

const About = () => {
  useScrollReveal([]);
  return (
    <>
      {/* HERO */}
      <section className="relative bg-cream pt-40 pb-24 lg:min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMG.aboutHero.src}
            srcSet={IMG.aboutHero.srcSet}
            sizes="100vw"
            alt={IMG.aboutHero.alt}
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12 w-full">
          <p className="overline reveal">CHAPTER ONE</p>
          <h1
            className="font-serif italic text-ink leading-[0.95] mt-6 reveal"
            style={{ fontSize: "clamp(64px, 11vw, 108px)", letterSpacing: "-0.03em" }}
            data-reveal-delay="120"
          >
            Our Story.
          </h1>
          <div className="w-20 h-px bg-gold mt-10 reveal" data-reveal-delay="220" />
        </div>
      </section>

      {/* EDITORIAL COLUMN */}
      <section className="bg-cream py-[140px] px-6">
        <div className="max-w-[720px] mx-auto space-y-7 font-sans font-light text-[18px] leading-[1.85] text-ink-light">
          <p className="reveal">
            In 2005, in a small office in Hamburg, New Jersey, Allure Properties Group was founded on a simple
            conviction: that the management of homes and communities deserves the same rigor as the management of
            capital.
          </p>
          <p className="reveal" data-reveal-delay="80">
            Nineteen years later, that conviction has not changed. What has changed is the breadth of work entrusted
            to us — from single condominium boards to large mixed-use HOAs across northern New Jersey, all served by
            certified managers and a financial practice grounded in twenty-five years of accounting discipline.
          </p>
          <p className="reveal" data-reveal-delay="160">
            We are members of CAI and IREM, but we measure ourselves by a quieter standard: the boards who renew with
            us year after year, the residents who know our managers by first name, and the books that close cleanly,
            month after month, without surprise.
          </p>
          <p className="reveal" data-reveal-delay="240">
            That is the story of Allure Properties Group. It is, in the end, a story about trust.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-cream-dark py-[140px] px-6">
        <div className="max-w-[920px] mx-auto">
          <div className="text-center mb-20 reveal">
            <p className="overline">JOURNEY</p>
            <h2 className="font-serif text-ink text-[40px] lg:text-[52px] leading-[1.1] mt-4">
              Two Decades of Quiet Conviction.
            </h2>
          </div>

          <div className="relative">
            <span aria-hidden className="absolute left-1/2 top-0 bottom-0 w-px bg-gold-border -translate-x-1/2" />
            <div className="space-y-16">
              {milestones.map((m, i) => {
                const left = i % 2 === 0;
                return (
                  <div
                    key={m.year}
                    className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 reveal"
                    data-reveal-delay={i * 80}
                  >
                    <span aria-hidden className="absolute left-1/2 top-3 w-2 h-2 rounded-full bg-gold -translate-x-1/2" />
                    <div className={left ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}>
                      <div className="font-serif italic text-gold text-[44px] lg:text-[52px] leading-none">
                        {m.year}
                      </div>
                    </div>
                    <div className={left ? "md:pl-12" : "md:order-1 md:text-right md:pr-12"}>
                      <p className="font-sans font-light text-[15px] leading-[1.85] text-ink-light max-w-md">
                        {m.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-cream py-[140px] px-6 lg:px-12">
        <div className="max-w-[1320px] mx-auto">
          <div className="max-w-[640px] reveal">
            <p className="overline">PRINCIPLES</p>
            <h2 className="font-serif text-ink text-[40px] lg:text-[56px] leading-[1.1] mt-4">
              What We Believe.
            </h2>
          </div>
          <div className="mt-20 space-y-24">
            {values.map((v, i) => {
              const reverse = i % 2 === 1;
              return (
                <article
                  key={v.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center reveal`}
                >
                  <div className={reverse ? "lg:order-2" : ""}>
                    <div className="overflow-hidden img-wipe is-visible aspect-[4/3]">
                      <img
                        src={v.img.src}
                        srcSet={v.img.srcSet}
                        sizes={v.img.sizes}
                        alt={v.img.alt}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={reverse ? "lg:order-1" : ""}>
                    <p className="overline">0{i + 1}</p>
                    <h3 className="font-serif text-ink text-[32px] lg:text-[40px] leading-[1.15] mt-4">
                      {v.title}
                    </h3>
                    <div className="w-10 gold-rule mt-5" />
                    <p className="font-sans font-light text-[16px] leading-[1.85] text-ink-light mt-5 max-w-md">
                      {v.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
