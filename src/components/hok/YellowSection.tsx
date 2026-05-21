import { HorizontalScrollLock } from "./HorizontalScrollLock";
import { ShopAllTile } from "./ProductTile";

export function YellowSection() {
  return (
    <HorizontalScrollLock heading="BRANDS ON BOARD" bg="bg-hok-yellow">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          /* h-[280px] is for mobile, md:h-[350px] is for desktop. Both use aspect-[3/4] to stay identical. */
          className="relative aspect-[3/4] h-[280px] md:h-[350px] shrink-0 rounded-2xl border-2 border-dashed border-hok bg-white/40 flex items-center justify-center"
        >
          <span className="text-xs font-body uppercase tracking-widest opacity-50">Brand Logo</span>
        </div>
      ))}
      <div className="relative aspect-[3/4] h-[280px] md:h-[350px] shrink-0">
        <ShopAllTile
          label="Shop All Brands →"
          pastelClass="bg-[var(--hok-pastel-yellow)]"
          boldClass="bg-hok-text text-white"
        />
      </div>
    </HorizontalScrollLock>
  );
}
