import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function NewsletterModal() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const onScroll = () => {
      const scrolled = window.innerHeight + window.scrollY;
      const full = document.documentElement.scrollHeight;
      if (scrolled >= full - 40) setOpen(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-black/40 backdrop-blur-sm animate-hok-pop">
      <div className="relative w-full md:max-w-xl m-0 md:m-6 bg-hok-bg text-hok rounded-t-3xl md:rounded-3xl border-2 border-hok p-8 md:p-12 animate-hok-slide-up">
        <button
          onClick={() => {
            setOpen(false);
            setDismissed(true);
          }}
          className="absolute top-4 right-4 h-9 w-9 rounded-full border-2 border-hok flex items-center justify-center hover:bg-hok-text hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {submitted ? (
          <div className="py-10 text-center">
            <h3 className="font-display text-2xl md:text-3xl mb-3">You're in ✦</h3>
            <p className="font-body opacity-70">Check your inbox for your 20% off code.</p>
          </div>
        ) : (
          <>
            {/* UPDATED: Reduced font size further to text-xl md:text-2xl */}
            <h3 className="font-display text-l md:text-xl leading-none mb-4">
              Don't miss an update!
            </h3>
            <p className="font-body text-sm md:text-base opacity-75 mb-7">
              The latest product drops, offers and stories straight to your phone, plus 20% off
              your next order
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSubmitted(true);
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 rounded-full border-2 border-hok bg-transparent px-5 py-3 font-body text-sm md:text-base outline-none focus:bg-[var(--hok-pastel-lime)] transition-colors"
              />
              <button
                type="submit"
                className="rounded
