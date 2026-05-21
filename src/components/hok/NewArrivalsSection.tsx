import { HorizontalScrollLock } from "./HorizontalScrollLock";
import { ProductTile, ShopAllTile } from "./ProductTile";

const PRODUCTS = [
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
  {
    name: "Revolution K-Beauty Blur Lip Shaper",
    sale: "₹595",
    mrp: "₹750",
    discount: "21% OFF",
    shades: [
      { label: "Brown", color: "#7A4A36" },
      { label: "Pink", color: "#F1A3E0" },
      { label: "Red", color: "#C82B3A" },
      { label: "+5", isText: true, text: "+5" },
    ],
  },
  {
    name: "Pinkflash Long-Wear Liquid Eyeliner",
    sale: "₹445",
    mrp: "₹495",
    discount: "10% OFF",
  },
  {
    name: "Revolution Fierce Flick Felt Eyeliner Pen",
    sale: "₹380",
    mrp: "₹399",
    discount: "5% OFF",
    shades: [
      { label: "Cherry Burgundy", color: "#6B1E2A" },
      { label: "Black", color: "#0E0E10" },
    ],
  },
  {
    name: "Focallure Every Lip Mood Kit",
    sale: "₹1,499",
    mrp: "₹2,665",
    discount: "44% OFF",
  },
];

export function NewArrivalsSection() {
  return (
    <HorizontalScrollLock heading="NEW ARRIVALS" bg="bg-hok-lime">
      {PRODUCTS.map((p) => (
        <div key={p.name} className="w-[78vw] sm:w-[44vw] md:w-[32vw] lg:w-[24vw] shrink-0">
          <ProductTile {...p} />
        </div>
      ))}
      <div className="w-[78vw] sm:w-[44vw] md:w-[32vw] lg:w-[24vw] shrink-0">
        <ShopAllTile
          label="Shop All New Arrivals →"
          pastelClass="bg-[var(--hok-pastel-lime)]"
          boldClass="bg-hok-text text-white"
        />
      </div>
    </HorizontalScrollLock>
  );
}
