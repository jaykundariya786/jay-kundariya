import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// Coral double quote icon matching reference design
const QuoteIcon = ({ className = "text-[#0E6BA8]" }: { className?: string }) => (
  <svg
    className={`w-4 h-3.5 sm:w-5 sm:h-4 ${className} shrink-0`}
    viewBox="0 0 20 16"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M0 8.8C0 3.84 3.12 0.48 7.68 0L8.76 1.92C5.64 2.52 3.72 4.32 3.36 7.2H7.44V15.6H0V8.8ZM11.16 8.8C11.16 3.84 14.28 0.48 18.84 0L19.92 1.92C16.8 2.52 14.88 4.32 14.52 7.2H18.6V15.6H11.16V8.8Z" />
  </svg>
);

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#F8FCFD] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-y border-[#A9DDE8]/40"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[340px] bg-[#0E6BA8]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-serif uppercase tracking-[0.18em] text-[#0B2545]/70 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#10A36B]" />
            <span>Proven Results</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] tracking-tight">
            Client stories & impact.
          </h2>
        </div>

        {/* ======================================================== */}
        {/* BENTO GRID                                               */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* ======================================================== */}
          {/* CARD 1 (LEFT TALL CARD: 8X METRIC + SPOTIFY)              */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 bg-[#F8FCFD] rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 shadow-[0_10px_35px_rgba(11,37,69,0.06)] border border-[#A9DDE8]/50 flex flex-col justify-between"
          >
            <div>
              {/* Big Metric & Title */}
              <div className="mb-8">
                <span className="block text-5xl sm:text-6xl font-extrabold tracking-tight text-[#0B2545] leading-none">
                  8X
                </span>
                <span className="block text-base sm:text-lg font-semibold text-[#0E6BA8] mt-2.5">
                  Increase in conversion rate
                </span>
              </div>

              {/* Quote Mark */}
              <div className="mb-3.5">
                <QuoteIcon className="text-[#0E6BA8]" />
              </div>

              {/* Quote Text */}
              <p className="text-sm sm:text-[15px] text-[#0B2545]/80 leading-[1.65] font-sans">
                “We needed a modern, high-converting mobile app & web architecture, and Jay delivered beyond expectations. His technical precision and UI standards helped us increase conversion rate significantly in weeks. Highly recommend!”
              </p>
            </div>

            {/* Author Footer with Spotify Logo */}
            <div className="flex items-center justify-between pt-8 mt-6 border-t border-[#A9DDE8]/30">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80"
                  alt="David Callahan"
                  className="w-10 h-10 rounded-full object-cover shrink-0 border border-[#A9DDE8]"
                />
                <div>
                  <div className="text-sm font-semibold text-[#0B2545] leading-tight">
                    David Callahan
                  </div>
                  <div className="text-xs text-[#0B2545]/60 mt-0.5">
                    Product Lead, AudioTech
                  </div>
                </div>
              </div>

              {/* Spotify SVG Icon */}
              <svg
                className="w-5 h-5 text-[#0E6BA8] shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-label="Spotify"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.307c-.215.353-.674.464-1.026.248-2.812-1.718-6.353-2.107-10.523-1.155-.403.092-.806-.16-.898-.563-.092-.403.16-.806.563-.898 4.569-1.043 8.494-.602 11.636 1.342.353.216.464.674.248 1.026zm1.468-3.262c-.271.442-.847.583-1.288.312-3.22-1.978-8.13-2.55-11.939-1.393-.498.151-1.026-.134-1.178-.632-.151-.498.134-1.026.632-1.178 4.364-1.325 9.775-.683 13.46 1.583.442.271.583.847.313 1.309zm.126-3.41c-3.86-2.293-10.23-2.505-13.916-1.387-.593.18-1.222-.16-1.402-.753-.18-.593.16-1.222.753-1.402 4.238-1.287 11.28-1.042 15.727 1.597.533.316.708 1.008.392 1.541-.316.533-1.008.708-1.541.392z" />
              </svg>
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Card 2 (Top) + Card 3 & 4 (Bottom Row)      */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 justify-between">
            
            {/* CARD 2: Top Wide Card (2X Metric + Google) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-[#F8FCFD] rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 shadow-[0_10px_35px_rgba(11,37,69,0.06)] border border-[#A9DDE8]/50 flex flex-col justify-between"
            >
              <div>
                {/* 2X Metric Inlined with Label */}
                <div className="flex items-baseline gap-2.5 mb-4">
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B2545] leading-none">
                    2X
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-[#0E6BA8]">
                    Faster feature release velocity
                  </span>
                </div>

                {/* Quote Mark */}
                <div className="mb-3">
                  <QuoteIcon className="text-[#0E6BA8]" />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-[13.5px] text-[#0B2545]/80 leading-[1.65] font-sans">
                  “From UI design implementation to complex state management, every detail was meticulously handled. Jay’s expertise helped us launch faster, and the results have been phenomenal!”
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center justify-between pt-6 mt-4 border-t border-[#A9DDE8]/30">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&auto=format&fit=crop&q=80"
                    alt="Sarah Mitchel"
                    className="w-10 h-10 rounded-full object-cover shrink-0 border border-[#A9DDE8]"
                  />
                  <div>
                    <div className="text-sm font-semibold text-[#0B2545] leading-tight">
                      Sarah Mitchel
                    </div>
                    <div className="text-xs text-[#0B2545]/60 mt-0.5">
                      Engineering Director, FinCloud
                    </div>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-1 text-[#10A36B]">
                  {"★".repeat(5)}
                </div>
              </div>
            </motion.div>

            {/* BOTTOM ROW: Card 3 (White) & Card 4 (Dark Navy) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 items-stretch">
              
              {/* CARD 3: Bottom Left White Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-[#F8FCFD] rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 shadow-[0_10px_35px_rgba(11,37,69,0.06)] border border-[#A9DDE8]/50 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-3">
                    <QuoteIcon className="text-[#0E6BA8]" />
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#0B2545]/80 leading-[1.65] font-sans">
                    “His React Native animation work took our application to the next level. Jay truly understands smooth mobile gesture UX and clean code.”
                  </p>
                </div>

                <div className="flex items-center gap-2.5 pt-6 mt-4 border-t border-[#A9DDE8]/30">
                  <img
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=160&auto=format&fit=crop&q=80"
                    alt="Tom Becker"
                    className="w-9 h-9 rounded-full object-cover shrink-0 border border-[#A9DDE8]"
                  />
                  <div>
                    <div className="text-xs sm:text-[13px] font-semibold text-[#0B2545] leading-tight">
                      Tom Becker
                    </div>
                    <div className="text-[11px] text-[#0B2545]/60 mt-0.5">
                      Founder, PulseCore
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CARD 4: Bottom Right Dark Navy Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="bg-[#0B2545] text-[#F8FCFD] rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 shadow-[0_12px_36px_rgba(11,37,69,0.22)] border border-[#0E6BA8]/35 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-3">
                    <QuoteIcon className="text-[#A9DDE8]" />
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#A9DDE8]/90 leading-[1.65] font-sans">
                    “Jay nailed our MVP with swift turnaround and incredible attention to detail. The final mobile release felt polished, fast, and robust.”
                  </p>
                </div>

                <div className="flex items-center gap-2.5 pt-6 mt-4 border-t border-[#0E6BA8]/20">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80"
                    alt="Elena Rostova"
                    className="w-9 h-9 rounded-full object-cover shrink-0 border border-[#0E6BA8]/50"
                  />
                  <div>
                    <div className="text-xs sm:text-[13px] font-semibold text-[#F8FCFD] leading-tight">
                      Elena Rostova
                    </div>
                    <div className="text-[11px] text-[#A9DDE8]/70 mt-0.5">
                      VP of Product, HealthSync
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

