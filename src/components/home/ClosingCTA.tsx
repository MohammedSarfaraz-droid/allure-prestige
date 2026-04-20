import { Link } from "react-router-dom";
import { IMG } from "@/lib/images";

export const ClosingCTA = () => {
  return (
    <section className="relative bg-cream py-[160px] px-6 overflow-hidden">
      <img
        src={IMG.ctaEstate.src}
        srcSet={IMG.ctaEstate.srcSet}
        sizes={IMG.ctaEstate.sizes}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.08 }}
      />
      <div className="relative max-w-[920px] mx-auto text-center">
        <p className="overline reveal">BEGIN YOUR JOURNEY</p>
        <h2
          className="font-serif italic text-ink mt-6 leading-[1.1] reveal"
          style={{ fontSize: "clamp(44px, 6vw, 72px)" }}
          data-reveal-delay="100"
        >
          Let’s Elevate Your Property Experience.
        </h2>
        <p className="font-sans font-light text-[16px] text-ink-light mt-5 reveal" data-reveal-delay="200">
          Reach out today and discover why communities across New Jersey trust Allure Properties Group.
        </p>
        <div className="mt-12 reveal" data-reveal-delay="300">
          <Link
            to="/contact"
            className="nav-link inline-block bg-gold text-ink px-12 py-4 hover:bg-gold-light transition-colors duration-250"
            style={{ borderRadius: 2 }}
          >
            Request a Consultation
          </Link>
        </div>
        <p className="mt-8 font-sans text-[13px] text-stone reveal" data-reveal-delay="400">
          <a href="tel:9738230593" className="hover:text-gold transition-colors">973.823.0593</a>
          <span className="inline-block w-1 h-1 rounded-full bg-gold mx-3 align-middle" />
          <a href="mailto:manager@allurepropertiesgroup.com" className="hover:text-gold transition-colors">
            manager@allurepropertiesgroup.com
          </a>
        </p>
      </div>
    </section>
  );
};
