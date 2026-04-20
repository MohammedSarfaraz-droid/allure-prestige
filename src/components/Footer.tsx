import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Monogram } from "./Monogram";

export const Footer = () => {
  return (
    <footer className="bg-ink text-stone-light border-t" style={{ borderTopColor: "hsl(var(--gold) / 0.2)" }}>
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <Monogram size={32} color="hsl(var(--gold))" />
              <span className="font-serif italic text-cream text-[18px]">Allure Properties Group</span>
            </div>
            <p className="font-sans font-light text-[13px] leading-[1.85] text-stone-light max-w-xs">
              Stewarding communities, protecting investments, and building lasting trust across New Jersey since 2005.
            </p>
            <div className="flex items-center gap-5 mt-8">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "X" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-stone hover:text-gold transition-colors duration-200"
                >
                  <Icon strokeWidth={1} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore + Get in Touch */}
          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h4 className="overline mb-5">Explore</h4>
              <ul className="space-y-3 font-sans font-light text-[13px]">
                {[
                  { to: "/services", label: "Services" },
                  { to: "/about", label: "About" },
                  { to: "/memberships", label: "Memberships" },
                  { to: "/contact", label: "Contact" },
                  { to: "#", label: "Privacy Policy" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-stone hover:text-gold transition-colors duration-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="overline mb-5">Get in Touch</h4>
              <ul className="space-y-3 font-sans font-light text-[13px]">
                {[
                  "Property Management",
                  "Financial Services",
                  "HOA Management",
                  "Tenant Services",
                  "GAAP Reporting",
                ].map((l) => (
                  <li key={l}>
                    <Link to="/services" className="text-stone hover:text-gold transition-colors duration-200">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="overline mb-5">Contact</h4>
            <address className="not-italic font-sans font-light text-[13px] text-stone leading-[1.85] space-y-2">
              <div>PO Box 364, Hamburg NJ 07419</div>
              <div>1 Route 94, Suite B, Vernon NJ 07462</div>
              <div>Tel: 973.823.0593</div>
              <div>Fax: 973.209.0257</div>
              <div>
                <a href="mailto:manager@allurepropertiesgroup.com" className="hover:text-gold transition-colors">
                  manager@allurepropertiesgroup.com
                </a>
              </div>
            </address>
            <div className="mt-6 pt-6 border-t" style={{ borderTopColor: "hsl(var(--stone-dark) / 0.4)" }}>
              <div className="flex items-center gap-2.5 mb-1">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full bg-gold animate-pulse-dot"
                  aria-hidden
                />
                <span className="overline text-gold">24/7 Emergency Response</span>
              </div>
              <a href="tel:8882452440" className="font-serif text-cream text-[22px] tracking-tight">
                888.245.2440
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-16 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t"
          style={{ borderTopColor: "hsl(0 0% 100% / 0.08)" }}
        >
          <p className="font-sans text-[11px] text-stone uppercase" style={{ letterSpacing: "0.14em" }}>
            © 2025 Allure Properties Group. All rights reserved.
          </p>
          <p className="font-sans text-[11px] text-stone uppercase" style={{ letterSpacing: "0.14em" }}>
            Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};
