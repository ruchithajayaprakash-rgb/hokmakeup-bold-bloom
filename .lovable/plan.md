## Goal

When a `HorizontalScrollLock` section (New Arrivals, Brands On Board) enters scroll-lock, the section's heading should sit just under the purple sticky header — and the horizontal scroll should only start at that moment. Right now the section pins flush to `top: 0`, so the fixed header covers the heading and horizontal translation begins before the heading is on screen.

## Approach

Offset the sticky child by the header height, shrink its height by the same amount, and adjust the progress math so horizontal translation begins exactly when the section reaches the pin point (not when it reaches `top: 0`).

### Changes in `src/components/hok/HorizontalScrollLock.tsx`

1. Read the header height at runtime (measure `<header>` once on mount and on resize) and store it as a CSS variable / state value — call it `headerOffset`. Fallback to `0` if no header is found.
2. Apply it to the sticky element:
   - `style={{ top: headerOffset, height: \`calc(100vh - ${headerOffset}px)\` }}`
   - Remove `top-0` Tailwind class.
3. Update the progress calculation:
   - `progress = clamp((headerOffset - rect.top) / distance, 0, 1)`
   - So translation starts the instant the section's top crosses the header's bottom edge (pin point), not when it hits the viewport top.
4. Keep `wrapper.style.height = stickyH + distance` as today; `stickyH` will now be the reduced height, which is correct.

### No changes needed elsewhere

- `Header.tsx`, `routes/index.tsx`, `ProductTile.tsx` stay as they are.
- Both horizontal-lock sections (New Arrivals + Brands On Board) inherit the fix automatically since they share this component.

## Technical notes

- Measuring the header avoids hard-coding `88px` and stays correct across breakpoints (header has `py-5 md:py-7`).
- Using a `ResizeObserver` on the header element (in addition to the existing observers) keeps `headerOffset` accurate if the header height changes responsively.
- The existing scroll listener already runs on every scroll, so once `headerOffset` is captured, no extra per-frame work is added.
