const associations = [
  {
    name: "CAI",
    full: "Community Associations Institute",
    desc: "Setting the global standard for community association management, education, and advocacy.",
    width: "lg:col-span-3",
  },
  {
    name: "IREM",
    full: "Institute of Real Estate Management",
    desc: "An international community of real estate managers committed to ethical excellence.",
    width: "lg:col-span-3",
  },
  {
    name: "NJAA",
    full: "New Jersey Apartment Association",
    desc: "Representing the multifamily housing industry across New Jersey since 1991.",
    width: "lg:col-span-3",
  },
  {
    name: "NJ Cooperators",
    full: "New Jersey Cooperator",
    desc: "A statewide network of co-op and condo professionals committed to better communities.",
    width: "lg:col-span-3",
  },
];

export const Memberships = () => {
  return (
    <section className="bg-cream-dark py-[120px] px-6 lg:px-12">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center max-w-[760px] mx-auto reveal">
          <p className="overline">CREDENTIALS</p>
          <h2 className="font-serif text-ink text-[40px] lg:text-[52px] leading-[1.1] mt-5">
            Trusted. Certified. Recognized.
          </h2>
          <p className="font-sans font-light text-[16px] text-ink-light mt-5 leading-[1.85]">
            Our credentials reflect our commitment to professional excellence — and to the people we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mt-16">
          {associations.map((a, i) => (
            <article
              key={a.name}
              className={`${a.width} bg-white p-10 border border-rule transition-all duration-300 hover:border-gold-border reveal group flex flex-col min-h-[280px]`}
              data-reveal-delay={i * 100}
              style={{ borderRadius: 2, boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}
            >
              <div
                className="font-serif italic text-stone-dark transition-colors duration-300 group-hover:text-gold"
                style={{ fontSize: 28 }}
              >
                {a.name}
              </div>
              <div className="overline text-stone mt-2" style={{ color: "hsl(var(--stone))" }}>
                {a.full}
              </div>
              <p className="font-sans font-light text-[13px] leading-[1.7] text-stone-dark mt-4">
                {a.desc}
              </p>
            </article>
          ))}
        </div>

        <p className="font-serif italic text-gold text-center text-[20px] lg:text-[22px] max-w-[760px] mx-auto mt-16 reveal">
          “Membership in these organizations is not an achievement — it is an ongoing commitment.”
        </p>
      </div>
    </section>
  );
};
