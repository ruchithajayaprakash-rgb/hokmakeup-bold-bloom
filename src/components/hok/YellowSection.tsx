import { HorizontalScrollLock } from "./HorizontalScrollLock";
import { ShopAllTile } from "./ProductTile";

export function YellowSection() {
  return (
    <HorizontalScrollLock heading="BRANDS ON BOARD" bg="bg-hok-yellow">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="relative aspect-[3/4] sm:w-[40vw] md:w-[28vw] lg:w-[24vw] shrink-0 rounded-2xl border-2 border-dashed border-hok bg-white/40 flex items-center justify-center"
        >
          <span className="text-xs font-body uppercase tracking-widest opacity-50">Brand Logo</span>
        </div>
      ))}
      <div className="relative aspect-[3/4] w-[68vw] sm:w-[40vw] md:w-[28vw] lg:w-[24vw] shrink-0">
        <ShopAllTile
          label="Shop All Brands →"
          pastelClass="bg-[var(--hok-pastel-yellow)]"
          boldClass="bg-hok-text text-white"
        />
      </div>
    </HorizontalScrollLock>
  );
}
