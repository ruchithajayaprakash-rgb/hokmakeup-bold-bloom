import { useRef } from "react";
import { PriceLine } from "./Price";
import { Truck, CreditCard } from "lucide-react"; // Imported standard icons for the dark section

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
      className="relative aspect-[9/16] w-full max-w-[320px] mx-auto overflow-hidden rounded-3xl border-2 border-dashed border-hok bg-white/40 group"
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
        
        {/* FIX 1: Exact pixel heights to dock cleanly under the purple navigation bar */}
        <div className="sticky top-[72px] md:top-[104px] z-40 bg-hok-bg/95 backdrop-blur-sm -mx-6 px-6 md:-mx-12 md:px-12 py-8">
          <h2 className="font-display font-extrabold leading-[1.1] text-3xl md:text-5xl lg:text-6xl uppercase">
            Hot Right Now
          </h2>
        </div>

        {/* Product Stack */}
        <div className="flex flex-col">
          {ROWS.map((r, i) => {
            // FIX 2: Check if this is the last item so we can remove the extra empty space
            const isLast = i === ROWS.length - 1;
            
            return (
              <div
                key={r.name}
                /* FIX 3: Increased item sticky top distance to ensure it clears BOTH the purple nav AND the sticky heading above */
                className={`sticky top-[160px] md:top-[220px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center h-[70vh] md:h-[80vh] bg-hok-bg transition-all ${
                  isLast ? "mb-0" : "mb-[10vh] md:mb-[20vh]"
                }`}
              >
                <HoverVideo />
                
                <div className="flex flex-col gap-6 md:gap-8 bg-hok-bg">
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
            );
          })}
        </div>
      </div>

      {/* FIX 4: Replaced the empty spacer with the new full-width Stats & Guarantee section.
          Because it follows the sticky wrapper directly, scrolling down into this element
          will naturally push the "Hot Right Now" header and the 3rd reel up and off the screen! */}
      
      <div className="w-full relative z-10">
        {/* Top Half: Light Stats Strip */}
        <div className="bg-[#fafafa] py-12 md:py-20 border-t border-hok/10">
          <div className="mx-auto max-w-[1200px] flex flex-wrap justify-center md:justify-between gap-10 px-6 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black font-display mb-2">2012</div>
              <div className="text-sm font-body opacity-80">Founded</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black font-display mb-2">2k+</div>
              <div className="text-sm font-body opacity-80">Products</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black font-display mb-2">25+</div>
              <div className="text-sm font-body opacity-80">Brands</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black font-display mb-2">1M+</div>
              <div className="text-sm font-body opacity-80">Orders Delivered</div>
            </div>
          </div>
        </div>

        {/* Bottom Half: Dark Guarantee Strip */}
        <div className="bg-[#1e1f24] text-white py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row justify-center md:justify-around items-center gap-16 px-6 text-center">
            
            {/* 100% Authentic */}
            <div className="flex flex-col items-center max-w-[200px]">
              <div className="border-2 border-white rounded-[4px] px-3 py-1 mb-5 font-bold tracking-wider text-sm">
                100%
              </div>
              <div className="font-bold text-lg mb-1">100% Authentic</div>
              <div className="opacity-80 text-sm">Our Guarantee</div>
            </div>

            {/* Free Shipping */}
            <div className="flex flex-col items-center max-w-[200px]">
              <Truck className="w-10 h-10 mb-5" strokeWidth={1.5} />
              <div className="font-bold text-lg mb-1">Free Shipping</div>
              <div className="opacity-80 text-sm">above Rs.699</div>
            </div>

            {/* Secured Payment */}
            <div className="flex flex-col items-center max-w-[200px]">
              <CreditCard className="w-10 h-10 mb-5" strokeWidth={1.5} />
              <div className="font-bold text-lg mb-1">Secured Payment</div>
              <div className="opacity-80 text-sm">100% guarantee</div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
