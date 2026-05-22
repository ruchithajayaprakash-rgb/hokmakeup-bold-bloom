import { useRef } from "react";
import { PriceLine } from "./Price";
import { Truck, CreditCard } from "lucide-react";

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
      className="relative aspect-[9/16] w-full max-w-[280px] md:max-w-[320px] mx-auto overflow-hidden rounded-3xl border-2 border-dashed border-hok bg-white/40 group"
      onMouseEnter={() => vRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        const v = vRef.current;
        if (v) {
          v.pause();
          v.currentTime = 0;
        }
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-xs font-body uppercase tracking-widest opacity-60 group-hover:opacity-0 transition-opacity duration-300">
        Thumbnail
      </div>
      <video
        ref={vRef}
        className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
    <section className="bg-hok-bg text-hok relative">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        
        {/* Sticky Header */}
        <div className="sticky top-[72px] md:top-[104px] z-40 bg-hok-bg/95 backdrop-blur-sm -mx-6 px-6 md:-mx-12 md:px-12 py-6">
          <h2 className="font-display leading-[1.1] text-3xl md:text-4xl lg:text-5xl uppercase">
            Hot Right Now
          </h2>
        </div>

        {/* Product Stack */}
        <div className="flex flex-col">
          {ROWS.map((r, i) => {
            const isLast = i === ROWS.length - 1;
            
            return (
              <div
                key={r.name}
                /* REDUCED: Height changed from 80vh to 65vh, margins tightened */
                className={`sticky top-[130px] md:top-[170px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center min-h-[500px] h-[60vh] md:h-[65vh] bg-hok-bg transition-all ${
                  isLast ? "mb-12" : "mb-8 md:mb-16"
                }`}
              >
                <HoverVideo />
                
                <div className="flex flex-col gap-4 md:gap-6 bg-hok-bg">
                  <div className="text-[10px] md:text-xs font-body uppercase tracking-[0.3em] opacity-60">
                    0{i + 1} / Hot Drop
                  </div>
                  
                  {/* UPDATED: Significantly smaller than section heading, but still large/bold */}
                  <h3 className="font-display font-bold text-xl md:text-2xl lg:text-3xl leading-tight">
                    {r.name}
                  </h3>
                  
                  <PriceLine sale={r.sale} mrp={r.mrp} discount={r.discount} size="md" />
                  
                  <div className="rounded-2xl border-2 border-hok p-5 md:p-7 bg-[var(--hok-pastel-purple)]/30">
                    <div className="text-[10px] font-body uppercase tracking-widest opacity-60 mb-2">
                      Why you'll love it
                    </div>
                    <ul className="flex flex-col gap-1 font-body text-sm md:text-base">
                      {r.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trust & Stats Section */}
      <div className="w-full relative z-10">
        <div className="bg-[#fafafa] py-10 md:py-16 border-t border-hok/10">
          <div className="mx-auto max-w-[1200px] flex flex-wrap justify-center md:justify-between gap-8 px-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-black font-display mb-1">2012</div>
              <div className="text-xs font-body opacity-80">Founded</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black font-display mb-1">2k+</div>
              <div className="text-xs font-body opacity-80">Products</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black font-display mb-1">25+</div>
              <div className="text-xs font-body opacity-80">Brands</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black font-display mb-1">100%</div>
              <div className="text-xs font-body opacity-80">Authentic</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

