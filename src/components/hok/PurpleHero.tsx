import { useRef, useState, type MouseEvent } from "react";

// Categories data with local image paths uploaded via GitHub
const CATEGORIES = [
  { name: "New Arrivals", image: "/newarrivals.png", top: "25%", left: "15%", size: "w-24 h-24 md:w-32 md:h-32" },
  { name: "Brands", image: "/brands.png", top: "60%", left: "25%", size: "w-20 h-20 md:w-28 md:h-28" },
  { name: "Makeup", image: "/makeup.png", top: "28%", left: "38%", size: "w-28 h-28 md:w-40 md:h-40" },
  { name: "Skin", image: "/skin.png", top: "62%", left: "50%", size: "w-24 h-24 md:w-32 md:h-32" },
  { name: "Hair", image: "/hair.png", top: "25%", left: "62%", size: "w-20 h-20 md:w-28 md:h-28" },
  { name: "Fragrance", image: "/fragrance.png", top: "58%", left: "75%", size: "w-28 h-28 md:w-36 md:h-36" },
  { name: "Offers", image: "/offers.png", top: "26%", left: "85%", size: "w-20 h-20 md:w-28 md:h-28" },
];

function CategoryFloat({
  name,
  image,
  top,
  left,
  size,
}: {
  name: string;
  image: string;
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
        className={`${size} overflow-hidden rounded-2xl border-2 border-dashed border-hok bg-white/15 backdrop-blur-[1px] transition-transform duration-300 hover:scale-105 cursor-pointer`}
      >
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover" 
        />
      </div>
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
          <h2 className="font-display text-lg md:text-xl tracking-widest uppercase opacity-80">
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
        {/* Video placeholder container */}
        <div className="absolute inset-0 m-6 md:m-10 rounded-3xl border-2 border-dashed border-hok bg-white/10 flex items-center justify-center backdrop-blur-sm overflow-hidden">
          
          {/* FINAL UPDATE: Full Background Autoplay, Loop, Muted Video Configuration */}
          <video
            className="absolute inset-0 h-full w-full object-cover rounded-3xl z-0"
            autoPlay
            loop
            muted
            playsInline
          >
            <source 
              src="https://hokmakeup.com/cdn/shop/videos/c/vp/948bc4f786934027bc41baa59f0d4e06/948bc4f786934027bc41baa59f0d4e06.HD-720p-4.5Mbps-82999903.mp4?v=0" 
              type="video/mp4" 
            />
          </video>
          
          {/* Alignment elements (Text and Logo overlays over video) */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-end justify-center text-right px-8 md:px-16 z-10">
            <h1 className="font-display leading-[1.1] text-2xl md:text-3xl lg:text-4xl max-w-lg text-white drop-shadow-md">
              Beauty is for all, so why restrict it to borders?
            </h1>
            <img 
              src="/file.svg" 
              alt="HOKmakeup Logo" 
              className="mt-6 h-12 md:h-16 w-auto object-contain drop-shadow-md" 
            />
          </div>
        </div>

        {/* Custom cursor */}
        <div
          ref={cursorRef}
          className={`pointer-events-none absolute left-0 top-0 flex h-[120px] w-[120px] items-center justify-center rounded-full border-2 border-hok bg-white/10 backdrop-blur-sm transition-opacity duration-200 z-20 ${cursorActive ? "opacity-100" : "opacity-0"}`}
        >
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-white text-center leading-tight">
            Shop<br />Now
          </span>
        </div>
      </div>
    </section>
  );
}
