import { Navbar } from "@/components/sites/clinica-alva/root/Navbar";
import { Hero } from "@/components/sites/clinica-alva/root/Hero";
import { StatsBar } from "@/components/sites/clinica-alva/root/StatsBar";
import { AboutSection } from "@/components/sites/clinica-alva/root/AboutSection";
import { TreatmentsSection } from "@/components/sites/clinica-alva/root/TreatmentsSection";
import { TechnologySection } from "@/components/sites/clinica-alva/root/TechnologySection";
import { HowItWorksSection } from "@/components/sites/clinica-alva/root/HowItWorksSection";
import { GalleryLightboxSection } from "@/components/sites/clinica-alva/root/GalleryLightboxSection";
import { TestimonialsSection } from "@/components/sites/clinica-alva/root/TestimonialsSection";
import { FaqSection } from "@/components/sites/clinica-alva/root/FaqSection";
import { LocationSection } from "@/components/sites/clinica-alva/root/LocationSection";
import { CtaSection } from "@/components/sites/clinica-alva/root/CtaSection";
import { Footer } from "@/components/sites/clinica-alva/root/Footer";
import { SocialFloatingButtons } from "@/components/sites/clinica-alva/root/SocialFloatingButtons";

export default function Home() {
  return (
    <div className="site-clinica-alva min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <AboutSection />
        <TreatmentsSection />
        <TechnologySection />
        <HowItWorksSection />
        <GalleryLightboxSection />
        <TestimonialsSection />
        <FaqSection />
        <LocationSection />
        <CtaSection />
      </main>
      <Footer />
      <SocialFloatingButtons />
    </div>
  );
}
