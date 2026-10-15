import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
interface StatItem {
  id: string;
  value: number;
  suffix: string;
  badge: string;
  label: string;
  description: string;
  tag: string;
}
const STATS: StatItem[] = [
  {
    id: "years",
    value: 4,
    suffix: "+",
    badge: "Specialized Depth",
    label: "Years of Dedicated Craft",
    description:
      "100% focused on React Native mobile architecture — no scattered stacks.",
    tag: "Mobile Specialization",
  },
  {
    id: "apps",
    value: 20,
    suffix: "+",
    badge: "Published & Live",
    label: "Apps in Users' Hands",
    description:
      "Shipped to App Store & Google Play with real active users and store ratings.",
    tag: "iOS & Android Stores",
  },
  {
    id: "domains",
    value: 3,
    suffix: "",
    badge: "High-Trust Sectors",
    label: "Mission-Critical Fields",
    description:
      "UAE government biometrics, HIPAA fertility care, and live retail POS systems.",
    tag: "Gov • Health • Retail",
  },
  {
    id: "companies",
    value: 5,
    suffix: "",
    badge: "Proven Leadership",
    label: "Organizations Trusted",
    description:
      "Partnered with fast-moving startups and international agency teams as solo & lead.",
    tag: "0-to-1 & Lead Roles",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1400; // ms
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = value / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, value]);
  return (
    <span
      ref={ref}
      className="font-serif font-bold text-4xl sm:text-5xl lg:text-[46px] text-[#0D1321] tracking-tight leading-none"
    >
      {count}
      <span className="text-[#E9C46A] ml-0.5">{suffix}</span>
    </span>
  );
}
export default function StatsSection() {
  return (
    <section
      id="stats"
      className="relative w-full bg-[#FFFFFF] py-6 sm:py-8 lg:py-10 px-3 sm:px-6 lg:px-8 select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Compact, shallow Editorial Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#F4EDE0] border border-[#E9C46A]/45 rounded-2xl sm:rounded-3xl shadow-[0_12px_36px_rgba(13,19,33,0.05),0_1px_0_rgba(255,255,255,0.8)_inset] overflow-hidden p-5 sm:p-7 lg:p-8"
        >
          {/* Subtle warm ambient illumination */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#E9C46A]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#FFD3A5]/20 rounded-full blur-3xl pointer-events-none" />
          {/* Top Micro-Header: Clear, human context */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between pb-5 sm:pb-6 mb-5 sm:mb-6 border-b border-[#E9C46A]/25 gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[#E9C46A] text-sm">✦</span>
              <span className="font-serif font-semibold text-xs sm:text-sm tracking-wide text-[#0D1321]">
                Track Record & Craft at a Glance
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-[#1D2D50]/75 font-sans">
              Real releases shipped to production • Not simulated prototypes
            </p>
          </div>
          {/* 4 Stats Pods in low-profile horizontal row */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-0">
            {STATS.map((stat, index) => (
              <div
                key={stat.id}
                className={`group flex flex-col justify-between transition-all duration-300 lg:px-6 first:lg:pl-1 last:lg:pr-1 ${
                  index !== STATS.length - 1
                    ? "lg:border-r lg:border-[#E9C46A]/30"
                    : ""
                }`}
              >
                <div>
                  {/* Subtle Top Pill Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-[#FFFFFF]/80 border border-[#E9C46A]/35 text-[#0D1321] text-[10px] sm:text-[11px] font-sans font-medium px-2.5 py-0.5 rounded-full shadow-xs">
                      {stat.badge}
                    </span>
                    <span className="font-serif italic text-xs text-[#E9C46A]/80 font-medium">
                      0{index + 1}
                    </span>
                  </div>
                  {/* Serif Animated Number */}
                  <div className="mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  {/* Human-Readable Headline */}
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#0D1321] leading-snug mb-1 group-hover:text-[#1D2D50] transition-colors">
                    {stat.label}
                  </h4>{" "}
                  {/* Plain English Narrative (Understandable, not tech jargon) */}
                  <p className="text-[12px] sm:text-[13px] text-[#1D2D50]/80 leading-relaxed font-sans">
                    {stat.description}
                  </p>
                </div>
                {/* Bottom Proof Tag */}
                <div className="mt-4 pt-3 border-t border-[#E9C46A]/20 flex items-center">
                  <span className="text-[10px] sm:text-[11px] font-sans font-semibold text-[#0D1321]/75 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E9C46A]" />
                    {stat.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
