import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  Smartphone,
  Check,
  Terminal,
  Copy,
} from "lucide-react";
import devHeroPenthouse from "../assets/dev-hero-penthouse.png";

export default function Hero() {
  const [showQrModal, setShowQrModal] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowQrModal(false);
    };
    if (showQrModal) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showQrModal]);

  const handleCopyCli = () => {
    navigator.clipboard.writeText("npx create-jay-app@latest");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const headlineWords = "A production app in 90 seconds.".split(" ");

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col justify-center bg-[#FFFFFF] overflow-hidden select-none"
    >
      {/* Cream Hero Card container with rounded corners and soft shadow */}
      <div className="relative w-full bg-[#F4EDE0] border border-[#E9C46A]/40 shadow-[0_24px_80px_rgba(13,19,33,0.08),0_0_0_1px_rgba(233,196,106,0.25)_inset] overflow-hidden flex flex-col justify-between">
        {/* Subtle ambient light gradient at the top */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white/60 to-transparent pointer-events-none z-10" />

        {/* Content Container */}
        <div className="relative z-20 pt-10 sm:pt-14 md:pt-16 px-4 sm:px-8 text-center max-w-4xl mx-auto">
          {/* Status badge above headline: Pulsing green dot and 'Open to new projects' */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#FFFFFF] px-3.5 sm:px-4 py-1.5 rounded-full border border-[#E9C46A]/40 shadow-sm text-xs font-medium text-[#0D1321] mb-5 sm:mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7CF5C5] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
            </span>
            <span className="font-sans font-semibold tracking-wide">
              Open to new projects
            </span>
          </motion.div>

          {/* Headline (serif): 'A production app in 90 seconds.' - Words fade up in sequence */}
          <h1 className="font-serif text-[40px] xs:text-[48px] sm:text-[60px] md:text-[72px] lg:text-[80px] font-bold text-[#0D1321] tracking-[-0.025em] leading-[1.05] mx-auto">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-[#1D2D50]/85 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto mt-4 sm:mt-5 mb-7 sm:mb-8"
          >
            Senior React Native developer building fast, reliable mobile apps,
            web platforms and API integrations.
          </motion.p>

          {/* Primary CTA: 'View my work' & Secondary: 'Download resume' */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-8 sm:mb-10"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-[#0D1321] font-semibold text-sm sm:text-base bg-gradient-to-r from-[#E9C46A] via-[#F4D078] to-[#FFD3A5] shadow-[0_6px_20px_rgba(233,196,106,0.4)] hover:shadow-[0_8px_28px_rgba(233,196,106,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 border border-[#E9C46A]/50 cursor-pointer"
            >
              <span>View my work</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="/assets/JayKundariya.pdf"
              download="JayKundariya_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-[#0D1321] font-semibold text-sm sm:text-base bg-[#FFFFFF] hover:bg-[#FFFFFF]/90 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-[#E9C46A]/35"
            >
              <Download className="w-4 h-4 text-[#1D2D50]" />
              <span>Download resume</span>
            </a>
          </motion.div>
        </div>

        {/* Lower Banner Area: Penthouse illustration anchored at bottom with slow parallax & pulsing trails */}
        <div className="relative w-full overflow-hidden mt-2 sm:mt-4">
          {/* Upward blend to soft cream card */}
          <div className="absolute top-0 inset-x-0 h-28 sm:h-36 md:h-44 bg-gradient-to-b from-[#F4EDE0] via-[#F4EDE0]/60 to-transparent z-10 pointer-events-none" />

          {/* The Penthouse Illustration Banner */}
          <motion.img
            src={devHeroPenthouse}
            alt="Illustrated golden-hour penthouse terrace with city skyline and faint light trails"
            className="w-full h-full object-cover object-bottom select-none"
          />
        </div>
      </div>
    </section>
  );
}
