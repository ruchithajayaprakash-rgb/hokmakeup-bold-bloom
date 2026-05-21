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
      {/* 1. Reduced vertical padding (py-12 md:py-20 instead of py-36) */}
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-12 md:py-20">
        
        {/* 2. Reduced margin-bottom (mb-8 md:mb-12) and gap (gap-2) */}
        <div className="mb-8 md:mb-12 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          {/* 3. Slightly smaller text (text-3xl to 5xl) to reduce height */}
          <h2 className="font-display font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl max-w-[15ch]">
            Back by Popular Demand
          </h2>
          <p className="font-body text-xs md:text-sm max-w-sm opacity-80">
            The cult favourites you kept asking for — restocked, refreshed and ready to ship.
          </p>
        </div>

        <div className="relative rounded-[2rem] border-2 border-dashed border-hok bg-white/20 p-6 md:p-12">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-xs font-body uppercase tracking-[0.2em] opacity-10">Hero Image Placeholder</span>
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {PRODUCTS.slice(0, 4).map((p) => (
              <div
                key={p.name}
                className="bg-white/90 rounded-2xl p-3 md:p-5 shadow-xl backdrop-blur-md"
              >
                <ProductTile {...p} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white/60 rounded-2xl p-4 md:p-5 backdrop-blur-sm">
            <ProductTile {...PRODUCTS[4]} />
          </div>
          <ShopAllTile
            label="Shop all back in stock →"
            pastelClass="bg-[var(--hok-pastel-pink)]"
            boldClass="bg-hok-text text-white"
          />
        </div>
      </div>
    </section>
  );
}
