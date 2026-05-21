import { Instagram, Facebook, Youtube } from "lucide-react";

const COLS = [
  {
    title: "Quick Links",
    items: [
      "About Us",
      "Contact Us",
      "Track Orders",
      "Terms & Conditions",
      "Return Policy",
      "Privacy Policy",
      "Shipping Policy",
    ],
  },
  {
    title: "Categories",
    items: ["Face", "Lips", "Eyes", "Nails", "Combos & Gift Sets", "Tools & Brushes"],
  },
  {
    title: "Help Desk",
    items: [
      "Call: +91-9810245261",
      "Email: support@hokmakeup.com",
      "Monday-Saturday 10AM to 6PM",
      "HOKdistributors",
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-hok-text text-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28">
        
        {/* THE FIX: Replaced the text block with your image file */}
        <img 
          src="/logo.svg" 
          alt="HOKmakeup Logo" 
          className="h-10 md:h-14 w-auto mb-16 object-contain" 
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="font-display font-bold text-lg mb-5 text-white">{c.title}</h4>
              <ul className="flex flex-col gap-3 font-body text-sm text-white/75">
                {c.items.map((it) => (
                  <li key={it} className="hover:text-white transition-colors cursor-pointer">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-display font-bold text-lg mb-5 text-white">Follow Us On</h4>
            <div className="flex items-center gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <div
                  key={i}
                  className="h-11 w-11 rounded-full border-2 border-white/40 flex items-center justify-center hover:bg-white hover:text-hok-text transition-colors cursor-pointer"
                >
                  <Icon className="h-5 w-5" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between gap-4 text-xs font-body text-white/60">
          <span>© {new Date().getFullYear()} HOKmakeup. All rights reserved.</span>
          <span>Beauty is for all.</span>
        </div>
      </div>
    </footer>
  );
}
