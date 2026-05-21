# Fix category placeholder cutoff in PurpleHero

The dashed category tiles at the top of the purple hero section are getting clipped by the header above and by the section's own `overflow-hidden`.

## Changes

Only file touched: `src/components/hok/PurpleHero.tsx`.

- Add top padding to the categories container so tiles sit below the fixed header: `pt-16 md:pt-20`.
- Increase the categories container height slightly so the lower-row tiles aren't cropped at the bottom: `h-[44vh] min-h-[380px] md:h-[40vh]`.
- Nudge the top-row tile positions down (`top: 18%` instead of `12–15%`) and the bottom-row tiles up (`top: 58%` instead of `62%`) so all 7 tiles fit comfortably inside the container.
- Keep `overflow-hidden` (intentional for the floating-tiles aesthetic) and leave the hero video block untouched.

No header, routing, or behavior changes.
