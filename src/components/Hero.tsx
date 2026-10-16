import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import devHeroPenthouse from "../assets/dev-hero-penthouse.png";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const headlineWords = "Turning ambitious ideas into top-rated mobile products.".split(" ");

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] sm:h-screen flex flex-col justify-center items-center overflow-hidden select-none"
    >
      {/* Penthouse illustration as the FULL background */}
      <img
        src={devHeroPenthouse}
        alt="Penthouse workspace background"
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none select-none z-0"
      />

      {/* Soft Radial Ambient Aura behind text — illuminates the sky behind the text for 100% legibility */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] w-[960px] max-w-[96vw] h-[540px] pointer-events-none z-5"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(248, 252, 253, 0.94) 0%, rgba(248, 252, 253, 0.78) 45%, rgba(169, 221, 232, 0.22) 70%, transparent 85%)",
          filter: "blur(22px)",
        }}
      />

      {/* Content Container (Layered directly over the ambient illumination) */}
      <div className="relative z-10 pt-14 sm:pt-16 pb-8 px-4 sm:px-8 text-center max-w-4xl mx-auto flex flex-col items-center justify-center my-auto">
        {/* Status badge above headline: Pulsing emerald dot and 'Open to new projects' */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#F8FCFD]/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#A9DDE8]/60 shadow-xs text-xs font-semibold text-[#0B2545] mb-4 sm:mb-5"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10A36B] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10A36B]" />
          </span>
          <span className="font-sans tracking-wide">
            Open to new projects
          </span>
        </motion.div>

        {/* Headline: 'Turning ambitious ideas into top-rated mobile products.' */}
        <h1 className="font-serif text-[30px] xs:text-[40px] sm:text-[50px] md:text-[60px] lg:text-[68px] font-extrabold text-[#0B2545] tracking-[-0.025em] leading-[1.1] sm:leading-[1.08] mx-auto px-1 drop-shadow-[0_2px_18px_rgba(248,252,253,0.95)]">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.12 + i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheading in a clean frosted pill for 100% crisp legibility over window bars */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 sm:mt-5 mb-6 sm:mb-8 max-w-2xl mx-auto px-2"
        >
          <p className="inline-block bg-[#F8FCFD]/90 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-2.5 rounded-2xl border border-[#A9DDE8]/50 shadow-[0_4px_20px_rgba(11,37,69,0.06)] text-[#0B2545] text-xs sm:text-base md:text-lg font-medium leading-relaxed">
            Senior React Native developer building fast, reliable mobile apps,
            web platforms and API integrations.
          </p>
        </motion.div>

        {/* Primary CTA: 'View my work' & Secondary: 'Download resume' */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 w-full px-2 sm:px-0"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full text-[#F8FCFD] font-bold text-xs sm:text-base bg-gradient-to-r from-[#0E6BA8] via-[#0E6BA8] to-[#10A36B] shadow-[0_6px_22px_rgba(14,107,168,0.4)] hover:shadow-[0_8px_30px_rgba(14,107,168,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 border border-[#A9DDE8]/40 cursor-pointer"
          >
            <span>View my work</span>
            <ArrowRight className="w-4 h-4 text-[#F8FCFD]" />
          </button>

          <a
            href="/assets/JayKundariya.pdf"
            download="JayKundariya_React Native Dev 4+ YOE.pdf"
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full text-[#0B2545] font-semibold text-xs sm:text-base bg-[#F8FCFD]/95 hover:bg-[#F8FCFD] backdrop-blur-md shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-[#A9DDE8]/50"
          >
            <Download className="w-4 h-4 text-[#0E6BA8]" />
            <span>Download resume</span>
          </a>
        </motion.div>
      </div>

      {/* Subtle bottom fade into the next section */}
      <div className="absolute bottom-0 inset-x-0 h-16 sm:h-20 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/40 to-transparent pointer-events-none z-10" />
    </section>
  );
}
