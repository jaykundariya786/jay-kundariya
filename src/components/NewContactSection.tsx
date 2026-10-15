import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  ArrowRight,
  Check,
  AlertCircle,
  Sparkles,
  Send,
  MessageCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  projectType: string;
  timeline: string;
  message: string;
  agreed: boolean;
  honeypot: string;
}

interface FormErrors {
  firstName?: string;
  email?: string;
  projectType?: string;
  message?: string;
  agreed?: string;
}

// Traveler / collaborator milestones situated along the concentric journey path
const TRAVELERS = [
  {
    id: "sarah",
    name: "Sarah Miller",
    role: "Founder, FinTech Mobile",
    location: "San Francisco, USA",
    story: "Shipped iOS & Android MVP in 5 weeks",
    rating: "5.0 ★",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    initials: "SM",
    // Position on concentric rings: angle in deg, radius in % of container
    ring: 1,
    leftPct: 72,
    topPct: 22,
    floatDelay: 0,
    projectMatch: "Mobile App (iOS & Android)",
  },
  {
    id: "marcus",
    name: "Marcus Vance",
    role: "Product Lead, HealthTech",
    location: "London, UK",
    story: "99.9% crash-free React Native architecture",
    rating: "5.0 ★",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    initials: "MV",
    ring: 2,
    leftPct: 44,
    topPct: 35,
    floatDelay: 0.8,
    projectMatch: "Mobile App (iOS & Android)",
  },
  {
    id: "elena",
    name: "Elena Rostova",
    role: "Co-Founder, E-Commerce",
    location: "Berlin, Germany",
    story: "Scaled app to 120k+ monthly active shoppers",
    rating: "5.0 ★",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    initials: "ER",
    ring: 3,
    leftPct: 74,
    topPct: 58,
    floatDelay: 1.4,
    projectMatch: "Web Platform / Dashboard",
  },
  {
    id: "arjun",
    name: "Arjun Mehta",
    role: "CTO, Logistics Network",
    location: "Bengaluru, India",
    story: "Offline-first sync across 1,400+ courier tablets",
    rating: "5.0 ★",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    initials: "AM",
    ring: 4,
    leftPct: 24,
    topPct: 33,
    floatDelay: 0.4,
    projectMatch: "API & Backend Integration",
  },
  {
    id: "chloe",
    name: "Chloe Dubois",
    role: "Design Director, SaaS",
    location: "Paris, France",
    story: "Pixel-perfect 60 FPS micro-animations",
    rating: "5.0 ★",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    initials: "CD",
    ring: 4,
    leftPct: 38,
    topPct: 78,
    floatDelay: 1.9,
    projectMatch: "MVP Sprint (3-4 wks)",
  },
  {
    id: "devon",
    name: "Devon Reed",
    role: "Solo Founder, AI Tool",
    location: "Austin, USA",
    story: "Instant Apple App Store approval on first try",
    rating: "5.0 ★",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    initials: "DR",
    ring: 5,
    leftPct: 15,
    topPct: 65,
    floatDelay: 1.1,
    projectMatch: "Technical Consulting",
  },
];

const PROJECT_OPTIONS = [
  "Mobile App (iOS & Android)",
  "Web Platform / Dashboard",
  "MVP Sprint (3-4 wks)",
  "API & Backend Integration",
  "Technical Consulting",
  "Other / Just saying hi",
];

const TIMELINE_OPTIONS = [
  "Immediate (Launch ASAP)",
  "Within 2 - 4 Weeks",
  "1 - 3 Months",
  "Flexible / Exploring",
];

const SOCIAL_LINKS = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@jaykundariya786",
    href: "https://github.com/jaykundariya786",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "in/jay-kundariya",
    href: "https://linkedin.com/in/jay-kundariya",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    handle: "+91 79842 23426",
    href: "https://wa.me/917984223426",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "jaykundariya786@gmail.com",
    href: "mailto:jaykundariya786@gmail.com",
  },
];

// Clean monochrome partner / platform badges like the reference image
const PLATFORM_BADGES = [
  { name: "React Native", sub: "Cross-platform" },
  { name: "iOS", sub: "Apple Store" },
  { name: "Android", sub: "Google Play" },
  { name: "Expo", sub: "EAS & OTA" },
  { name: "TypeScript", sub: "Type safety" },
  { name: "Stripe", sub: "Payments" },
  { name: "Firebase", sub: "Real-time DB" },
];

export default function NewContactSection() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    timeline: "",
    message: "",
    agreed: true,
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [hoveredTraveler, setHoveredTraveler] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectTraveler = (traveler: typeof TRAVELERS[0]) => {
    setHoveredTraveler(traveler.id);
    if (!form.projectType) {
      setForm((prev) => ({ ...prev, projectType: traveler.projectMatch }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return; // Silent discard for spam bots

    const newErrors: FormErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.projectType) {
      newErrors.projectType = "Please select what we're building.";
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      newErrors.message = "Please share a few words about your project.";
    }
    if (!form.agreed) {
      newErrors.agreed = "Please confirm to start the conversation.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("loading");
    try {
      // Simulate submission endpoint
      await new Promise((res) => setTimeout(res, 1200));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleReset = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      projectType: "",
      timeline: "",
      message: "",
      agreed: true,
      honeypot: "",
    });
    setErrors({});
    setStatus("idle");
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#FFFFFF] py-14 sm:py-18 md:py-20 px-3.5 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Gentle ambient background warmth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#E9C46A]/6 rounded-full blur-[140px] pointer-events-none" />

      {/* Main tight & centered wrapper — low wide spacing, not a big view */}
      <div className="max-w-[1040px] mx-auto w-full relative z-10">
        
        {/* Section Header with warm human invitation */}
        <div className="text-center mb-8 sm:mb-10 max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-[#FAF7F0] border border-[#E9C46A]/40 px-3.5 py-1 rounded-full text-[11px] font-mono font-medium text-[#0D1321] uppercase tracking-wider mb-2.5 shadow-sm"
          >
            <Sparkles className="w-3 h-3 text-[#E9C46A]" />
            <span>The Collaboration Trail</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1321] tracking-tight"
          >
            Start the journey.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xs sm:text-sm text-[#1D2D50]/75 mt-1.5 leading-relaxed"
          >
            Every great mobile app begins with a simple conversation. Tell me about your idea,
            or connect directly along the path.
          </motion.p>
        </div>

        {/* Master Card — modern card housing the orbital journey path + vivid form card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#FAF8F5] border border-[#0D1321]/10 rounded-[28px] sm:rounded-[36px] p-2.5 sm:p-3.5 md:p-4 shadow-[0_20px_50px_-15px_rgba(13,19,33,0.07)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 lg:gap-5 items-stretch">
            
            {/* ======================================================== */}
            {/* LEFT PANEL: Orbital Journey Path with connected travelers */}
            {/* ======================================================== */}
            <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-6 md:p-7 rounded-[22px] sm:rounded-[28px] bg-gradient-to-b from-[#FAF7F0] via-[#F4EFE6] to-[#ECE5D8] border border-[#0D1321]/6 relative overflow-hidden min-h-[380px] sm:min-h-[440px] lg:min-h-[580px]">
              
              {/* Top Branding / Station Identity */}
              <div className="relative z-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#0D1321]" />
                    <span className="w-2 h-2 rounded-full bg-[#E9C46A]" />
                    <span className="w-2 h-2 rounded-full bg-[#E9C46A]" />
                    <span className="w-2 h-2 rounded-full bg-[#0D1321]" />
                  </div>
                  <span className="font-serif font-bold text-sm tracking-tight text-[#0D1321]">
                    Jay Kundariya
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 border border-black/5 shadow-sm backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
                  </span>
                  <span className="text-[10px] font-mono font-medium text-[#0D1321]">
                    Open for Q4
                  </span>
                </div>
              </div>

              {/* Orbital Journey Path Graphic */}
              <div className="relative z-10 my-auto w-full h-[230px] sm:h-[280px] lg:h-[320px] flex items-center justify-center">
                
                {/* SVG Concentric Orbit Arcs radiating out from the center-right beacon */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 400 320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient
                      id="beaconGlow"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(370, 160) rotate(180) scale(180 180)"
                    >
                      <stop stopColor="#E9C46A" stopOpacity="0.38" />
                      <stop offset="0.6" stopColor="#E9C46A" stopOpacity="0.08" />
                      <stop offset="1" stopColor="#E9C46A" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Warm Radiant Epicenter Glow */}
                  <rect
                    x="150"
                    y="0"
                    width="250"
                    height="320"
                    fill="url(#beaconGlow)"
                  />

                  {/* Concentric Journey Rings with soft organic dash trails */}
                  {[70, 130, 195, 260, 325].map((radius, idx) => (
                    <circle
                      key={radius}
                      cx="370"
                      cy="160"
                      r={radius}
                      stroke="#0D1321"
                      strokeOpacity={0.07 + idx * 0.02}
                      strokeWidth="1.2"
                      strokeDasharray={idx % 2 === 0 ? "3 5" : "none"}
                    />
                  ))}

                  {/* Pulsing focal wave */}
                  <circle
                    cx="370"
                    cy="160"
                    r="40"
                    stroke="#E9C46A"
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                    className="animate-ping"
                    style={{ transformOrigin: "370px 160px", animationDuration: "3s" }}
                  />

                  {/* Central destination beacon */}
                  <circle cx="370" cy="160" r="7" fill="#E9C46A" />
                  <circle cx="370" cy="160" r="3.5" fill="#0D1321" />
                </svg>

                {/* Floating Traveler & Milestone Avatars situated along the orbits */}
                {TRAVELERS.map((t) => {
                  const isHovered = hoveredTraveler === t.id;
                  return (
                    <div
                      key={t.id}
                      style={{
                        position: "absolute",
                        left: `${t.leftPct}%`,
                        top: `${t.topPct}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      className="group z-30"
                      onMouseEnter={() => setHoveredTraveler(t.id)}
                      onMouseLeave={() => setHoveredTraveler(null)}
                      onClick={() => handleSelectTraveler(t)}
                    >
                      {/* Floating Motion Wrapper */}
                      <motion.div
                        animate={{
                          y: isHovered ? -3 : [0, -5, 0],
                        }}
                        transition={{
                          duration: 3.5 + t.floatDelay,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: t.floatDelay,
                        }}
                        className="relative cursor-pointer"
                      >
                        {/* Avatar disc */}
                        <div
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full p-[2px] transition-all duration-300 shadow-md relative overflow-hidden ${
                            isHovered
                              ? "ring-3 ring-[#0D1321] scale-110 shadow-lg"
                              : "ring-2 ring-white hover:scale-105"
                          } bg-white`}
                        >
                          <div className="absolute inset-0 rounded-full bg-[#E9C46A]/20 text-[#0D1321] text-[10px] font-bold flex items-center justify-center">
                            {t.initials}
                          </div>
                          <img
                            src={t.avatar}
                            alt={t.name}
                            className="w-full h-full rounded-full object-cover relative z-10"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = "none";
                            }}
                          />
                        </div>

                        {/* Interactive Milestone Tooltip Card */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 8, scale: 0.94 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 4, scale: 0.94 }}
                              transition={{ duration: 0.18 }}
                              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 sm:w-56 p-2.5 bg-[#0D1321] text-white rounded-xl shadow-xl z-50 pointer-events-none text-left"
                            >
                              <div className="flex items-center justify-between text-[10px] text-[#E9C46A] font-mono mb-1">
                                <span>{t.location}</span>
                                <span>{t.rating}</span>
                              </div>
                              <div className="font-semibold text-xs text-white leading-tight">
                                {t.name}
                              </div>
                              <div className="text-[10px] text-white/60 mb-1.5">
                                {t.role}
                              </div>
                              <p className="text-[10px] text-[#F4EDE0]/90 leading-tight border-t border-white/10 pt-1.5">
                                “{t.story}”
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Social & Direct Reachout Links (matching reference image style) */}
              <div className="relative z-20 pt-3 border-t border-[#0D1321]/8">
                <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#0D1321]/60 mb-2">
                  Direct channels
                </div>
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                  {SOCIAL_LINKS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/70 transition-all text-left"
                      >
                        <div className="w-6 h-6 rounded-md bg-[#0D1321]/5 group-hover:bg-[#0D1321] group-hover:text-white flex items-center justify-center shrink-0 text-[#0D1321] transition-colors">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[9px] font-mono text-[#0D1321]/50 uppercase tracking-wider leading-none">
                            {item.label}
                          </div>
                          <div className="text-[11px] font-medium text-[#0D1321] group-hover:text-[#0D1321] truncate">
                            {item.handle}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* RIGHT PANEL: High-impact warm solar card + clean form    */}
            {/* ======================================================== */}
            <div className="lg:col-span-7 rounded-[22px] sm:rounded-[28px] p-5 sm:p-7 md:p-8 bg-[#E9C46A] text-[#0D1321] flex flex-col justify-between shadow-xs relative overflow-hidden">
              
              {/* Subtle solar flare watermark in top corner */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[70px] pointer-events-none" />

              <div className="relative z-10">
                {/* Header inside the card */}
                <div className="mb-5">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D1321] tracking-tight">
                    Contact us
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0D1321]/80 mt-1">
                    Reach out and we'll get in touch within 24 hours.
                  </p>
                </div>

                {/* State: Success Feedback Screen */}
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#0D1321] text-white flex items-center justify-center mb-4 shadow-lg">
                      <Check className="w-8 h-8 text-[#E9C46A]" />
                    </div>
                    <div className="font-serif text-2xl font-bold text-[#0D1321] mb-1">
                      Journey Initiated!
                    </div>
                    <p className="text-xs sm:text-sm text-[#0D1321]/80 max-w-sm mb-6">
                      Thanks {form.firstName || "friend"}! Your message has safely arrived.
                      I'll review your project details and write back personally within 24 hours.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <button
                        onClick={handleReset}
                        className="px-4 py-2 bg-white text-[#0D1321] font-semibold text-xs rounded-xl shadow-sm hover:bg-[#FAF8F5] transition-all cursor-pointer"
                      >
                        Send another message
                      </button>
                      <a
                        href="https://wa.me/917984223426"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#0D1321] text-white font-semibold text-xs rounded-xl shadow-sm hover:bg-black transition-all flex items-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Quick WhatsApp Sync
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  /* State: Clean Form */
                  <form onSubmit={handleSubmit} noValidate className="space-y-3 sm:space-y-3.5">
                    
                    {/* Bot Honeypot */}
                    <input
                      type="text"
                      name="honeypot"
                      value={form.honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      aria-hidden="true"
                      className="absolute opacity-0 pointer-events-none w-0 h-0"
                    />

                    {/* Row 1: First name + Last name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      <div>
                        <label className="block text-[11px] font-medium text-[#0D1321] mb-1">
                          First name <span className="text-red-700">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          placeholder="First name"
                          className={`w-full bg-white/95 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#0D1321] placeholder-[#0D1321]/35 focus:outline-none focus:ring-2 focus:ring-[#0D1321] transition-all shadow-sm ${
                            errors.firstName ? "border-red-500" : "border-black/10"
                          }`}
                        />
                        {errors.firstName && (
                          <p className="text-[10px] text-red-700 font-medium mt-1">
                            {errors.firstName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[11px] font-medium text-[#0D1321] mb-1">
                          Last name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          placeholder="Last name"
                          className="w-full bg-white/95 border border-black/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#0D1321] placeholder-[#0D1321]/35 focus:outline-none focus:ring-2 focus:ring-[#0D1321] transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email */}
                    <div>
                      <label className="block text-[11px] font-medium text-[#0D1321] mb-1">
                        Email <span className="text-red-700">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={`w-full bg-white/95 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#0D1321] placeholder-[#0D1321]/35 focus:outline-none focus:ring-2 focus:ring-[#0D1321] transition-all shadow-sm ${
                          errors.email ? "border-red-500" : "border-black/10"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[10px] text-red-700 font-medium mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Row 3: Project scope + Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      <div>
                        <label className="block text-[11px] font-medium text-[#0D1321] mb-1">
                          What are we building? <span className="text-red-700">*</span>
                        </label>
                        <select
                          name="projectType"
                          value={form.projectType}
                          onChange={handleChange}
                          className={`w-full bg-white/95 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#0D1321] focus:outline-none focus:ring-2 focus:ring-[#0D1321] transition-all shadow-sm cursor-pointer ${
                            errors.projectType ? "border-red-500" : "border-black/10"
                          }`}
                        >
                          <option value="">Select scope…</option>
                          {PROJECT_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        {errors.projectType && (
                          <p className="text-[10px] text-red-700 font-medium mt-1">
                            {errors.projectType}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[11px] font-medium text-[#0D1321] mb-1">
                          Target timeline
                        </label>
                        <select
                          name="timeline"
                          value={form.timeline}
                          onChange={handleChange}
                          className="w-full bg-white/95 border border-black/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#0D1321] focus:outline-none focus:ring-2 focus:ring-[#0D1321] transition-all shadow-sm cursor-pointer"
                        >
                          <option value="">Select timeline…</option>
                          {TIMELINE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Message */}
                    <div>
                      <label className="block text-[11px] font-medium text-[#0D1321] mb-1">
                        Message <span className="text-red-700">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell me a bit about your product, features, or roadmap…"
                        className={`w-full bg-white/95 border rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#0D1321] placeholder-[#0D1321]/35 focus:outline-none focus:ring-2 focus:ring-[#0D1321] transition-all resize-none shadow-sm ${
                          errors.message ? "border-red-500" : "border-black/10"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[10px] text-red-700 font-medium mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Row 5: Agreement checkbox */}
                    <div className="pt-0.5">
                      <label className="flex items-start gap-2 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          name="agreed"
                          checked={form.agreed}
                          onChange={handleChange}
                          className="mt-0.5 w-4 h-4 rounded-sm border-black/20 text-[#0D1321] accent-[#0D1321] focus:ring-0 cursor-pointer"
                        />
                        <span className="text-[11px] sm:text-xs text-[#0D1321]/80 leading-snug">
                          You agree to our friendly conversation policy — guaranteed reply within 24h, no spam.
                        </span>
                      </label>
                      {errors.agreed && (
                        <p className="text-[10px] text-red-700 font-medium mt-1">
                          {errors.agreed}
                        </p>
                      )}
                    </div>

                    {/* Row 6: Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full mt-1 bg-[#0D1321] hover:bg-black text-white font-semibold text-xs sm:text-sm py-3 px-5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Dispatching note…</span>
                        </>
                      ) : (
                        <>
                          <span>Send message</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>

                    {status === "error" && (
                      <p className="text-xs text-red-800 text-center mt-2 flex items-center justify-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        Something went wrong. Feel free to WhatsApp me directly!
                      </p>
                    )}
                  </form>
                )}
              </div>

              {/* Bottom Trusted Ecosystem & Capability Strip */}
              <div className="relative z-10 pt-4 mt-4 border-t border-[#0D1321]/15">
                <div className="text-[9px] font-mono uppercase tracking-wider text-[#0D1321]/60 mb-2">
                  Specializing in modern mobile & web
                </div>
                <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5">
                  {PLATFORM_BADGES.map((badge) => (
                    <div
                      key={badge.name}
                      className="flex items-center gap-1 text-[11px] font-semibold text-[#0D1321]/80 hover:text-[#0D1321] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D1321]/40" />
                      <span>{badge.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
