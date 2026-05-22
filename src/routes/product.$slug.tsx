import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
// 1. Re-add the standard Header import from the home page
import { Header } from "@/components/hok/Header";
// 2. Re-add standard ProductTile import
import { ProductTile } from "@/components/hok/ProductTile";
import { Star, ThumbsUp, ChevronDown, CheckCircle2 } from "lucide-react";

// Matches the flat-file path: src/routes/product.$slug.tsx
export const Route = createFileRoute("/product/$slug")({
  component: ProductPage,
});

// Detailed data for the page elements
const IMAGES = [
  "https://images.unsplash.com/photo-1625088981476-88abeb9e9d69?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1558500204-629221fc36da?auto=format&fit=crop&q=80&w=800",
];

const SHADES = ["#D6A789", "#7A1F2B", "#7A4A36", "#E5746A"];

const MOCK_REVIEWS = [
  { id: 1, rating: 5, title: "Amazing", body: "Dries quick but extremely pigmented. I love it!", user: "Shubhraa Joshi", date: "22 Feb, 2026", likes: 0 },
  { id: 2, rating: 5, title: "Natural colour", body: "I loved the shade it looks very natural and my lips but better.", user: "Hrishita Sharma", date: "17 Feb, 2026", likes: 0 },
  { id: 3, rating: 4, title: "Tinted", body: "Very light weight , pigmented.", user: "Mani Chandana", date: "18 Feb, 2026", likes: 0 },
  { id: 4, rating: 5, title: "Too good", body: "This is so good so pigmented and i feel it has something ph formula", user: "Alankrita Verma", date: "17 Feb, 2026", likes: 0 },
];

const SIMILAR_PRODUCTS = [
  {
    name: "Relove Stain It Lip Ink Pen",
    sale: "₹499",
    mrp: "₹599",
    discount: "17% OFF",
    shades: [
      { label: "Pink", color: "#F1A3E0" },
      { label: "Red", color: "#C82B3A" },
      { label: "Brown", color: "#7A4A36" },
      { label: "+1", isText: true, text: "+1" },
    ],
  },
  {
    name: "Milani Baked Blush",
    sale: "₹1,450",
    mrp: "₹1,800",
    discount: "19% OFF",
    shades: [
      { label: "Light Pink", color: "#F8C8D8" },
      { label: "Dark Pink", color: "#D9457C" },
      { label: "Peach", color: "#F4A88A" },
    ],
  },
  {
    name: "Revolution Jelly Shine Eye, Face & Body Highlight",
    sale: "₹765",
    mrp: "₹850",
    discount: "10% OFF",
    shades: [
      { label: "Gold", color: "#D4AF37" },
      { label: "Pink", color: "#F1A3E0" },
      { label: "Teal", color: "#2DB6A8" },
    ],
  },
  {
    name: "Milani Make It Last Moisture Boost Setting Spray",
    sale: "₹1,935",
    mrp: "₹2,150",
    discount: "10% OFF",
  },
];

function ProductPage() {
  const title = "Revolution Kiss Drip Water Lip Tint";
  const [activeImage, setActiveImage] = useState(0);

  return (
    <main className="min-h-screen bg-hok-pink text-hok pb-20">
      <Header />
      <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-12 md:py-20">
        
        {/* Top Product Section */}
        <div className="grid gap-12 md:grid-cols-2">
          
          {/* 3. Re-implement detailed Carousel with 3 images */}
          <div className="relative aspect-[4/5] rounded-3xl border-2 border-dashed border-hok bg-white/40 sticky top-[104px] h-fit overflow-hidden group">
            <div 
              className="flex h-full w-full overflow-x-auto snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none' }} 
              onScroll={(e) => {
                const scrollLeft = e.currentTarget.scrollLeft;
                const width = e.currentTarget.clientWidth;
                setActiveImage(Math.round(scrollLeft / width));
              }}
            >
              {IMAGES.map((src, idx) => (
                <img 
                  key={idx} 
                  src={src} 
                  alt={`${title} - Image ${idx + 1}`} 
                  className="h-full min-w-full snap-center object-cover mix-blend-multiply" 
                />
              ))}
            </div>
            {/* Carousel Dots */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 pointer-events-none">
              {IMAGES.map((_, idx) => (
                <div key={idx} className={`h-2 rounded-full transition-all ${idx === activeImage ? 'w-6 bg-hok-text' : 'w-2 bg-hok-text/30'}`} />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-8 md:py-4">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-sm font-bold uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity">
                ← Back to Shop
              </Link>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold capitalize leading-tight">
                {title}
              </h1>
              {/* Manual PriceLine for stability */}
              <div className="flex gap-3 items-center font-bold text-2xl">
                <span className="text-hok-text">₹716</span>
                <span className="text-gray-400 line-through text-lg">₹795</span>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">10% OFF</span>
              </div>
            </div>
            
            {/* Shade Selection */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm font-bold uppercase tracking-widest">Select Shade</label>
                <span className="text-xs font-body opacity-60">4 Shades Available</span>
              </div>
              <div className="flex gap-3">
                {SHADES.map((color, i) => (
                  <button 
                    key={i} 
                    className={`w-12 h-12 rounded-full border-2 focus:outline-none transition-transform hover:scale-110 ${i === 0 ? 'border-hok ring-2 ring-hok ring-offset-2 ring-offset-hok-pink' : 'border-black/10'}`} 
                    style={{ backgroundColor: color }}
                    aria-label={`Select shade ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <button className="flex-1 bg-hok-text text-white py-4 px-6 rounded-2xl font-bold uppercase tracking-widest hover:bg-hok-bg hover:text-hok transition-colors border-2 border-transparent hover:border-hok">
                ADD TO BAG
              </button>
              <button className="flex-1 border-2 border-hok py-4 px-6 rounded-2xl font-bold uppercase tracking-widest hover:bg-white/50 transition-colors">
                WISHLIST
              </button>
            </div>

            {/* Why You'll Love It: Full text restoration */}
            <div className="space-y-4 bg-white/30 rounded-2xl p-6 md:p-8 border-2 border-dashed border-hok/30 mt-4">
              <h3 className="font-bold uppercase tracking-widest text-sm opacity-80">Why you'll love it:</h3>
              <ul className="list-disc pl-5 text-base space-y-2 opacity-90 font-body">
                <li>Sheer, buildable color for a natural to glossy finish</li>
                <li>Lightweight, water-based formula that feels comfortable all day</li>
                <li>Delivers a juicy, glass-like shine without heaviness</li>
                <li>Hydrates and nourishes with Shea Butter, Vitamin E & Hyaluronic Acid</li>
                <li>Keeps lips soft, smooth, and healthy-looking</li>
                <li>Subtle fruity scent for a fresh, sweet touch</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Reviews Section (Target image) */}
        <div className="mt-24 pt-16 border-t-2 border-hok">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold uppercase mb-10">Reviews</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* LEFT: Scrollable Reviews List & Filters */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              
              {/* Filter Bar */}
              <div className="flex flex-wrap items-center gap-3 bg-white border border-gray-200 rounded-xl p-2 shadow-sm font-body text-sm">
                <span className="font-bold px-3">Filter By</span>
                <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50">
                  Ratings <ChevronDown className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50">
                  Reviews By <ChevronDown className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50">
                  Reviews with image
                </button>
                <button className="ml-auto px-4 text-red-500 font-medium hover:underline">
                  Reset filters
                </button>
              </div>

              {/* Scrollable Reviews Container */}
              <div className="h-[600px] overflow-y-auto pr-4 space-y-4" style={{ scrollbarWidth: 'thin' }}>
                {MOCK_REVIEWS.map((review) => (
                  <div key={review.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm font-body">
                    <div className="flex text-[#D97979] mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'fill-transparent text-gray-300'}`} />
                      ))}
                    </div>
                    <h4 className="font-bold text-lg mb-2">"{review.title}"</h4>
                    <p className="text-gray-600 mb-4">{review.body}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-gray-700">{review.user}</span>
                        <CheckCircle2 className="w-3 h-3 text-green-500 fill-current" />
                        <span>| Verified buyer</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span>From Tira</span>
                        <span>{review.date}</span>
                        <button className="flex items-center gap-1 hover:text-gray-700">
                          <ThumbsUp className="w-3 h-3" /> {review.likes}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Summary of Reviews */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm sticky top-[104px]">
                <div className="text-center mb-6">
                  <h3 className="text-5xl font-display font-extrabold mb-2">4.8</h3>
                  <div className="flex justify-center text-[#D97979] mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="font-body text-sm text-gray-500">Based on 181 reviews</p>
                </div>
                
                <div className="space-y-3 font-body text-sm">
                  {[
                    { stars: 5, count: 118, pct: 65 },
                    { stars: 4, count: 59, pct: 32 },
                    { stars: 3, count: 3, pct: 2 },
                    { stars: 2, count: 0, pct: 0 },
                    { stars: 1, count: 1, pct: 1 },
                  ].map((row) => (
                    <div key={row.stars} className="flex items-center gap-3">
                      <span className="w-12 text-right whitespace-nowrap text-gray-600">{row.stars} Stars</span>
                      <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#D97979] rounded-full" style={{ width: `${row.pct}%` }} />
                      </div>
                      <span className="w-8 text-left text-gray-400">({row.count})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like: Restored Mapping and Tiles */}
        <div className="mt-24 pt-16 border-t-2 border-hok">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold uppercase leading-[1.1]">
              You May <br /> Also Like
            </h2>
            <Link to="/" className="text-sm font-bold uppercase tracking-widest hover:underline pb-1 hidden md:block">
              Shop All →
            </Link>
          </div>
          
          <div className="flex overflow-x-auto gap-6 md:gap-8 pb-8 snap-x" style={{ scrollbarWidth: 'none' }}>
            {SIMILAR_PRODUCTS.map((p, i) => (
              <div key={i} className="w-[72vw] sm:w-[40vw] md:w-[28vw] lg:w-[22vw] shrink-0 snap-start bg-white/90 rounded-2xl p-4 shadow-xl backdrop-blur-md">
                <ProductTile {...p} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
