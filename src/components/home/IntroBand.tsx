import { IMG } from "@/lib/images";

export const IntroBand = () => {
  return (
    <section className="relative bg-cream-dark py-[100px] px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={IMG.introBandImage.src}
          srcSet={IMG.introBandImage.srcSet}
          sizes="100vw"
          alt={IMG.introBandImage.alt}
          loading="lazy"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-dark/80 via-cream-dark/60 to-cream-dark/80" />
      </div>
      <div className="relative z-10 max-w-[820px] mx-auto text-center">
        <p className="font-serif italic text-stone-dark text-[26px] sm:text-[34px] lg:text-[38px] leading-[1.4] reveal">
          “We don't just manage properties — we steward communities, protect investments, and build lasting trust with every stakeholder we serve.”
        </p>
        <div className="mx-auto mt-10 w-[60px] gold-rule reveal" data-reveal-delay="120" />
        <p className="overline text-stone mt-6 reveal" data-reveal-delay="200" style={{ color: "hsl(var(--stone))" }}>
          ALLURE PROPERTIES GROUP
        </p>
      </div>
    </section>
  );
};
