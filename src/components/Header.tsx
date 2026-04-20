import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Monogram } from "./Monogram";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/memberships", label: "Memberships" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-cream/95 backdrop-blur-xl border-b border-rule"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Allure Properties Group home">
            <Monogram size={28} color="hsl(var(--gold))" />
            <span className="font-serif italic text-ink text-[20px] leading-none">
              Allure Properties Group
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "nav-link link-underline transition-colors",
                    isActive ? "text-gold" : "text-ink hover:text-gold",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="nav-link inline-block border border-gold text-gold px-6 py-2.5 transition-colors duration-250 hover:bg-gold hover:text-ink"
              style={{ borderRadius: 2 }}
            >
              Request Consultation
            </Link>
          </div>

          <button
            className="lg:hidden text-ink p-2"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X strokeWidth={1} size={24} /> : <Menu strokeWidth={1} size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-cream lg:hidden overflow-hidden"
          >
            <span
              aria-hidden
              className="absolute inset-0 flex items-center justify-center font-serif italic text-gold pointer-events-none select-none"
              style={{ fontSize: "min(60vw, 480px)", opacity: 0.04, lineHeight: 1 }}
            >
              APG
            </span>
            <nav className="relative h-full flex flex-col items-start justify-center px-10 gap-6">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                >
                  <Link
                    to={item.to}
                    className="font-serif italic text-ink leading-none"
                    style={{ fontSize: 48 }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  className="nav-link inline-block border border-gold text-gold px-6 py-3"
                  style={{ borderRadius: 2 }}
                >
                  Request Consultation
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
