import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Download,
  MapPin,
  CheckCircle2,
  Compass,
  ShieldCheck,
  Zap,
  X,
  Layers,
} from "lucide-react";
import profileImage from "../assets/profile-image.png";

export default function AboutSection() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const principles = [
    {
      title: "Native 60 FPS Fluidity",
      description:
        "Transitions and touch responses must feel indistinguishable from pure Swift or Kotlin.",
    },
    {
      title: "Offline-First Resilience",
      description:
        "Encrypted local caching (MMKV) guarantees uninterrupted use even with zero signal.",
    },
    {
      title: "Direct & Transparent",
      description:
        "No agency layers. Weekly staging builds, clear Loom demos, and honest technical roadmaps.",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-[#FFFFFF] py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Clean, low-profile editorial intro header */}
        <div className="mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-xs font-serif font-bold text-[#E9C46A] tracking-wider uppercase mb-2"
          >
            <span>✦</span>
            <span>Behind The Craft</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1321] tracking-tight max-w-2xl leading-tight"
          >
            Engineering mobile experiences with care, speed, and obsessive
            precision.
          </motion.h2>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Card 1 (Left - Anchor Story Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#FFFFFF] border border-[#E9C46A]/40 rounded-[28px] p-6 sm:p-8 lg:p-9 shadow-[0_12px_40px_rgba(13,19,33,0.04)] flex flex-col justify-between relative overflow-hidden"
          >
            {/* Subtle warm corner aura */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E9C46A]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Top row: Profile avatar & availability indicator */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#E9C46A]/20">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={profileImage}
                      alt="Jay Kundariya"
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover object-top border-2 border-[#E9C46A]/60 shadow-md"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#10B981] border-2 border-white flex items-center justify-center">
                      <span className="animate-ping absolute w-full h-full rounded-full bg-[#7CF5C5] opacity-75" />
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0D1321]">
                      Jay Kundariya
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1D2D50]/80 font-sans flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#E9C46A]" />
                      <span>Surat, India • Senior Mobile Architect</span>
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#E9C46A] font-bold bg-[#F4EDE0] border border-[#E9C46A]/40 px-2.5 py-1 rounded-full">
                    Open To Projects
                  </span>
                </div>
              </div>

              {/* Core Manifesto Headline */}
              <h4 className="font-serif font-bold text-lg sm:text-xl text-[#0D1321] leading-snug mb-3">
                Crafting apps that feel natural in the hand, launch in seconds,
                and never crash in production.
              </h4>

              {/* Understandable, human story */}
              <p className="text-sm text-[#1D2D50]/85 font-sans leading-relaxed mb-4">
                I'm not a generalist who dabbles in twenty frameworks. For over
                4 years, I have concentrated solely on React Native mobile
                architecture. I bridge the gap between creative product vision
                and native device performance — taking ideas from wireframes to
                official Apple App Store and Google Play releases.
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-5 border-t border-[#E9C46A]/20 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[#0D1321] font-semibold text-xs sm:text-sm bg-gradient-to-r from-[#E9C46A] via-[#F4D078] to-[#FFD3A5] shadow-[0_4px_16px_rgba(233,196,106,0.35)] hover:shadow-[0_6px_22px_rgba(233,196,106,0.55)] hover:scale-105 active:scale-95 transition-all duration-200 border border-[#E9C46A]/50 cursor-pointer"
                >
                  <span>Let's talk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="/assets/JayKundariya.pdf"
                  download="JayKundariya_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[#0D1321] font-medium text-xs sm:text-sm bg-[#F4EDE0] hover:bg-[#F4EDE0]/80 shadow-xs border border-[#E9C46A]/40 hover:scale-105 active:scale-95 transition-all"
                >
                  <Download className="w-3.5 h-3.5 text-[#1D2D50]" />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2 Stacked Cards (Top Dark Card, Bottom Warm Cream Card) */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 justify-between">
            {/* Card 2 (Right Top - Dark Featured Card inspired by reference) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#0D1321] border border-[#E9C46A]/35 rounded-[28px] p-6 sm:p-7 shadow-[0_14px_40px_rgba(13,19,33,0.18)] flex flex-col justify-between relative overflow-hidden text-white group"
            >
              {/* Subtle ambient gradient */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#4CC9F0]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <h4 className="font-serif font-bold text-lg sm:text-xl text-[#F4EDE0] mb-2 leading-tight">
                  Beyond reactivity: Total ownership
                </h4>

                <p className="text-xs sm:text-sm text-[#F4EDE0]/75 leading-relaxed font-sans">
                  From navigating rigorous UAE PASS biometric auth to HIPAA
                  health records and multi-location POS sync, I own the
                  technical roadmap from wireframe to release.
                </p>
              </div>

              {/* Bottom Row with "Details" pill button */}
              <div className="mt-5 pt-4 border-t border-[#E9C46A]/15 flex items-center justify-between">
                <span className="text-[11px] font-sans text-[#E9C46A]">
                  UAE Gov • Health • Retail
                </span>

                <button
                  onClick={() => setDetailsOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0D1321] bg-[#F4EDE0] hover:bg-[#E9C46A] shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>

            {/* Card 3 (Right Bottom - Warm Soft Cream Card) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#F4EDE0] border border-[#E9C46A]/45 rounded-[28px] p-6 sm:p-7 shadow-[0_12px_36px_rgba(13,19,33,0.04)] flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <h4 className="font-serif font-bold text-lg sm:text-xl text-[#0D1321] mb-2 leading-tight">
                  Velocity without brittle shortcuts
                </h4>

                <p className="text-xs sm:text-sm text-[#1D2D50]/80 leading-relaxed font-sans">
                  Solo-engineered a full multi-location POS in 1.5 months and
                  deployed enterprise citizen apps on strict deadlines — clean
                  TypeScript with zero bloat.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E9C46A]/25 flex items-center justify-between text-[11px] font-sans font-semibold text-[#0D1321]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  20+ Production Builds Shipped
                </span>
                <span className="text-[#1D2D50]/60 font-mono text-[10px]">
                  0-to-1 Specialist
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Interactive Details Modal */}
      <AnimatePresence>
        {detailsOpen && (
          <div
            onClick={() => setDetailsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1321]/75 backdrop-blur-sm cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#FFFFFF] border border-[#E9C46A]/50 rounded-3xl p-6 sm:p-8 shadow-2xl cursor-default"
            >
              <button
                onClick={() => setDetailsOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F4EDE0] hover:bg-[#E9C46A]/30 flex items-center justify-center text-[#0D1321] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#E9C46A] tracking-wider uppercase mb-1">
                <span>✦</span>
                <span>The Engineering Standard</span>
              </div>

              <h3 className="font-serif font-bold text-2xl text-[#0D1321] mb-2">
                How I Deliver Production Quality
              </h3>

              <p className="text-xs sm:text-sm text-[#1D2D50]/80 mb-6 font-sans">
                Three core principles applied to every mobile application I
                build:
              </p>

              <div className="space-y-4 mb-6">
                {principles.map((p, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-[#F4EDE0]/60 border border-[#E9C46A]/30 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#0D1321]">
                        {p.title}
                      </h4>
                      <p className="text-xs text-[#1D2D50]/80 font-sans mt-0.5">
                        {p.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setDetailsOpen(false);
                  scrollTo("contact");
                }}
                className="w-full py-3 rounded-full text-[#0D1321] font-bold text-sm bg-gradient-to-r from-[#E9C46A] via-[#F4D078] to-[#FFD3A5] shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-[#E9C46A]/50 cursor-pointer"
              >
                <span>Discuss your project with Jay</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
