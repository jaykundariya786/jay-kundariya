import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import TechStackSection from "../components/TechStackSection";
import ExperienceSection from "../components/ExperienceSection";
import ProcessSection from "../components/ProcessSection";
// import TestimonialsSection from "../components/TestimonialsSection";
import NewContactSection from "../components/NewContactSection";
import NewFooter from "../components/NewFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FCFD] relative overflow-x-clip text-[#0B2545]">
      {/* 1. Sticky pill Navbar */}
      <Navbar />

      {/* 2. Hero — min-h-screen cream card with penthouse illustration */}
      <Hero />

      {/* 3. Stats Strip — dark bg with animated count-up numbers */}
      <StatsSection />

      {/* 4. About — portrait + story card */}
      <AboutSection />

      {/* 5. Projects — 6-card grid with 3D tilt and filter tabs */}
      <ProjectsSection />

      {/* 6. Services — cream bg, 4 icon cards, hover lift */}
      <ServicesSection />

      {/* 8. Tech Stack — dual infinite marquees on dark bg */}
      <TechStackSection />

      {/* 9. Experience — glowing gold timeline on dark bg */}
      <ExperienceSection />

      {/* 10. Process — 4-step row with scroll-driven progress line */}
      <ProcessSection />

      {/* 11. Testimonials — dark glass carousel with auto-play */}
      {/* <TestimonialsSection /> */}

      {/* 12. Contact — 2-col form with animated gold border */}
      <NewContactSection />

      {/* 13. Footer — midnight gold with back to top */}
      <NewFooter />
    </div>
  );
}
