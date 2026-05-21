# Tighten horizontal-scroll sections

## Problem

The "NEW ARRIVALS" (lime) and "BRANDS ON BOARD" (yellow) sections feel half-empty and the page keeps scrolling vertically while horizontal scroll plays out. The sticky pin is only `78vh` tall, so a strip of the next/previous section is always visible — making it look like the page is scrolling vertically and horizontally at the same time.

## Fix

### 1. Fully pin the section while horizontal scroll runs

In `src/components/hok/HorizontalScrollLock.tsx`:

- Default `sectionHeight` to `100vh` (sticky element fills the viewport) so nothing above/below shows through during the pinned phase. The page only resumes vertical scroll once the horizontal track is fully translated.
- Keep the wrapper-height formula `stickyHeight + horizontalDistance` so total scroll length exactly matches the horizontal travel — no trailing dead space.
- Shorten horizontal travel: drop the trailing `pr-[12vw]` padding on the track and reduce gap to `gap-6 md:gap-8`. Less empty space at the end of the track and overall shorter pinned scroll.
- Tighten vertical rhythm inside the sticky: smaller heading top padding (`pt-6 md:pt-8`), reduce heading clamp to `clamp(2rem,5.5vw,5rem)`, center the track vertically in the remaining space (already `flex-1 items-center`).

### 2. Make the tiles fill the pinned viewport better

- In `NewArrivalsSection.tsx`, give each tile wrapper an explicit `h-full` max-height container and slightly wider cards on large screens (`lg:w-[22vw]`) so the row visually fills width and height — no large gap below product info.
- In `ProductTile.tsx`, swap the image aspect from `aspect-[4/5]` to `flex-1 min-h-0` inside a column with fixed-height meta block, so the card stretches to the available pinned height instead of leaving white space underneath.
- In `YellowSection.tsx`, enlarge brand tiles to `lg:w-[24vw]` and use `h-[60vh]` instead of `aspect-square` so they fill the pinned viewport vertically.

### 3. No JS scroll-locking

The sticky-pin pattern already prevents vertical movement of the section itself while the track translates — we do not add `overflow:hidden` on `<body>` or wheel listeners. That avoids breaking trackpad/inertia scrolling and accessibility.

## Technical notes

- File touched: `src/components/hok/HorizontalScrollLock.tsx`, `src/components/hok/NewArrivalsSection.tsx`, `src/components/hok/YellowSection.tsx`, `src/components/hok/ProductTile.tsx`.
- No new dependencies, no route changes.
- Verify by scrolling: when the lime/yellow heading reaches the top, vertical scroll should feel "paused" (background fixed) until the last card passes, then the page resumes downward scroll into the next section.
