import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ThumbsUp, ChevronDown, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

// This tells the app: "This file handles the /product/something URL"
export const Route = createFileRoute("/product/$slug")({
  component: ProductPage,
});

// --- SAFE INTERNAL COMPONENTS (No imports needed) ---
const HeaderPlaceholder = () => (
  <div className="w-full bg-white border-b border-black/10 p-4 flex justify-between items-center sticky top-0 z-50">
    <Link to="/" className="font-black text-xl tracking-tighter">HOKmakeup®</Link>
    <div className="flex gap-4 font-bold text-xs uppercase">
      <span>Shop</span>
      <span>Brands</span>
      <span>Offers</span>
    </div>
  </div>
);

const ProductTilePlaceholder = ({ name, sale, mrp }: any) => (
  <div className="bg-white rounded-xl p-4 flex flex-col gap-2 border border-black/5">
    <div className="aspect-square bg-gray-100 rounded-lg" />
    <h3 className="font-bold text-sm line-clamp-2 h-10">{name}</h3>
    <div className="flex gap-2 items-center">
      <span className="font-bold text-hok-text">{sale}</span>
      <span className="text-xs text-gray-400 line-through">{mrp}</span>
    </div>
  </div>
);

// --- DATA ---
const IMAGES = [
  "https://images.unsplash.com/photo-1625088981476-88abeb9e9d69?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=800",
];

const NEW_ARRIVALS = [
  { name: "Relove Stain It Lip Ink Pen", sale: "₹499", mrp: "₹599" },
  { name: "Milani Baked Blush", sale: "₹1,450", mrp: "₹1,800" },
  { name: "Revolution Jelly Shine Highlight", sale: "₹765", mrp: "₹850" },
  { name: "Milani Setting Spray", sale: "₹1,935", mrp: "₹2,150" },
];

function ProductPage() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <main className="min-h-screen bg-[#FDF0F5] text-[#1A1A1A] pb-20 font-sans">
      <HeaderPlaceholder />
      
      <div className="mx-auto max-w-[1200px] px-6 py-8 md:py-16">
        <div className="grid gap-12 md:grid-cols-2">
          
          {/* Left: Images */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img 
                src={IMAGES[activeImage]} 
                className="w-full h-full object-cover" 
                alt="Product"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {IMAGES.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveImage(i)}
                    className={`h-2 rounded-full transition-all ${i === activeImage ? 'w-8 bg-black' : 'w-2 bg-black/20'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col gap-6">
            <div>
              <Link to="/" className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4 block">← Back to Shop</Link>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-2">Revolution Kiss Drip Water Lip Tint</h1>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black">₹716</span>
                <span className="text-xl text-gray-400 line-through font-bold">₹795</span>
                <span className="bg-[#FF4D4D] text-white text-xs font-bold px-2 py-1 rounded-full italic">10% OFF</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-black text-white py-5 rounded-2xl font-black text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] active:translate-y-1 active:shadow-none transition-all">
                ADD TO BAG
              </button>
              <button className="px-8 border-2 border-black rounded-2xl font-black">
                ♡
              </button>
            </div>

            <div className="border-2 border-dashed border-black/20 rounded-2xl p-6 bg-white/50">
              <h3 className="font-black text-sm uppercase mb-4 tracking-tighter">Why you'll love it:</h3>
              <ul className="space-y-2 text-sm font-medium opacity-80">
                <li className="flex gap-2"><span>•</span> Juicy, glass-like shine</li>
                <li className="flex gap-2"><span>•</span> Lightweight water-based formula</li>
                <li className="flex gap-2"><span>•</span> Infused with Hyaluronic Acid</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-black uppercase mb-8 italic">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="md:col-span-2 space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
                    <div className="flex text-orange-400 mb-2">★★★★★</div>
                    <p className="font-bold mb-1">"The best tint ever!"</p>
                    <p className="text-sm text-gray-500">I loved the shade it looks very natural and my lips but better.</p>
                  </div>
                ))}
             </div>
             <div className="bg-white p-8 rounded-3xl border-2 border-black text-center h-fit">
                <div className="text-6xl font-black mb-2 tracking-tighter">4.8</div>
                <div className="text-sm font-bold uppercase opacity-40">181 Reviews</div>
             </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-24">
          <h2 className="text-3xl font-black uppercase mb-8">You May Also Like</h2>
          <div className="flex overflow-x-auto gap-6 pb-4 no-scrollbar">
            {NEW_ARRIVALS.map((product, idx) => (
              <div key={idx} className="w-[240px] shrink-0">
                <ProductTilePlaceholder {...product} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
