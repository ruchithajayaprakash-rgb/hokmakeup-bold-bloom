import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/hok/Header";
import { PriceLine } from "@/components/hok/Price";
import { ProductTile } from "@/components/hok/ProductTile";
import { Star, ThumbsUp, ChevronDown, CheckCircle2 } from "lucide-react";

// This matches the path: src/routes/product/$slug.tsx
export const Route = createFileRoute("/product/$slug")({
  component: ProductPage,
});

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
  { name: "Milani Color Fetish Balm Lipstick", sale: "₹999", mrp: "₹1,250", discount: "20% OFF", shades: [{ color: "#D6A789", label: "Nude" }] },
  { name: "Pinkflash Watery Transferproof Lip", sale: "₹591", mrp: "₹695", discount: "15% OFF", shades: [{ color: "#F1A3E0", label: "Pink" }] },
  { name: "Revolution Forever Flawless Palette", sale: "₹1,488", mrp: "₹1,750", discount: "15% OFF", shades: [{ color: "#6B1E2A", label: "Burgundy" }] },
  { name: "Focallure Glisten Opal Lip Balm", sale: "₹995", mrp: "₹1,295", discount: "23% OFF" },
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
          
          {/* Image Carousel */}
          <div className="relative aspect-[4/5] rounded-3xl border-2 border-dashed border-hok bg-white/40 sticky top-[104px] h-fit overflow-hidden group">
            <div 
              className="flex h-full w-full overflow-x-auto snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle:
