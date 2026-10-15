import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  accentColor: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Jay delivered our React Native app ahead of schedule with zero critical bugs on launch day. He communicated clearly at every step and had a deep understanding of both iOS and Android platform nuances. I'd hire him again without hesitation.",
    name: "Ravi Mehta",
    role: "CTO",
    company: "Opash Software",
    initials: "RM",
    accentColor: "#E9C46A",
  },
  {
    quote:
      "The UAE PASS integration was flawless — exactly what our government client required in terms of security, reliability, and speed. Jay handled an incredibly complex auth flow calmly and professionally, and the app passed every compliance audit.",
    name: "Khalid Al-Mansouri",
    role: "Project Lead",
    company: "ESANAD Platform",
    initials: "KA",
    accentColor: "#4CC9F0",
  },
  {
    quote:
      "He solo-built a full multi-location POS platform in 1.5 months — frontend, backend, and mobile. That's extraordinary velocity without sacrificing quality. Our retail clients love the offline-first experience and real-time fleet dashboard.",
    name: "Priya Shah",
    role: "Head of Product",
    company: "RetailTech India",
    initials: "PS",
    accentColor: "#7CF5C5",
  },
];

const SLIDE_INTERVAL = 5000;

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="relative w-full min-h-screen flex flex-col justify-center bg-[#0D1321] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#E9C46A]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#4CC9F0]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Large gold decorative quote mark */}
      <div className="absolute top-12 sm:top-20 left-1/2 -translate-x-1/2 text-[200px] sm:text-[280px] font-serif font-bold text-[#E9C46A]/6 leading-none pointer-events-none select-none">
        "
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#F4EDE0]/10 border border-[#E9C46A]/30 px-4 py-1.5 rounded-full text-xs font-mono font-semibold text-[#E9C46A] uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Testimonials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F4EDE0] tracking-tight"
          >
            Kind words.
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Glass testimonial card */}
              <div className="relative bg-[#F4EDE0]/7 backdrop-blur-md border border-[#E9C46A]/25 rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(13,19,33,0.4)]">
                {/* Gold quote icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
                  style={{
                    backgroundColor: `${t.accentColor}20`,
                    border: `1.5px solid ${t.accentColor}40`,
                  }}
                >
                  <Quote
                    className="w-6 h-6"
                    style={{ color: t.accentColor }}
                  />
                </div>

                {/* Quote text */}
                <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl font-medium text-[#F4EDE0] leading-relaxed tracking-tight mb-10">
                  "{t.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center font-serif font-bold text-lg text-[#0D1321] shadow-md"
                      style={{ backgroundColor: t.accentColor }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-serif font-bold text-[#F4EDE0] text-base">
                        {t.name}
                      </div>
                      <div className="text-xs font-mono text-[#F4EDE0]/60 mt-0.5">
                        {t.role} · {t.company}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#E9C46A] text-lg">★</span>
                    ))}
                  </div>
                </div>

                {/* Accent corner glow */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-30 pointer-events-none"
                  style={{ backgroundColor: t.accentColor }}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-[#F4EDE0]/10 border border-[#E9C46A]/25 flex items-center justify-center text-[#F4EDE0] hover:bg-[#E9C46A]/20 hover:border-[#E9C46A]/50 transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot navigation */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    i === current
                      ? "w-6 h-2.5 bg-[#E9C46A]"
                      : "w-2.5 h-2.5 bg-[#F4EDE0]/30 hover:bg-[#F4EDE0]/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-[#F4EDE0]/10 border border-[#E9C46A]/25 flex items-center justify-center text-[#F4EDE0] hover:bg-[#E9C46A]/20 hover:border-[#E9C46A]/50 transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Auto-play progress bar */}
          <div className="mt-5 max-w-xs mx-auto h-px bg-[#F4EDE0]/10 rounded-full overflow-hidden">
            <motion.div
              key={`progress-${current}`}
              className="h-full bg-[#E9C46A]"
              initial={{ width: "0%" }}
              animate={{ width: paused ? "0%" : "100%" }}
              transition={{ duration: SLIDE_INTERVAL / 1000, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
