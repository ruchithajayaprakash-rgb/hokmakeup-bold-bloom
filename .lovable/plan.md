## Shrink "Shop All" tile to match product tile height

The Shop All tile currently stretches to the full track height (`h-full`), while product tiles only occupy the 3:4 image area plus a short text block below. Result: the Shop All tile is visibly taller than every product tile in both New Arrivals and Brands On Board.

### Change

Only file touched: `src/components/hok/ProductTile.tsx` — `ShopAllTile`.

- Replace `flex h-full w-full` with `flex aspect-[3/4] w-full` so the tile matches the product image's 3:4 box (same width, same height as a product tile's image area).
- Drop the outer `h-full` reliance; the wrapper `<div>` around `<ShopAllTile />` in `NewArrivalsSection.tsx` and `YellowSection.tsx` can stay as-is (no edits needed) since the tile now sizes itself.
- Optionally tighten the hover scale to keep large text from overflowing the smaller box (`scale-105` instead of `scale-110`).

No changes to `HorizontalScrollLock`, section files, layout, or behavior.
