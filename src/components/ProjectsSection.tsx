import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, Sparkles, Smartphone, ShieldCheck, HeartPulse, ShoppingBag, Send, Radio } from "lucide-react";

interface ProjectItem {
  id: string;
  name: string;
  oneLiner: string;
  role: string;
  category: "Mobile" | "Web" | "Healthcare";
  tags: string[];
  link?: string;
  storeBadge?: string;
  accentColor: string;
  gradient: string;
  badgeText: string;
  mockupDetails: {
    status: string;
    screenTitle: string;
    metrics: string[];
    icon: any;
  };
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Mobile" | "Web" | "Healthcare">("All");

  const projects: ProjectItem[] = [
    {
      id: "esanad",
      name: "ESANAD",
      oneLiner: "Android & iOS apps built from scratch with official UAE PASS biometric authentication & citizen services.",
      role: "Lead React Native Developer (Opash Software)",
      category: "Mobile",
      tags: ["React Native", "UAE PASS Auth", "TypeScript", "Redux Toolkit", "REST APIs"],
      link: "https://esanad.com",
      accentColor: "#E9C46A",
      gradient: "from-[#0D1321] via-[#1D2D50] to-[#0D1321]",
      badgeText: "Gov & Enterprise",
      mockupDetails: {
        status: "UAE PASS Biometrics Verified",
        screenTitle: "Citizen Services Portal",
        metrics: ["99.9% Auth Rate", "AES-256 Storage"],
        icon: ShieldCheck,
      },
    },
    {
      id: "pos-platform",
      name: "POS Platform",
      oneLiner: "Multi-location POS and complete business management suite, solo-built frontend & backend in 1.5 months.",
      role: "Solo Full-Stack & Mobile Architect",
      category: "Web",
      tags: ["React Native", "Next.js", "Node.js", "Offline Sync", "MongoDB", "Thermal Print"],
      link: "https://pos-landing-iota.vercel.app",
      accentColor: "#4CC9F0",
      gradient: "from-[#0D1321] via-[#11263c] to-[#0D1321]",
      badgeText: "Solo Build (1.5 mo)",
      mockupDetails: {
        status: "Real-time Offline Sync Active",
        screenTitle: "Omni-Channel Cashier POS",
        metrics: ["Multi-Store Fleet", "0.2s Order Print"],
        icon: ShoppingBag,
      },
    },
    {
      id: "candor-ivf",
      name: "Candor IVF",
      oneLiner: "Patient care and cycle tracking companion app for premier fertility hospital chain with automated reminders.",
      role: "React Native Developer (Unikwork Systems)",
      category: "Healthcare",
      tags: ["React Native", "HIPAA Compliance", "Redux", "Push Notifications", "Firebase"],
      storeBadge: "Play Store Verified",
      accentColor: "#FFD3A5",
      gradient: "from-[#0D1321] via-[#2a1b2e] to-[#0D1321]",
      badgeText: "Healthcare Portal",
      mockupDetails: {
        status: "Patient Records Encrypted",
        screenTitle: "Care Cycle & Lab Tracker",
        metrics: ["4.9 ★ Store Rating", "10k+ Patients"],
        icon: HeartPulse,
      },
    },
    {
      id: "japa-health",
      name: "Japa Health",
      oneLiner: "Holistic preventive health platform connecting daily biometrics, mindful habits, and personal wellness coaching.",
      role: "React Native Developer (Webashlar)",
      category: "Healthcare",
      tags: ["React Native", "Apple HealthKit", "Google Fit", "GraphQL", "TypeScript"],
      link: "https://japa.health",
      accentColor: "#7CF5C5",
      gradient: "from-[#0D1321] via-[#103328] to-[#0D1321]",
      badgeText: "Wellness Tech",
      mockupDetails: {
        status: "HealthKit Real-time Sync",
        screenTitle: "Biometric Daily Journey",
        metrics: ["24/7 Vitals Sync", "60 FPS Native UX"],
        icon: HeartPulse,
      },
    },
    {
      id: "meal-manage",
      name: "Meal Manage",
      oneLiner: "Parent ordering portal and fast school cafeteria POS app serving thousands of students and parents daily.",
      role: "React Native Developer (Unikwork Systems)",
      category: "Mobile",
      tags: ["React Native", "Cafeteria POS", "Payment Gateways", "NFC / QR Scanner"],
      link: "https://mealmanage.com",
      accentColor: "#E9C46A",
      gradient: "from-[#0D1321] via-[#27261a] to-[#0D1321]",
      badgeText: "School FoodTech",
      mockupDetails: {
        status: "NFC Student Wallet Active",
        screenTitle: "High-Speed Cafeteria Kiosk",
        metrics: ["300 Meals / 10m", "Instant QR Scan"],
        icon: ShoppingBag,
      },
    },
    {
      id: "sms-marketing",
      name: "SMS Marketing App",
      oneLiner: "Custom native module & campaign engine enabling automated high-throughput carrier-level bulk messaging.",
      role: "Lead Native Module & Android Engineer",
      category: "Mobile",
      tags: ["React Native", "Android Java/Kotlin Bridge", "Background Services", "SQLite"],
      accentColor: "#4CC9F0",
      gradient: "from-[#0D1321] via-[#162740] to-[#0D1321]",
      badgeText: "Native Bridge Module",
      mockupDetails: {
        status: "Native Dispatcher Running",
        screenTitle: "High-Volume Carrier Engine",
        metrics: ["1,000 SMS / min", "Zero Drop Rate"],
        icon: Send,
      },
    },
  ];

  const filterTabs: ("All" | "Mobile" | "Web" | "Healthcare")[] = [
    "All",
    "Mobile",
    "Web",
    "Healthcare",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen flex flex-col justify-center py-20 sm:py-28 bg-[#FFFFFF] px-4 sm:px-6 lg:px-8 border-t border-[#E9C46A]/20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#F4EDE0] border border-[#E9C46A]/40 px-4 py-1.5 rounded-full text-xs font-mono font-semibold text-[#0D1321] uppercase tracking-wider shadow-sm mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E9C46A]" />
            <span>Proven Track Record</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D1321] tracking-tight"
          >
            Selected work.
          </motion.h2>

          <p className="text-sm sm:text-base text-[#1D2D50]/80 mt-3 max-w-xl">
            Production apps engineered for speed, high concurrency, and seamless cross-platform feel.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 mt-8 p-1.5 bg-[#F4EDE0] border border-[#E9C46A]/35 rounded-full">
            {filterTabs.map((tab) => {
              const active = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`relative px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    active
                      ? "text-[#0D1321] bg-[#FFFFFF] shadow-sm border border-[#E9C46A]/50 font-bold"
                      : "text-[#1D2D50]/70 hover:text-[#0D1321]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6-Card Grid: 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const MockIcon = project.mockupDetails.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group relative bg-[#F4EDE0]/50 hover:bg-[#FFFFFF] border border-[#E9C46A]/35 hover:border-[#E9C46A] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_12px_36px_rgba(13,19,33,0.06)] hover:shadow-[0_24px_60px_rgba(233,196,106,0.28)] transition-all duration-500 overflow-hidden"
                >
                  {/* Top Bar: Category badge & Store badge / Link */}
                  <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#0D1321] text-[#E9C46A] border border-[#E9C46A]/40 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E9C46A]" />
                      {project.badgeText}
                    </span>

                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D1321] hover:text-[#E9C46A] bg-[#FFFFFF] border border-[#E9C46A]/35 px-3 py-1 rounded-full shadow-sm hover:scale-105 transition-all"
                      >
                        <span>Visit Live</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : project.storeBadge ? (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#0D1321] bg-[#FFFFFF] border border-[#E9C46A]/40 px-3 py-1 rounded-full shadow-sm">
                        <Smartphone className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>{project.storeBadge}</span>
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-[#1D2D50]/60 uppercase">
                        Client Proprietary
                      </span>
                    )}
                  </div>

                  {/* 3D Phone Mockup Container */}
                  <div className="relative w-full py-4 flex justify-center perspective-[1000px] mb-6">
                    <div className="w-full max-w-[320px] rounded-[28px] bg-[#0D1321] p-3 border-2 border-[#E9C46A]/40 shadow-[0_16px_40px_rgba(13,19,33,0.35)] transform transition-transform duration-500 group-hover:[transform:rotateX(6deg)_rotateY(-6deg)_scale(1.03)] relative overflow-hidden">
                      {/* Phone Speaker & Camera Notch */}
                      <div className="w-24 h-4 bg-[#05080f] rounded-full mx-auto mb-3 flex items-center justify-center gap-2 border border-white/10">
                        <span className="w-2 h-2 rounded-full bg-white/20" />
                        <span className="w-8 h-1 bg-white/20 rounded-full" />
                      </div>

                      {/* Phone Screen Canvas */}
                      <div className={`w-full rounded-[20px] bg-gradient-to-br ${project.gradient} p-4 border border-white/10 text-[#F4EDE0] flex flex-col justify-between min-h-[175px]`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[#E9C46A]">
                              <MockIcon className="w-4 h-4" />
                            </div>
                            <span className="font-serif font-bold text-sm tracking-wide">
                              {project.name}
                            </span>
                          </div>
                          <Radio className="w-3.5 h-3.5 text-[#7CF5C5] animate-pulse" />
                        </div>

                        {/* Middle UI simulation */}
                        <div className="my-3 bg-white/5 border border-white/10 rounded-xl p-2.5 backdrop-blur-sm">
                          <span className="text-[10px] font-mono text-[#E9C46A] block font-semibold mb-0.5">
                            {project.mockupDetails.status}
                          </span>
                          <span className="text-xs font-bold text-white block">
                            {project.mockupDetails.screenTitle}
                          </span>
                        </div>

                        {/* Bottom metrics tags */}
                        <div className="flex items-center gap-2">
                          {project.mockupDetails.metrics.map((m, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 border border-white/10 text-white/90"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0D1321] tracking-tight mb-1">
                        {project.name}
                      </h3>
                      <p className="text-xs font-mono font-semibold text-[#1D2D50] mb-3">
                        Role: {project.role}
                      </p>
                      <p className="text-sm text-[#1D2D50]/85 leading-relaxed mb-5">
                        {project.oneLiner}
                      </p>
                    </div>

                    {/* Tech Stack Chip Row */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E9C46A]/25">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#FFFFFF] text-[#0D1321] border border-[#E9C46A]/40 shadow-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View All Projects Button */}
        <div className="mt-14 sm:mt-16 text-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[#0D1321] font-semibold text-sm bg-gradient-to-r from-[#E9C46A] via-[#F4D078] to-[#FFD3A5] shadow-[0_6px_22px_rgba(233,196,106,0.38)] hover:shadow-[0_8px_30px_rgba(233,196,106,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 border border-[#E9C46A]/50"
          >
            <span>View all projects archive</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
