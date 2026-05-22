import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/hok/Header";
import { PriceLine } from "@/components/hok/Price";

export const Route = createFileRoute("/product/$slug")({
  component: ProductPage,
  head: ({ params }) => ({
    meta: [{ title: `Revolution Kiss Drip Water Lip Tint — HOKmakeup` }],
  }),
});

function ProductPage() {
  const { slug } = Route.useParams();
  
  // Hardcoded for mockup purposes, you can make this dynamic based on the slug later
  const title = "Revolution Kiss Drip Water Lip Tint - Melon Mist";

  return (
    <main className="min-h-screen bg-hok-pink text-hok">
      <Header />
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-16 md:grid-cols-2 md:px-12 md:py-24">
        
        {/* Product Image Section */}
        <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed border-hok bg-white/40">
          <img 
            // Replace this placeholder with the actual Revolution product image URL from your Shopify/CDN
            src="https://images.unsplash.com/photo-1625088981476-88abeb9e9d69?auto=format&fit=crop&q=80&w=500" 
            alt="Revolution Kiss Drip Water Lip Tint Melon Mist" 
            className="h-full w-full object-cover mix-blend-multiply"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col justify-center gap-6">
          <Link to="/" className="font-body text-sm opacity-70 transition-opacity hover:opacity-100">
            ← Back
          </Link>
          
          <h1 className="font-display text-4xl font-extrabold capitalize leading-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          
          {/* Updated Pricing to match Revolution Kiss Drip */}
          <PriceLine sale="₹716" mrp="₹795" discount="10% OFF" size="lg" />
          
          <div className="flex flex-col gap-2">
            <p className="font-body max-w-md opacity-80">
              Get your gloss on with this sheer, buildable lip color that delivers a fresh, dewy shine with a weightless, water-light feel. Infused with Shea Butter, Vitamin E, and Hyaluronic Acid, this juicy tint enhances your natural lips while keeping them soft and hydrated.
            </p>
            <span className="font-body text-sm font-semibold opacity-60">
              Size: 3ml
            </span>
          </div>

          <button className="mt-4 self-start rounded-full bg-hok-text px-8 py-4 font-body font-bold text-white transition-transform hover:scale-105 active:scale-95">
            ADD TO BAG
          </button>
        </div>
      </div>
    </main>
  );
}
