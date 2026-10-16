import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, MapPin, CheckCircle2, X } from "lucide-react";
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
      className="relative w-full bg-[#F8FCFD] py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Clean, low-profile editorial intro header */}
        <div className="mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-xs font-serif font-bold text-[#0E6BA8] tracking-wider uppercase mb-2"
          >
            <span className="text-[#10A36B]">✦</span>
            <span>Behind The Craft</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B2545] tracking-tight max-w-2xl leading-tight"
          >
            Engineering mobile experiences with care, speed, and obsessive
            precision.
          </motion.h2>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Card 1 (Left - Anchor Story Card with Row-Style Image & Description) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#F8FCFD] border border-[#A9DDE8]/60 rounded-[28px] p-6 sm:p-7 lg:p-8 shadow-[0_12px_40px_rgba(11,37,69,0.06)] relative overflow-hidden flex flex-col justify-between"
          >
            {/* Subtle ocean corner aura */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0E6BA8]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Row-Style Container: Image on Left + Description on Right */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-5 sm:gap-6 items-stretch h-full">
              {/* Left Column: Portrait Image Card */}
              <div className="relative w-full sm:w-48 md:w-52 shrink-0 flex flex-col">
                <div className="relative w-full h-56 sm:h-full min-h-[220px] sm:min-h-[260px] rounded-2xl overflow-hidden border-2 border-[#0E6BA8]/40 shadow-md bg-[#A9DDE8]/20">
                  <img
                    src={profileImage}
                    alt="Jay Kundariya"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Right Column: Name, Location, Story Description & Actions */}
              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div>
                  {/* Name & Location Header */}
                  <div className="mb-2.5 pb-2.5 border-b border-[#A9DDE8]/40">
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0B2545]">
                      Jay Kundariya
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#0B2545]/75 font-sans flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#0E6BA8] shrink-0" />
                      <span>Surat, India • Senior Mobile Architect</span>
                    </p>
                  </div>

                  {/* Core Manifesto Headline */}
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#0B2545] leading-snug mb-2">
                    Crafting apps that feel natural in the hand, launch in
                    seconds, and never crash in production.
                  </h4>

                  {/* Understandable, human story */}
                  <p className="text-xs sm:text-[13px] text-[#0B2545]/80 font-sans leading-relaxed">
                    I'm not a generalist who dabbles in twenty frameworks. For
                    over 4 years, I have concentrated solely on React Native
                    mobile architecture. I bridge creative product vision and
                    native performance — taking ideas from wireframes to
                    official Apple App Store and Google Play releases.
                  </p>
                </div>

                {/* Bottom Actions Row */}
                <div className="mt-4 pt-3.5 border-t border-[#A9DDE8]/30 flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <button
                    onClick={() => scrollTo("contact")}
                    className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-[#F8FCFD] font-semibold text-xs sm:text-sm bg-gradient-to-r from-[#0E6BA8] to-[#10A36B] shadow-[0_4px_16px_rgba(14,107,168,0.35)] hover:shadow-[0_6px_22px_rgba(14,107,168,0.55)] hover:scale-105 active:scale-95 transition-all duration-200 border border-[#A9DDE8]/40 cursor-pointer"
                  >
                    <span>Let's talk</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F8FCFD]" />
                  </button>

                  <a
                    href="/assets/JayKundariya.pdf"
                    download="JayKundariya_Resume.pdf"
                    className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full text-[#0B2545] font-medium text-xs sm:text-sm bg-[#A9DDE8]/20 hover:bg-[#A9DDE8]/35 shadow-xs border border-[#0E6BA8]/30 hover:scale-105 active:scale-95 transition-all"
                  >
                    <Download className="w-3.5 h-3.5 text-[#0E6BA8]" />
                    <span>Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2 Stacked Cards (Top Dark Navy Card, Bottom Soft Aqua Card) */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 justify-between">
            {/* Card 2 (Right Top - Dark Navy Featured Card) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#0B2545] border border-[#0E6BA8]/35 rounded-[28px] p-6 sm:p-7 shadow-[0_14px_40px_rgba(11,37,69,0.18)] flex flex-col justify-between relative overflow-hidden text-[#F8FCFD] group"
            >
              {/* Subtle ambient gradient */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#A9DDE8]/15 rounded-full blur-2xl pointer-events-none" />

              <div>
                <h4 className="font-serif font-bold text-lg sm:text-xl text-[#F8FCFD] mb-2 leading-tight">
                  Beyond reactivity: Total ownership
                </h4>

                <p className="text-xs sm:text-sm text-[#A9DDE8]/80 leading-relaxed font-sans">
                  From navigating rigorous UAE PASS biometric auth to HIPAA
                  health records and multi-location POS sync, I own the
                  technical roadmap from wireframe to release.
                </p>
              </div>

              {/* Bottom Row with "Details" pill button */}
              <div className="mt-5 pt-4 border-t border-[#0E6BA8]/25 flex items-center justify-between">
                <span className="text-[11px] font-sans text-[#10A36B] font-semibold">
                  UAE Gov • Health • Retail
                </span>

                <button
                  onClick={() => setDetailsOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0B2545] bg-[#F8FCFD] hover:bg-[#A9DDE8] shadow-xs transition-all duration-200 cursor-pointer"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3 text-[#0B2545]" />
                </button>
              </div>
            </motion.div>

            {/* Card 3 (Right Bottom - Soft Aqua Card) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#A9DDE8]/20 border border-[#0E6BA8]/25 rounded-[28px] p-6 sm:p-7 shadow-[0_12px_36px_rgba(11,37,69,0.04)] flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <h4 className="font-serif font-bold text-lg sm:text-xl text-[#0B2545] mb-2 leading-tight">
                  Velocity without brittle shortcuts
                </h4>

                <p className="text-xs sm:text-sm text-[#0B2545]/80 leading-relaxed font-sans">
                  Solo-engineered a full multi-location POS in 1.5 months and
                  deployed enterprise citizen apps on strict deadlines — clean
                  TypeScript with zero bloat.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#0E6BA8]/20 flex items-center justify-between text-[11px] font-sans font-semibold text-[#0B2545]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10A36B]" />
                  20+ Production Builds Shipped
                </span>
                <span className="text-[#0E6BA8] font-mono text-[10px] font-bold">
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B2545]/75 backdrop-blur-sm cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#F8FCFD] border border-[#0E6BA8]/40 rounded-3xl p-6 sm:p-8 shadow-2xl cursor-default"
            >
              <button
                onClick={() => setDetailsOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#A9DDE8]/25 hover:bg-[#0E6BA8]/20 flex items-center justify-center text-[#0B2545] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#0E6BA8] tracking-wider uppercase mb-1">
                <span className="text-[#10A36B]">✦</span>
                <span>The Engineering Standard</span>
              </div>

              <h3 className="font-serif font-bold text-2xl text-[#0B2545] mb-2">
                How I Deliver Production Quality
              </h3>

              <p className="text-xs sm:text-sm text-[#0B2545]/80 mb-6 font-sans">
                Three core principles applied to every mobile application I
                build:
              </p>

              <div className="space-y-4 mb-6">
                {principles.map((p, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-[#A9DDE8]/15 border border-[#A9DDE8]/40 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#10A36B] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#0B2545]">
                        {p.title}
                      </h4>
                      <p className="text-xs text-[#0B2545]/80 font-sans mt-0.5">
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
                className="w-full py-3 rounded-full text-[#F8FCFD] font-bold text-sm bg-gradient-to-r from-[#0E6BA8] to-[#10A36B] shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-[#A9DDE8]/40 cursor-pointer"
              >
                <span>Discuss your project with Jay</span>
                <ArrowRight className="w-4 h-4 text-[#F8FCFD]" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
