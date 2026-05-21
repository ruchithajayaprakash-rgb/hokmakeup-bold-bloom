import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/hok/Header";
import { PriceLine } from "@/components/hok/Price";

export const Route = createFileRoute("/product/$slug")({
  component: ProductPage,
  head: ({ params }) => ({
    meta: [{ title: `${params.slug} — HOKmakeup` }],
  }),
});

function ProductPage() {
  const { slug } = Route.useParams();
  const title = slug.replace(/-/g, " ");
  return (
    <main className="min-h-screen bg-hok-pink text-hok">
      <Header />
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-12">
        <div className="aspect-[4/5] rounded-3xl border-2 border-dashed border-hok bg-white/40 flex items-center justify-center">
          <span className="text-xs uppercase tracking-widest opacity-60">Product Image</span>
        </div>
        <div className="flex flex-col gap-6">
          <Link to="/" className="text-sm font-body opacity-70 hover:opacity-100">← Back</Link>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl capitalize leading-tight">
            {title}
          </h1>
          <PriceLine sale="₹716" mrp="₹795" discount="10% OFF" size="lg" />
          <p className="font-body opacity-80 max-w-md">
            A water-light lip tint that drips with shine and locks in pigment for hours.
          </p>
          <button className="self-start rounded-full bg-hok-text px-8 py-4 font-body font-bold text-white">
            ADD TO BAG
          </button>
        </div>
      </div>
    </main>
  );
}
