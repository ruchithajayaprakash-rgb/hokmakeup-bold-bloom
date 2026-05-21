# Fix clipped placeholders in hero categories section

## Problem

The sticky purple header overlays the top of the categories area, and the topmost dashed placeholder tiles (positioned at `top: 12–20%`) are clipped by the header. The container also uses `overflow-hidden`, which hard-crops anything that bleeds past its edges.

## Fix

In `src/components/hok/PurpleHero.tsx`:

- Add top padding to the categories container so floats start below the sticky header: `pt-10 md:pt-16`.
- Slightly increase the container height to compensate (`h-[46vh] min-h-[380px] md:h-[42vh]`) so the lower-row placeholders aren't pushed into the hero block.
- Nudge the topmost float positions down a touch (`top: 18%` instead of `12–15%`) so they sit fully inside the padded area rather than relying on padding alone.
- Keep `overflow-hidden` (intentional for the floating-tiles effect) but ensure no tile's bounding box extends above `top: 8%` after the size offsets.

## Technical notes

- Only file touched: `src/components/hok/PurpleHero.tsx`.
- No header changes, no layout/route changes.
- Verify at 1261×853 viewport that all 7 dashed placeholders are fully visible with clear space below the header.
