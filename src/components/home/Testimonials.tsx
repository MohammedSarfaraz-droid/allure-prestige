import { IMG } from "@/lib/images";

const quotes = [
  {
    quote:
      "Allure has managed our HOA for over seven years. Their financial reporting alone is worth every penny — we always know exactly where we stand.",
    author: "M. Thornton",
    role: "HOA Board President, Sussex County",
    size: 36,
    width: "max-w-[920px]",
    offset: "ml-0",
    img: IMG.testimonialThornton,
  },
  {
    quote:
      "The responsiveness, the professionalism, the attention to detail. This is what property management should feel like.",
    author: "D. Reyes",
    role: "Property Owner",
    size: 28,
    width: "max-w-[600px]",
    offset: "lg:ml-[120px]",
    img: IMG.testimonialReyes,
  },
  {
    quote:
      "GAAP-compliant books, certified managers, and they actually return your calls. Rare.",
    author: "K. Walsh",
    role: "Board Treasurer",
    size: 24,
    width: "max-w-[520px]",
    offset: "lg:ml-[200px]",
    img: IMG.testimonialWalsh,
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-cream py-[120px] px-6 lg:px-12">
      <div className="max-w-[1320px] mx-auto">
        <div className="reveal">
          <p className="overline">VOICES</p>
          <h2 className="font-serif text-ink text-[36px] lg:text-[48px] leading-[1.1] mt-5">
            Voices From Our Communities.
          </h2>
        </div>

        <div className="mt-16 space-y-16">
          {quotes.map((q, i) => (
            <figure
              key={q.author}
              className={`relative ${q.width} ${q.offset} reveal`}
              data-reveal-delay={i * 140}
            >
              <span
                aria-hidden
                className="absolute -top-10 -left-4 font-serif text-gold leading-none pointer-events-none select-none"
                style={{ fontSize: 80, opacity: 0.18 }}
              >
                "
              </span>
              <blockquote
                className="font-serif italic text-stone-dark leading-[1.4]"
                style={{ fontSize: q.size }}
              >
                {q.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <img
                  src={q.img.src}
                  srcSet={q.img.srcSet}
                  sizes="64px"
                  alt={`${q.author} portrait`}
                  loading="lazy"
                  className="w-14 h-14 object-cover grayscale"
                  style={{ borderRadius: 2 }}
                />
                <span className="block w-8 h-px bg-gold" />
                <span className="font-sans text-[12px] text-stone-dark">
                  <strong className="font-medium text-ink">{q.author}</strong> · {q.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
