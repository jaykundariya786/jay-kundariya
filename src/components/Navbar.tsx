import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

interface NavLink {
  label: string;
  id: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30);

      // Detect active section for indicator
      const sectionIds = ["contact", "experience", "services", "projects", "about", "hero"];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-5 pointer-events-none">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`pointer-events-auto w-full max-w-5xl flex items-center justify-between rounded-full transition-all duration-300 ${
            isScrolled
              ? "py-2 sm:py-2.5 px-4 sm:px-6 bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E9C46A]/40 shadow-[0_12px_32px_rgba(13,19,33,0.12),0_0_0_1px_rgba(233,196,106,0.15)]"
              : "py-3 sm:py-3.5 px-5 sm:px-7 bg-[#FFFFFF]/75 backdrop-blur-sm border border-[#E9C46A]/20 shadow-[0_8px_24px_rgba(13,19,33,0.06)]"
          }`}
        >
          {/* Left: Logo mark + Jay Kundariya */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none text-left"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#1D2D50] via-[#0D1321] to-[#1D2D50] p-[1.5px] shadow-sm group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full rounded-full bg-[#0D1321] flex items-center justify-center border border-[#E9C46A]/40">
                <span className="font-serif font-black text-sm sm:text-base text-[#E9C46A] tracking-wider">
                  JK
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-sm sm:text-base text-[#0D1321] group-hover:text-[#E9C46A] transition-colors leading-tight">
                Jay Kundariya
              </span>
              <span className="text-[10px] text-[#1D2D50]/60 font-medium tracking-wide">
                Senior Mobile Eng
              </span>
            </div>
          </button>

          {/* Center Links (smooth scroll) - Desktop */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1 bg-[#F4EDE0]/70 rounded-full border border-[#E9C46A]/20">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#0D1321]"
                      : "text-[#1D2D50]/80 hover:text-[#0D1321] hover:bg-white/60"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(13,19,33,0.08)] border border-[#E9C46A]/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Gold 'Hire me' button + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[#0D1321] font-semibold text-xs sm:text-sm bg-gradient-to-r from-[#E9C46A] via-[#F4D078] to-[#FFD3A5] shadow-[0_4px_16px_rgba(233,196,106,0.35)] hover:shadow-[0_6px_22px_rgba(233,196,106,0.55)] hover:scale-105 active:scale-95 transition-all duration-200 border border-[#E9C46A]/50 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0D1321]" />
              <span>Hire me</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden w-9 h-9 rounded-full bg-[#F4EDE0] border border-[#E9C46A]/40 flex items-center justify-center text-[#0D1321] hover:bg-[#E9C46A]/20 transition-colors focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-[#0D1321]" />
              ) : (
                <Menu className="w-4 h-4 text-[#0D1321]" />
              )}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Slide-in Full Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0D1321]/60 backdrop-blur-md md:hidden flex flex-col justify-end"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="w-full bg-[#FFFFFF] border-t border-[#E9C46A]/40 rounded-t-[32px] p-6 pb-10 shadow-[0_-20px_50px_rgba(13,19,33,0.25)] flex flex-col gap-5 max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drag pill / Top handle */}
              <div className="w-12 h-1.5 rounded-full bg-[#E9C46A]/50 mx-auto" />

              <div className="flex items-center justify-between pb-3 border-b border-[#E9C46A]/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#0D1321] flex items-center justify-center text-[#E9C46A] font-serif font-bold text-xs">
                    JK
                  </div>
                  <div>
                    <p className="font-serif font-bold text-sm text-[#0D1321]">
                      Jay Kundariya
                    </p>
                    <p className="text-[10px] text-[#1D2D50]/60">
                      Senior React Native Developer
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#F4EDE0] flex items-center justify-center text-[#0D1321]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2 py-2">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollTo(link.id)}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold transition-all ${
                        isActive
                          ? "bg-[#F4EDE0] text-[#0D1321] border border-[#E9C46A]/40"
                          : "text-[#1D2D50] hover:bg-[#F4EDE0]/50"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-50" />
                    </button>
                  );
                })}
              </div>

              {/* Status & CTA */}
              <div className="pt-2 flex flex-col gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F4EDE0]/60 border border-[#E9C46A]/20 text-xs text-[#0D1321]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7CF5C5] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
                  </span>
                  <span>Available for freelance & full-time roles</span>
                </div>

                <button
                  onClick={() => scrollTo("contact")}
                  className="w-full py-3.5 rounded-full text-[#0D1321] font-bold text-sm bg-gradient-to-r from-[#E9C46A] via-[#F4D078] to-[#FFD3A5] shadow-lg flex items-center justify-center gap-2 border border-[#E9C46A]/50"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Hire me now</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
