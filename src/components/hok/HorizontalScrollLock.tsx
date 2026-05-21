import { useEffect, useRef, type ReactNode } from "react";

/**
 * Horizontal scroll-lock section.
 * While the section is pinned, vertical scroll is translated into horizontal
 * scroll across an inner track. Section height is compact (not full viewport)
 * so the page doesn't feel like an endless tall block.
 */
export function HorizontalScrollLock({
  heading,
  bg,
  children,
  sectionHeight = "78vh",
}: {
  heading: string;
  bg: string;
  children: ReactNode;
  sectionHeight?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!wrapper || !sticky || !track) return;

    const setHeight = () => {
      const distance = track.scrollWidth - window.innerWidth;
      const stickyH = sticky.offsetHeight;
      // total scroll length = sticky height + horizontal distance
      wrapper.style.height = `${stickyH + Math.max(0, distance)}px`;
    };
    setHeight();

    const onScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const distance = track.scrollWidth - window.innerWidth;
      if (distance <= 0) return;
      const progress = Math.min(1, Math.max(0, -rect.top / distance));
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
      <div
        ref={stickyRef}
        className="sticky top-0 overflow-hidden flex flex-col"
        style={{ height: sectionHeight }}
      >
        <div className="px-6 md:px-12 pt-10 md:pt-14">
          <h2 className="font-display font-extrabold leading-[0.9] text-[clamp(2.5rem,7vw,6.5rem)]">
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
