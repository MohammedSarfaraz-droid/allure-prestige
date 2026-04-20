import { useState } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Printer } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { IMG } from "@/lib/images";
import { toast } from "sonner";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  property: string;
  message: string;
};

const Field = ({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div className="relative pt-2">
    <label htmlFor={id} className="overline block mb-3" style={{ color: "hsl(var(--stone))" }}>
      {label}
    </label>
    {children}
    {error && (
      <p className="font-sans text-[11px] text-destructive mt-2">{error}</p>
    )}
  </div>
);

const Contact = () => {
  useScrollReveal([]);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormValues) => {
    // Placeholder: wire to an email service endpoint later.
    await new Promise((r) => setTimeout(r, 700));
    console.log("Contact inquiry:", data);
    toast.success("Inquiry received. We will be in touch shortly.");
    setSubmitted(true);
    reset();
  };

  const inputCls =
    "w-full bg-cream font-sans font-light text-[15px] text-ink placeholder:text-stone py-3 border-0 border-b border-rule focus:outline-none focus:border-gold transition-colors duration-250";

  return (
    <section className="bg-cream pt-40 pb-[140px] px-6 lg:px-12">
      <div className="max-w-[1320px] mx-auto">
        <div className="max-w-[760px] reveal">
          <p className="overline">GET IN TOUCH</p>
          <h1
            className="font-serif italic text-ink mt-6 leading-[0.95]"
            style={{ fontSize: "clamp(48px, 8vw, 88px)", letterSpacing: "-0.03em" }}
          >
            Begin the Conversation.
          </h1>
          <div className="w-20 h-px bg-gold mt-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 mt-20">
          {/* FORM */}
          <div
            className="bg-white p-8 lg:p-12 border border-rule reveal"
            style={{ borderRadius: 2, boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <h2 className="font-serif italic text-ink text-[36px]">Thank you.</h2>
                <p className="font-sans font-light text-[15px] text-ink-light mt-4">
                  Your inquiry has been received. We will be in touch within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="overline text-gold mt-8 link-underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                <Field label="Full Name" id="name" error={errors.name?.message}>
                  <input
                    id="name"
                    type="text"
                    className={inputCls}
                    placeholder="Your name"
                    {...register("name", { required: "Please enter your name" })}
                  />
                </Field>
                <Field label="Email Address" id="email" error={errors.email?.message}>
                  <input
                    id="email"
                    type="email"
                    className={inputCls}
                    placeholder="you@example.com"
                    {...register("email", {
                      required: "Please enter your email",
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                    })}
                  />
                </Field>
                <Field label="Phone" id="phone">
                  <input
                    id="phone"
                    type="tel"
                    className={inputCls}
                    placeholder="(973) 000-0000"
                    {...register("phone")}
                  />
                </Field>
                <Field label="Property or Community Name" id="property">
                  <input
                    id="property"
                    type="text"
                    className={inputCls}
                    placeholder="e.g. Sussex Ridge HOA"
                    {...register("property")}
                  />
                </Field>
                <Field label="Message" id="message" error={errors.message?.message}>
                  <textarea
                    id="message"
                    rows={5}
                    className={`${inputCls} resize-none`}
                    placeholder="Tell us a little about your needs."
                    {...register("message", { required: "Please share a brief message" })}
                  />
                </Field>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full nav-link bg-gold text-ink py-4 hover:bg-gold-light transition-colors duration-250 disabled:opacity-50"
                  style={{ borderRadius: 2 }}
                >
                  {isSubmitting ? "Sending…" : "Send Inquiry"}
                </button>
                <p className="font-sans text-[11px] text-stone leading-[1.7]">
                  Your information is held in confidence and used solely to respond to this inquiry.
                </p>
              </form>
            )}
          </div>

          {/* RIGHT */}
          <aside className="lg:py-6 reveal" data-reveal-delay="120">
            <p className="overline">DIRECT</p>
            <h2 className="font-serif text-ink text-[34px] lg:text-[44px] leading-[1.1] mt-4">
              We’re Here When You Need Us.
            </h2>

            <div className="mt-10 space-y-6 font-sans font-light text-[14px] text-ink-light">
              <div className="flex items-start gap-4">
                <MapPin strokeWidth={1} size={18} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <div className="overline mb-1" style={{ color: "hsl(var(--stone))" }}>Mailing</div>
                  <div>PO Box 364, Hamburg NJ 07419</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin strokeWidth={1} size={18} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <div className="overline mb-1" style={{ color: "hsl(var(--stone))" }}>Office</div>
                  <div>1 Route 94, Suite B, Vernon NJ 07462</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone strokeWidth={1} size={18} className="text-gold mt-0.5 shrink-0" />
                <a href="tel:9738230593" className="hover:text-gold transition-colors">973.823.0593</a>
              </div>
              <div className="flex items-start gap-4">
                <Printer strokeWidth={1} size={18} className="text-gold mt-0.5 shrink-0" />
                <span>973.209.0257</span>
              </div>
              <div className="flex items-start gap-4">
                <Mail strokeWidth={1} size={18} className="text-gold mt-0.5 shrink-0" />
                <a href="mailto:manager@allurepropertiesgroup.com" className="hover:text-gold transition-colors break-all">
                  manager@allurepropertiesgroup.com
                </a>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-rule">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse-dot" aria-hidden />
                <span className="overline">24/7 EMERGENCY</span>
              </div>
              <a href="tel:8882452440" className="font-serif text-ink text-[36px] tracking-tight">
                888.245.2440
              </a>
            </div>

            <div className="mt-12 inline-block p-1" style={{ background: "hsl(var(--gold) / 0.15)", boxShadow: "4px 4px 0 hsl(var(--gold) / 0.15)" }}>
              <div className="border-2 border-gold p-1">
                <img
                  src={IMG.contactOffice.src}
                  srcSet={IMG.contactOffice.srcSet}
                  sizes={IMG.contactOffice.sizes}
                  alt={IMG.contactOffice.alt}
                  loading="lazy"
                  className="block w-full max-w-[360px] aspect-[3/4] object-cover"
                />
              </div>
            </div>

            <div className="mt-10 aspect-[16/9] overflow-hidden border border-rule">
              <iframe
                title="Vernon NJ map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.55%2C41.18%2C-74.42%2C41.25&amp;layer=mapnik"
                className="w-full h-full"
                style={{ filter: "grayscale(0.4) contrast(0.95)" }}
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
