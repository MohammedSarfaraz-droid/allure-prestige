import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IMG } from "@/lib/images";

export const ServicesSplit = () => {
  return (
    <section className="bg-cream-dark py-[140px] px-6 lg:px-12">
      <div className="max-w-[1320px] mx-auto">
        <div className="max-w-[680px] reveal">
          <p className="overline">WHAT WE DO</p>
          <h2 className="font-serif text-ink text-[44px] lg:text-[60px] leading-[1.1] mt-5">
            Two Pillars of Expertise.
          </h2>
          <p className="font-sans font-light text-[16px] text-ink-light leading-[1.85] mt-5">
            From day-to-day community stewardship to GAAP-grade financial reporting, every service we offer
            is designed to protect what matters most to the people we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[58fr_4fr_38fr] gap-10 mt-[72px] items-start">
          {/* LEFT — Property Management */}
          <article className="reveal" data-reveal-delay="120">
            <div className="relative overflow-hidden group" style={{ height: 560 }}>
              <span
                aria-hidden
                className="absolute top-0 left-0 h-[2px] bg-gold z-10 transition-transform duration-700 origin-left scale-x-0 group-hover:scale-x-100 w-full"
              />
              <img
                src={IMG.servicePM.src}
                srcSet={IMG.servicePM.srcSet}
                sizes={IMG.servicePM.sizes}
                alt={IMG.servicePM.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-8">
              <p className="overline">PROPERTY MANAGEMENT</p>
              <h3 className="font-serif text-ink text-[30px] lg:text-[38px] leading-[1.15] mt-3">
                Comprehensive Community & Residential Management.
              </h3>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 font-sans font-light text-[15px] text-ink-light">
                {[
                  "HOA Management",
                  "Tenant Relations",
                  "Maintenance Coordination",
                  "Vendor Management",
                  "Emergency Response",
                ].map((s) => (
                  <li key={s} className="leading-[1.85]">
                    — {s}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 mt-6 text-gold font-sans text-[14px] group"
              >
                View All Services
                <ArrowRight strokeWidth={1} size={16} className="transition-transform duration-200 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </article>

          <div aria-hidden className="hidden lg:block" />

          {/* RIGHT — Financial Services card */}
          <article
            className="relative bg-white p-12 group reveal transition-all duration-300 hover:-translate-y-1.5"
            data-reveal-delay="240"
            style={{
              boxShadow: "0 2px 32px rgba(28,25,23,0.06)",
              borderRadius: 2,
            }}
          >
            <span
              aria-hidden
              className="absolute left-0 top-0 w-[2px] bg-gold transition-all duration-300 h-0 group-hover:h-full"
            />
            <span
              aria-hidden
              className="absolute top-6 right-8 font-serif text-gold leading-none select-none pointer-events-none"
              style={{ fontSize: 120, opacity: 0.06 }}
            >
              25
            </span>
            <p className="overline relative z-10">FINANCIAL SERVICES</p>
            <h3 className="font-serif text-ink text-[30px] lg:text-[38px] leading-[1.15] mt-3 relative z-10">
              Precision Reporting Built on 25 Years.
            </h3>
            <ul className="mt-6 space-y-2 font-sans font-light text-[15px] text-ink-light relative z-10">
              {[
                "Monthly Financial Reporting",
                "Annual Budgets",
                "GAAP Compliance",
                "Reserve Studies",
                "Financial Consulting",
              ].map((s) => (
                <li key={s} className="leading-[1.85]">
                  — {s}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex items-center gap-4 relative z-10 flex-wrap">
              <span
                className="font-sans text-[10px] uppercase tracking-[0.18em] text-gold border border-gold-border px-4 py-1.5"
                style={{ borderRadius: 999 }}
              >
                GAAP Compliant
              </span>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-gold font-sans text-[14px] group/link"
              >
                Explore Financial Services
                <ArrowRight strokeWidth={1} size={16} className="transition-transform duration-200 group-hover/link:translate-x-1.5" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
