import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  CreditCard,
  Navigation,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  X,
  Zap,
} from "lucide-react";

interface ExecutiveCaseStudy {
  id: string;
  domain: string;
  badge: string;
  icon: typeof CreditCard;
  title: string;
  friction: string;
  delivered: string;
  mainPoint: string;
  metric: string;
  metricLabel: string;
  metricContext: string;
  executiveBullets: {
    title: string;
    description: string;
  }[];
}

const EXECUTIVE_CASE_STUDIES: ExecutiveCaseStudy[] = [
  {
    id: "fintech",
    domain: "FinTech & Banking",
    badge: "High-Trust Velocity",
    icon: CreditCard,
    title: "45-Second Onboarding & Instant Digital Card",
    friction: "A slow 8-step verification process caused 40% of users to abandon signup midway.",
    delivered: "Re-engineered onboarding into a 1-tap biometric flow with instant virtual card issue.",
    mainPoint: "Converted a 3-day verification hurdle into an instant, sub-minute user activation.",
    metric: "+180%",
    metricLabel: "Signup Completion",
    metricContext: "99.99% crash-free sessions",
    executiveBullets: [
      {
        title: "The Bottleneck",
        description: "Document photo scanning was repeatedly failing on low-end cameras, causing massive customer drop-off.",
      },
      {
        title: "The Architecture",
        description: "Implemented client-side auto-frame detection and native biometrics with local encrypted token cache.",
      },
      {
        title: "The Business Return",
        description: "Customer acquisition cost dropped by 35% with instant card provisioning into Apple & Google Pay.",
      },
    ],
  },
  {
    id: "mobility",
    domain: "On-Demand Mobility",
    badge: "High-Traffic Reliability",
    icon: Navigation,
    title: "Real-Time Fleet Dispatch with Zero Lost Bookings",
    friction: "Unstable cellular connections in parking garages caused missed dispatches and lost trips.",
    delivered: "Engineered sub-second GPS path interpolation and an offline-first resilient order queue.",
    mainPoint: "Zero rides lost during connection drops, delivering smooth 60 FPS live trip navigation.",
    metric: "0",
    metricLabel: "Dropped Bookings",
    metricContext: "2.4x faster vehicle dispatch",
    executiveBullets: [
      {
        title: "The Bottleneck",
        description: "Drivers in tunnels and basements lost ride requests completely when cellular signal temporarily dropped.",
      },
      {
        title: "The Architecture",
        description: "Architected an offline-first state machine that buffers and synchronizes trip state upon reconnection.",
      },
      {
        title: "The Business Return",
        description: "Eliminated ride cancellations due to tech failures, driving a 22% increase in completed daily trips.",
      },
    ],
  },
  {
    id: "commerce",
    domain: "Retail & Commerce",
    badge: "Revenue Growth",
    icon: ShoppingBag,
    title: "Sub-Second Shopping with 1-Swipe Express Pay",
    friction: "Sluggish catalog filters and multi-page checkout led to over 70% cart abandonment on mobile.",
    delivered: "Built predictive search loading in 0.3s and a frictionless 1-swipe biometric express checkout.",
    mainPoint: "Instant catalog navigation and 1-swipe checkout that converted casual mobile visitors.",
    metric: "+64%",
    metricLabel: "Checkout Lift",
    metricContext: "3.2x repeat monthly orders",
    executiveBullets: [
      {
        title: "The Bottleneck",
        description: "Product detail pages took 3+ seconds to load on mobile networks, eroding shopper purchase intent.",
      },
      {
        title: "The Architecture",
        description: "Created aggressive image pre-fetching, optimistic cart updates, and 1-tap express checkout integration.",
      },
      {
        title: "The Business Return",
        description: "Average mobile checkout time plummeted from 90 seconds to under 2 seconds, surging monthly revenue.",
      },
    ],
  },
];

export default function CaseStudySection() {
  const [selectedStudy, setSelectedStudy] = useState<ExecutiveCaseStudy | null>(
    null
  );

  return (
    <section
      id="case-study"
      className="relative w-full bg-[#F8FCFD] py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 select-none border-t border-[#0B2545]/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Compact, low-profile header */}
        <div className="mb-5 sm:mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2.5">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-[#0E6BA8] tracking-wider uppercase mb-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Executive Case Studies</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2545] tracking-tight leading-tight"
            >
              Proven impact. Built for hiring decisions.
            </motion.h2>
          </div>

          <p className="text-xs text-[#0B2545]/70 font-sans max-w-sm">
            Quick 30-second summaries of real business problems, architecture solutions, and measurable outcomes.
          </p>
        </div>

        {/* 3-Column Low Wide Spacing Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5">
          {EXECUTIVE_CASE_STUDIES.map((study, idx) => {
            const Icon = study.icon;

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white hover:bg-[#F8FCFD] border border-[#0B2545]/10 hover:border-[#0E6BA8]/40 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-[0_4px_20px_rgba(11,37,69,0.03)] hover:shadow-[0_10px_30px_rgba(14,107,168,0.12)] transition-all duration-300 relative group"
              >
                <div>
                  {/* Card Header: Icon + Domain + Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#0B2545] text-[#A9DDE8] flex items-center justify-center shadow-xs">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[11px] font-sans font-semibold text-[#0B2545]/80">
                        {study.domain}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono font-semibold bg-[#A9DDE8]/20 border border-[#A9DDE8]/50 text-[#0B2545] px-2 py-0.5 rounded-full shadow-xs">
                      {study.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#0B2545] tracking-tight leading-snug mb-3 group-hover:text-[#0E6BA8] transition-colors">
                    {study.title}
                  </h3>

                  {/* Main Point Pill */}
                  <div className="bg-[#F8FCFD] border border-[#A9DDE8]/40 rounded-xl p-2.5 mb-3.5 shadow-xs">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#0E6BA8] uppercase mb-0.5">
                      <Zap className="w-3 h-3 text-[#0E6BA8]" />
                      <span>Main Takeaway</span>
                    </div>
                    <p className="text-xs text-[#0B2545] font-medium leading-relaxed">
                      {study.mainPoint}
                    </p>
                  </div>

                  {/* Minimal 2-Line Friction vs Delivered */}
                  <div className="space-y-2 mb-4 text-xs leading-snug">
                    <div className="flex items-start gap-2 text-[#0B2545]/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                      <span>
                        <strong className="text-[#0B2545]">Friction: </strong>
                        {study.friction}
                      </span>
                    </div>

                    <div className="flex items-start gap-2 text-[#0B2545]/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10A36B] mt-1.5 shrink-0" />
                      <span>
                        <strong className="text-[#0B2545]">Delivered: </strong>
                        {study.delivered}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Big Metric & Quick Brief Button */}
                <div className="pt-3 border-t border-[#0B2545]/8 flex items-end justify-between">
                  <div>
                    <span className="font-serif font-bold text-2xl lg:text-3xl text-[#0B2545] block leading-none">
                      {study.metric}
                    </span>
                    <span className="text-[11px] font-semibold text-[#0B2545] block mt-1 leading-tight">
                      {study.metricLabel}
                    </span>
                    <span className="text-[9px] text-[#0B2545]/60 font-sans block leading-tight">
                      {study.metricContext}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedStudy(study)}
                    className="inline-flex items-center gap-1 text-[11px] font-serif font-bold text-[#0B2545] hover:text-[#0E6BA8] transition-colors py-1 px-2.5 rounded-lg hover:bg-[#A9DDE8]/20 cursor-pointer"
                  >
                    <span>Quick Brief</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 30-Second Executive Dossier Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
            onClick={() => setSelectedStudy(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white border-2 border-[#0E6BA8]/30 rounded-2xl p-5 sm:p-6 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStudy(null)}
                className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#F8FCFD] border border-[#A9DDE8]/40 flex items-center justify-center text-[#0B2545] hover:bg-[#0E6BA8] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#0B2545] text-[#A9DDE8]">
                  Executive Briefing
                </span>
                <span className="text-xs font-serif font-semibold text-[#0B2545]/70">
                  {selectedStudy.domain}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-[#0B2545] mb-2 leading-snug">
                {selectedStudy.title}
              </h3>

              <p className="text-xs text-[#0B2545] font-medium bg-[#F8FCFD] p-2.5 rounded-xl border border-[#A9DDE8]/40 mb-4">
                <strong>Core Win: </strong>
                {selectedStudy.mainPoint}
              </p>

              {/* 3 Bulleted Main Points for Hiring Members */}
              <div className="space-y-3 mb-5">
                {selectedStudy.executiveBullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#0B2545]">
                    <CheckCircle2 className="w-4 h-4 text-[#10A36B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0B2545] block">{bullet.title}</strong>
                      <span className="text-[#0B2545]/80 leading-relaxed">{bullet.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Stat & Close */}
              <div className="pt-3 border-t border-[#0B2545]/10 flex items-center justify-between">
                <div>
                  <span className="font-serif font-bold text-2xl text-[#0B2545] block leading-none">
                    {selectedStudy.metric}
                  </span>
                  <span className="text-[10px] text-[#0B2545]/70 font-sans">
                    {selectedStudy.metricLabel} ({selectedStudy.metricContext})
                  </span>
                </div>

                <button
                  onClick={() => setSelectedStudy(null)}
                  className="px-4 py-1.5 rounded-full bg-[#0E6BA8] text-white text-xs font-serif font-bold hover:bg-[#0E6BA8]/90 transition-colors cursor-pointer"
                >
                  Got It
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
