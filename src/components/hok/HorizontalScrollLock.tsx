import { useEffect, useRef, type ReactNode } from "react";

/**
 * Horizontal scroll-lock section.
 * While the section is in view, vertical scroll is translated into horizontal
 * scroll across an inner track. When the track end is reached, vertical
 * scrolling resumes.
 */
export function HorizontalScrollLock({
  heading,
  bg,
  children,
}: {
  heading: string;
  bg: string;
  children: ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const setHeight = () => {
      const distance = track.scrollWidth - window.innerWidth;
      // total scroll length = viewport height (sticky) + horizontal distance
      wrapper.style.height = `${window.innerHeight + Math.max(0, distance)}px`;
    };
    setHeight();

    const onScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const distance = track.scrollWidth - window.innerWidth;
      if (distance <= 0) return;
      // progress: 0 when top hits viewport top, 1 when we've scrolled `distance` past
      const progress = Math.min(
        1,
        Math.max(0, -rect.top / distance),
      );
      track.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", setHeight);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", setHeight);
    };
  }, []);

  return (
    <section ref={wrapperRef} className={`relative ${bg} text-hok`}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        <div className="px-6 md:px-12 pt-20 md:pt-28">
          <h2 className="font-display font-extrabold leading-[0.9] text-[clamp(3rem,9vw,9rem)]">
            {heading}
          </h2>
        </div>
        <div className="flex-1 flex items-center overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-stretch gap-6 md:gap-10 pl-6 md:pl-12 pr-[12vw] will-change-transform"
            style={{ transition: "transform 0.05s linear" }}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
