import { Search, User, Heart, ShoppingBag } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-hok-purple">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12 md:py-7">
        <a href="#top" className="transition-transform hover:scale-105">
          <img 
            src="/file.svg" 
            alt="HOKmakeup Logo" 
            className="h-8 md:h-10 w-auto object-contain" 
          />
        </a>
        <nav className="flex items-center gap-4 md:gap-7 text-hok">
          {[Search, User, Heart, ShoppingBag].map((Icon, i) => (
            <button
              key={i}
              className="rounded-full p-2 transition-transform hover:scale-110"
              aria-label={["Search", "Profile", "Wishlist", "Bag"][i]}
            >
              <Icon className="h-5 w-5 md:h-[22px] md:w-[22px]" strokeWidth={1.75} />
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
