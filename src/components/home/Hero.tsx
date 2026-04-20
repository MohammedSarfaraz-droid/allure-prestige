import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IMG } from "@/lib/images";

export const Hero = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const onScroll = () => {
      if (!imgRef.current) return;
      const y = window.scrollY * 0.25;
      imgRef.current.style.transform = `translate3d(0, ${y}px, 0) scale(1.04)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headlineWords = ["Property", "Management", "Refined."];

  return (
    <section className="relative w-full" aria-label="Hero">
      <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] min-h-screen">
        {/* LEFT */}
        <div className="relative bg-cream flex items-center pt-32 pb-32 lg:pt-0 lg:pb-0 px-8 lg:pl-20 lg:pr-12">
          <div className="max-w-[640px]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-5"
            >
              <span className="block w-[60px] h-px bg-gold" aria-hidden />
              <span className="overline">EST. 2005 · HAMBURG, NEW JERSEY</span>
            </motion.div>

            <h1
              className="font-serif italic text-ink mt-7 text-[56px] sm:text-[72px] lg:text-[96px] leading-[1.0]"
              style={{ letterSpacing: "-0.03em" }}
            >
              {headlineWords.map((w, i) => (
                <motion.span
                  key={w}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="inline-block mr-3"
                >
                  {w === "Refined." ? (
                    <>
                      Refined<span className="text-gold">.</span>
                    </>
                  ) : (
                    w
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="font-serif italic text-stone-dark mt-5 text-[20px] sm:text-[24px] lg:text-[26px] leading-[1.4]"
            >
              Financial precision. Community care. 19 years of unwavering excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
            >
              <div className="w-20 h-px bg-rule mt-10" aria-hidden />
              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  to="/services"
                  className="nav-link inline-block bg-gold text-ink px-9 py-3.5 hover:bg-gold-light transition-colors duration-250"
                  style={{ borderRadius: 2 }}
                >
                  Explore Services
                </Link>
                <Link
                  to="/contact"
                  className="nav-link inline-block border border-rule text-ink px-9 py-3.5 hover:border-gold hover:text-gold transition-colors duration-250"
                  style={{ borderRadius: 2 }}
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.4 }}
              className="hidden lg:flex items-center gap-3 mt-20"
            >
              <span className="overline text-stone">SCROLL TO EXPLORE</span>
              <span className="block w-px h-8 bg-gold animate-breathe" aria-hidden />
            </motion.div>

            {/* Floating credibility strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.6 }}
              className="mt-10 lg:absolute lg:bottom-10 lg:left-20 lg:right-12"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-[12px] text-stone">
                <span>19+ years</span>
                <span className="w-1 h-1 rounded-full bg-gold" />
                <span>GAAP Compliant</span>
                <span className="w-1 h-1 rounded-full bg-gold" />
                <span>CAI Certified</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative overflow-hidden bg-cream-dark min-h-[60vh] lg:min-h-screen">
          <motion.img
            ref={imgRef}
            initial={{ scale: 1.04, opacity: 0 }}
            animate={{ scale: 1.04, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src={IMG.heroBuilding.src}
            srcSet={IMG.heroBuilding.srcSet}
            sizes={IMG.heroBuilding.sizes}
            alt={IMG.heroBuilding.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 vignette-left pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
