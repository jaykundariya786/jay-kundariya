import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowUpRight,
  ArrowRight,
  ExternalLink,
  Smartphone,
  Sparkles,
  X,
  Check,
  ShieldCheck,
  ShoppingBag,
  HeartPulse,
  Utensils,
  MessageSquare,
  Tag,
  Compass,
  SlidersHorizontal,
  Gamepad2,
  Music,
  Wifi,
  Battery,
  Flame,
  Star,
  Play,
  QrCode,
  Radio,
  Zap,
} from "lucide-react";
import { projectsData } from "../lib/projectData";

// =====================================================================
// 10 Flagship Projects matching the stacked layout from the video demo
// =====================================================================
interface FeaturedProjectConfig {
  id: string;
  headline: string; // Big uppercase title on the left
  company: string; // Company / Client on the right
  role: string; // Role / Subtitle
  years: string; // Timeframe
  color: string; // Vibrant brand color for the square logo badge
  icon: React.ComponentType<{ className?: string }>;
}

const FEATURED_CONFIGS: FeaturedProjectConfig[] = [
  {
    id: "esanad",
    headline: "ESANAD",
    company: "eSanad Marketplace",
    role: "Lead Mobile & UAE PASS Integration",
    years: "2023–2024",
    color: "#0284C7", // Sky Blue
    icon: ShieldCheck,
  },
  {
    id: "pos-platform",
    headline: "POS PLATFORM",
    company: "Omni-Channel POS SaaS",
    role: "Solo Full-Stack & Mobile Architect",
    years: "2024",
    color: "#6366F1", // Indigo
    icon: ShoppingBag,
  },
  {
    id: "candor-ivf",
    headline: "CANDOR IVF",
    company: "Candor IVF Hospital",
    role: "Patient Care Companion App",
    years: "2023",
    color: "#F43F5E", // Rose
    icon: HeartPulse,
  },
  {
    id: "meal-manage",
    headline: "MEAL MANAGE",
    company: "Meal Manage K-12",
    role: "School Cafeteria POS & Parent App",
    years: "2023",
    color: "#F59E0B", // Amber
    icon: Utensils,
  },
  {
    id: "japa-health",
    headline: "JAPA HEALTH",
    company: "Japa Health",
    role: "Holistic Wellness & Video Engine",
    years: "2022–2023",
    color: "#10B981", // Emerald
    icon: Sparkles,
  },
  {
    id: "sms-marketing-app",
    headline: "SMS MARKETING",
    company: "SMS Marketing Engine",
    role: "Android Native Bridge (100+ SMS/s)",
    years: "2022",
    color: "#3B82F6", // Electric Blue
    icon: MessageSquare,
  },
  {
    id: "max-deal",
    headline: "MAXDEAL",
    company: "MaxDeal Hospitality",
    role: "Hospitality & Deal Redemption",
    years: "2024",
    color: "#EF4444", // Coral Red
    icon: Tag,
  },
  {
    id: "tour-place",
    headline: "TOURPLACE",
    company: "TourPlace Explorer",
    role: "Global Tour & Room Booking",
    years: "2023",
    color: "#8B5CF6", // Violet
    icon: Compass,
  },
  {
    id: "skill-play",
    headline: "SKILLPLAY",
    company: "BigWin Junction",
    role: "Real-Time Multiplayer Gaming",
    years: "2024",
    color: "#14B8A6", // Teal
    icon: Gamepad2,
  },
  {
    id: "sheihek",
    headline: "SHEIHEK",
    company: "Sheihek Music Platform",
    role: "Custom Player Controller & Audio",
    years: "2023",
    color: "#EC4899", // Pink
    icon: Music,
  },
];

// =====================================================================
// Kinetic Sliced Text Component (Reproduces the Exact Slit-Scan Motion)
// =====================================================================
interface SlicedTitleProps {
  headline: string;
  isActive: boolean;
  onHover: () => void;
  onClick: () => void;
  triggerKey: string;
}

function SlicedTitle({
  headline,
  isActive,
  onHover,
  onClick,
  triggerKey,
}: SlicedTitleProps) {
  return (
    <div
      onMouseEnter={onHover}
      onClick={onClick}
      className="relative cursor-pointer select-none py-0.5 sm:py-1 group overflow-hidden"
    >
      {/* INACTIVE STATE: Clean, architectural muted light grey */}
      {!isActive && (
        <span className="block font-sans font-black uppercase text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[44px] leading-[0.9] text-neutral-300 hover:text-neutral-400 transition-colors tracking-tight truncate">
          {headline}
        </span>
      )}

      {/* ACTIVE STATE: Multi-layer horizontal slit-scan displacement */}
      {isActive && (
        <div className="relative">
          {/* Base solid layer to guarantee razor-sharp text when settled */}
          <span className="block font-sans font-black uppercase text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[44px] leading-[0.9] text-[#0B2545] tracking-tight truncate">
            {headline}
          </span>

          {/* Slice 1: Top 25% (slides left then snaps back) */}
          <motion.div
            key={`s1-${triggerKey}`}
            initial={{ x: -24 }}
            animate={{ x: [0, -28, 12, -3, 0] }}
            transition={{ duration: 0.44, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 pointer-events-none"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 26%, 0 26%)" }}
          >
            <span className="block font-sans font-black uppercase text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[44px] leading-[0.9] text-[#0B2545] tracking-tight truncate">
              {headline}
            </span>
          </motion.div>

          {/* Slice 2: 25% - 50% (slides right then snaps back) */}
          <motion.div
            key={`s2-${triggerKey}`}
            initial={{ x: 30 }}
            animate={{ x: [0, 32, -14, 4, 0] }}
            transition={{
              duration: 0.48,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.02,
            }}
            className="absolute inset-0 pointer-events-none"
            style={{ clipPath: "polygon(0 25%, 100% 25%, 100% 51%, 0 51%)" }}
          >
            <span className="block font-sans font-black uppercase text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[44px] leading-[0.9] text-[#0B2545] tracking-tight truncate">
              {headline}
            </span>
          </motion.div>

          {/* Slice 3: 50% - 75% (slides left then snaps back) */}
          <motion.div
            key={`s3-${triggerKey}`}
            initial={{ x: -28 }}
            animate={{ x: [0, -30, 14, -3, 0] }}
            transition={{
              duration: 0.46,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.04,
            }}
            className="absolute inset-0 pointer-events-none"
            style={{ clipPath: "polygon(0 50%, 100% 50%, 100% 76%, 0 76%)" }}
          >
            <span className="block font-sans font-black uppercase text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[44px] leading-[0.9] text-[#0B2545] tracking-tight truncate">
              {headline}
            </span>
          </motion.div>

          {/* Slice 4: Bottom 75% - 100% (slides right then snaps back) */}
          <motion.div
            key={`s4-${triggerKey}`}
            initial={{ x: 20 }}
            animate={{ x: [0, 22, -10, 3, 0] }}
            transition={{
              duration: 0.42,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.01,
            }}
            className="absolute inset-0 pointer-events-none"
            style={{ clipPath: "polygon(0 75%, 100% 75%, 100% 100%, 0 100%)" }}
          >
            <span className="block font-sans font-black uppercase text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[44px] leading-[0.9] text-[#0B2545] tracking-tight truncate">
              {headline}
            </span>
          </motion.div>

          {/* Ghost Echo Slice (light grey kinetic smear) */}
          <motion.div
            key={`ghost-${triggerKey}`}
            initial={{ x: 60, opacity: 0.5 }}
            animate={{ x: [0, 65, -24, 0], opacity: [0, 0.45, 0] }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 pointer-events-none"
            style={{ clipPath: "polygon(0 32%, 100% 32%, 100% 68%, 0 68%)" }}
          >
            <span className="block font-sans font-black uppercase text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[45px] leading-[0.88] sm:leading-[0.9] text-gray-400 tracking-tight">
              {headline}
            </span>
          </motion.div>
        </div>
      )}
    </div>
  );
}

// =====================================================================
// Main Projects Section Component
// =====================================================================
export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Combine config items with full data from `projectData.ts`
  const projects = FEATURED_CONFIGS.map((cfg) => {
    const rawData = projectsData.find((p) => p.id === cfg.id);
    return {
      ...cfg,
      data: rawData || {
        id: cfg.id,
        category: "Mobile",
        tags: ["React Native"],
        title: cfg.headline,
        description: "",
        images: [],
        overview: "",
        longDescription: "",
        purpose: "",
        features: [],
        tools: [],
        appLink: "",
        liveLink: "",
      },
    };
  });

  const activeProject = projects[activeIndex] || projects[0];
  const activeDetailProject = projectsData.find(
    (p) => p.id === selectedProjectId,
  );

  // Auto-cycle through items when user is idle, just like a showcase video
  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayTimerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4500);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying, projects.length]);

  const handleUserSelect = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  const handleOpenModal = (projectId: string) => {
    setIsAutoPlaying(false);
    setSelectedProjectId(projectId);
  };

  const renderProjectScreen = (project: (typeof projects)[0]) => {
    switch (project.id) {
      case "esanad":
        return (
          <div className="flex flex-col gap-2">
            {/* UAE PASS Pill */}
            <div className="flex items-center justify-between bg-sky-50 border border-sky-100/80 rounded-xl px-2.5 py-1.5">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                <span className="text-[10px] font-semibold text-sky-950">
                  UAE PASS Verified
                </span>
              </div>
              <span className="text-[9px] font-mono text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                Active 🟢
              </span>
            </div>

            {/* Policy Segment Switcher */}
            <div className="grid grid-cols-3 gap-1 bg-neutral-100/80 p-0.5 rounded-xl text-center text-[10px] font-semibold text-neutral-600">
              <span className="bg-white text-sky-700 shadow-xs py-1 rounded-lg">
                Motor
              </span>
              <span className="py-1">Health</span>
              <span className="py-1">Travel</span>
            </div>

            {/* Active Policy Card */}
            <div className="bg-gradient-to-br from-sky-600 to-sky-700 text-white rounded-2xl p-2.5 sm:p-3 shadow-xs">
              <div className="flex items-center justify-between text-[10px] text-sky-100">
                <span className="font-medium">Comprehensive Gold</span>
                <span className="font-mono text-[9px] bg-white/20 px-1.5 py-0.5 rounded">
                  35+ Insurers
                </span>
              </div>
              <div className="mt-1.5 flex items-baseline justify-between">
                <div>
                  <span className="text-lg font-extrabold tracking-tight">
                    AED 1,420
                  </span>
                  <span className="text-[10px] text-sky-200 font-mono">
                    /yr
                  </span>
                </div>
                <span className="text-[9px] bg-white text-sky-800 font-bold px-2 py-0.5 rounded-full shadow-xs">
                  Instant Quote
                </span>
              </div>
              <div className="mt-2 pt-1.5 border-t border-white/15 flex items-center justify-between text-[9px] text-sky-100 font-mono">
                <span>0% Dep · Agency Repair</span>
                <span>#AE-8942</span>
              </div>
            </div>
          </div>
        );

      case "pos-platform":
        return (
          <div className="flex flex-col gap-2">
            {/* Branch & Table Bar */}
            <div className="flex items-center justify-between bg-indigo-50 border border-indigo-100/80 rounded-xl px-2.5 py-1.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-semibold text-indigo-950">
                  Table 07 · Dine-In (4 Pax)
                </span>
              </div>
              <span className="text-[9px] font-mono text-indigo-600 font-bold">
                KOT #402
              </span>
            </div>

            {/* Mini Order Slip */}
            <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-2.5 text-xs text-neutral-700 space-y-1">
              <div className="flex justify-between items-center text-[10.5px]">
                <span className="font-medium text-neutral-900">
                  2x Farmhouse Pizza
                </span>
                <span className="font-mono font-semibold">₹780</span>
              </div>
              <div className="flex justify-between items-center text-[10.5px]">
                <span className="font-medium text-neutral-900">
                  1x Truffle Pasta
                </span>
                <span className="font-mono font-semibold">₹440</span>
              </div>
              <div className="flex justify-between items-center text-[10.5px]">
                <span className="font-medium text-neutral-900">
                  2x Cold Brew Float
                </span>
                <span className="font-mono font-semibold">₹320</span>
              </div>

              <div className="pt-2 border-t border-dashed border-neutral-200 flex justify-between items-center">
                <div>
                  <span className="text-[9px] uppercase font-mono text-neutral-400 block">
                    Total + GST
                  </span>
                  <span className="text-sm font-extrabold text-[#0B2545]">
                    ₹1,540.00
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-neutral-200 text-neutral-700 text-[9px] font-bold">
                    KOT
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-indigo-600 text-white text-[9px] font-bold shadow-xs">
                    Settle ⚡
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case "candor-ivf":
        return (
          <div className="flex flex-col gap-2">
            {/* Hospital Header */}
            <div className="flex items-center justify-between bg-rose-50 border border-rose-100/80 rounded-xl px-2.5 py-1.5">
              <div className="flex items-center gap-1.5">
                <HeartPulse className="w-3.5 h-3.5 text-rose-600" />
                <span className="text-[10px] font-semibold text-rose-950">
                  Patient Care Companion
                </span>
              </div>
              <span className="text-[9px] font-mono text-rose-600 font-bold">
                ID #CV-2084
              </span>
            </div>

            {/* Appointment & Treatment Card */}
            <div className="bg-gradient-to-br from-rose-500 to-rose-600 text-white rounded-2xl p-2.5 sm:p-3 shadow-xs">
              <div className="flex items-center justify-between text-[10px] text-rose-100">
                <span className="font-medium">Next Clinic Visit</span>
                <span className="font-mono text-[9px] bg-white/20 px-1.5 py-0.5 rounded">
                  Tomorrow 10:30 AM
                </span>
              </div>
              <div className="mt-1.5">
                <h5 className="font-bold text-xs sm:text-sm leading-tight">
                  Dr. Rita Patel
                </h5>
                <p className="text-[10px] text-rose-100 mt-0.5">
                  Follicular Ultrasound Scan · Room 204
                </p>
              </div>
              <div className="mt-2 pt-1.5 border-t border-white/15 flex items-center justify-between text-[9px] text-rose-100 font-mono">
                <span>Cycle Day 14 (Stimulation)</span>
                <span>3 Reports Ready</span>
              </div>
            </div>
          </div>
        );

      case "meal-manage":
        return (
          <div className="flex flex-col gap-2">
            {/* Student Pass Bar */}
            <div className="flex items-center justify-between bg-amber-50 border border-amber-100/80 rounded-xl px-2.5 py-1.5">
              <div className="flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-[10px] font-semibold text-amber-950">
                  K-12 Cafeteria Digital Pass
                </span>
              </div>
              <span className="text-[9px] font-mono font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                Oakridge
              </span>
            </div>

            {/* Student Account Card */}
            <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-2.5 text-neutral-800">
              <div className="flex justify-between items-center mb-1.5">
                <div>
                  <span className="text-xs font-bold block">Leo Miller</span>
                  <span className="text-[9px] text-neutral-500 font-mono">
                    Grade 5-A
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-mono text-neutral-400 block">
                    Balance
                  </span>
                  <span className="text-xs font-extrabold text-amber-600 font-mono">
                    $54.20
                  </span>
                </div>
              </div>

              <div className="bg-white border border-neutral-200/80 rounded-xl p-2 mb-2">
                <span className="text-[8.5px] font-mono uppercase text-neutral-400 block">
                  Pre-ordered Lunch
                </span>
                <p className="text-[10px] font-semibold text-neutral-800">
                  Grilled Chicken Wrap · Apple Slices
                </p>
              </div>

              {/* Barcode Mock */}
              <div className="flex flex-col items-center justify-center bg-white border border-neutral-200/80 rounded-xl py-1.5">
                <div className="flex items-center gap-0.5 h-5">
                  {[
                    2, 4, 1, 3, 2, 5, 1, 3, 4, 2, 1, 4, 3, 2, 5, 2, 1, 3, 2,
                  ].map((w, i) => (
                    <div
                      key={i}
                      className="bg-neutral-800 h-full"
                      style={{ width: `${w}px` }}
                    />
                  ))}
                </div>
                <span className="text-[8px] font-mono text-neutral-400 mt-0.5 tracking-widest">
                  MM-8921-994
                </span>
              </div>
            </div>
          </div>
        );

      case "japa-health":
        return (
          <div className="flex flex-col gap-2">
            {/* Streak & Vitals Header */}
            <div className="flex items-center justify-between bg-emerald-50 border border-emerald-100/80 rounded-xl px-2.5 py-1.5">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-[10px] font-semibold text-emerald-950">
                  Wellness Score: 94%
                </span>
              </div>
              <div className="flex items-center gap-1 text-[9px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
                <Flame className="w-3 h-3 text-amber-500" />
                <span>18d Streak</span>
              </div>
            </div>

            {/* Video Session Card */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-2xl p-2.5 sm:p-3 shadow-xs">
              <div className="flex items-center justify-between text-[10px] text-emerald-100">
                <span className="font-medium">Today's Flow</span>
                <span className="font-mono text-[9px] bg-white/20 px-1.5 py-0.5 rounded">
                  15 Mins
                </span>
              </div>
              <div className="mt-1.5">
                <h5 className="font-bold text-xs sm:text-sm leading-tight">
                  Morning Prana Flow
                </h5>
                <p className="text-[10px] text-emerald-100 mt-0.5">
                  Breathwork &amp; Spine Mobility
                </p>
              </div>

              {/* Scrubber & Play */}
              <div className="mt-2.5 flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white text-emerald-700 flex items-center justify-center shrink-0 shadow-xs">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <div className="flex-1 bg-white/30 h-1 rounded-full overflow-hidden">
                  <div className="bg-white h-full w-[45%]" />
                </div>
                <span className="text-[8.5px] font-mono text-emerald-100">
                  06:45
                </span>
              </div>
            </div>
          </div>
        );

      case "sms-marketing-app":
        return (
          <div className="flex flex-col gap-2">
            {/* Dual SIM & JNI Engine */}
            <div className="flex items-center justify-between bg-blue-50 border border-blue-100/80 rounded-xl px-2.5 py-1.5">
              <div className="flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                <span className="text-[10px] font-semibold text-blue-950">
                  Native JNI Engine
                </span>
              </div>
              <span className="text-[9px] font-mono text-blue-700 font-bold bg-blue-100 px-1.5 py-0.5 rounded">
                Dual SIM 🟢
              </span>
            </div>

            {/* Throughput & Dispatch Gauge Card */}
            <div className="bg-[#0B2545] text-white rounded-2xl p-2.5 sm:p-3 border border-neutral-800 shadow-xs">
              <div className="flex justify-between items-center text-[10px] text-neutral-400">
                <span className="font-mono uppercase text-[9px]">
                  Live Throughput
                </span>
                <span className="text-emerald-400 font-bold font-mono text-[9px]">
                  14ms latency
                </span>
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="text-xl font-mono font-extrabold text-blue-400">
                  128
                </span>
                <span className="text-[10.5px] font-mono text-neutral-300">
                  SMS / sec
                </span>
              </div>

              <div className="mt-2 pt-2 border-t border-neutral-800 grid grid-cols-2 gap-1.5 text-[8.5px] font-mono">
                <div className="bg-neutral-800/80 p-1.5 rounded-lg">
                  <span className="text-neutral-400 block">
                    SIM 1 (Carrier A)
                  </span>
                  <span className="text-white font-bold">64/s · 99.9%</span>
                </div>
                <div className="bg-neutral-800/80 p-1.5 rounded-lg">
                  <span className="text-neutral-400 block">
                    SIM 2 (Carrier B)
                  </span>
                  <span className="text-white font-bold">64/s · 99.8%</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "max-deal":
        return (
          <div className="flex flex-col gap-2">
            {/* VIP Pass Header */}
            <div className="flex items-center justify-between bg-rose-50 border border-rose-100/80 rounded-xl px-2.5 py-1.5">
              <div className="flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-rose-600" />
                <span className="text-[10px] font-semibold text-rose-950">
                  Privilege Deal Pass
                </span>
              </div>
              <span className="text-[9px] font-mono text-rose-700 font-bold bg-rose-100 px-1.5 py-0.5 rounded">
                Gold Tier
              </span>
            </div>

            {/* Deal Voucher Card */}
            <div className="bg-gradient-to-br from-rose-500 to-red-600 text-white rounded-2xl p-2.5 sm:p-3 shadow-xs">
              <div className="flex items-center justify-between text-[10px] text-rose-100">
                <span className="font-medium">The Marriott Grand Dining</span>
                <span className="font-mono text-[9px] bg-white/20 px-1.5 py-0.5 rounded">
                  Surat Hub
                </span>
              </div>
              <div className="mt-1.5 flex items-baseline justify-between">
                <div>
                  <span className="text-base font-black tracking-tight">
                    FLAT 40% OFF
                  </span>
                  <p className="text-[9px] text-rose-100">
                    5-Star Weekend Buffet
                  </p>
                </div>
                <div className="bg-white text-rose-700 p-1 rounded-lg">
                  <QrCode className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-2 pt-1.5 border-t border-white/20 flex items-center justify-between text-[8.5px] font-mono text-rose-100">
                <span>CODE: MAX-GOLD-849</span>
                <span>Expires in 3d</span>
              </div>
            </div>
          </div>
        );

      case "tour-place":
        return (
          <div className="flex flex-col gap-2">
            {/* Location & Rating Header */}
            <div className="flex items-center justify-between bg-purple-50 border border-purple-100/80 rounded-xl px-2.5 py-1.5">
              <div className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-purple-600" />
                <span className="text-[10px] font-semibold text-purple-950">
                  Santorini Caldera, Greece
                </span>
              </div>
              <div className="flex items-center gap-0.5 text-[9px] font-bold text-amber-600">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>4.95</span>
              </div>
            </div>

            {/* Booking Suite Card */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-2xl p-2.5 sm:p-3 shadow-xs">
              <div className="flex items-center justify-between text-[10px] text-purple-100">
                <span className="font-medium">Infinity Cave Villa</span>
                <span className="font-mono text-[9px] bg-white/20 px-1.5 py-0.5 rounded">
                  Instant Confirmed
                </span>
              </div>
              <div className="mt-1.5">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-extrabold tracking-tight">
                    $220
                  </span>
                  <span className="text-[9.5px] text-purple-200 font-mono">
                    / night
                  </span>
                </div>
                <p className="text-[9.5px] text-purple-100 mt-0.5">
                  Oct 24–29 · 2 Guests · Ocean Jacuzzi
                </p>
              </div>
              <div className="mt-2 pt-1.5 border-t border-white/15 flex items-center justify-between text-[8.5px] text-purple-100 font-mono">
                <span>Free Cancellation</span>
                <span>View on Map</span>
              </div>
            </div>
          </div>
        );

      case "skill-play":
        return (
          <div className="flex flex-col gap-2">
            {/* Multiplayer Arena Header */}
            <div className="flex items-center justify-between bg-teal-50 border border-teal-100/80 rounded-xl px-2.5 py-1.5">
              <div className="flex items-center gap-1.5">
                <Gamepad2 className="w-3.5 h-3.5 text-teal-600" />
                <span className="text-[10px] font-semibold text-teal-950">
                  Real-Time Arena #08
                </span>
              </div>
              <div className="flex items-center gap-1 text-[9px] font-mono text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                <Zap className="w-2.5 h-2.5 text-emerald-600" />
                <span>18ms Ping</span>
              </div>
            </div>

            {/* Live Match Lobby Card */}
            <div className="bg-[#0B2545] text-white rounded-2xl p-2.5 sm:p-3 border border-neutral-800 shadow-xs">
              <div className="flex justify-between items-center text-[9.5px] text-neutral-400">
                <span>Speed 8-Ball Pool</span>
                <span className="text-teal-400 font-bold font-mono">
                  Round 3/5
                </span>
              </div>

              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-teal-500 text-neutral-950 font-bold text-[10px] flex items-center justify-center">
                    JK
                  </div>
                  <div>
                    <span className="text-[10px] font-bold block text-white">
                      Jay K.
                    </span>
                    <span className="text-[8px] font-mono text-teal-400">
                      Lvl 48
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-neutral-500">
                  VS
                </span>
                <div className="flex items-center gap-2 text-right">
                  <div>
                    <span className="text-[10px] font-bold block text-white">
                      Alex_Pro
                    </span>
                    <span className="text-[8px] font-mono text-neutral-400">
                      Lvl 52
                    </span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-neutral-700 text-white font-bold text-[10px] flex items-center justify-center">
                    AP
                  </div>
                </div>
              </div>

              <div className="mt-2 pt-1.5 border-t border-neutral-800 flex justify-between items-center text-[8.5px] font-mono">
                <span className="text-neutral-400">Stake Pool: ₹5,000</span>
                <span className="text-teal-400 font-bold animate-pulse">
                  Your Turn ⚡
                </span>
              </div>
            </div>
          </div>
        );

      case "sheihek":
        return (
          <div className="flex flex-col gap-2">
            {/* Audio Engine Header */}
            <div className="flex items-center justify-between bg-pink-50 border border-pink-100/80 rounded-xl px-2.5 py-1.5">
              <div className="flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5 text-pink-600" />
                <span className="text-[10px] font-semibold text-pink-950">
                  Custom Audio Player
                </span>
              </div>
              <span className="text-[9px] font-mono text-pink-700 font-bold bg-pink-100 px-1.5 py-0.5 rounded">
                320k Lossless
              </span>
            </div>

            {/* Equalizer & Audio Player Card */}
            <div className="bg-gradient-to-br from-pink-600 to-rose-700 text-white rounded-2xl p-2.5 sm:p-3 shadow-xs">
              <div className="flex items-center justify-between text-[10px] text-pink-100">
                <span className="font-medium">Now Playing</span>
                <span className="font-mono text-[9px] bg-white/20 px-1.5 py-0.5 rounded">
                  Stereo
                </span>
              </div>
              <div className="mt-1">
                <h5 className="font-bold text-xs sm:text-sm leading-tight">
                  Desert Echoes
                </h5>
                <p className="text-[10px] text-pink-100 mt-0.5">
                  Oud &amp; Ambient Synth
                </p>
              </div>

              {/* Pulsating EQ Bars */}
              <div className="mt-2 flex items-end gap-1 h-6 px-1">
                {[40, 75, 55, 90, 60, 100, 45, 80, 65, 95, 50, 70].map(
                  (h, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: [`${h * 0.3}%`, `${h}%`, `${h * 0.35}%`],
                      }}
                      transition={{
                        duration: 0.8 + (i % 4) * 0.15,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex-1 bg-white/90 rounded-full"
                    />
                  ),
                )}
              </div>

              {/* Scrubber & Controls */}
              <div className="mt-2 pt-1.5 border-t border-white/20 flex items-center justify-between text-[8.5px] font-mono text-pink-100">
                <span>02:34</span>
                <div className="w-4 h-4 rounded-full bg-white text-pink-700 flex items-center justify-center shadow-xs">
                  <Play className="w-2 h-2 fill-current ml-0.5" />
                </div>
                <span>04:12</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="projects"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      className="relative w-full pt-20 sm:pt-28 pb-16 sm:pb-24 bg-[#F8FCFD] text-[#0B2545] select-none overflow-hidden border-t border-b border-neutral-300/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Top Header Row (Exact styling from video demo) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12 border-b border-neutral-300/70 pb-5">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#0B2545]" />
            <span className="text-xs font-mono font-medium tracking-wider uppercase text-neutral-500">
              The journey start here
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
            <span>20+ Commercial Apps</span>
            <span className="text-neutral-300">•</span>
            <span>2021 — 2026</span>
          </div>
        </div>

        {/* 2-Column Side-by-Side Showcase (Responsive: Phone on top on mobile, side-by-side on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Stacked Typographic Titles */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center">
            <div className="flex flex-col space-y-0.5 sm:space-y-1">
              {projects.map((item, idx) => (
                <SlicedTitle
                  key={item.id}
                  headline={item.headline}
                  isActive={activeIndex === idx}
                  triggerKey={`${item.id}-${activeIndex}`}
                  onHover={() => handleUserSelect(idx)}
                  onClick={() => handleOpenModal(item.id)}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Active Project Device Screen Mockup (Tight, attractive, understandable) */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-full max-w-[340px] sm:max-w-[350px] flex flex-col items-center"
              >
                {/* Sleek Mobile Phone Chassis */}
                <div
                  onClick={() => handleOpenModal(activeProject.id)}
                  className="w-full bg-[#0D1117] rounded-[36px] p-2.5 sm:p-3 border border-neutral-700/60 shadow-[0_22px_55px_-12px_rgba(0,0,0,0.22),0_2px_6px_rgba(0,0,0,0.12)] cursor-pointer group hover:border-neutral-500/60 transition-all duration-300"
                  title="Click to view full case study"
                >
                  {/* Top Dynamic Island / Speaker Pill */}
                  <div className="w-20 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-center gap-1.5 px-2 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                    <span
                      className="w-1.5 h-1.5 rounded-full ring-1 ring-white/20"
                      style={{
                        backgroundColor: activeProject.color,
                        boxShadow: `0 0 6px ${activeProject.color}`,
                      }}
                    />
                  </div>

                  {/* Inner Mobile Screen */}
                  <div className="rounded-[26px] bg-white p-3 sm:p-3.5 flex flex-col justify-between min-h-[385px] border border-neutral-100 shadow-inner overflow-hidden select-none">
                    <div>
                      {/* Mobile Status Bar */}
                      <div className="flex items-center justify-between text-[10px] font-mono font-semibold text-neutral-600 mb-2.5 px-0.5">
                        <span>9:41</span>
                        <div className="flex items-center gap-1.5 text-neutral-500">
                          <span className="text-[9px] font-mono tracking-tighter">
                            5G
                          </span>
                          <Wifi className="w-3 h-3" />
                          <Battery className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* In-App Header: App Icon, Brand & Category */}
                      <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-neutral-100">
                        <div className="flex items-center gap-2 min-w-0">
                          <div
                            className="w-7 h-7 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs"
                            style={{ backgroundColor: activeProject.color }}
                          >
                            <activeProject.icon className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-xs font-bold text-[#0B2545] leading-tight truncate">
                              {activeProject.company}
                            </h4>
                            <span className="text-[9.5px] font-mono text-neutral-400 block truncate">
                              {activeProject.data.category} ·{" "}
                              {activeProject.years}
                            </span>
                          </div>
                        </div>

                        <span className="shrink-0 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-neutral-100 text-neutral-700">
                          v2.4
                        </span>
                      </div>

                      {/* Custom Screen UI specific to this project */}
                      {renderProjectScreen(activeProject)}
                    </div>

                    {/* Bottom of Screen: Compact Tech Chips & Home Indicator */}
                    <div className="mt-3 pt-2.5 border-t border-neutral-100">
                      <div className="flex flex-wrap items-center justify-center gap-1.5 mb-2">
                        {activeProject.data.tools.slice(0, 3).map((tool, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md text-[9.5px] font-mono bg-neutral-100/90 text-neutral-700 font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {/* Home Indicator */}
                      <div className="w-24 h-1 bg-neutral-300 rounded-full mx-auto" />
                    </div>
                  </div>
                </div>

                {/* Sub-dock bar right below phone: Role + Actions */}
                <div className="mt-3 w-full flex items-center justify-between px-1">
                  <div className="flex flex-col min-w-0 pr-2">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                      Engineering Role
                    </span>
                    <span className="text-xs font-semibold text-[#0B2545] truncate">
                      {activeProject.role}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {activeProject.data.liveLink && (
                      <a
                        href={activeProject.data.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0B2545] hover:bg-[#0E6BA8] text-white text-xs font-semibold shadow-xs transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <button
                      onClick={() => handleOpenModal(activeProject.id)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white hover:bg-neutral-100 border border-neutral-300 text-[#0B2545] text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer Navigation: Link to View All 21 Projects in Archive */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>
              Interactive Portfolio Showcase · React Native / Mobile /
              Full-Stack
            </span>
          </div>

          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#0B2545] hover:bg-[#0E6BA8] text-white text-xs font-semibold tracking-wide shadow-sm hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>Explore All 21 Projects Archive</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* =====================================================================
          Interactive Detail Drawer / Modal (Pulls Full Data from projectData.ts)
          ===================================================================== */}
      <AnimatePresence>
        {selectedProjectId && activeDetailProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProjectId(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl max-h-[85vh] bg-[#FFFFFF] rounded-[28px] shadow-[0_25px_70px_rgba(0,0,0,0.35)] overflow-hidden flex flex-col z-10 border border-neutral-200"
            >
              {/* Modal Top Header */}
              <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-neutral-100 bg-[#F8F9FA]">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#0B2545] text-[#10A36B]">
                    {activeDetailProject.category}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    ID: {activeDetailProject.id}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProjectId(null)}
                  className="w-8 h-8 rounded-full bg-neutral-200 hover:bg-neutral-300 flex items-center justify-center text-neutral-700 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#0B2545] tracking-tight mb-2">
                    {activeDetailProject.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-sans">
                    {activeDetailProject.overview ||
                      activeDetailProject.description}
                  </p>
                </div>

                {/* Long Description */}
                {activeDetailProject.longDescription && (
                  <div className="bg-neutral-50 rounded-2xl p-4 sm:p-5 border border-neutral-100">
                    <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider block mb-2">
                      Deep Dive
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                      {activeDetailProject.longDescription}
                    </p>
                  </div>
                )}

                {/* Key Features List */}
                {activeDetailProject.features &&
                  activeDetailProject.features.length > 0 && (
                    <div>
                      <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider mb-3">
                        Key Highlights &amp; Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeDetailProject.features.map((feat, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 bg-neutral-50 rounded-xl p-2.5 text-xs text-neutral-800"
                          >
                            <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Tools & Tech Stack */}
                {activeDetailProject.tools &&
                  activeDetailProject.tools.length > 0 && (
                    <div>
                      <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider mb-2">
                        Technologies &amp; Architecture
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {activeDetailProject.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-neutral-100 text-neutral-800 font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Screenshots Gallery if available in projectData */}
                {activeDetailProject.images &&
                  activeDetailProject.images.length > 0 && (
                    <div>
                      <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider mb-2">
                        Screenshots &amp; UI
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {activeDetailProject.images
                          .slice(0, 4)
                          .map((imgUrl, i) => (
                            <img
                              key={i}
                              src={imgUrl}
                              alt={`${activeDetailProject.title} screen ${i + 1}`}
                              className="w-full h-36 object-cover rounded-xl border border-neutral-200"
                              loading="lazy"
                            />
                          ))}
                      </div>
                    </div>
                  )}
              </div>

              {/* Modal Bottom Action Bar */}
              <div className="px-6 sm:px-8 py-4 bg-[#F8F9FA] border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href={`/projects/${activeDetailProject.id}`}
                  className="text-xs font-semibold text-[#0B2545] hover:underline"
                >
                  View Full Case Study Page →
                </Link>

                <div className="flex items-center gap-2">
                  {activeDetailProject.liveLink && (
                    <a
                      href={activeDetailProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0B2545] hover:bg-[#0E6BA8] text-white text-xs font-semibold shadow-sm transition-all"
                    >
                      <span>Visit Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {activeDetailProject.appLink && (
                    <a
                      href={activeDetailProject.appLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#10B981] hover:bg-[#059669] text-white text-xs font-semibold shadow-sm transition-all"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Play Store</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
