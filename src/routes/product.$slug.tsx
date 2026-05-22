import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/hok/Header";
import { PriceLine } from "@/components/hok/Price";

// This matches the path: src/routes/product/$slug.tsx
export const Route = createFileRoute("/product/$slug")({
  component: ProductPage,
});

function ProductPage() {
  const title = "Revolution Kiss Drip Water Lip Tint - Melon Mist";

  return (
    <main className="min-h-screen bg-hok-pink text-hok">
      <Header />
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
        {/* Top Product Section */}
        <div className="grid gap-12 md:grid-cols-2">
          <div className="aspect-[4/5] rounded-3xl border-2 border-dashed border-hok bg-white/40 sticky top-24 h-fit overflow-hidden">
            <img src="https://images.unsplash.com/photo-1625088981476-88abeb9e9d69?auto=format&fit=crop&q=80&w=800" alt={title} className="h-full w-full object-cover mix-blend-multiply" />
          </div>

          <div className="flex flex-col gap-6">
            <Link to="/" className="text-sm opacity-70 hover:opacity-100">← Back</Link>
            <h1 className="font-display text-4xl font-extrabold capitalize leading-tight">{title}</h1>
            <PriceLine sale="₹716" mrp="₹795" discount="10% OFF" size="lg" />
            
            {/* Shade Selection Mock */}
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase">Select Shade</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((i) => <div key={i} className="w-10 h-10 rounded-full border-2 border-hok bg-hok/20 cursor-pointer" />)}
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-hok-text text-white py-4 rounded-xl font-bold">ADD TO BAG</button>
              <button className="flex-1 border-2 border-hok py-4 rounded-xl font-bold">WISHLIST</button>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold">Why you'll Love it:</h3>
              <ul className="list-disc pl-5 text-sm space-y-1 opacity-80">
                <li>Sheer, buildable color for a natural to glossy finish</li>
                <li>Lightweight, water-based formula</li>
                <li>Juicy, glass-like shine</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reviews Section Placeholder */}
        <div className="mt-24 border-t-2 border-dashed border-hok/20 pt-16">
          <h2 className="font-display text-2xl font-bold mb-8">Reviews</h2>
          <div className="h-64 overflow-y-auto bg-white/30 rounded-2xl p-6">
            <p className="opacity-60 italic">Reviews list will render here...</p>
          </div>
        </div>
      </div>
    </main>
  );
}
