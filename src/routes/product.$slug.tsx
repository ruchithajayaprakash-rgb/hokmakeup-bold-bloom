import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/hok/Header";
import { ProductTile } from "@/components/hok/ProductTile";
import { Star, ThumbsUp, ChevronDown, CheckCircle2 } from "lucide-react";

// Route definition
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
      {
