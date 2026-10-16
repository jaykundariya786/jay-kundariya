import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Send,
  Check,
  Copy,
  MessageCircle,
  Linkedin,
  Github,
  Zap,
} from "lucide-react";
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";

const INQUIRY_TYPES = [
  "Mobile App (iOS & Android)",
  "Full-Stack SaaS / POS",
  "React Native Performance Audit",
  "Contract / Full-Time Role",
];

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedType, setSelectedType] = useState(INQUIRY_TYPES[0]);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const email = "jaykundariya786@gmail.com";
  const phone = "+91 7984223426";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Compose mailto as direct bridge
    const subject = encodeURIComponent(`[Inquiry: ${selectedType}] from ${formState.name || "Client"}`);
    const body = encodeURIComponent(
      `Hi Jay,\n\nProject Category: ${selectedType}\n\nClient Name: ${formState.name}\nContact Email: ${formState.email}\n\nMessage:\n${formState.message}\n`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#F8FCFD] text-[#0B2545]">
      <Navbar />

      <main className="pt-28 pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header Section (Compact, No oversized image banner) */}
          <div className="border-b border-[#0B2545]/10 pb-5 mb-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10A36B]/10 border border-[#10A36B]/30 text-[#0B2545] text-xs font-mono font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-[#10A36B] animate-pulse" />
              <span>Available for Q2–Q3 Mobile Eng &amp; Architecture</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0B2545]">
              Direct Connect Terminal
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-[#0B2545]/70 max-w-lg mx-auto leading-relaxed">
              Have an iOS/Android product, high-velocity MVP, or engineering team to scale?
              Reach out directly — average response time is under 2 hours.
            </p>
          </div>

          {/* 2-Column Console Layout (Tight, compact, high-density) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-start">
            {/* Left Column: Direct Communication Card (Mobile Device Console Style) */}
            <div className="md:col-span-5 bg-white rounded-2xl p-5 border border-[#0B2545]/10 shadow-[0_4px_20px_rgba(11,37,69,0.04)] flex flex-col justify-between">
              <div>
                {/* Profile Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-[#0B2545]/8">
                  <div className="w-10 h-10 rounded-xl bg-[#0B2545] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    JK
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0B2545] leading-tight">
                      Jay Kundariya
                    </h3>
                    <span className="text-[11px] font-mono text-[#0B2545]/60 block">
                      Senior React Native Developer
                    </span>
                  </div>
                </div>

                {/* Location & Timezone Indicator */}
                <div className="mt-4 p-3 rounded-xl bg-[#F8FCFD] border border-[#A9DDE8]/40 text-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#0B2545]/80">
                    <MapPin className="w-3.5 h-3.5 text-[#0E6BA8] shrink-0" />
                    <span className="truncate">Surat, Gujarat, India · Remote Worldwide</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#0B2545]/70 font-mono text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-[#0E6BA8] shrink-0" />
                    <span>IST (UTC+5:30) · Online Now</span>
                  </div>
                </div>

                {/* Channels List */}
                <div className="mt-4 space-y-2.5">
                  {/* Email */}
                  <div className="p-3 rounded-xl bg-[#F8FCFD] border border-[#A9DDE8]/40 flex items-center justify-between">
                    <div className="min-w-0 pr-2">
                      <span className="text-[10px] font-mono text-[#0B2545]/50 uppercase tracking-wider block">
                        Primary Email
                      </span>
                      <a
                        href={`mailto:${email}`}
                        className="text-xs font-semibold text-[#0B2545] hover:text-[#0E6BA8] hover:underline truncate block"
                      >
                        {email}
                      </a>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="px-2 py-1 rounded-lg text-[10.5px] font-mono font-medium border border-[#A9DDE8]/50 bg-white hover:bg-[#F8FCFD] text-[#0B2545] flex items-center gap-1 transition-colors shrink-0 cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3 h-3 text-[#10A36B]" />
                          <span className="text-[#10A36B]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-[#0B2545]/50" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="p-3 rounded-xl bg-[#F8FCFD] border border-[#A9DDE8]/40 flex items-center justify-between">
                    <div className="min-w-0 pr-2">
                      <span className="text-[10px] font-mono text-[#0B2545]/50 uppercase tracking-wider block">
                        WhatsApp &amp; Phone
                      </span>
                      <span className="text-xs font-mono font-semibold text-[#0B2545] block">
                        {phone}
                      </span>
                    </div>
                    <a
                      href="https://wa.me/917984223426"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-lg text-[10.5px] font-semibold bg-[#10A36B] hover:bg-[#10A36B]/90 text-white flex items-center gap-1 transition-colors shrink-0 shadow-2xs"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>Chat</span>
                    </a>
                  </div>
                </div>

                {/* Social Profiles Dock */}
                <div className="mt-4 pt-3 border-t border-[#0B2545]/8 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#0B2545]/50">Profiles:</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/jaykundariya786"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-[#A9DDE8]/20 hover:bg-[#A9DDE8]/40 text-[#0B2545] transition-colors"
                      title="GitHub Profile"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/jay-kundariya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-[#A9DDE8]/20 hover:bg-[#A9DDE8]/40 text-[#0B2545] transition-colors"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Delivery Guarantee Pill */}
              <div className="mt-4 pt-3 border-t border-[#0B2545]/8 flex items-center gap-2 text-[10.5px] font-mono text-[#0B2545]/60">
                <Zap className="w-3.5 h-3.5 text-[#0E6BA8] shrink-0" />
                <span>Zero Bloat · Clean TypeScript · 60 FPS Native</span>
              </div>
            </div>

            {/* Right Column: Direct Message Form (Compact, No bulky fields) */}
            <div className="md:col-span-7 bg-white rounded-2xl p-5 sm:p-6 border border-[#0B2545]/10 shadow-[0_4px_20px_rgba(11,37,69,0.04)]">
              <h3 className="text-sm font-bold text-[#0B2545] tracking-tight mb-1">
                Send Project Brief / Message
              </h3>
              <p className="text-xs text-[#0B2545]/60 mb-4">
                Select your inquiry type and leave a quick note.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Inquiry Type Chips */}
                <div>
                  <label className="block text-[10.5px] font-mono font-semibold text-[#0B2545]/60 uppercase tracking-wider mb-1.5">
                    Project Type
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {INQUIRY_TYPES.map((type) => {
                      const isSelected = selectedType === type;
                      return (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setSelectedType(type)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                            isSelected
                              ? "bg-[#0E6BA8] text-white shadow-xs font-semibold"
                              : "bg-[#F8FCFD] border border-[#A9DDE8]/40 hover:bg-[#A9DDE8]/20 text-[#0B2545]/80"
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email Row (Compact Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10.5px] font-mono font-semibold text-[#0B2545]/60 uppercase tracking-wider mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="Alex Smith"
                      className="w-full px-3 py-2 rounded-xl border border-[#A9DDE8]/50 bg-[#F8FCFD] text-xs text-[#0B2545] placeholder-[#0B2545]/40 focus:outline-none focus:ring-1 focus:ring-[#0E6BA8] focus:border-[#0E6BA8] shadow-2xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[10.5px] font-mono font-semibold text-[#0B2545]/60 uppercase tracking-wider mb-1">
                      Your Email / Phone
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="alex@company.com"
                      className="w-full px-3 py-2 rounded-xl border border-[#A9DDE8]/50 bg-[#F8FCFD] text-xs text-[#0B2545] placeholder-[#0B2545]/40 focus:outline-none focus:ring-1 focus:ring-[#0E6BA8] focus:border-[#0E6BA8] shadow-2xs"
                    />
                  </div>
                </div>

                {/* Message Field (Compact 3 rows) */}
                <div>
                  <label className="block text-[10.5px] font-mono font-semibold text-[#0B2545]/60 uppercase tracking-wider mb-1">
                    Project Overview or Timeline
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Tell me a bit about the project scope, timeline, and tech requirements..."
                    className="w-full px-3 py-2 rounded-xl border border-[#A9DDE8]/50 bg-[#F8FCFD] text-xs text-[#0B2545] placeholder-[#0B2545]/40 focus:outline-none focus:ring-1 focus:ring-[#0E6BA8] focus:border-[#0E6BA8] shadow-2xs resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#0B2545]/50">
                    Direct dispatch to inbox
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#0E6BA8] hover:bg-[#0E6BA8]/90 text-white text-xs font-semibold shadow-xs hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-2.5 rounded-xl bg-[#10A36B]/15 border border-[#10A36B]/30 text-[#0B2545] text-xs flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 text-[#10A36B] shrink-0" />
                    <span>Inquiry generated! Opening your mail client now...</span>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>

      <NewFooter />
    </div>
  );
}
