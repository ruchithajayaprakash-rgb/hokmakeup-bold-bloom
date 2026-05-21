import { HorizontalScrollLock } from "./HorizontalScrollLock";
import { ShopAllTile } from "./ProductTile";

export function YellowSection() {
  // We added 'h-fit' to keep the ratio and 'max-h' to prevent vertical overgrowth
  const sizeRule = "relative aspect-[3/4] h-fit w-[65vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] shrink-0";

  return (
    /* I added 'pb-12' (padding bottom) to manually control the gap at the bottom */
    <div className="bg-hok-yellow pb-12 md:pb-20">
      <HorizontalScrollLock heading="BRANDS ON BOARD" bg="bg-hok-yellow">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`${sizeRule} rounded-2xl border-2 border-dashed border-hok bg-white/40 flex items-center justify-center`}
          >
            <span className="text-xs font-body uppercase tracking-widest opacity-50">Brand Logo</span>
          </div>
        ))}
        
        <div className={sizeRule}>
          <ShopAllTile
            label="Shop All Brands →"
            pastelClass="bg-[var(--hok-pastel-yellow)]"
            boldClass="bg-hok-text text-white"
          />
        </div>
      </HorizontalScrollLock>
    </div>
  );
}
