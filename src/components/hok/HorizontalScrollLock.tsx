import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Horizontal scroll-lock section.
 * Sticky element pins below the site header — vertical scroll is consumed
 * translating the inner track horizontally. Once the track is fully
 * translated, the page resumes vertical scrolling.
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
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [headerOffset, setHeaderOffset] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;
    const update = () => setHeaderOffset(header.getBoundingClientRect().height);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(header);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

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
      const progress = Math.min(1, Math.max(0, (headerOffset - rect.top) / distance));
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
  }, [headerOffset]);

  return (
    <section ref={wrapperRef} className={`relative ${bg} text-hok`}>
      <div
        ref={stickyRef}
        className="sticky overflow-hidden flex flex-col"
        style={{ top: headerOffset, height: `calc(100vh - ${headerOffset}px)` }}
      >
        <div className="px-6 md:px-12 pt-6 md:pt-8 pb-8 md:pb-12 shrink-0">
          <h2 className="font-display font-extrabold leading-[0.9] text-[clamp(2rem,5.5vw,5rem)]">
            {heading}
          </h2>
        </div>
        <div className="flex-1 min-h-0 flex items-stretch overflow-hidden pb-8 md:pb-10">
          <div
            ref={trackRef}
            className="flex h-full min-h-0 items-stretch gap-6 md:gap-8 px-6 md:px-12 will-change-transform"
            style={{ transition: "transform 0.05s linear" }}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
