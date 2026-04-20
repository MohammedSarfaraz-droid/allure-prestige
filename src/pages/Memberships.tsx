import { useScrollReveal } from "@/hooks/useScrollReveal";
import { IMG, type EditorialImage } from "@/lib/images";

const associations: Array<{
  name: string;
  full: string;
  p1: string;
  p2: string;
  quote: string;
  img: EditorialImage;
}> = [
  {
    name: "CAI",
    full: "Community Associations Institute",
    p1: "The Community Associations Institute is the international authority on the governance and management of homeowner associations, condominiums, and cooperatives. Membership signals adherence to a globally recognized code of professional ethics.",
    p2: "Our managers participate in CAI's ongoing education and credentialing programs — ensuring our practice evolves with the standards of the industry, not behind them.",
    quote: "Why this matters to you: when your manager carries CAI credentials, you are not buying time — you are buying a standard.",
    img: IMG.membershipCAI,
  },
  {
    name: "IREM",
    full: "Institute of Real Estate Management",
    p1: "IREM has set the global standard for ethical, professional real estate management since 1933. Its credential — Certified Property Manager (CPM) — is among the most respected in the industry.",
    p2: "Our affiliation with IREM commits us to a code of ethics enforced through peer review and to a body of practice grounded in fiduciary responsibility.",
    quote: "Why this matters to you: ethics, in property management, is not abstract — it is the difference between a budget you can trust and one you cannot.",
    img: IMG.membershipIREM,
  },
  {
    name: "NJAA",
    full: "New Jersey Apartment Association",
    p1: "Representing the multifamily housing industry across New Jersey, the NJAA advocates for sound housing policy and provides education tailored to the specific legal and economic landscape of the state.",
    p2: "Our membership keeps us current on New Jersey statute, fair housing developments, and best practices unique to our market.",
    quote: "Why this matters to you: New Jersey is not New York or Pennsylvania. We manage with that distinction in mind.",
    img: IMG.membershipNJAA,
  },
  {
    name: "NJ Cooperator",
    full: "The New Jersey Cooperator Network",
    p1: "A statewide network of cooperative and condominium professionals committed to better, more transparent communities — through publications, conferences, and shared standards of practice.",
    p2: "Through this affiliation we exchange knowledge with the broader community of co-op and condo professionals across the state.",
    quote: "Why this matters to you: the best ideas in property management rarely come from one office. We listen broadly and apply selectively.",
    img: IMG.membershipCoop,
  },
];

const Memberships = () => {
  useScrollReveal([]);
  return (
    <>
      <section className="bg-cream pt-40 pb-20 px-6 lg:px-12">
        <div className="max-w-[1320px] mx-auto text-center">
          <p className="overline reveal">CREDENTIALS</p>
          <h1
            className="font-serif italic text-ink mt-6 leading-[0.95] reveal"
            style={{ fontSize: "clamp(48px, 8vw, 88px)", letterSpacing: "-0.03em" }}
            data-reveal-delay="120"
          >
            Memberships.
          </h1>
          <div className="w-20 h-px bg-gold mx-auto mt-10" />
        </div>
      </section>

      {associations.map((a, i) => {
        const reverse = i % 2 === 1;
        return (
          <section
            key={a.name}
            className={`px-6 lg:px-12 py-[120px] ${i % 2 === 0 ? "bg-cream" : "bg-cream-dark"}`}
          >
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={reverse ? "lg:order-2" : ""}>
                <div className="overflow-hidden img-wipe is-visible aspect-[4/3] reveal">
                  <img
                    src={a.img.src}
                    srcSet={a.img.srcSet}
                    sizes={a.img.sizes}
                    alt={a.img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={reverse ? "lg:order-1" : ""}>
                <div
                  className="font-serif italic text-stone-dark reveal"
                  style={{ fontSize: 40 }}
                >
                  {a.name}
                </div>
                <p className="overline mt-3 reveal" data-reveal-delay="80" style={{ color: "hsl(var(--stone))" }}>
                  {a.full}
                </p>
                <h2 className="font-serif text-ink text-[32px] lg:text-[40px] leading-[1.15] mt-5 reveal" data-reveal-delay="120">
                  {a.full}
                </h2>
                <div className="w-12 gold-rule mt-6" />
                <div className="space-y-5 mt-8 font-sans font-light text-[16px] leading-[1.85] text-ink-light max-w-[560px]">
                  <p className="reveal" data-reveal-delay="160">{a.p1}</p>
                  <p className="reveal" data-reveal-delay="220">{a.p2}</p>
                </div>
                <blockquote
                  className="font-serif italic text-gold border-l-[3px] border-gold pl-6 mt-10 max-w-[520px] reveal"
                  style={{ fontSize: 22, lineHeight: 1.4 }}
                  data-reveal-delay="280"
                >
                  {a.quote}
                </blockquote>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Memberships;
