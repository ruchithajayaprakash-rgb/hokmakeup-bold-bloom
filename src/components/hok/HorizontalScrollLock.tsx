import { useEffect, useRef, type ReactNode } from "react";

/**
 * Horizontal scroll-lock section.
 * Sticky element fills the viewport (h-fit) so the page appears pinned —
 * vertical scroll is consumed translating the inner track horizontally.
 * Once the track is fully translated, the page resumes vertical scrolling.
 */
export function HorizontalScrollLock({
  heading,
  bg,
  children,
  sectionHeight = "h-fit",
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

    const getDistance = () => Math.max(0, track.scrollWidth - sticky.clientWidth);

    const onScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const distance = getDistance();
      if (distance <= 0) return;
      const progress = Math.min(1, Math.max(0, -rect.top / distance));
      track.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
    };

    const setHeight = () => {
      const stickyH = sticky.offsetHeight;
      const distance = getDistance();
      wrapper.style.height = `${stickyH + distance}px`;
      onScroll();
    };

    const resizeObserver = new ResizeObserver(setHeight);
    resizeObserver.observe(sticky);
    resizeObserver.observe(track);
    requestAnimationFrame(setHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", setHeight);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", setHeight);
    };
  }, []);

  return (
    <section ref={wrapperRef} className={`relative ${bg} text-hok`}>
      <div
        ref={stickyRef}
        /* MATCHED ALIGNMENT: 
           Changed top offset to [72px] and [104px] to align with PinkSection header. 
        */
        className="sticky overflow-hidden flex flex-col top-[72px] md:top-[104px] z-30"
        style={{ height: sectionHeight }} 
      >
        {/* MATCHED PADDING: 
           Using py-4 (1rem) to match the vertical breathing room of the PinkSection.
        */}
        <div className="px-6 md:px-12 py-4 shrink-0">
          <h2 className="font-display leading-[1.1] text-3xl md:text-4xl lg:text-5xl shrink-0">
            {heading}
          </h2>
        </div>

        <div className="flex-1 min-h-0 flex items-start overflow-hidden pb-8 md:pb-10">
          <div
            ref={trackRef}
            className="flex h-full min-h-0 items-start gap-6 md:gap-8 px-6 md:px-12 will-change-transform"
            style={{ transition: "transform 0.05s linear" }}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
