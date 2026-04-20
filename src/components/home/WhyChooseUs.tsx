import { IMG } from "@/lib/images";

const features = [
  {
    n: "01",
    title: "19+ Years Industry Experience",
    body: "Two decades of unbroken service across HOAs, condominiums, and rental communities throughout New Jersey — through every market cycle.",
  },
  {
    n: "02",
    title: "Certified & Licensed Management",
    body: "Our managers carry CAI and IREM credentials and are licensed by the State of New Jersey, with continuing education built into how we operate.",
  },
  {
    n: "03",
    title: "GAAP-Grade Financial Reporting",
    body: "Monthly statements, annual budgets, and reserve studies prepared to GAAP standards — clear, audited, and delivered on time without exception.",
  },
  {
    n: "04",
    title: "Community-First Philosophy",
    body: "We measure success not in units managed but in the trust of boards and residents who have stayed with us, in some cases, for the better part of two decades.",
  },
];

const FeatureBlock = ({ n, title, body, delay }: { n: string; title: string; body: string; delay: number }) => (
  <div className="relative reveal" data-reveal-delay={delay}>
    <span
      aria-hidden
      className="absolute -top-6 -left-2 font-serif text-gold leading-none pointer-events-none select-none"
      style={{ fontSize: 80, opacity: 0.07 }}
    >
      {n}
    </span>
    <p className="overline relative">{n} —</p>
    <h3 className="font-serif text-ink text-[26px] lg:text-[30px] leading-[1.2] mt-2">{title}</h3>
    <p className="font-sans font-light text-[15px] leading-[1.85] text-ink-light mt-4">{body}</p>
    <div className="w-10 gold-rule mt-5" />
  </div>
);

export const WhyChooseUs = () => {
  return (
    <section className="relative bg-cream py-[140px] px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1320px] mx-auto">
        <div className="max-w-[640px] reveal">
          <p className="overline">WHY ALLURE</p>
          <h2 className="font-serif text-ink text-[44px] lg:text-[60px] leading-[1.1] mt-5">
            What Sets Us Apart.
          </h2>
        </div>

        <div className="relative mt-20">
          {/* Continuous gold timeline thread */}
          <span
            aria-hidden
            className="hidden lg:block absolute left-0 right-0 h-px bg-gold-border"
            style={{ top: "calc(50% - 0.5px)" }}
          />

          {/* Row 1: image left, text right */}
          <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-10 lg:gap-16 items-center mb-20">
            <div className="overflow-hidden img-wipe is-visible" style={{ height: 380 }}>
              <img
                src={IMG.whyManager.src}
                srcSet={IMG.whyManager.srcSet}
                sizes={IMG.whyManager.sizes}
                alt={IMG.whyManager.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-14">
              <FeatureBlock {...features[0]} delay={0} />
              <FeatureBlock {...features[1]} delay={120} />
            </div>
          </div>

          {/* Row 2: text left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 lg:gap-16 items-center">
            <div className="space-y-14 order-2 lg:order-1">
              <FeatureBlock {...features[2]} delay={0} />
              <FeatureBlock {...features[3]} delay={120} />
            </div>
            <div className="overflow-hidden img-wipe is-visible order-1 lg:order-2" style={{ height: 380 }}>
              <img
                src={IMG.whyAccountant.src}
                srcSet={IMG.whyAccountant.srcSet}
                sizes={IMG.whyAccountant.sizes}
                alt={IMG.whyAccountant.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
