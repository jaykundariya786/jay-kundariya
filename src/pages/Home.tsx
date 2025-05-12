import FloatingElements from "../components/FloatingElements";
import Hero from "../components/Hero";
import About from "../components/About";
import SpecialtiesGrid from "../components/SpecialtiesGrid";
import WorkSection from "../components/WorkSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <FloatingElements />
      <Hero />
      <About />
      <SpecialtiesGrid />
      <WorkSection />
      <ContactSection />
    </div>
  );
}
