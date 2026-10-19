import React from "react";
import {
  Zap,
  Sparkles,
  ArrowUp,
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  Twitter,
  Globe,
} from "lucide-react";
import HalftoneWordmarkFooter from "./halftone-wordmark-footer";
import footerLandscape from "../assets/footer-landscape.jpg";

interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Product / Apps",
    links: [
      { label: "Overview", href: "#projects" },
      { label: "FinTech Mobile", href: "#projects" },
      { label: "Health & Telehealth", href: "#projects" },
      { label: "Multi-Store POS", href: "#projects" },
      { label: "Social & Live Audio", href: "#projects" },
      { label: "Smart Home IoT", href: "#projects" },
    ],
  },
  {
    title: "Expertise",
    links: [
      { label: "React Native (iOS & Android)", href: "#services" },
      { label: "Offline SQLite & Sync", href: "#services" },
      { label: "Expo & Instant EAS OTA", href: "#services" },
      { label: "60 FPS Native Gestures", href: "#services" },
      { label: "Custom Native Modules", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "The Story & Craft", href: "#about" },
      { label: "20+ Case Studies", href: "#projects" },
      { label: "Engineering Method", href: "#process" },
      { label: "Career Milestones", href: "#experience" },
      { label: "Client Testimonials", href: "#testimonials" },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        label: "WhatsApp Direct",
        href: "https://wa.me/917984223426",
        isExternal: true,
      },
      {
        label: "jaykundariya786@gmail.com",
        href: "mailto:jaykundariya786@gmail.com",
        isExternal: true,
      },
      {
        label: "LinkedIn Profile",
        href: "https://linkedin.com/in/jay-kundariya",
        isExternal: true,
      },
      {
        label: "GitHub Repositories",
        href: "https://github.com/jaykundariya786",
        isExternal: true,
      },
      { label: "Surat, Gujarat, India (IST)", href: "#contact" },
    ],
  },
];

export default function NewFooter() {
  // Mode switcher for bottom artwork: 'hybrid' (both), 'image' (landscape only), 'halftone' (canvas only)
  const bottomMode: "hybrid" | "image" | "halftone" = "hybrid";

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full select-none">
      {/* Outer subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[150px] bg-[#0E6BA8]/8 rounded-full blur-[100px] pointer-events-none" />

      {/* ======================================================== */}
      {/* FLOATING CARD CONTAINER WITH ROUNDED CORNERS             */}
      {/* ======================================================== */}
      <div className="bg-[#F8FCFD] text-[#0B2545] border border-[#A9DDE8]/40 shadow-[0_24px_80px_rgba(11,37,69,0.12)] overflow-hidden relative">
        {/* Content Area */}
        <div className="p-6 sm:p-10 lg:p-12 relative z-10 bg-[#F8FCFD]">
          {/* ======================================================== */}
          {/* 1. TOP CTA ROW                                           */}
          {/* ======================================================== */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-8 sm:pb-10 border-b border-[#0B2545]/8">
            <div className="max-w-xl">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2545] tracking-tight">
                Start your mobile project today
              </h3>
              <p className="text-xs sm:text-sm text-[#0B2545]/70 mt-1.5 leading-relaxed">
                Have an app idea or need to scale your existing product? Let’s
                build something extraordinary with zero compromise on quality.
              </p>
            </div>

            <button
              onClick={() => scrollTo("contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0E6BA8] hover:bg-[#0E6BA8]/90 text-white text-xs font-semibold shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer active:scale-95"
            >
              <Zap className="w-3.5 h-3.5 text-[#A9DDE8] fill-[#A9DDE8]" />
              <span>Get started</span>
            </button>
          </div>

          {/* ======================================================== */}
          {/* 2. MULTI-COLUMN DIRECTORY WITH BRAND                     */}
          {/* ======================================================== */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 py-10 sm:py-12 border-b border-[#0B2545]/8">
            {/* Brand Column (spans 2 cols on lg) */}
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-serif font-bold text-2xl text-[#0B2545] tracking-tight">
                  Jay Kundariya
                </span>
              </div>

              <p className="text-xs text-[#0B2545]/70 leading-relaxed max-w-sm mb-5">
                The full-stack mobile craftsman shaping 60 FPS, offline-first
                iOS and Android applications for high-growth startups and global
                teams.
              </p>
            </div>

            {/* Dynamic Link Columns */}
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="col-span-1">
                <h4 className="text-xs font-semibold text-gray-900 tracking-wider uppercase mb-3.5 font-sans">
                  {col.title}
                </h4>
                <ul className="space-y-2.5 text-xs">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0B2545]/60 hover:text-[#0E6BA8] font-medium transition-colors inline-block"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <button
                          onClick={() => scrollTo(link.href.replace("#", ""))}
                          className="text-[#0B2545]/60 hover:text-[#0E6BA8] font-medium transition-colors text-left cursor-pointer"
                        >
                          {link.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ======================================================== */}
          {/* 3. COPYRIGHT & SOCIALS ROW                               */}
          {/* ======================================================== */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#0B2545]/60">
            <div>
              <span>
                © {new Date().getFullYear()} Jay Kundariya. All rights reserved.
              </span>
            </div>

            {/* Middle Badge: Made with love */}
            <div className="flex items-center gap-1.5 text-[#0B2545]/70 font-medium">
              <span className="text-[#10A36B]">✦</span>
              <span>Crafted with care in India · Delivered Worldwide</span>
            </div>

            {/* Social Icons Strip */}
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5 sm:gap-3.5">
              {/* <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="text-[#0B2545]/50 hover:text-[#0E6BA8] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a> */}

              <a
                href="https://github.com/jaykundariya786"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#0B2545]/50 hover:text-[#0E6BA8] transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/917984223426"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-[#0B2545]/50 hover:text-[#0E6BA8] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com/in/jay-kundariya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#0B2545]/50 hover:text-[#0E6BA8] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="mailto:jaykundariya786@gmail.com"
                aria-label="Email"
                className="text-[#0B2545]/50 hover:text-[#0E6BA8] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="https://jaykundariya.com"
                aria-label="Portfolio"
                className="text-[#0B2545]/50 hover:text-[#0E6BA8] transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>

              <span className="w-px h-3 bg-[#0B2545]/10 mx-1" />

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1 text-[#0B2545]/70 hover:text-[#0E6BA8] font-semibold transition-colors cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] overflow-hidden border-t border-[#0B2545]/10 group">
          <img
            src={footerLandscape}
            alt="Alpine landscape"
            className="absolute inset-0 w-full h-full object-cover object-bottom transition-all duration-500"
          />

          <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#F8FCFD] to-transparent pointer-events-none z-10" />

          <div
            className={`absolute inset-0 pointer-events-auto transition-opacity duration-300 ${
              bottomMode === "hybrid"
                ? "opacity-75 mix-blend-multiply"
                : "opacity-100"
            }`}
          >
            <HalftoneWordmarkFooter
              wordmark="Jay Kundariya"
              label=""
              meta=""
              columns={[]}
              backToTop={false}
              preset="paper"
              palette={{
                background: "#F8FCFD",
                ink: "#0B2545",
                warm: "#0E6BA8",
              }}
              height="340px"
              dotGap={6}
              radius={85}
              interactive={true}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
