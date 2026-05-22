import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/hok/Header";
import { PriceLine } from "@/components/hok/Price";

export const Route = createFileRoute("/product/$slug")({
  component: ProductPage,
  head: ({ params }) => ({
    meta: [{ title: `Revolution Kiss Drip Water Lip Tint — HOKmakeup` }],
  }),
});

// Mock Data for the UI sections
const SWATCHES = [
  { id: 1, color: "#8B0000", selected: true }, // Melon Mist / Cherry Ade equivalent
  { id: 2, color: "#000000", selected: false },
  { id: 3, color: "#C71585", selected: false },
  { id: 4, color: "#B22222", selected: false },
  { id: 5, color: "#800080", selected: false },
  { id: 6, color: "#DC143C", selected: false },
  { id: 7, color: "#660000", selected: false },
];

const REVIEWS = [
  { id: 1, rating: 5, title: '"Good and affordable"', text: "Good tint and affordable for daily use.", author: "Simran Rajput", verified: true, date: "13 Apr, 2026" },
  { id: 2, rating: 5, title: '"Love"', text: "Beautiful shade and lasts quite a while.", author: "Anonymous", verified: true, date: "13 Apr, 2026" },
  { id: 3, rating: 5, title: '"Must have product"', text: "Really love the consistency.", author: "Priya S.", verified: true, date: "12 Apr, 2026" },
  { id: 4, rating: 4, title: '"Best blush I\'ve ever used"', text: "Works great on cheeks too!", author: "Khushi Khanna", verified: true, date: "12 Apr, 2026" },
];

const RELATED_PRODUCTS = [
  { id: 1, name: "Revolution Pout Bomb", price: "₹550", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=300" },
  { id: 2, name: "Makeup Obsession Gloss", price: "₹450", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=300" },
  { id: 3, name: "Relove Baby Gloss", price: "₹350", image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=300" },
  { id: 4, name: "Revolution Pro Lip Oil", price: "₹850", image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=300" },
];

function ProductPage() {
  const { slug } = Route.useParams();
  const title = "Revolution Kiss Drip Water Lip Tint";

  return (
    <main className="min-h-screen bg-hok-pink text-hok">
      <Header />
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
        
        {/* Top Section: Image & Main Details */}
        <div className="grid gap-12 md:grid-cols-2">
          
          {/* Left: Product Image */}
          <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed border-hok bg-white/40 sticky top-24 h-fit">
            <img 
              src="
