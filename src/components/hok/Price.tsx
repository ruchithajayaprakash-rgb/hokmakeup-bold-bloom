export type Shade = {
  label: string;
  color?: string; // css color
  isText?: boolean;
  text?: string;
};

export type Product = {
  id: string;
  name: string;
  sale: string;
  mrp: string;
  discount: string;
  shades?: Shade[];
};

export const PriceLine = ({
  sale,
  mrp,
  discount,
  size = "base",
}: {
  sale: string;
  mrp: string;
  discount: string;
  size?: "sm" | "base" | "lg";
}) => {
  const sizes = {
    sm: { sale: "text-sm", mrp: "text-xs", disc: "text-xs" },
    base: { sale: "text-base", mrp: "text-sm", disc: "text-xs" },
    lg: { sale: "text-xl", mrp: "text-base", disc: "text-sm" },
  }[size];

  return (
    <div className="flex items-baseline gap-2 flex-wrap">
      <span className={`${sizes.sale} font-bold font-body`}>{sale}</span>
      <span className={`${sizes.mrp} font-body line-through opacity-60`}>{mrp}</span>
      <span className={`${sizes.disc} font-body font-semibold text-hok-discount`}>{discount}</span>
    </div>
  );
};

export const ShadeCircles = ({ shades }: { shades?: Shade[] }) => {
  if (!shades || shades.length === 0) return <div className="h-6" />;
  return (
    <div className="flex items-center gap-1.5">
      {shades.map((s, i) =>
        s.isText ? (
          <div
            key={i}
            className="h-6 w-6 rounded-full border border-current flex items-center justify-center text-[10px] font-semibold font-body"
            title={s.label}
          >
            {s.text ?? s.label}
          </div>
        ) : (
          <div
            key={i}
            className="h-6 w-6 rounded-full border border-current/40 ring-1 ring-current/10"
            style={{ backgroundColor: s.color }}
            title={s.label}
          />
        ),
      )}
    </div>
  );
};
