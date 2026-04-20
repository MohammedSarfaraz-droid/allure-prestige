import { IMG } from "@/lib/images";

const items = [
  { img: IMG.stripLobby, caption: "Premium Living Environments" },
  { img: IMG.stripCommunity, caption: "Community-Centered Service" },
  { img: IMG.stripDocs, caption: "Financial Transparency" },
];

export const ImageStrip = () => {
  return (
    <section aria-label="Editorial moments" className="bg-cream">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {items.map((it, i) => (
          <div key={it.img.id} className="relative">
            <div className="overflow-hidden" style={{ height: 480 }}>
              <img
                src={it.img.src}
                srcSet={it.img.srcSet}
                sizes={it.img.sizes}
                alt={it.img.alt}
                loading="lazy"
                className="w-full h-full object-cover img-wipe"
                data-reveal-delay={i * 200}
              />
            </div>
            <div className="bg-cream py-6 px-6 text-center">
              <span className="overline text-stone" style={{ color: "hsl(var(--stone))" }}>
                {it.caption}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
