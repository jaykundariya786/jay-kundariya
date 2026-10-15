import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Layout,
  KeyRound,
  Compass,
  ArrowUpRight,
  ArrowRight,
  X,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

interface ServiceCard {
  id: string;
  num: string;
  title: string;
  copy: string;
  icon: typeof Smartphone;
  accent: string;
  badgeBg: string;
  details: {
    subtitle: string;
    timeline: string;
    deliverables: string[];
  };
}

const SERVICES: ServiceCard[] = [
  {
    id: "mobile",
    num: "01",
    title: "Mobile App Development",
    copy: "React Native and Expo apps for iOS and Android, from idea to store release.",
    icon: Smartphone,
    accent: "#E9C46A",
    badgeBg: "rgba(233, 196, 106, 0.15)",
    details: {
      subtitle: "Complete cross-platform iOS & Android mobile product from concept to store release.",
      timeline: "3 to 6 weeks for MVP",
      deliverables: [
        "Certified Apple App Store & Google Play deployments",
        "Fluid 60 FPS gesture navigation & native animations",
        "Encrypted offline storage & automatic local cache sync",
        "Clean, fully documented TypeScript source code handover",
      ],
    },
  },
  {
    id: "web",
    num: "02",
    title: "Web Platforms",
    copy: "Responsive web apps, management portals, and multi-location dashboards.",
    icon: Layout,
    accent: "#4CC9F0",
    badgeBg: "rgba(76, 201, 240, 0.15)",
    details: {
      subtitle: "Connected cloud portals and dashboards that keep field teams and stores in sync.",
      timeline: "2 to 4 weeks",
      deliverables: [
        "Responsive Next.js & React dashboards with live operational metrics",
        "Offline-resilient transactions engine for POS and mobile fleets",
        "Role-based access for multi-store managers and cashiers",
        "Real-time analytics and inventory management views",
      ],
    },
  },
  {
    id: "api",
    num: "03",
    title: "API Integration",
    copy: "REST and GraphQL, third-party SDKs, authentication flows such as UAE PASS.",
    icon: KeyRound,
    accent: "#7CF5C5",
    badgeBg: "rgba(124, 245, 197, 0.15)",
    details: {
      subtitle: "Government-grade biometric authentication and mission-critical native hardware SDKs.",
      timeline: "1 to 3 weeks",
      deliverables: [
        "UAE PASS biometric & deep-link authentication with 99.9% reliability",
        "HIPAA-compliant encrypted local storage & secure vault APIs",
        "Native Kotlin & Swift bridges for thermal POS printers & barcode scanners",
        "Stripe, Razorpay, and regional payment gateway integrations",
      ],
    },
  },
  {
    id: "consulting",
    num: "04",
    title: "Technical Consulting",
    copy: "Architecture advice, code reviews, and comprehensive app rebuild strategy.",
    icon: Compass,
    accent: "#FFD3A5",
    badgeBg: "rgba(255, 211, 165, 0.2)",
    details: {
      subtitle: "Independent code audits, speed revival, and strategic technical roadmaps.",
      timeline: "1 to 2 weeks",
      deliverables: [
        "In-depth performance profiling to eliminate frame drops & memory leaks",
        "Codebase quality audits with actionable architectural refactoring steps",
        "Zero-downtime React Native & Expo SDK version upgrade plan",
        "Direct 1-on-1 architecture advisory for founders and engineering teams",
      ],
    },
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="relative w-full bg-[#F4EDE0] text-[#0D1321] py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 select-none border-t border-[#E9C46A]/25"
    >
      <div className="max-w-6xl mx-auto">
        {/* Low-profile editorial headline */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs font-serif font-bold text-[#E9C46A] tracking-wider uppercase mb-1.5"
            >
              <span>✦</span>
              <span>Capabilities & Offerings</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0D1321] tracking-tight leading-tight"
            >
              What I can build for you.
            </motion.h2>
          </div>

          <p className="text-xs sm:text-sm text-[#1D2D50]/80 font-sans max-w-sm">
            Bespoke mobile and web engineering with fixed timelines, direct communication, and zero bloat.
          </p>
        </div>

        {/* 4 Icon Cards in a Low, Wide 4-Column Row on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-5 items-stretch">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
                onClick={() => setSelectedService(service)}
                className="group relative bg-[#FFFFFF] border border-[#E9C46A]/35 rounded-[24px] sm:rounded-[26px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_8px_24px_rgba(13,19,33,0.04)] hover:border-[#E9C46A] hover:shadow-[0_18px_42px_rgba(233,196,106,0.28)] transition-all duration-300 cursor-pointer"
              >
                {/* Top Row: Animated Line Icon + Card Number */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xs"
                      style={{
                        backgroundColor: service.badgeBg,
                        border: `1px solid ${service.accent}50`,
                        color: "#0D1321",
                      }}
                    >
                      <Icon className="w-5 h-5 text-[#0D1321]" strokeWidth={2} />
                    </motion.div>

                    <span className="font-serif italic font-semibold text-xs text-[#E9C46A]/80 tracking-wider">
                      {service.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-lg sm:text-[19px] text-[#0D1321] tracking-tight leading-snug mb-2 group-hover:text-[#1D2D50] transition-colors">
                    {service.title}
                  </h3>

                  {/* 2 Lines of Copy */}
                  <p className="text-xs sm:text-[13px] text-[#1D2D50]/80 font-sans leading-relaxed line-clamp-2">
                    {service.copy}
                  </p>
                </div>

                {/* Bottom Row: 'Learn more' Arrow */}
                <div className="mt-6 pt-4 border-t border-[#E9C46A]/20 flex items-center justify-between">
                  <span className="text-xs font-sans font-semibold text-[#0D1321] group-hover:text-[#E9C46A] transition-colors">
                    Learn more
                  </span>

                  <div className="w-7 h-7 rounded-full bg-[#F4EDE0] border border-[#E9C46A]/35 flex items-center justify-center text-[#0D1321] group-hover:bg-[#E9C46A] transition-all duration-200">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Understandable, Non-Tech Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1321]/75 backdrop-blur-sm cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#FFFFFF] border border-[#E9C46A]/50 rounded-[28px] p-6 sm:p-8 shadow-2xl cursor-default text-[#0D1321]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F4EDE0] hover:bg-[#E9C46A]/30 flex items-center justify-center text-[#0D1321] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#E9C46A] tracking-wider uppercase mb-1">
                <span>✦</span>
                <span>Offering {selectedService.num}</span>
              </div>

              <h3 className="font-serif font-bold text-2xl text-[#0D1321] mb-2 leading-tight">
                {selectedService.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#1D2D50]/80 font-sans leading-relaxed mb-4">
                {selectedService.details.subtitle}
              </p>

              {/* Timeline Chip */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans font-semibold bg-[#F4EDE0] text-[#0D1321] border border-[#E9C46A]/40 mb-5">
                <Clock className="w-3.5 h-3.5 text-[#E9C46A]" />
                <span>Typical Turnaround: {selectedService.details.timeline}</span>
              </div>

              {/* What is Delivered */}
              <div className="space-y-2.5 mb-6">
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#0D1321]/70 block">
                  What You Receive:
                </span>
                {selectedService.details.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#F4EDE0]/50 border border-[#E9C46A]/25"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-[13px] text-[#0D1321] font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  setSelectedService(null);
                  scrollTo("contact");
                }}
                className="w-full py-3 rounded-full text-[#0D1321] font-bold text-xs sm:text-sm bg-gradient-to-r from-[#E9C46A] via-[#F4D078] to-[#FFD3A5] shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-[#E9C46A]/50 cursor-pointer"
              >
                <span>Discuss {selectedService.title} with Jay</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
