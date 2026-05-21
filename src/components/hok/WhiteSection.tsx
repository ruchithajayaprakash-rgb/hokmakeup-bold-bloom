import { useRef } from "react";
import { PriceLine } from "./Price";

type Row = {
  name: string;
  sale: string;
  mrp: string;
  discount: string;
  features: string[];
};

const ROWS: Row[] = [
  {
    name: "Milani Color Fetish Balm Lipstick",
    sale: "₹999",
    mrp: "₹1,250",
    discount: "20% OFF",
    features: ["- Vegan", "- Hydrating", "- Glossy"],
  },
  {
    name: "Focallure Glisten Opal Hydrating Lip Balm",
    sale: "₹995",
    mrp: "₹1,295",
    discount: "23% OFF",
    features: ["- High Shine", "- Creamy Shimmer", "- Iconic Packaging"],
  },
  {
    name: "Revolution Sunset Lip Shift Peel Off Lip Stain",
    sale: "₹788",
    mrp: "₹895",
    discount: "12% OFF",
    features: ["- Peel & Reveal", "- Juicy Stain", "- Vegan"],
  },
];

function HoverVideo() {
  const vRef = useRef<HTMLVideoElement>(null);
  return (
    <div
      className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border-2 border-dashed border-hok bg-white/40"
      onMouseEnter={() => vRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        const v = vRef.current;
        if (v) {
          v.pause();
          v.currentTime = 0;
        }
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-xs font-body uppercase tracking-widest opacity-60">
        Thumbnail
      </div>
      <video
        ref={vRef}
        className="absolute inset-0 h-full w-full object-cover opacity-0 hover:opacity-100 transition-opacity"
        muted
        playsInline
        loop
        preload="none"
      >
        <source src="" type="video/mp4" />
      </video>
    </div>
  );
}

export function WhiteSection() {
  return (
    <section className="bg-hok-bg text-hok">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-32 md:py-48">
        <h2 className="font-display font-extrabold leading-[0.9] text-[clamp(3rem,9vw,9rem)] mb-20 md:mb-32">
          HOT RIGHT NOW
        </h2>

        <div className="flex flex-col gap-24 md:gap-36">
          {ROWS.map((r, i) => (
            <div
              key={r.name}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <HoverVideo />
              <div className="flex flex-col gap-8">
                <div className="text-xs font-body uppercase tracking-[0.3em] opacity-60">
                  0{i + 1} / Hot Drop
                </div>
                <h3 className="font-display font-bold text-3xl md:text-5xl leading-tight">
                  {r.name}
                </h3>
                <PriceLine sale={r.sale} mrp={r.mrp} discount={r.discount} size="lg" />
                <div className="rounded-2xl border-2 border-hok p-6 md:p-8 bg-[var(--hok-pastel-purple)]/30">
                  <div className="text-xs font-body uppercase tracking-widest opacity-60 mb-3">
                    Why you'll love it
                  </div>
                  <ul className="flex flex-col gap-2 font-body text-base md:text-lg">
                    {r.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
