import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  ArrowRight,
  Sparkles,
  MapPin,
  Clock,
  Mail,
  Linkedin,
  Github,
  MessageCircle,
} from "lucide-react";
import HalftoneWordmarkFooter from "./halftone-wordmark-footer";

interface Waypoint {
  num: string;
  name: string;
  tag: string;
  targetId: string;
}

const WAYPOINTS: Waypoint[] = [
  {
    num: "01",
    name: "The Story",
    tag: "Who I Am",
    targetId: "about",
  },
  {
    num: "02",
    name: "Shipped Apps",
    tag: "20+ Case Studies",
    targetId: "projects",
  },
  {
    num: "03",
    name: "Mobile Craft",
    tag: "React Native & Arch",
    targetId: "services",
  },
  {
    num: "04",
    name: "Track Record",
    tag: "5+ Yrs Milestones",
    targetId: "experience",
  },
  {
    num: "05",
    name: "Dispatch Point",
    tag: "Start Your App",
    targetId: "contact",
  },
];

const DIRECT_CHANNELS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 79842 23426",
    href: "https://wa.me/917984223426",
    color: "#E9C46A",
  },
  {
    icon: Mail,
    label: "Email",
    value: "jaykundariya786@gmail.com",
    href: "mailto:jaykundariya786@gmail.com",
    color: "#FFD3A5",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/jay-kundariya",
    href: "https://linkedin.com/in/jay-kundariya",
    color: "#4CC9F0",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@jaykundariya786",
    href: "https://github.com/jaykundariya786",
    color: "#7CF5C5",
  },
];

const FOOTER_COLUMNS = [
  {
    title: "Portfolio Waypoints",
    links: [
      { label: "01 · The Story", href: "#about" },
      { label: "02 · 20+ Shipped Apps", href: "#projects" },
      { label: "03 · Mobile Craft", href: "#services" },
      { label: "04 · Experience Timeline", href: "#experience" },
      { label: "05 · Start a Project", href: "#contact" },
    ],
  },
  {
    title: "Mobile Architecture",
    links: [
      { label: "Cross-Platform React Native", href: "#services" },
      { label: "Expo, EAS & Instant OTA", href: "#services" },
      { label: "Offline-First SQLite Architecture", href: "#services" },
      { label: "60 FPS Native Performance", href: "#services" },
    ],
  },
  {
    title: "Direct Dispatch",
    links: [
      { label: "jaykundariya786@gmail.com", href: "mailto:jaykundariya786@gmail.com" },
      { label: "+91 79842 23426 (WhatsApp)", href: "https://wa.me/917984223426" },
      { label: "LinkedIn /in/jay-kundariya", href: "https://linkedin.com/in/jay-kundariya" },
      { label: "GitHub @jaykundariya786", href: "https://github.com/jaykundariya786" },
    ],
  },
];

export default function NewFooter() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full bg-[#0D1321] text-[#F4EDE0] overflow-hidden border-t border-[#E9C46A]/20">
      
      {/* Subtle ambient warmth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[220px] bg-[#E9C46A]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* ======================================================== */}
      {/* SECTION 1: The Journey Waypoints Trail (Low wide spacing)*/}
      {/* ======================================================== */}
      <div className="max-w-[1040px] mx-auto w-full px-4 sm:px-6 pt-12 sm:pt-14 pb-8 relative z-10">
        
        {/* Top Trail Header with Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#E9C46A]/15">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
              className="w-8 h-8 rounded-xl bg-[#E9C46A]/15 border border-[#E9C46A]/30 flex items-center justify-center text-[#E9C46A]"
            >
              <Compass className="w-4 h-4" />
            </motion.div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-base text-[#F4EDE0] tracking-tight">
                  Portfolio Journey Trail
                </span>
                <span className="text-[10px] font-mono text-[#E9C46A] px-2 py-0.5 rounded-full bg-[#E9C46A]/10 border border-[#E9C46A]/20">
                  Waypoints 01—05
                </span>
              </div>
              <p className="text-xs text-[#F4EDE0]/60 mt-0.5">
                Navigate the milestones of crafting top-tier mobile experiences.
              </p>
            </div>
          </div>

          {/* Current coordinates & live availability */}
          <div className="flex items-center gap-3 text-xs bg-[#FAF8F5]/5 border border-[#E9C46A]/20 rounded-xl px-3.5 py-2">
            <div className="flex items-center gap-1.5 text-[#F4EDE0]/70">
              <MapPin className="w-3.5 h-3.5 text-[#E9C46A]" />
              <span>Rajkot, India</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#E9C46A]/40" />
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7CF5C5] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span className="text-[#F4EDE0] font-medium text-[11px]">
                Open for Q4
              </span>
            </div>
          </div>
        </div>

        {/* The Interactive Waypoints Path (Desktop & Mobile) */}
        <div className="py-7 relative">
          
          {/* Animated Connecting Dotted Trail Line (Desktop) */}
          <div className="hidden md:block absolute top-[44px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-[#E9C46A]/20 via-[#4CC9F0]/30 to-[#E9C46A]/20 z-0">
            <motion.div
              animate={{ x: ["0%", "100%"] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="w-16 h-full bg-gradient-to-r from-transparent via-[#E9C46A] to-transparent"
            />
          </div>

          {/* Waypoints Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4 relative z-10">
            {WAYPOINTS.map((wp, idx) => (
              <motion.button
                key={wp.num}
                onClick={() => scrollTo(wp.targetId)}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex flex-col items-start p-3 sm:p-3.5 rounded-2xl bg-[#0D1321] border border-[#E9C46A]/20 hover:border-[#E9C46A] hover:bg-[#1D2D50]/40 transition-all text-left shadow-sm cursor-pointer"
              >
                {/* Top Number Node */}
                <div className="flex items-center justify-between w-full mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#E9C46A]/15 border border-[#E9C46A]/40 text-[#E9C46A] text-[10px] font-mono font-bold flex items-center justify-center group-hover:bg-[#E9C46A] group-hover:text-[#0D1321] transition-colors">
                    {wp.num}
                  </div>
                  <ArrowRight className="w-3 h-3 text-[#E9C46A]/40 group-hover:text-[#E9C46A] group-hover:translate-x-0.5 transition-all" />
                </div>

                <div className="font-serif font-bold text-xs sm:text-sm text-[#F4EDE0] group-hover:text-[#E9C46A] transition-colors">
                  {wp.name}
                </div>
                <div className="text-[10px] text-[#F4EDE0]/50 group-hover:text-[#F4EDE0]/80 mt-0.5 transition-colors">
                  {wp.tag}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Quick Direct Reachout Strip */}
        <div className="pt-2 pb-6 border-b border-[#E9C46A]/15 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[11px] text-[#F4EDE0]/60">
            <Sparkles className="w-3.5 h-3.5 text-[#E9C46A]" />
            <span>Fast-track communication:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {DIRECT_CHANNELS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF8F5]/5 border border-[#E9C46A]/20 hover:border-[#E9C46A] hover:bg-[#E9C46A]/10 text-xs text-[#F4EDE0] transition-all group"
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: item.color }} />
                  <span className="font-medium text-[11px]">{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* SECTION 2: Halftone Wordmark Interactive Dot Canvas      */}
      {/* ======================================================== */}
      <div className="relative w-full border-t border-[#E9C46A]/10">
        <HalftoneWordmarkFooter
          wordmark="Jay Kundariya"
          label="Jay Kundariya"
          meta="© 2026 · Senior React Native Specialist · Worldwide Delivery"
          columns={FOOTER_COLUMNS}
          preset="midnight-gold"
          height="380px"
          crop={0}
          dotGap={6}
          radius={85}
          backToTop={true}
        />
      </div>

    </footer>
  );
}
