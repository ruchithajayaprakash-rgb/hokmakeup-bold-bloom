import { useRef, useState, type MouseEvent } from "react";

// Adjusted 'left' values to ensure they are centered as a group with equal margins
const CATEGORIES = [
  { name: "New Arrivals", top: "25%", left: "15%", size: "w-24 h-24 md:w-32 md:h-32" },
  { name: "Brands", top: "60%", left: "25%", size: "w-20 h-20 md:w-28 md:h-28" },
  { name: "Makeup", top: "28%", left: "38%", size: "w-28 h-28 md:w-40 md:h-40" },
  { name: "Skin", top: "62%", left: "50%", size: "w-24 h-24 md:w-32 md:h-32" },
  { name: "Hair", top: "25%", left: "62%", size: "w-20 h-20 md:w-28 md:h-28" },
  { name: "Fragrance", top: "58%", left: "75%", size: "w-28 h-28 md:w-36 md:h-36" },
  { name: "Offers", top: "26%", left: "85%", size: "w-20 h-20 md:w-28 md:h-28" },
];

function CategoryFloat({
  name,
  top,
  left,
  size,
}: {
  name: string;
  top: string;
  left: string;
  size: string;
}) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 select-none"
      style={{ top, left }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`${size} rounded-2xl border-2 border-dashed border-hok bg-white/15 backdrop-blur-[1px] transition-transform duration-300 hover:scale-105 cursor-pointer`}
      />
      {hover && (
        <div className="animate-hok-pop absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-full bg-hok-text px-4 py-2 text-sm font-semibold text-white shadow-lg z-50">
          {name}
        </div>
      )}
    </div>
  );
}

export function PurpleHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorActive, setCursorActive] = useState(false);

  const onMove = (e: MouseEvent) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect || !cursorRef.current) return;
    cursorRef.current.style.transform = `translate(${e.clientX - rect.left - 60}px, ${e.clientY - rect.top - 60}px)`;
  };

  return (
    <section id="top" className="bg-hok-purple text-hok">
      {/* Categories Section - Centered and Contained */}
      <div className="relative mx-auto max-w-[1400px] h-[48vh] min-h-[420px] md:h-[45vh] pt-16 md:pt-20 overflow-hidden flex flex-col justify-between">
        <div className="relative flex-grow">
          {CATEGORIES.map((c) => (
            <CategoryFloat key={c.name} {...c} />
          ))}
        </div>
        
        {/* Centered Small Heading */}
        <div className="pb-8 text-center">
          <h2 className="font-display font-extrabold text-lg md:text-xl tracking-widest uppercase opacity-80">
            Categories
          </h2>
        </div>
      </div>

      {/* Hero: ~70vh - Sticky with top-20 */}
      <div
        ref={heroRef}
        className="sticky top-20 z-10 h-[70vh] min-h-[520px] w-full overflow-hidden cursor-none"
        onMouseEnter={() => setCursorActive(true)}
        onMouseLeave={() => setCursorActive(false)}
        onMouseMove={onMove}
      >
        {/* Video placeholder */}
        <div className="absolute inset-0 m-6 md:m-10 rounded-3xl border-2 border-dashed border-hok bg-white/10 flex items-center justify-center backdrop-blur-sm">
          <video
            className="h-full w-full rounded-3xl object-cover"
            controls
            preload="none"
            poster=""
          >
            <source src="" type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="font-display font-extrabold leading-[0.95] text-[clamp(2.5rem,7vw,7rem)] max-w-[14ch]">
              Beauty is for all, so why restrict it to borders?
            </h1>
            <div className="mt-8 font-display text-2xl md:text-4xl font-bold">HOKmakeup</div>
          </div>
        </div>

        {/* Custom cursor */}
        <div
          ref={cursorRef}
          className={`pointer-events-none absolute left-0 top-0 h-[120px] w-[120px] rounded-full bg-hok-text text-white flex items-center justify-center text-sm font-bold font-body transition-opacity duration-200 ${
            cursorActive ? "opacity-100" : "opacity-0"
          }`}
        >
          Shop Now
        </div>
      </div>
    </section>
  );
}
