import React from "react";
import { Link, useLocation } from "wouter";
import {
  Compass,
  Home,
  Layers,
  Wifi,
  Battery,
} from "lucide-react";

export default function NotFound() {
  const [location] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F8FCFD] p-4 text-[#0B2545] select-none">
      {/* Sleek Mobile Phone Chassis (Similar concept to project UI) */}
      <div className="w-full max-w-[340px] sm:max-w-[350px] bg-[#0B2545] rounded-[36px] p-2.5 sm:p-3 border border-[#A9DDE8]/30 shadow-[0_22px_55px_-12px_rgba(11,37,69,0.35),0_2px_6px_rgba(11,37,69,0.12)]">
        {/* Dynamic Island / Speaker Pill */}
        <div className="w-20 h-4 bg-black/60 rounded-full mx-auto mb-2 flex items-center justify-center gap-1.5 px-2 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#10A36B] animate-pulse ring-1 ring-[#10A36B]/40" />
        </div>

        {/* Inner Device Screen */}
        <div className="rounded-[26px] bg-[#F8FCFD] p-4 flex flex-col justify-between min-h-[400px] border border-[#A9DDE8]/30 shadow-inner">
          <div>
            {/* Mobile Status Bar */}
            <div className="flex items-center justify-between text-[10px] font-mono font-semibold text-[#0B2545]/50 mb-4 px-0.5">
              <span>9:41</span>
              <div className="flex items-center gap-1.5 text-[#0B2545]/40">
                <span className="text-[9px] font-mono tracking-tighter">5G</span>
                <Wifi className="w-3 h-3" />
                <Battery className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Error Graphic & Badge */}
            <div className="text-center py-2">
              <div className="w-12 h-12 rounded-2xl bg-[#A9DDE8]/20 border border-[#A9DDE8]/40 text-[#0E6BA8] flex items-center justify-center mx-auto mb-3 shadow-2xs">
                <Compass className="w-6 h-6 animate-spin-slow" />
              </div>

              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#A9DDE8]/20 text-[#0B2545]">
                404 · SCREEN_UNMOUNTED
              </span>

              <h1 className="mt-2.5 text-lg font-extrabold text-[#0B2545] tracking-tight leading-snug">
                Route Not Found
              </h1>

              <div className="mt-1 px-2.5 py-1 rounded-lg bg-white border border-[#A9DDE8]/40 inline-block max-w-full shadow-2xs">
                <code className="text-[10.5px] font-mono text-[#0E6BA8] truncate block">
                  {location || "/unknown-route"}
                </code>
              </div>

              <p className="mt-2 text-xs text-[#0B2545]/60 leading-relaxed px-2">
                This screen does not exist or has been shifted in the active application stack.
              </p>
            </div>
          </div>

          {/* Quick Action Navigation Stack */}
          <div className="space-y-2 pt-2 border-t border-[#0B2545]/8">
            <Link
              href="/"
              className="w-full py-2.5 px-3.5 rounded-xl bg-[#0E6BA8] hover:bg-[#0E6BA8]/90 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return Home</span>
            </Link>

            <Link
              href="/projects"
              className="w-full py-2 px-3.5 rounded-xl bg-white hover:bg-[#F8FCFD] border border-[#A9DDE8]/40 text-[#0B2545] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Browse All 21 Projects</span>
            </Link>

            <Link
              href="/contact"
              className="w-full text-center block text-[11px] font-medium text-[#0B2545]/60 hover:text-[#0E6BA8] transition-colors pt-1 cursor-pointer"
            >
              Need help? Direct Connect &rarr;
            </Link>

            {/* Home Indicator */}
            <div className="w-20 h-1 bg-[#0B2545]/20 rounded-full mx-auto mt-2.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
