import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IMG } from "@/lib/images";

export const StorySection = () => {
  return (
    <section className="bg-cream py-[140px] px-6 lg:px-12">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2px_1.4fr] gap-12 lg:gap-20 items-center">
        {/* LEFT */}
        <div className="reveal">
          <p className="overline">OUR FOUNDATION</p>
          <h2 className="font-serif text-ink text-[40px] lg:text-[48px] leading-[1.1] mt-5">
            19 Years of Purposeful Management.
          </h2>
          <div className="space-y-5 mt-8 font-sans font-light text-[16px] leading-[1.85] text-ink-light">
            <p>
              Founded in 2005 in Hamburg, New Jersey, Allure Properties Group was built on a simple conviction:
              communities deserve management that is both financially rigorous and genuinely human.
            </p>
            <p>
              Our financial reporting is GAAP-compliant, audited monthly, and transparent by design — a standard
              shaped by twenty-five years of accounting expertise within our leadership.
            </p>
            <p>
              We are members of CAI and IREM, but our truest credential is the trust of the boards, residents,
              and owners who have stayed with us for the better part of two decades.
            </p>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 mt-8 text-gold font-sans text-[14px] group"
          >
            Read Our Full Story
            <ArrowRight strokeWidth={1} size={16} className="transition-transform duration-200 group-hover:translate-x-1.5" />
          </Link>
          <div className="flex flex-wrap gap-3 mt-10">
            {["CAI Member", "IREM Affiliated", "GAAP Compliant"].map((b) => (
              <span
                key={b}
                className="font-sans text-[10px] uppercase tracking-[0.18em] text-gold border border-gold-border px-4 py-2"
                style={{ borderRadius: 999 }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="hidden lg:block w-[2px] h-[60%] bg-gold mx-auto self-center reveal" data-reveal-delay="200" />

        {/* RIGHT — collage */}
        <div className="reveal lg:-mr-2" data-reveal-delay="120">
          <div className="aspect-[3/2] overflow-hidden">
            <img
              src={IMG.storyAerial.src}
              srcSet={IMG.storyAerial.srcSet}
              sizes={IMG.storyAerial.sizes}
              alt={IMG.storyAerial.alt}
              loading="lazy"
              className="w-full h-full object-cover img-wipe is-visible"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="aspect-square overflow-hidden">
              <img
                src={IMG.storyBoardroom.src}
                srcSet={IMG.storyBoardroom.srcSet}
                sizes={IMG.storyBoardroom.sizes}
                alt={IMG.storyBoardroom.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src={IMG.storyHallway.src}
                srcSet={IMG.storyHallway.srcSet}
                sizes={IMG.storyHallway.sizes}
                alt={IMG.storyHallway.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="font-sans text-[11px] text-stone mt-4">
            Our team at work — from community meetings to on-site management.
          </p>
        </div>
      </div>
    </section>
  );
};
