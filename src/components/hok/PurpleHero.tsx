import { useRef, useState, type MouseEvent } from "react";

const CATEGORIES = [
  { name: "New Arrivals", top: "12%", left: "6%", size: "w-24 h-24 md:w-32 md:h-32" },
  { name: "Brands", top: "55%", left: "18%", size: "w-20 h-20 md:w-28 md:h-28" },
  { name: "Makeup", top: "20%", left: "30%", size: "w-28 h-28 md:w-40 md:h-40" },
  { name: "Skin", top: "62%", left: "45%", size: "w-24 h-24 md:w-32 md:h-32" },
  { name: "Hair", top: "15%", left: "58%", size: "w-20 h-20 md:w-28 md:h-28" },
  { name: "Fragrance", top: "50%", left: "72%", size: "w-28 h-28 md:w-36 md:h-36" },
  { name: "Offers", top: "20%", left: "85%", size: "w-20 h-20 md:w-28 md:h-28" },
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
        className={`${size} rounded-2xl border-2 border-dashed border-hok bg-white/15 backdrop-blur-[1px] transition-transform duration-300 hover:scale-105`}
      />
      {hover && (
        <div className="animate-hok-pop absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-full bg-hok-text px-4 py-2 text-sm font-semibold text-white shadow-lg">
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
      {/* Categories: ~30vh */}
      <div className="relative h-[40vh] min-h-[320px] md:h-[35vh] overflow-hidden">
        {CATEGORIES.map((c) => (
          <CategoryFloat key={c.name} {...c} />
        ))}
      </div>

      {/* Hero: ~70vh */}
      <div
        ref={heroRef}
        className="relative h-[70vh] min-h-[520px] w-full overflow-hidden cursor-none"
        onMouseEnter={() => setCursorActive(true)}
        onMouseLeave={() => setCursorActive(false)}
        onMouseMove={onMove}
      >
        {/* Video placeholder */}
        <div className="absolute inset-0 m-6 md:m-10 rounded-3xl border-2 border-dashed border-hok bg-white/10 flex items-center justify-center">
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
