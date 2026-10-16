import React from "react";
import { useParams, Link } from "wouter";
import { projectsData } from "../lib/projectData";
import {
  ArrowLeft,
  ExternalLink,
  Smartphone,
  CheckCircle2,
  Layers,
} from "lucide-react";
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();

  const project = projectId
    ? projectsData?.find((p) => p.id === projectId)
    : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F8FCFD] text-[#0B2545] flex flex-col justify-between">
        <Navbar />
        <div className="pt-32 pb-20 px-4 text-center max-w-md mx-auto my-auto">
          <div className="w-12 h-12 rounded-2xl bg-[#A9DDE8]/20 border border-[#A9DDE8]/50 text-[#0E6BA8] flex items-center justify-center mx-auto mb-3">
            <Layers className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-[#0B2545]">Project Not Found</h2>
          <p className="text-xs text-[#0B2545]/60 mt-1 mb-5">
            The project you are looking for does not exist in the active catalog.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0E6BA8] hover:bg-[#0E6BA8]/90 text-white text-xs font-semibold shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Projects Archive</span>
          </Link>
        </div>
        <NewFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FCFD] text-[#0B2545]">
      <Navbar />

      <main className="pt-28 pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Back Navigation Bar */}
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B2545]/70 hover:text-[#0E6BA8] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Projects</span>
            </Link>

            <span className="text-[11px] font-mono text-[#0B2545]/50">
              ID: {project.id}
            </span>
          </div>

          {/* Master Project Header Card */}
          <div className="bg-white rounded-3xl p-5 sm:p-8 border border-[#0B2545]/10 shadow-[0_4px_24px_rgba(11,37,69,0.05)] mb-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#A9DDE8]/25 text-[#0B2545]">
                {project.category}
              </span>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0E6BA8] hover:bg-[#0E6BA8]/90 text-white text-xs font-semibold shadow-xs hover:scale-105 active:scale-95 transition-all"
                  >
                    <span>Live Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {project.appLink && (
                  <a
                    href={project.appLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#10A36B] hover:bg-[#10A36B]/90 text-white text-xs font-semibold shadow-xs hover:scale-105 active:scale-95 transition-all"
                  >
                    <Smartphone className="w-3 h-3" />
                    <span>App Store</span>
                  </a>
                )}
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="mt-3 text-sm sm:text-base text-[#0B2545]/70 leading-relaxed font-sans">
              {project.longDescription || project.description}
            </p>

            {/* Architecture Highlights Pill */}
            {project.purpose && (
              <div className="mt-5 p-3.5 sm:p-4 rounded-2xl bg-[#F8FCFD] border border-[#A9DDE8]/40">
                <span className="text-[10.5px] font-mono font-bold text-[#0E6BA8] uppercase tracking-wider block mb-1">
                  Product Purpose &amp; Impact
                </span>
                <p className="text-xs sm:text-sm text-[#0B2545] leading-relaxed font-sans">
                  {project.purpose}
                </p>
              </div>
            )}
          </div>

          {/* Key Deliverables & Architecture Features */}
          {project.features && project.features.length > 0 && (
            <div className="bg-white rounded-3xl p-5 sm:p-8 border border-[#0B2545]/10 shadow-[0_4px_24px_rgba(11,37,69,0.05)] mb-6">
              <h2 className="text-sm font-mono font-bold text-[#0B2545]/60 uppercase tracking-wider mb-4">
                Key Architecture &amp; Deliverables
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FCFD] border border-[#A9DDE8]/30 text-xs text-[#0B2545]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#10A36B] shrink-0 mt-0.5" />
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Tech Stack */}
          {project.tools && project.tools.length > 0 && (
            <div className="bg-white rounded-3xl p-5 sm:p-8 border border-[#0B2545]/10 shadow-[0_4px_24px_rgba(11,37,69,0.05)] mb-6">
              <h2 className="text-sm font-mono font-bold text-[#0B2545]/60 uppercase tracking-wider mb-3">
                Technologies &amp; Libraries
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-xl bg-[#A9DDE8]/20 text-[#0B2545] text-xs font-mono font-semibold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Back Button */}
          <div className="pt-4 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-[#F8FCFD] border border-[#A9DDE8]/60 text-[#0B2545] hover:text-[#0E6BA8] text-xs font-semibold shadow-xs transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All 21 Projects</span>
            </Link>
          </div>
        </div>
      </main>

      <NewFooter />
    </div>
  );
}
