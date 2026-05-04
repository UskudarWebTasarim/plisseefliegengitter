import Header from "@/components/Header";
import PopupModal from "@/components/PopupModal";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import BrandValueSection from "@/components/BrandValueSection";
import ProcessSection from "@/components/ProcessSection";
import MarketsSection from "@/components/MarketsSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import TrustSection from "@/components/TrustSection";
import QualitySection from "@/components/QualitySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import DesktopWhatsApp from "@/components/DesktopWhatsApp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PopupModal />
      <main className="flex-1">
        <HeroSection />
        <ProductsSection />
        <BrandValueSection />
        <ProcessSection />
        <MarketsSection />
        <ApplicationsSection />
        <TrustSection />
        <QualitySection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <MobileBottomBar />
      <DesktopWhatsApp />
    </div>
  );
}
