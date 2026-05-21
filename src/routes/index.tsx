import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/hok/Header";
import { PurpleHero } from "@/components/hok/PurpleHero";
import { NewArrivalsSection } from "@/components/hok/NewArrivalsSection";
import { PinkSection } from "@/components/hok/PinkSection";
import { YellowSection } from "@/components/hok/YellowSection";
import { WhiteSection } from "@/components/hok/WhiteSection";
import { Footer } from "@/components/hok/Footer";
import { NewsletterModal } from "@/components/hok/NewsletterModal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-hok-bg text-hok overflow-x-clip">
      <Header />
      <PurpleHero />
      <NewArrivalsSection />
      <PinkSection />
      <YellowSection />
      <WhiteSection />
      <Footer />
      <NewsletterModal />
    </main>
  );
}
