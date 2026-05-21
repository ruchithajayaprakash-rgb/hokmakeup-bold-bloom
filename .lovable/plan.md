# Fix header icons being cut off

## Problem

In the screenshot, the rightmost header icons (heart, bag) sit flush against the viewport edge and the bag icon is partially clipped by the vertical scrollbar. The header uses `max-w-[1600px]` with `px-6 md:px-12`, but at ~1261px viewport the inner row stretches edge-to-edge and the scrollbar eats into the last icon.

## Fix

In `src/components/hok/Header.tsx`:

- Bump horizontal padding so icons never touch the edge: `px-6 md:px-10 lg:px-14`.
- Add `pr-[max(theme(spacing.6),env(safe-area-inset-right))]` style fallback via an extra `pr-8 md:pr-12` on the nav itself, or simply increase the container's right padding to `pr-8 md:pr-14` so there's breathing room against the scrollbar.
- Give the nav `gap-3 md:gap-6` (slightly tighter) so 4 icons + extra right padding fit comfortably.
- Ensure icon buttons keep their `p-2` hit target but the wrapper has `shrink-0` so they never get squeezed.

## Technical notes

- Only file touched: `src/components/hok/Header.tsx`.
- No layout, route, or behavior changes.
- Verify at 1261px viewport (current preview) that all 4 icons are fully visible with clear space to the right.
