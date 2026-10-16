import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Palette,
  Smartphone,
  Rocket,
  Sparkles,
} from "lucide-react";

interface StepItem {
  num: string;
  title: string;
  icon: React.ElementType;
}

const STEPS: StepItem[] = [
  {
    num: "01",
    title: "Listen & Plan",
    icon: Compass,
  },
  {
    num: "02",
    title: "Prototype",
    icon: Palette,
  },
  {
    num: "03",
    title: "Build & Refine",
    icon: Smartphone,
  },
  {
    num: "04",
    title: "Launch & Ship",
    icon: Rocket,
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      id="process"
      className="relative w-full bg-[#F8FCFD] py-12 sm:py-20 lg:py-24 px-3 sm:px-6 overflow-hidden border-y border-[#A9DDE8]/40 select-none"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[200px] sm:h-[260px] bg-[#0E6BA8]/10 rounded-full blur-[80px] sm:blur-[110px] pointer-events-none" />

      <div className="max-w-[880px] mx-auto w-full relative z-10 text-center">
        
        {/* ======================================================== */}
        {/* HEADER: Clean, minimal & elegant                         */}
        {/* ======================================================== */}
        <div className="mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-serif uppercase tracking-[0.18em] text-[#0B2545]/70 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#10A36B]" />
            <span>The Process</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] tracking-tight px-2">
            Four steps from idea to launch.
          </h2>
        </div>

        {/* ======================================================== */}
        {/* THE CIRCLE PATH: Fully responsive on mobile & desktop    */}
        {/* ======================================================== */}
        <div className="relative py-4 max-w-[820px] mx-auto w-full">
          
          {/* Base connecting line passing through center of circles */}
          <div className="absolute top-6 sm:top-8 md:top-10 left-[12.5%] right-[12.5%] h-[2px] bg-[#A9DDE8]/40 z-0 pointer-events-none" />

          {/* Active hover connecting progress beam */}
          <motion.div
            className="absolute top-6 sm:top-8 md:top-10 left-[12.5%] h-[2px] bg-gradient-to-r from-[#0E6BA8] via-[#A9DDE8] to-[#10A36B] z-0 pointer-events-none"
            animate={{
              width: `${(activeStep / (STEPS.length - 1)) * 75}%`,
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />

          {/* 4 Connected Circular Step Nodes */}
          <div className="grid grid-cols-4 relative z-10 w-full">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              const isPast = idx < activeStep;

              return (
                <div
                  key={step.num}
                  onMouseEnter={() => setActiveStep(idx)}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center group cursor-pointer px-1 min-w-0"
                >
                  {/* Circle Node with Hover/Tap Effect */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isActive
                        ? "bg-[#0B2545] text-[#A9DDE8] border-2 border-[#0E6BA8] shadow-[0_0_24px_rgba(14,107,168,0.4)] ring-2 sm:ring-4 ring-[#0E6BA8]/30"
                        : isPast
                        ? "bg-[#0E6BA8] text-[#F8FCFD] border-2 border-[#0E6BA8] shadow-xs"
                        : "bg-[#F8FCFD] text-[#0B2545]/75 border-2 border-[#A9DDE8]/60 shadow-xs group-hover:border-[#0E6BA8] group-hover:text-[#0B2545]"
                    }`}
                  >
                    {/* Centered Step Number Badge above the circle */}
                    <span
                      className={`absolute -top-2.5 left-1/2 -translate-x-1/2 px-1.5 sm:px-2 py-0.5 rounded-full text-[8.5px] sm:text-[10px] font-mono font-bold shadow-xs transition-colors whitespace-nowrap ${
                        isActive
                          ? "bg-[#0E6BA8] text-[#F8FCFD]"
                          : isPast
                          ? "bg-[#0B2545] text-[#A9DDE8]"
                          : "bg-[#A9DDE8]/30 text-[#0B2545] border border-[#A9DDE8]/60"
                      }`}
                    >
                      {step.num}
                    </span>

                    {/* Step Icon in center */}
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-200 group-hover:scale-110 shrink-0" />
                  </motion.div>

                  {/* Single Title with Controlled Mobile Height & Wrapping */}
                  <div className="w-full mt-2.5 sm:mt-3.5 flex items-center justify-center min-h-[28px] sm:min-h-[36px]">
                    <h3
                      className={`font-serif font-bold text-[10.5px] sm:text-xs md:text-base tracking-tight text-center transition-colors leading-tight break-words max-w-full px-0.5 ${
                        isActive
                          ? "text-[#0B2545] font-extrabold"
                          : "text-[#0B2545]/75 group-hover:text-[#0E6BA8]"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

