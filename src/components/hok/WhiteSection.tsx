import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

function ProductRow({ r, i }: { r: Row; i: number }) {
  const targetRef = useRef(null);
  
  // Monitors the scroll position relative to THIS specific row
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center center", "end start"],
  });

  // Items grow and fade in as they hit center, then shrink and fade out
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ scale, opacity }}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center min-h-[70vh] md:min-h-[85vh] py-10 md:py-20"
    >
      {/* Video Side: 9:16 Instagram Reel Ratio */}
      <div className="relative aspect-[9/16] w-full max-w-[320px] mx-auto overflow-hidden rounded-3xl border-2 border-dashed border-hok bg-white/40 group">
         <div className="absolute inset-0 flex items-center justify-center text-xs font-body uppercase tracking-widest opacity-60 group-hover:opacity-0 transition-opacity">
          Thumbnail
        </div>
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          muted playsInline loop autoPlay
        >
          <source src="" type="video/mp4" />
        </video>
      </div>

      {/* Content Side */}
      <div className="flex flex-col gap-6 md:gap-8">
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
    </motion.div>
  );
}

export function WhiteSection() {
  return (
    <section className="bg-hok-bg text-hok">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-12">
        
        {/* Sticky Header: z-40 ensures it stays ABOVE the scrolling products */}
        <div className="sticky top-20 z-40 bg-hok-bg/90 backdrop-blur-md -mx-6 px-6 md:-mx-12 md:px-12 py-6 mb-4">
          <h2 className="font-display font-extrabold leading-[1.1] text-3xl md:text-5xl lg:text-6xl uppercase">
            Hot Right Now
          </h2>
        </div>

        <div className="flex flex-col">
          {ROWS.map((r, i) => (
            <ProductRow key={r.name} r={r} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
