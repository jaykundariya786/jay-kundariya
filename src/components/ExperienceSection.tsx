import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import {
  Sparkles,
  Compass,
  Layers,
  ShieldCheck,
  Zap,
  Award,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

interface MilestoneItem {
  id: string;
  step: string;
  stageName: string;
  company: string;
  role: string;
  dates: string;
  yearSpan: string;
  current?: boolean;
  icon: typeof Compass;
  iconColor: string;
  badge: string;
  mainPoint: string;
  metricValue: string;
  metricLabel: string;
  desktopX: number; // percentage (0-100)
  desktopY: number; // percentage (0-100)
  nodeStart: number;
  nodeEnd: number;
  cardStart: number;
  cardEnd: number;
}

const MILESTONES: MilestoneItem[] = [
  {
    id: "webashlar",
    step: "01",
    stageName: "FOUNDATION",
    company: "Webashlar",
    role: "Junior React Native Developer",
    dates: "Jul 2022 – Nov 2023",
    yearSpan: "'22 – '23",
    icon: Compass,
    iconColor: "#4CC9F0",
    badge: "Sensors & Native",
    mainPoint:
      "Integrated Apple HealthKit biometric sensors for Japa Health & built custom Android carrier SMS bridge.",
    metricValue: "1,000+",
    metricLabel: "msgs/min Native Bridge",
    desktopX: 10,
    desktopY: 48,
    nodeStart: 0.03,
    nodeEnd: 0.10,
    cardStart: 0.05,
    cardEnd: 0.13,
  },
  {
    id: "ewings",
    step: "02",
    stageName: "INDEPENDENT SHIPPING",
    company: "Ewings Infotech",
    role: "React Native Developer (Contract)",
    dates: "Nov 2023 – Jun 2024",
    yearSpan: "'23 – '24",
    icon: Layers,
    iconColor: "#7CF5C5",
    badge: "5+ Client Apps",
    mainPoint:
      "Delivered 5+ commercial client apps on-time with Stripe/Razorpay payments & live GPS.",
    metricValue: "5+",
    metricLabel: "Commercial Apps Shipped",
    desktopX: 30,
    desktopY: 38,
    nodeStart: 0.16,
    nodeEnd: 0.23,
    cardStart: 0.18,
    cardEnd: 0.26,
  },
  {
    id: "unikwork",
    step: "03",
    stageName: "HEALTHCARE & POS",
    company: "Unikwork Systems",
    role: "React Native Developer",
    dates: "Jun 2024 – Feb 2025",
    yearSpan: "'24 – '25",
    icon: ShieldCheck,
    iconColor: "#FFD3A5",
    badge: "4.9 ★ Rating",
    mainPoint:
      "Shipped Candor IVF (4.9 ★ on Google Play) and Meal Manage cafeteria POS for 1,000s of students.",
    metricValue: "4.9 ★",
    metricLabel: "Play Store User Rating",
    desktopX: 50,
    desktopY: 28,
    nodeStart: 0.30,
    nodeEnd: 0.37,
    cardStart: 0.32,
    cardEnd: 0.40,
  },
  {
    id: "oceanmtech",
    step: "04",
    stageName: "ENTERPRISE SCALE",
    company: "Oceanmtech",
    role: "Senior React Native Developer",
    dates: "Feb 2025 – Aug 2025",
    yearSpan: "'25",
    icon: Zap,
    iconColor: "#E9C46A",
    badge: "60 FPS Gestures",
    mainPoint:
      "Scaled mobile architecture for Gulf enterprise clients with real-time WebSockets & 60 FPS transitions.",
    metricValue: "60 FPS",
    metricLabel: "Fluid Navigation Rate",
    desktopX: 70,
    desktopY: 18,
    nodeStart: 0.44,
    nodeEnd: 0.52,
    cardStart: 0.46,
    cardEnd: 0.55,
  },
  {
    id: "opash",
    step: "05",
    stageName: "LEAD ARCHITECT",
    company: "Opash Software",
    role: "Senior React Native Developer",
    dates: "Aug 2025 – Present",
    yearSpan: "'25 – Pres.",
    current: true,
    icon: Award,
    iconColor: "#E9C46A",
    badge: "Gov Delivery Lead",
    mainPoint:
      "Shipped UAE Gov mobile app in 1.5 months with 99.9% UAE PASS auth + solo-built full-stack POS platform.",
    metricValue: "1.5 Mo",
    metricLabel: "Gov Delivery • 99.9% Auth",
    desktopX: 90,
    desktopY: 8,
    nodeStart: 0.58,
    nodeEnd: 0.68,
    cardStart: 0.60,
    cardEnd: 0.72,
  },
];

// Desktop Milestone Node with exact scroll transforms
function DesktopStationNode({
  m,
  scrollYProgress,
  isHovered,
  onHover,
}: {
  m: MilestoneItem;
  scrollYProgress: MotionValue<number>;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}) {
  const Icon = m.icon;

  // Direct scroll-driven transforms
  const nodeOpacity = useTransform(scrollYProgress, [m.nodeStart, m.nodeEnd], [0, 1]);
  const nodeScale = useTransform(
    scrollYProgress,
    [m.nodeStart, m.nodeEnd],
    [0.4, m.current ? 1.15 : 1]
  );
  const cardOpacity = useTransform(scrollYProgress, [m.cardStart, m.cardEnd], [0, 1]);
  const cardY = useTransform(scrollYProgress, [m.cardStart, m.cardEnd], [28, 0]);

  return (
    <div
      className="absolute"
      style={{
        left: `${m.desktopX}%`,
        top: `${m.desktopY}%`,
        transform: "translate(-50%, -50%)",
      }}
      onMouseEnter={() => onHover(m.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* 1. Circular Pin directly on the curve */}
      <motion.div
        style={{ opacity: nodeOpacity, scale: nodeScale }}
        className={`relative w-11 h-11 rounded-full bg-[#FFFFFF] border-2 flex items-center justify-center cursor-pointer transition-all duration-300 z-20 ${
          m.current
            ? "border-[#E9C46A] shadow-[0_0_24px_rgba(233,196,106,0.6)]"
            : isHovered
            ? "border-[#E9C46A] shadow-[0_6px_20px_rgba(233,196,106,0.4)]"
            : "border-gray-200/90 shadow-[0_6px_18px_rgba(13,19,33,0.08)] hover:border-[#E9C46A]"
        }`}
      >
        <Icon className="w-5 h-5 transition-transform duration-200" style={{ color: m.iconColor }} />
        {m.current && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#10B981] border-2 border-[#FFFFFF] animate-pulse" />
        )}
      </motion.div>

      {/* 2. Delicate vertical connection stem */}
      <motion.div
        style={{ opacity: nodeOpacity }}
        className="w-px h-5 bg-gradient-to-b from-[#E9C46A]/60 to-transparent mx-auto mt-0.5"
      />

      {/* 3. Floating Modern Card (Hangs cleanly below the pin) */}
      <motion.div
        style={{ opacity: cardOpacity, y: cardY }}
        className="absolute left-1/2 -translate-x-1/2 top-14 w-[185px] lg:w-[195px] xl:w-[215px] z-10 pointer-events-auto"
      >
        <div
          className={`p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
            m.current
              ? "bg-[#FFFFFF] border-[#E9C46A] shadow-[0_12px_32px_rgba(233,196,106,0.18)] ring-1 ring-[#E9C46A]/40"
              : isHovered
              ? "bg-[#FFFFFF] border-[#E9C46A] shadow-[0_12px_28px_rgba(13,19,33,0.08)] -translate-y-1"
              : "bg-[#FFFFFF]/95 backdrop-blur-xs border-gray-200/80 hover:border-[#E9C46A]/60 shadow-[0_8px_20px_rgba(13,19,33,0.05)]"
          }`}
        >
          {/* Header Tag */}
          <div className="flex items-center justify-between gap-1 mb-1">
            <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-[#E9C46A]">
              {m.stageName}
            </span>
            {m.current ? (
              <span className="inline-flex items-center gap-1 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#047857]">
                Current
              </span>
            ) : (
              <span className="text-[9px] font-mono text-[#1D2D50]/55">
                {m.yearSpan}
              </span>
            )}
          </div>

          {/* Company Name & Role */}
          <h3 className="font-serif text-sm font-bold text-[#0D1321] tracking-tight leading-snug">
            {m.company}
          </h3>
          <p className="text-[10px] font-sans text-[#1D2D50]/65 mb-2 truncate">
            {m.role}
          </p>

          {/* The Main Point for Hiring Teams */}
          <div className="bg-[#FDFBF7] border border-[#E9C46A]/25 rounded-lg p-2 mb-2">
            <p className="text-[10px] font-medium text-[#0D1321] leading-relaxed line-clamp-3">
              {m.mainPoint}
            </p>
          </div>

          {/* Metric Footer */}
          <div className="flex items-center justify-between pt-1 border-t border-gray-100">
            <div>
              <span className="font-serif font-bold text-xs text-[#0D1321] block leading-none">
                {m.metricValue}
              </span>
              <span className="text-[8px] font-mono text-[#1D2D50]/60 block mt-0.5">
                {m.metricLabel}
              </span>
            </div>
            <div className="w-5 h-5 rounded-full bg-[#F4EDE0] flex items-center justify-center text-[#0D1321]">
              <ArrowUpRight className="w-3 h-3 text-[#0D1321]" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeMobileIdx, setActiveMobileIdx] = useState<number>(0);

  // Sticky Scroll: Target the tall runway container (300vh for comfortable scrub + extended hold zone)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Path draws smoothly from 0.02 to 0.72, and STAYS AT 100% until 1.0 (Extended Hold Zone!)
  const pathProgress = useTransform(scrollYProgress, [0.02, 0.72], [0.02, 1]);

  // Arrowhead at peak illuminates at 0.70 and stays fully visible until the end
  const arrowOpacity = useTransform(scrollYProgress, [0.68, 0.75], [0, 1]);
  const arrowScale = useTransform(scrollYProgress, [0.68, 0.75], [0.4, 1]);

  // Scroll hint opacity (fades out as user begins scrolling)
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // Track active index for mobile
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (p) => {
      let idx = 0;
      if (p >= 0.58) idx = 4;
      else if (p >= 0.44) idx = 3;
      else if (p >= 0.30) idx = 2;
      else if (p >= 0.16) idx = 1;
      else idx = 0;
      setActiveMobileIdx(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full h-[300vh] bg-[#FFFFFF] border-t border-[#E9C46A]/20"
    >
      {/* =============================================================== */}
      {/* STICKY VIEWPORT CONTAINER: STAYS LOCKED ON SCREEN AS YOU SCROLL */}
      {/* =============================================================== */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] overflow-hidden select-none">
        {/* Background Soft Lighting Glows */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-gradient-to-br from-[#E9C46A]/10 via-[#FFD3A5]/10 to-transparent rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-gradient-to-tr from-[#4CC9F0]/8 via-[#7CF5C5]/6 to-transparent rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-between h-full">
          {/* Top Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-2">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-[#E9C46A] tracking-wider uppercase mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Career Growth Map</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D1321] tracking-tight leading-tight">
                Career{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E9C46A] via-[#E76F51] to-[#0D1321]">
                  Journey Map
                </span>
              </h2>
            </div>

            {/* Quick Metrics Ribbon & Scroll Prompt */}
            <div className="flex items-center gap-3">
              <motion.div
                style={{ opacity: scrollHintOpacity }}
                className="hidden md:flex items-center gap-1 text-xs font-mono text-[#E9C46A] bg-[#FDFBF7] border border-[#E9C46A]/30 py-1.5 px-3 rounded-full animate-bounce"
              >
                <span>Scroll to trace journey</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.div>

              <div className="flex items-center gap-2.5 text-xs font-mono text-[#0D1321] bg-[#FDFBF7] border border-[#E9C46A]/35 py-1.5 px-3.5 rounded-full shadow-2xs">
                <span className="font-bold">4+ Years</span>
                <span className="text-[#E9C46A]">✦</span>
                <span className="font-bold">5 Teams</span>
                <span className="text-[#E9C46A]">✦</span>
                <span className="font-bold">20+ Shipped</span>
              </div>
            </div>
          </div>

          {/* =============================================================== */}
          {/* DESKTOP VIEW: ASCENDING CURVED JOURNEY MAP (Sticky on scroll)    */}
          {/* =============================================================== */}
          <div className="relative hidden lg:block w-full h-[470px] xl:h-[500px] my-auto">
            {/* SVG Canvas for the Upward Curved Trajectory */}
            {/* preserveAspectRatio="none" guarantees 100% mathematical alignment with HTML percentages */}
            <svg
              className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
              viewBox="0 0 1000 500"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                {/* Vibrant neon gradient stroke matching reference image */}
                <linearGradient id="journeyGlowGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4CC9F0" stopOpacity="0.85" />
                  <stop offset="30%" stopColor="#7CF5C5" stopOpacity="0.9" />
                  <stop offset="65%" stopColor="#FFD3A5" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#E9C46A" stopOpacity="1" />
                </linearGradient>

                {/* Faint guide track */}
                <linearGradient id="journeyGuideTrack" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4CC9F0" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#E9C46A" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Static background guide track */}
              <path
                d="M 50,255 C 75,248 88,242 100,240 C 180,230 220,195 300,190 C 380,185 420,145 500,140 C 580,135 620,95 700,90 C 780,85 820,45 900,40 L 960,20"
                stroke="url(#journeyGuideTrack)"
                strokeWidth="6"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />

              {/* Animated stroke drawing directly linked to scroll progress */}
              <motion.path
                d="M 50,255 C 75,248 88,242 100,240 C 180,230 220,195 300,190 C 380,185 420,145 500,140 C 580,135 620,95 700,90 C 780,85 820,45 900,40 L 960,20"
                stroke="url(#journeyGlowGradient)"
                strokeWidth="4.5"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength: pathProgress }}
              />

              {/* Glowing trajectory Arrow at the peak */}
              <motion.g
                style={{
                  opacity: arrowOpacity,
                  scale: arrowScale,
                }}
              >
                <circle cx="960" cy="20" r="14" fill="#E9C46A" fillOpacity={0.3} />
                <path
                  d="M 952,28 L 964,16 M 964,16 L 955,16 M 964,16 L 964,25"
                  stroke="#E9C46A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              </motion.g>
            </svg>

            {/* 5 Milestone Stations — Positioned directly on the curve, hanging cards below */}
            {MILESTONES.map((m) => (
              <DesktopStationNode
                key={m.id}
                m={m}
                scrollYProgress={scrollYProgress}
                isHovered={hoveredId === m.id}
                onHover={setHoveredId}
              />
            ))}
          </div>

          {/* =============================================================== */}
          {/* MOBILE / TABLET VIEW: STICKY FEATURED CARD REVEAL ON SCROLL     */}
          {/* =============================================================== */}
          <div className="lg:hidden my-auto w-full max-w-md mx-auto">
            {/* Step Indicator */}
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#0D1321]">
              <span className="font-bold text-[#E9C46A]">
                Stage 0{activeMobileIdx + 1} of 05
              </span>
              <span className="text-[#1D2D50]/60">
                {MILESTONES[activeMobileIdx].yearSpan}
              </span>
            </div>

            {/* Active Card for Current Scroll Stage */}
            <div className="bg-[#FFFFFF] border-2 border-[#E9C46A]/50 rounded-2xl p-5 shadow-[0_12px_32px_rgba(233,196,106,0.15)] relative">
              <div className="flex items-center justify-between gap-1 mb-2">
                <span className="text-[10px] font-mono font-bold text-[#E9C46A] uppercase">
                  {MILESTONES[activeMobileIdx].stageName}
                </span>
                {MILESTONES[activeMobileIdx].current && (
                  <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#10B981]/15 text-[#047857]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    Current Role
                  </span>
                )}
              </div>

              <h3 className="font-serif text-lg font-bold text-[#0D1321] mb-0.5">
                {MILESTONES[activeMobileIdx].company}
              </h3>
              <p className="text-xs text-[#1D2D50]/70 mb-3">
                {MILESTONES[activeMobileIdx].role}
              </p>

              <div className="bg-[#FDFBF7] border border-[#E9C46A]/25 rounded-xl p-3 mb-3.5">
                <span className="text-[9px] font-mono font-bold text-[#E9C46A] uppercase block mb-1">
                  Core Breakthrough:
                </span>
                <p className="text-xs text-[#0D1321] font-medium leading-relaxed">
                  {MILESTONES[activeMobileIdx].mainPoint}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div>
                  <span className="font-serif font-bold text-sm text-[#0D1321] block leading-none">
                    {MILESTONES[activeMobileIdx].metricValue}
                  </span>
                  <span className="text-[9px] font-mono text-[#1D2D50]/60 block mt-0.5">
                    {MILESTONES[activeMobileIdx].metricLabel}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#F4EDE0] text-[#0D1321]">
                  {MILESTONES[activeMobileIdx].badge}
                </span>
              </div>
            </div>

            {/* Mobile 5-Dot Scrub Progress */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {MILESTONES.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeMobileIdx
                      ? "w-6 bg-[#E9C46A]"
                      : i < activeMobileIdx
                      ? "w-2 bg-[#0D1321]/40"
                      : "w-2 bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Bottom Milestone Horizon Scrub Track */}
          <div className="pt-2 border-t border-[#E9C46A]/15 flex items-center justify-between gap-4 text-xs font-mono">
            <span className="text-[11px] text-[#1D2D50]/60 hidden sm:inline">
              Scroll down to trace along the trajectory path
            </span>

            {/* 5 Stage Quick Dots */}
            <div className="flex items-center gap-1.5 sm:gap-2 mx-auto sm:mx-0">
              {MILESTONES.map((m) => (
                <span
                  key={m.id}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] border border-[#E9C46A]/25 bg-[#FDFBF7] text-[#0D1321]"
                >
                  <span className="font-bold text-[#E9C46A]">{m.step}</span>
                  <span className="hidden md:inline font-serif font-semibold">{m.company}</span>
                </span>
              ))}
            </div>

            <span className="text-[11px] text-[#0D1321] font-bold hidden sm:inline">
              100% On-Time Delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
