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
      {/* FIX 1: Split py into pt (padding-top) and pb (padding-bottom) to reduce the initial pink space */}
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 pt-6 pb-12 md:pt-10 md:pb-20">
        
        {/* FIX 2: Changed top-20 to top-24 (mobile) and top-32 (desktop) so it completely clears the taller purple header */}
        <div className="sticky top-24 md:top-32 z-30 bg-hok-pink -mx-6 px-6 md:-mx-12 md:px-12 py-4 mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display font-extrabold leading-[1.1] text-3xl md:text-4xl lg:text-5xl max-w-[15ch]">
            BACK BY POPULAR DEMAND
          </h2>
          <p className="font-body text-xs md:text-sm max-w-sm opacity-80">
            The cult favourites you kept asking for — restocked, refreshed and ready to ship.
          </p>
        </div>

        {/* Master container: Dash border wraps everything (5 products + 1 button) */}
        <div className="relative rounded-[2rem] border-2 border-dashed border-hok bg-white/20 p-6 md:p-12">
          
          {/* Hero Placeholder behind all items */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-xs font-body uppercase tracking-[0.2em] opacity-10">Hero Image Placeholder</span>
          </div>

          {/* Grid Layout: 3 columns on desktop ensures 3 items top, 3 items bottom */}
          <div className="relative grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            
            {/* All 5 products are now in this primary grid */}
            {PRODUCTS.map((p) => (
              <div
                key={p.name}
                className="bg-white/90 rounded-2xl p-3 md:p-5 shadow-xl backdrop-blur-md"
              >
                <ProductTile {...p} />
              </div>
            ))}
            
            {/* The Shop All Tile takes the 6th slot, completing the 3x2 grid */}
            <ShopAllTile
              label="Shop all back in stock →"
              pastelClass="bg-[var(--hok-pastel-pink)]"
              boldClass="bg-hok-text text-white"
            />
            
          </div>
        </div>

      </div>
    </section>
  );
}
