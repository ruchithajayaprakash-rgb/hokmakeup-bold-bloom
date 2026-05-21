import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Horizontal scroll-lock section powered by Framer Motion.
 * The outer container provides a 300vh scroll track; the inner sticky
 * wrapper pins to the viewport while vertical scroll progress is mapped
 * to a horizontal translate on the product track.
 */
export function HorizontalScrollLock({
  heading,
  bg,
  children,
}: {
  heading: string;
  bg: string;
  children: ReactNode;
  sectionHeight?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={containerRef} className={`relative h-[300vh] w-full ${bg} text-hok`}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div className="px-6 md:px-12 py-12 md:py-16">
          <h2 className="font-display font-extrabold leading-[0.9] text-[clamp(2rem,5.5vw,5rem)]">
            {heading}
          </h2>
        </div>
        <div className="flex items-center overflow-hidden py-12 md:py-16">
          <motion.div
            style={{ x }}
            className="flex items-stretch gap-6 md:gap-8 pl-6 md:pl-12 will-change-transform"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
