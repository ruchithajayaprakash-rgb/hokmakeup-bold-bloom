import { ProductTile, ShopAllTile } from "./ProductTile";

const PRODUCTS = [
  {
    name: "Pinkflash Watery Transferproof Lip Cream",
    sale: "₹591",
    mrp: "₹695",
    discount: "15% OFF",
    shades: [
      { label: "Peach", color: "#F4A88A" },
      { label: "Pink", color: "#F1A3E0" },
      { label: "Coral", color: "#E5746A" },
      { label: "+3", isText: true, text: "+3" },
    ],
  },
  {
    name: "Revolution Skin Silk Serum Foundation",
    sale: "₹931",
    mrp: "₹1,095",
    discount: "15% OFF",
    shades: [
      { label: "Light Nude", color: "#F0D2B8" },
      { label: "Medium Nude", color: "#C99A78" },
      { label: "Dark Skin Tone", color: "#5C3A2A" },
      { label: "+9", isText: true, text: "+9" },
    ],
  },
  {
    name: "Revolution Kiss Drip Water Lip Tint",
    sale: "₹716",
    mrp: "₹795",
    discount: "10% OFF",
    href: "/product/revolution-kiss-drip-water-lip-tint",
    shades: [
      { label: "Nude", color: "#D6A789" },
      { label: "Dark Red", color: "#7A1F2B" },
      { label: "Brown", color: "#7A4A36" },
      { label: "+2", isText: true, text: "+2" },
    ],
  },
  {
    name: "Revolution Forever Flawless Eyeshadow Palette",
    sale: "₹1,488",
    mrp: "₹1,750",
    discount: "15% OFF",
    shades: [
      { label: "Burgundy", color: "#6B1E2A" },
      { label: "Gold", color: "#D4AF37" },
      { label: "Bright Blue", color: "#2C6BE0" },
      { label: "+6", isText: true, text: "+6" },
    ],
  },
  {
    name: "Revolution Hydra Cool Loose Baking Powder",
    sale: "₹750",
    mrp: "₹950",
    discount: "21% OFF",
  },
];

export function PinkSection() {
  return (
    <section className="bg-hok-pink text-hok">
      <div className="mx-auto max-w-
