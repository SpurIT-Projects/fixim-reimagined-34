import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AdvantagesSection />
        <ServicesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
