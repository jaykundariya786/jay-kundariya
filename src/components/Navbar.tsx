import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavLink {
  label: string;
  id: string;
  badge?: string;
  statusDot?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects", badge: "20+" },
  { label: "Services", id: "services" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact", statusDot: true },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    if (window.location.pathname === "/projects") {
      setActiveSection("projects");
      return;
    }
    if (window.location.pathname === "/contact") {
      setActiveSection("contact");
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 25);

      // Detect active section for indicator
      const sectionIds = [
        "contact",
        "experience",
        "services",
        "projects",
        "about",
        "hero",
      ];
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
    if (id === "hero") {
      if (window.location.pathname !== "/") {
        window.location.href = "/";
        return;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
    }
  };

  const currentPillId = hoveredId || activeSection;

  return (
    <>
      {/* Opash UI Fixed Header Container */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-[padding] duration-300 pointer-events-none flex justify-center pt-3 sm:pt-4">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`w-full rounded-full transition-all duration-300 flex items-center justify-between pointer-events-auto border ${
              isScrolled
                ? "px-3 sm:px-4 py-1.5 sm:py-2 bg-[#F8FCFD]/90 backdrop-blur-2xl border-[#0E6BA8]/30 shadow-[0_12px_36px_rgba(11,37,69,0.08),0_1px_3px_rgba(14,107,168,0.18)]"
                : "px-3 sm:px-4 py-2 bg-[#F8FCFD]/75 backdrop-blur-xl border-[#A9DDE8]/50 shadow-[0_4px_20px_rgba(11,37,69,0.04)]"
            }`}
          >
            {/* Logo Mark: Jay Kundariya */}
            <button
              onClick={() => scrollTo("hero")}
              className="flex items-center gap-3 group focus:outline-none text-left shrink-0 cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="font-serif font-bold text-sm pl-5 sm:text-base text-[#0B2545] group-hover:text-[#0E6BA8] transition-colors leading-tight">
                  Jay Kundariya
                </span>
              </div>
            </button>

            {/* Opash UI Center Nav Dock (Floating Pill Dock with Sliding Spring Indicator) */}
            <nav
              className="hidden lg:flex items-center relative shrink-0"
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative flex items-center p-1 rounded-full bg-[#A9DDE8]/20 border border-[#A9DDE8]/40 backdrop-blur-xl flex-nowrap shadow-inner">
                {NAV_LINKS.map((link) => {
                  const isHoveredOrActive = currentPillId === link.id;
                  const isActive = activeSection === link.id;

                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollTo(link.id)}
                      onMouseEnter={() => setHoveredId(link.id)}
                      className={`relative z-10 flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? "text-[#0E6BA8] font-bold"
                          : "text-[#0B2545]/75 hover:text-[#0E6BA8]"
                      }`}
                    >
                      {/* Spring-animated pill background */}
                      {isHoveredOrActive && (
                        <motion.div
                          layoutId="opashNavPill"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 32,
                          }}
                          className="absolute inset-0 rounded-full bg-[#F8FCFD] shadow-xs border border-[#A9DDE8]/60"
                        />
                      )}

                      <span className="relative z-10">{link.label}</span>

                      {/* Optional Opash-style Badge */}
                      {link.badge && (
                        <span className="relative z-10 px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider bg-[#0E6BA8]/15 text-[#0E6BA8] border border-[#0E6BA8]/30">
                          {link.badge}
                        </span>
                      )}

                      {/* Optional Status Pulse Dot */}
                      {link.statusDot && (
                        <span className="relative z-10 flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10A36B] opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10A36B]" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* Right Action Group: Availability Pill + Opash UI Signature Button + Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 flex-nowrap">
              {/* Opash UI Expanding-Circle Magnetic CTA Button */}
              <button
                onClick={() => scrollTo("contact")}
                className="group relative inline-flex items-center justify-center cursor-pointer overflow-hidden rounded-full select-none transition-all duration-300 bg-[#0B2545] text-[#F8FCFD] border border-[#0E6BA8]/50 hover:border-[#0E6BA8] hover:shadow-xl hover:shadow-[#0E6BA8]/30 active:scale-[0.98] px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm tracking-wide font-bold shadow-md shadow-[#0B2545]/20 whitespace-nowrap shrink-0"
              >
                {/* Expanding circle animation that fills the button on hover */}
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full transition-all duration-500 ease-out pointer-events-none bg-gradient-to-r from-[#0E6BA8] via-[#A9DDE8] to-[#10A36B] group-hover:scale-[75] group-hover:bg-[#0E6BA8]" />

                {/* Default state: dot + text */}
                <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:translate-x-6 group-hover:opacity-0 text-[#F8FCFD] font-sans font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A9DDE8] group-hover:opacity-0 transition-opacity" />
                  <span>Let's talk</span>
                </span>

                {/* Hover state: centered text + arrow sliding in */}
                <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 font-sans font-bold text-[#F8FCFD]">
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#F8FCFD]" />
                </span>
              </button>

              {/* Mobile Hamburger Button */}
              <div className="flex items-center lg:hidden shrink-0">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                  className="p-2 sm:p-2.5 rounded-full text-[#0B2545] bg-[#A9DDE8]/30 border border-[#A9DDE8]/50 hover:bg-[#A9DDE8]/50 transition-colors focus:outline-none cursor-pointer"
                >
                  {mobileMenuOpen ? (
                    <X className="w-4 h-4 text-[#0B2545]" />
                  ) : (
                    <Menu className="w-4 h-4 text-[#0B2545]" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Opash UI Mobile Bottom Sheet / Slide-in Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#0B2545]/60 backdrop-blur-md lg:hidden flex flex-col justify-end"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 320 }}
              className="w-full bg-[#F8FCFD] border-t border-[#0E6BA8]/30 rounded-t-[32px] p-6 pb-10 shadow-[0_-20px_50px_rgba(11,37,69,0.25)] flex flex-col gap-5 max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drag handle pill */}
              <div className="w-12 h-1.5 rounded-full bg-[#0E6BA8]/40 mx-auto" />

              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-3 border-b border-[#A9DDE8]/40">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-[#0B2545] flex items-center justify-center text-[#A9DDE8] font-serif font-bold text-xs border border-[#0E6BA8]/40 shadow-xs">
                    JK
                  </div>
                  <div>
                    <p className="font-serif font-bold text-sm text-[#0B2545]">
                      Jay Kundariya
                    </p>
                    <p className="text-[10px] text-[#0B2545]/70 font-mono">
                      Senior React Native Developer
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#A9DDE8]/25 flex items-center justify-center text-[#0B2545] hover:bg-[#0E6BA8]/20 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links inside drawer */}
              <div className="flex flex-col gap-2 py-2">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollTo(link.id)}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#A9DDE8]/30 text-[#0E6BA8] border border-[#0E6BA8]/30 font-bold shadow-xs"
                          : "text-[#0B2545]/80 hover:bg-[#A9DDE8]/15"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{link.label}</span>
                        {link.badge && (
                          <span className="px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider bg-[#0E6BA8]/15 text-[#0E6BA8] border border-[#0E6BA8]/30">
                            {link.badge}
                          </span>
                        )}
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-50 text-[#0E6BA8]" />
                    </button>
                  );
                })}
              </div>

              {/* Status and Signature CTA */}
              <div className="pt-2 flex flex-col gap-3">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#A9DDE8]/20 border border-[#A9DDE8]/40 text-xs text-[#0B2545]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10A36B] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10A36B]" />
                  </span>
                  <span className="font-sans">
                    Available for mobile product & architecture contracts
                  </span>
                </div>

                {/* Opash UI signature expanding button for mobile drawer */}
                <button
                  onClick={() => scrollTo("contact")}
                  className="group relative w-full inline-flex items-center justify-center cursor-pointer overflow-hidden rounded-full select-none transition-all duration-300 bg-[#0B2545] text-[#F8FCFD] border border-[#0E6BA8]/50 hover:border-[#0E6BA8] hover:shadow-xl py-3.5 text-sm font-bold shadow-md shadow-[#0B2545]/20"
                >
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full transition-all duration-500 ease-out pointer-events-none bg-gradient-to-r from-[#0E6BA8] via-[#A9DDE8] to-[#10A36B] group-hover:scale-[75] group-hover:bg-[#0E6BA8]" />

                  <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:translate-x-6 group-hover:opacity-0 text-[#F8FCFD] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A9DDE8] group-hover:opacity-0 transition-opacity" />
                    <span>Let's talk</span>
                  </span>

                  <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 font-bold text-[#F8FCFD]">
                    <span>Get in Touch</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
