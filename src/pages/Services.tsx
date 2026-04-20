import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2, Users, Wrench, Handshake, Truck, AlertCircle,
  FileText, Calculator, ShieldCheck, PiggyBank, LineChart, Plus,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { IMG } from "@/lib/images";

type Item = { icon: typeof Building2; title: string; body: string };

const PROPERTY: Item[] = [
  { icon: Building2, title: "HOA Management", body: "End-to-end management of homeowner associations — board support, governance, vendor oversight, and the rhythms of community life." },
  { icon: Users, title: "Tenant Management", body: "Leasing, communications, and resident relations handled with discretion and care, from move-in to renewal." },
  { icon: Wrench, title: "Maintenance Coordination", body: "Preventive and reactive maintenance coordinated through trusted vendors and tracked to closure." },
  { icon: Handshake, title: "Community Management", body: "We attend the meetings. We know the names. We treat your community as if it were our own." },
  { icon: Truck, title: "Vendor Relations", body: "Bid solicitation, contract review, and ongoing performance management for landscaping, snow, security, and trades." },
  { icon: AlertCircle, title: "Emergency Response Coordination", body: "24/7 emergency line with documented response protocols and on-call coverage every day of the year." },
];

const FINANCIAL: Item[] = [
  { icon: FileText, title: "Monthly Financial Reporting", body: "Full GAAP-compliant statements delivered on a fixed monthly cadence — never late, always reconciled." },
  { icon: Calculator, title: "Annual Budget Preparation", body: "Operating and reserve budgets prepared in collaboration with boards and grounded in historical performance." },
  { icon: ShieldCheck, title: "GAAP Compliance Oversight", body: "Books and records maintained to the standards of generally accepted accounting principles, audit-ready year-round." },
  { icon: PiggyBank, title: "Reserve Fund Studies", body: "Independent studies and modeling to ensure long-term capital obligations are properly funded." },
  { icon: LineChart, title: "Financial Consulting & Advisory", body: "Strategic financial guidance for boards on assessments, capital projects, and long-range planning." },
];

const Row = ({ item, i }: { item: Item; i: number }) => {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;
  return (
    <li className="border-b border-rule reveal" data-reveal-delay={i * 60}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="group relative w-full flex items-center gap-5 py-7 px-6 text-left transition-colors hover:bg-gold-muted"
        aria-expanded={open}
      >
        <span
          aria-hidden
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] bg-gold transition-all duration-300"
          style={{ height: open ? "100%" : 20 }}
        />
        <Icon strokeWidth={1} size={20} className="text-gold shrink-0" />
        <span className="font-sans font-medium text-[16px] text-ink flex-1">{item.title}</span>
        <Plus
          strokeWidth={1}
          size={20}
          className={`text-stone transition-transform duration-300 ${open ? "rotate-45 text-gold" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="font-sans font-light text-[15px] leading-[1.85] text-ink-light pb-7 pl-[60px] pr-12 max-w-[800px]">
              {item.body}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

const Services = () => {
  useScrollReveal([]);
  return (
    <>
      {/* PAGE TITLE */}
      <section className="bg-cream pt-40 pb-16 px-6 lg:px-12">
        <div className="max-w-[1320px] mx-auto">
          <p className="overline reveal">SERVICES</p>
          <h1
            className="font-serif italic text-ink mt-6 leading-[0.95] reveal"
            style={{ fontSize: "clamp(48px, 8vw, 88px)", letterSpacing: "-0.03em" }}
            data-reveal-delay="120"
          >
            What We Do.
          </h1>
          <div className="w-20 h-px bg-gold mt-8" />
        </div>
      </section>

      {/* CHAPTER 1 */}
      <section className="relative bg-ink py-[120px] px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMG.servicesPropertyChapter.src}
            srcSet={IMG.servicesPropertyChapter.srcSet}
            sizes="100vw"
            alt={IMG.servicesPropertyChapter.alt}
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-ink/60" />
        </div>
        <div className="relative z-10">
          <p className="overline" style={{ color: "hsl(var(--gold))" }}>CHAPTER ONE</p>
          <h2
            className="font-serif italic text-gold mt-4 leading-[1.05]"
            style={{ fontSize: "clamp(48px, 8vw, 80px)" }}
          >
            Property Management.
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </div>
      </section>

      <section className="bg-cream py-[80px] px-6 lg:px-12">
        <ul className="max-w-[920px] mx-auto border-t border-rule">
          {PROPERTY.map((it, i) => <Row key={it.title} item={it} i={i} />)}
        </ul>
      </section>

      {/* CHAPTER 2 */}
      <section className="relative bg-cream-dark py-[120px] px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMG.servicesFinancialChapter.src}
            srcSet={IMG.servicesFinancialChapter.srcSet}
            sizes="100vw"
            alt={IMG.servicesFinancialChapter.alt}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-cream-dark/70" />
        </div>
        <div className="relative z-10">
          <p className="overline">CHAPTER TWO</p>
          <h2
            className="font-serif italic text-ink mt-4 leading-[1.05]"
            style={{ fontSize: "clamp(48px, 8vw, 80px)" }}
          >
            Financial Services.
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </div>
      </section>

      <section className="bg-cream py-[80px] pb-[160px] px-6 lg:px-12">
        <ul className="max-w-[920px] mx-auto border-t border-rule">
          {FINANCIAL.map((it, i) => <Row key={it.title} item={it} i={i} />)}
        </ul>
      </section>
    </>
  );
};

export default Services;
