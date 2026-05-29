import { createFileRoute } from "@tanstack/react-router";
import { HeroSlider } from "@/components/site/HeroSlider";
import { TrustBar } from "@/components/site/TrustBar";
import { BookingSection, CategoryStrip, CorporateCTA, FeaturedCerts, FloatingActions, ProvidersGrid, StatsBand, Testimonials, TrainingSection } from "@/components/site/Sections";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CertVault — Certification Vouchers, Training & Exam Booking in India" },
      { name: "description", content: "Save up to 50% on AWS, Microsoft, Cisco & 30+ certification exam vouchers. Premium training, instant exam booking, and corporate learning — trusted by 240+ enterprises." },
      { property: "og:title", content: "CertVault — India's Premium Certification Marketplace" },
      { property: "og:description", content: "Official exam vouchers, expert-led training, instant exam booking. 180,000+ professionals certified." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <TrustBar />
        <CategoryStrip />
        <FeaturedCerts />
        <TrainingSection />
        <BookingSection />
        <StatsBand />
        <ProvidersGrid />
        <Testimonials />
        <CorporateCTA />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
