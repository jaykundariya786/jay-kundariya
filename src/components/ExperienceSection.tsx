import { useRef, useState } from "react";
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
  tag: string;
  desktopX: number; // percentage (0-100)
  desktopY: number; // percentage (0-100)
  cardPlacement: "above" | "below";
  nodeStart: number;
  nodeEnd: number;
  cardStart: number;
  cardEnd: number;
}

// 5 Milestones with minimal, punchy content & perfectly spaced non-overlapping zones
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
    iconColor: "#A9DDE8",
    badge: "1,000+ msgs/min",
    tag: "Native Sensors & Bridge",
    desktopX: 18,
    desktopY: 75.0,
    cardPlacement: "above",
    nodeStart: 0.02,
    nodeEnd: 0.06,
    cardStart: 0.03,
    cardEnd: 0.08,
  },
  {
    id: "ewings",
    step: "02",
    stageName: "SHIPPING",
    company: "Ewings Infotech",
    role: "React Native Developer",
    dates: "Nov 2023 – Jun 2024",
    yearSpan: "'23 – '24",
    icon: Layers,
    iconColor: "#10A36B",
    badge: "5+ Client Apps",
    tag: "Stripe, Razorpay & GPS",
    desktopX: 43,
    desktopY: 75.0,
    cardPlacement: "below",
    nodeStart: 0.09,
    nodeEnd: 0.14,
    cardStart: 0.11,
    cardEnd: 0.17,
  },
  {
    id: "unikwork",
    step: "03",
    stageName: "HEALTHCARE",
    company: "Unikwork Systems",
    role: "React Native Developer",
    dates: "Jun 2024 – Feb 2025",
    yearSpan: "'24 – '25",
    icon: ShieldCheck,
    iconColor: "#FFD3A5",
    badge: "4.9 ★ Rating",
    tag: "Candor IVF & Cafeteria POS",
    desktopX: 46,
    desktopY: 47.1,
    cardPlacement: "above",
    nodeStart: 0.19,
    nodeEnd: 0.25,
    cardStart: 0.21,
    cardEnd: 0.28,
  },
  {
    id: "oceanmtech",
    step: "04",
    stageName: "ENTERPRISE",
    company: "Oceanmtech",
    role: "Senior React Native Developer",
    dates: "Feb 2025 – Aug 2025",
    yearSpan: "'25",
    icon: Zap,
    iconColor: "#0E6BA8",
    badge: "60 FPS Gestures",
    tag: "Gulf Clients & WebSockets",
    desktopX: 67,
    desktopY: 19.2,
    cardPlacement: "below",
    nodeStart: 0.31,
    nodeEnd: 0.37,
    cardStart: 0.33,
    cardEnd: 0.4,
  },
  {
    id: "opash",
    step: "05",
    stageName: "LEAD ARCHITECT",
    company: "Opash Software",
    role: "Senior Mobile Architect",
    dates: "Aug 2025 – Present",
    yearSpan: "'25 – Pres.",
    current: true,
    icon: Award,
    iconColor: "#0E6BA8",
    badge: "Gov App Lead",
    tag: "UAE PASS & Full-Stack POS",
    desktopX: 86.5,
    desktopY: 19.2,
    cardPlacement: "below",
    nodeStart: 0.41,
    nodeEnd: 0.47,
    cardStart: 0.43,
    cardEnd: 0.49,
  },
];

// Exact S-Curve Track matching the user reference image:
// Starts at bottom-left, goes right, curves up-right to middle, goes left, curves up-left to top, goes right to finish!
const S_TRACK_PATH =
  "M 60,390 L 650,390 C 745,390 745,245 650,245 L 350,245 C 255,245 255,100 350,100 L 950,100";

// Desktop Milestone Station Node on the S-Track
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

  // Scroll transforms
  const nodeOpacity = useTransform(
    scrollYProgress,
    [m.nodeStart, m.nodeEnd],
    [0, 1],
  );
  const nodeScale = useTransform(
    scrollYProgress,
    [m.nodeStart, m.nodeEnd],
    [0.5, m.current ? 1.15 : 1],
  );
  const cardOpacity = useTransform(
    scrollYProgress,
    [m.cardStart, m.cardEnd],
    [0, 1],
  );
  const cardY = useTransform(
    scrollYProgress,
    [m.cardStart, m.cardEnd],
    [m.cardPlacement === "above" ? -14 : 14, 0],
  );

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
      {/* 1. Station Pin on the S-Track Line */}
      <motion.div
        style={{ opacity: nodeOpacity, scale: nodeScale }}
        className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFFFFF] border-2 flex items-center justify-center cursor-pointer transition-all duration-300 z-20 ${
          m.current
            ? "border-[#0E6BA8] shadow-[0_0_22px_rgba(233,196,106,0.65)] ring-2 ring-[#0E6BA8]/30"
            : isHovered
              ? "border-[#0E6BA8] shadow-[0_6px_20px_rgba(233,196,106,0.4)]"
              : "border-gray-200/90 shadow-[0_4px_14px_rgba(13,19,33,0.06)] hover:border-[#0E6BA8]"
        }`}
      >
        <Icon
          className="w-4 h-4 transition-transform duration-200"
          style={{ color: m.iconColor }}
        />
        {m.current && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#10B981] border-2 border-[#FFFFFF] animate-pulse" />
        )}
      </motion.div>

      {/* 2. Micro Connection Stem */}
      <motion.div
        style={{ opacity: nodeOpacity }}
        className={`absolute left-1/2 -translate-x-1/2 w-px h-3.5 bg-gradient-to-b from-[#0E6BA8]/60 to-transparent pointer-events-none ${
          m.cardPlacement === "above" ? "bottom-10" : "top-10"
        }`}
      />

      {/* 3. Simplified, Minimalist Milestone Card */}
      <motion.div
        style={{ opacity: cardOpacity, y: cardY }}
        className={`absolute left-1/2 -translate-x-1/2 w-[156px] lg:w-[166px] pointer-events-auto ${
          isHovered ? "z-30" : "z-10"
        } ${m.cardPlacement === "above" ? "bottom-13" : "top-13"}`}
      >
        <div
          className={`p-2.5 sm:p-3 rounded-2xl border transition-all duration-300 cursor-pointer ${
            m.current
              ? "bg-[#FFFFFF] border-[#0E6BA8] shadow-[0_12px_28px_rgba(233,196,106,0.22)] ring-1 ring-[#0E6BA8]/40"
              : isHovered
                ? "bg-[#FFFFFF] border-[#0E6BA8] shadow-[0_10px_24px_rgba(13,19,33,0.08)] -translate-y-1"
                : "bg-[#FFFFFF]/95 backdrop-blur-xs border-gray-200/80 hover:border-[#0E6BA8]/60 shadow-[0_6px_16px_rgba(13,19,33,0.04)]"
          }`}
        >
          {/* Header Tag inside card */}
          <div className="flex items-center justify-between gap-1 mb-1">
            <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-[#0E6BA8]">
              {m.step} • {m.yearSpan}
            </span>
            {m.current ? (
              <span className="inline-flex items-center gap-1 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#047857]">
                Current
              </span>
            ) : (
              <span className="text-[8px] font-mono font-semibold text-[#0B2545]/60">
                {m.badge}
              </span>
            )}
          </div>

          {/* Company Name & Role */}
          <h3 className="font-serif text-[13px] font-bold text-[#0B2545] tracking-tight leading-snug truncate">
            {m.company}
          </h3>
          <p className="text-[9.5px] font-sans text-[#0B2545]/65 mb-1.5 truncate">
            {m.role}
          </p>

          {/* Key Simple Highlight Tag */}
          <div className="pt-1.5 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[8.5px] font-mono px-2 py-0.5 rounded-md bg-[#A9DDE8]/30 text-[#0B2545] font-medium truncate max-w-[115px]">
              {m.tag}
            </span>
            <ArrowUpRight className="w-3 h-3 text-[#0E6BA8] shrink-0" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Sticky Scroll for desktop S-track only
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const pathProgress = useTransform(scrollYProgress, [0.02, 0.48], [0.02, 1]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <>
      {/* ============================================================= */}
      {/* DESKTOP: Sticky S-track scroll experience (lg and above only)  */}
      {/* ============================================================= */}
      <section
        id="experience"
        ref={containerRef}
        className="relative w-full h-[300vh] bg-[#FFFFFF] border-t border-[#0E6BA8]/20 hidden lg:block"
      >
        <div className="sticky top-0 h-[100svh] min-h-[560px] w-full flex flex-col justify-between py-8 px-8 bg-[#FFFFFF] overflow-hidden select-none">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-gradient-to-br from-[#0E6BA8]/10 via-[#FFD3A5]/10 to-transparent rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-gradient-to-tr from-[#A9DDE8]/8 via-[#10A36B]/6 to-transparent rounded-full blur-[110px] pointer-events-none" />

          <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-between h-full">
            {/* Header */}
            <div className="flex items-end justify-between gap-3 mb-2">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-[#0E6BA8] tracking-wider uppercase mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Career Track</span>
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#0B2545] tracking-tight">
                  Career{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E6BA8] via-[#10A36B] to-[#0B2545]">
                    Journey Track
                  </span>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <motion.div
                  style={{ opacity: scrollHintOpacity }}
                  className="flex items-center gap-1 text-xs font-mono text-[#0E6BA8] bg-[#F8FCFD] border border-[#0E6BA8]/30 py-1.5 px-3 rounded-full animate-bounce"
                >
                  <span>Scroll to trace track</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </motion.div>
                <div className="flex items-center gap-2.5 text-xs font-mono text-[#0B2545] bg-[#F8FCFD] border border-[#0E6BA8]/35 py-1.5 px-3.5 rounded-full shadow-2xs">
                  <span className="font-bold">4+ Years</span>
                  <span className="text-[#0E6BA8]">✦</span>
                  <span className="font-bold">5 Teams</span>
                  <span className="text-[#0E6BA8]">✦</span>
                  <span className="font-bold">20+ Shipped</span>
                </div>
              </div>
            </div>

            {/* S-Track SVG Canvas */}
            <div className="relative w-full h-[480px] xl:h-[510px] my-auto">
              <svg
                className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
                viewBox="0 0 1000 520"
                preserveAspectRatio="none"
                fill="none"
              >
                <defs>
                  <linearGradient id="sTrackGlowGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#A9DDE8" stopOpacity="0.9" />
                    <stop offset="25%" stopColor="#10A36B" stopOpacity="0.95" />
                    <stop offset="65%" stopColor="#FFD3A5" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#0E6BA8" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="sTrackGuideTrack" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#A9DDE8" stopOpacity="0.18" />
                    <stop offset="50%" stopColor="#FFD3A5" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#0E6BA8" stopOpacity="0.25" />
                  </linearGradient>
                </defs>
                <path d={S_TRACK_PATH} stroke="url(#sTrackGuideTrack)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                {[
                  { cx: 180, cy: 390 }, { cx: 430, cy: 390 },
                  { cx: 460, cy: 245 }, { cx: 670, cy: 100 }, { cx: 865, cy: 100 },
                ].map((pt, idx) => (
                  <circle key={idx} cx={pt.cx} cy={pt.cy} r="4" fill="#FFFFFF" stroke="#0E6BA8" strokeWidth="2" strokeOpacity={0.6} />
                ))}
                <motion.path
                  d={S_TRACK_PATH}
                  stroke="url(#sTrackGlowGradient)"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ pathLength: pathProgress }}
                />
              </svg>
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

            {/* Bottom strip */}
            <div className="pt-2 border-t border-[#0E6BA8]/15 flex items-center justify-between gap-4 text-xs font-mono">
              <span className="text-[11px] text-[#0B2545]/60">Scroll down to travel along the career S-track</span>
              <span className="text-[11px] text-[#0B2545] font-bold">100% On-Time Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* MOBILE: Simple vertical timeline (below lg)                   */}
      {/* ============================================================= */}
      <section
        id="experience-mobile"
        className="lg:hidden w-full bg-[#FFFFFF] border-t border-[#0E6BA8]/20 px-5 py-10"
      >
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-[#0E6BA8] tracking-wider uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career Track</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2545] tracking-tight">
            Career{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E6BA8] via-[#10A36B] to-[#0B2545]">
              Journey
            </span>
          </h2>
          <div className="flex items-center gap-3 mt-3 flex-wrap">
            <span className="text-xs font-mono text-[#0B2545] bg-[#F8FCFD] border border-[#0E6BA8]/35 py-1 px-3 rounded-full">4+ Years</span>
            <span className="text-xs font-mono text-[#0B2545] bg-[#F8FCFD] border border-[#0E6BA8]/35 py-1 px-3 rounded-full">5 Teams</span>
            <span className="text-xs font-mono text-[#0B2545] bg-[#F8FCFD] border border-[#0E6BA8]/35 py-1 px-3 rounded-full">20+ Shipped</span>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#A9DDE8] via-[#0E6BA8] to-[#10A36B]" />

          <div className="flex flex-col gap-6">
            {MILESTONES.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.id} className="flex gap-5">
                  {/* Timeline dot */}
                  <div className="relative shrink-0 flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full border-2 bg-[#FFFFFF] flex items-center justify-center z-10 ${
                        m.current
                          ? "border-[#0E6BA8] shadow-[0_0_16px_rgba(233,196,106,0.5)]"
                          : "border-gray-200"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" style={{ color: m.iconColor }} />
                      {m.current && (
                        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#10B981] border border-white animate-pulse" />
                      )}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 rounded-2xl border p-4 mb-1 ${
                      m.current
                        ? "border-[#0E6BA8] bg-[#F8FCFD] shadow-[0_8px_24px_rgba(233,196,106,0.15)]"
                        : "border-gray-100 bg-[#FFFFFF] shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] font-mono font-bold text-[#0E6BA8] uppercase tracking-wider">
                        {m.step} • {m.yearSpan}
                      </span>
                      {m.current ? (
                        <span className="inline-flex items-center gap-1 text-[8px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#10B981]/15 text-[#047857]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                          Current
                        </span>
                      ) : (
                        <span className="text-[9px] font-mono text-[#0B2545]/50">{m.badge}</span>
                      )}
                    </div>
                    <h3 className="font-serif text-base font-bold text-[#0B2545] mb-0.5">{m.company}</h3>
                    <p className="text-xs text-[#0B2545]/65 mb-3">{m.role}</p>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <span className="text-[9.5px] font-mono px-2.5 py-1 rounded-md bg-[#A9DDE8]/30 text-[#0B2545] font-medium">
                        {m.tag}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#0E6BA8]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

