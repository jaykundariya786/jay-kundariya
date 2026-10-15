import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, PenTool, Code2, Rocket, Clock, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Discover",
    subtitle: "Define the problem",
    copy: "Deep-dive on goals, user personas, platform constraints, and success metrics. No assumption left unchallenged.",
    color: "#E9C46A",
  },
  {
    num: "02",
    icon: PenTool,
    title: "Design",
    subtitle: "Map the solution",
    copy: "Wireframes, component architecture, and API contracts locked before a single line of production code is written.",
    color: "#4CC9F0",
  },
  {
    num: "03",
    icon: Code2,
    title: "Build",
    subtitle: "Ship incrementally",
    copy: "Clean TypeScript, weekly live demos, and continuous integration so you always see real progress — never guesses.",
    color: "#7CF5C5",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Ship",
    subtitle: "Launch & hand over",
    copy: "Full QA, store submission, OTA update pipeline, and a documented handover so your team owns it from day one.",
    color: "#FFD3A5",
    special: true,
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col justify-center bg-[#FFFFFF] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle decorative background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.025] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E9C46A]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4CC9F0]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#F4EDE0] border border-[#E9C46A]/50 px-4 py-1.5 rounded-full text-xs font-mono font-semibold text-[#0D1321] uppercase tracking-wider mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E9C46A]" />
            <span>How I Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1321] tracking-tight"
          >
            From idea to shipped, fast.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-[#1D2D50]/75 mt-3 max-w-xl"
          >
            A lean, transparent process refined across 5 companies and 20+ shipped apps.
          </motion.p>
        </div>

        {/* Desktop: Horizontal 4-step row */}
        <div className="hidden lg:block relative">
          {/* Progress connector line */}
          <div className="absolute top-[52px] left-[12%] right-[12%] h-px bg-[#E9C46A]/15 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#E9C46A] via-[#4CC9F0] to-[#FFD3A5]"
              style={{ scaleX: lineScale, transformOrigin: "left" }}
            />
          </div>

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon circle with number badge */}
                  <div className="relative mb-8">
                    <div
                      className="w-[104px] h-[104px] rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg"
                      style={{
                        borderColor: `${step.color}60`,
                        backgroundColor: "#FFFFFF",
                        boxShadow: `0 0 0 6px ${step.color}12, 0 12px 36px ${step.color}20`,
                      }}
                    >
                      <div
                        className="w-[76px] h-[76px] rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${step.color}15` }}
                      >
                        <Icon
                          className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                          style={{ color: step.color }}
                        />
                      </div>
                    </div>

                    {/* Step number */}
                    <div
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full border-2 border-[#FFFFFF] flex items-center justify-center font-mono font-bold text-xs text-[#0D1321] shadow-md"
                      style={{ backgroundColor: step.color }}
                    >
                      {i + 1}
                    </div>

                    {/* Special 90s badge on Ship step */}
                    {step.special && (
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-[#0D1321] border border-[#E9C46A]/50 text-[#E9C46A] px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold whitespace-nowrap shadow-lg">
                        <Clock className="w-2.5 h-2.5" />
                        90s verified
                      </div>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#0D1321] tracking-tight mb-1">
                    {step.title}
                  </h3>
                  <span
                    className="text-[11px] font-mono font-semibold uppercase tracking-wider mb-3"
                    style={{ color: step.color }}
                  >
                    {step.subtitle}
                  </span>
                  <p className="text-sm text-[#1D2D50]/75 leading-relaxed max-w-[220px]">
                    {step.copy}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical steps */}
        <div className="flex flex-col gap-0 lg:hidden relative">
          {/* Vertical connector line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-[#E9C46A]/15 overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-[#E9C46A] via-[#4CC9F0] to-[#FFD3A5]"
              style={{ scaleY: lineScale, transformOrigin: "top", height: "100%" }}
            />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-5 relative pl-4 mb-8 last:mb-0"
              >
                {/* Icon */}
                <div className="relative shrink-0 z-10">
                  <div
                    className="w-16 h-16 rounded-full border-2 flex items-center justify-center bg-[#FFFFFF] shadow-lg"
                    style={{
                      borderColor: `${step.color}60`,
                      boxShadow: `0 0 0 4px ${step.color}12`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: step.color }} />
                  </div>
                  {/* Number */}
                  <div
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full border-2 border-[#FFFFFF] flex items-center justify-center font-mono font-bold text-[10px] text-[#0D1321]"
                    style={{ backgroundColor: step.color }}
                  >
                    {i + 1}
                  </div>
                </div>

                {/* Text */}
                <div className="pt-1 flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-serif text-xl font-bold text-[#0D1321]">
                      {step.title}
                    </h3>
                    {step.special && (
                      <span className="inline-flex items-center gap-1 bg-[#0D1321] border border-[#E9C46A]/50 text-[#E9C46A] px-2 py-0.5 rounded-full text-[10px] font-mono font-bold">
                        <Clock className="w-2.5 h-2.5" />
                        90s
                      </span>
                    )}
                  </div>
                  <span
                    className="text-[11px] font-mono font-semibold uppercase tracking-wider block mb-2"
                    style={{ color: step.color }}
                  >
                    {step.subtitle}
                  </span>
                  <p className="text-sm text-[#1D2D50]/75 leading-relaxed">
                    {step.copy}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
