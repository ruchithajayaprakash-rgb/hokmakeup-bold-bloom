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
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-36">
        <div className="mb-16 md:mb-24 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display font-extrabold leading-[0.9] text-[clamp(2.5rem,7vw,7rem)] max-w-[12ch]">
            Back by Popular Demand
          </h2>
          <p className="font-body text-base md:text-lg max-w-md opacity-80">
            The cult favourites you kept asking for — restocked, refreshed and ready to ship.
          </p>
        </div>

        {/* Full-block background placeholder with overlapping tiles */}
        <div className="relative">
          <div className="relative aspect-[4/1] w-full rounded-3xl border-2 border-dashed border-hok bg-white/30 flex items-center justify-center">
            <span className="text-sm font-body uppercase tracking-widest opacity-50">Hero Image Placeholder</span>
          </div>

          {/* Overlapping tiles — partially over the edges */}
          <div className="relative -mt-16 md:-mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 px-0 md:px-6">
            {PRODUCTS.slice(0, 4).map((p, i) => (
              <div
                key={p.name}
                className={`${i === 0 ? "md:-translate-y-10" : ""} ${i === 1 ? "md:translate-y-6" : ""} ${i === 2 ? "md:-translate-y-6" : ""} ${i === 3 ? "md:translate-y-10" : ""} bg-white/60 rounded-2xl p-4 md:p-5 backdrop-blur-sm`}
              >
                <ProductTile {...p} />
              </div>
            ))}
          </div>
        </div>

        {/* 5th tile + Shop all 6th — natural scroll */}
        <div className="mt-24 md:mt-40 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
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
