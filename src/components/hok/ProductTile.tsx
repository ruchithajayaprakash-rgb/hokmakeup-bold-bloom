import { useState, type ReactNode } from "react";
import { PriceLine, ShadeCircles, type Shade } from "./Price";

export function ProductTile({
  name,
  sale,
  mrp,
  discount,
  shades,
  onClick,
  href,
}: {
  name: string;
  sale: string;
  mrp: string;
  discount: string;
  shades?: Shade[];
  onClick?: () => void;
  href?: string;
}) {
  const [hover, setHover] = useState(false);
  const Wrapper: any = href ? "a" : "div";
  const wrapperProps = href ? { href } : {};

  return (
    <Wrapper
      {...wrapperProps}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`group flex h-full w-full flex-col ${href ? "cursor-pointer" : ""}`}
    >
      {/* Dual image placeholder — 3:4 ratio */}
      <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden rounded-2xl border-2 border-dashed border-hok bg-white/40">
        <div
          className={`absolute inset-0 flex items-center justify-center text-xs font-body uppercase tracking-widest opacity-60 transition-opacity duration-500 ${
            hover ? "opacity-0" : "opacity-60"
          }`}
        >
          Image 1
        </div>
        <div
          className={`absolute inset-0 flex items-center justify-center text-xs font-body uppercase tracking-widest bg-white/60 transition-opacity duration-500 ${
            hover ? "opacity-80" : "opacity-0"
          }`}
        >
          Image 2 (hover)
        </div>
      </div>

      <div className="mt-4 flex shrink-0 flex-col gap-2">
        <h3 className="font-body text-sm md:text-base font-semibold leading-snug line-clamp-2 min-h-[2.6em]">{name}</h3>
        <PriceLine sale={sale} mrp={mrp} discount={discount} />
        <ShadeCircles shades={shades} />
      </div>
    </Wrapper>
  );
}

export function ShopAllTile({
  label,
  pastelClass,
  boldClass,
}: {
  label: string;
  pastelClass: string;
  boldClass: string;
}) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-hok p-8 transition-colors duration-500 ${
        hover ? boldClass : pastelClass
      }`}
    >
      <span
        className={`text-center font-display font-extrabold leading-[0.95] transition-all duration-500 ${
          hover ? "text-4xl md:text-6xl scale-110" : "text-2xl md:text-3xl scale-100"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export function SectionShell({
  bg,
  children,
}: {
  bg: string;
  children: ReactNode;
}) {
  return <section className={`${bg} text-hok`}>{children}</section>;
}
