import React, { useState, useMemo } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  ExternalLink,
  Smartphone,
  Search,
  Layers,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";
import { projectsData } from "../lib/projectData";

const CATEGORY_TABS = [
  { id: "all", label: "All Projects" },
  { id: "fintech", label: "FinTech & Insurance", match: ["Insurance", "Business"] },
  { id: "health", label: "Healthcare & Care", match: ["Health"] },
  { id: "travel", label: "Travel & Mobility", match: ["Travelling", "Automotive"] },
  { id: "media", label: "Gaming, Audio & Media", match: ["Gaming", "Music", "Communication", "Social", "Entertainment"] },
  { id: "saas", label: "SaaS & Productivity", match: ["Productivity", "Education", "Shopping", "e-commerce", "Ai"] },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on active tab and search query
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // Category match
      const currentTab = CATEGORY_TABS.find((t) => t.id === activeTab);
      let matchesCategory = true;
      if (currentTab && currentTab.id !== "all" && currentTab.match) {
        matchesCategory = currentTab.match.some(
          (m) => m.toLowerCase() === project.category.toLowerCase()
        );
      }

      // Search match
      const query = searchQuery.trim().toLowerCase();
      let matchesSearch = true;
      if (query) {
        matchesSearch =
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.category.toLowerCase().includes(query) ||
          project.tools?.some((t) => t.toLowerCase().includes(query)) ||
          project.features?.some((f) => f.toLowerCase().includes(query));
      }

      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F8FCFD] text-[#0B2545]">
      <Navbar />

      <main className="pt-28 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section (Compact, No oversized image banner) */}
          <div className="border-b border-[#0B2545]/10 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#0E6BA8]" />
                  <span className="text-[11px] font-mono font-medium tracking-wider uppercase text-[#0B2545]/60">
                    Production Archive · 2021 — 2026
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0B2545]">
                  Commercial Works &amp; Systems
                </h1>
                <p className="mt-1 text-xs sm:text-sm text-[#0B2545]/70 max-w-xl leading-relaxed">
                  21 cross-platform production apps, offline-first architectures, native
                  modules, and enterprise SaaS solutions engineered with React Native.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#0B2545]/60 shrink-0">
                <span className="px-2.5 py-1 rounded-full bg-white border border-[#A9DDE8]/50 shadow-xs font-semibold text-[#0B2545]">
                  {filteredProjects.length} of {projectsData.length} Loaded
                </span>
              </div>
            </div>

            {/* Filter & Search Bar (Tight, dense spacing) */}
            <div className="mt-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                {CATEGORY_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#0E6BA8] text-white shadow-xs font-semibold"
                          : "bg-white/80 hover:bg-white text-[#0B2545]/70 hover:text-[#0B2545] border border-[#A9DDE8]/40"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-64 shrink-0">
                <Search className="w-3.5 h-3.5 text-[#0B2545]/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by tech or keyword..."
                  className="w-full pl-8 pr-3 py-1.5 rounded-full bg-white border border-[#A9DDE8]/40 text-xs text-[#0B2545] placeholder-[#0B2545]/40 focus:outline-none focus:ring-1 focus:ring-[#0E6BA8] focus:border-[#0E6BA8] shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#0B2545]/50 hover:text-[#0B2545]"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Projects Grid (Compact, high information density, not wide spacing) */}
          {filteredProjects.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center border border-[#0B2545]/10 max-w-md mx-auto my-12 shadow-xs">
              <Layers className="w-8 h-8 text-[#0B2545]/40 mx-auto mb-2" />
              <h3 className="text-sm font-bold text-[#0B2545]">No Projects Found</h3>
              <p className="text-xs text-[#0B2545]/70 mt-1">
                Try clearing your search query or picking another category filter.
              </p>
              <button
                onClick={() => {
                  setActiveTab("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-3.5 py-1.5 rounded-full bg-[#0E6BA8] hover:bg-[#0E6BA8]/90 text-white text-xs font-semibold shadow-xs"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-[#0B2545]/10 shadow-[0_4px_16px_rgba(11,37,69,0.04)] hover:shadow-[0_12px_32px_rgba(14,107,168,0.12)] hover:border-[#0E6BA8]/40 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Meta: Category + ID */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-[#A9DDE8]/25 text-[#0B2545]">
                        {project.category}
                      </span>

                      <span className="text-[10px] font-mono text-[#0B2545]/40">
                        #{project.id}
                      </span>
                    </div>

                    {/* Title */}
                    <Link
                      href={`/projects/${project.id}`}
                      className="block group-hover:text-[#0E6BA8] transition-colors"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-[#0B2545] group-hover:text-[#0E6BA8] tracking-tight leading-snug line-clamp-1">
                        {project.title}
                      </h3>
                    </Link>

                    {/* Overview description */}
                    <p className="mt-1.5 text-xs text-[#0B2545]/70 leading-relaxed line-clamp-2">
                      {project.overview || project.description}
                    </p>

                    {/* Feature highlight badge (Simulates real app function) */}
                    {project.features && project.features.length > 0 && (
                      <div className="mt-3 py-1.5 px-2.5 rounded-xl bg-[#F8FCFD] border border-[#A9DDE8]/40 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10A36B] shrink-0" />
                        <span className="text-[11px] font-mono text-[#0B2545]/80 truncate">
                          {project.features[0]}
                        </span>
                      </div>
                    )}

                    {/* Tech Stack Chips */}
                    {project.tools && project.tools.length > 0 && (
                      <div className="mt-3 flex flex-wrap items-center gap-1.5">
                        {project.tools.slice(0, 3).map((tool, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md text-[9.5px] font-mono bg-[#A9DDE8]/20 text-[#0B2545] font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 3 && (
                          <span className="text-[9.5px] font-mono text-[#0B2545]/40">
                            +{project.tools.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="mt-4 pt-3 border-t border-[#0B2545]/8 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F8FCFD] hover:bg-[#A9DDE8]/20 text-[#0B2545] border border-[#A9DDE8]/40 text-[10.5px] font-semibold transition-colors"
                          title="Open live website"
                        >
                          <span>Live</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                      {project.appLink && (
                        <a
                          href={project.appLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#10A36B]/10 hover:bg-[#10A36B]/20 text-[#10A36B] border border-[#10A36B]/30 text-[10.5px] font-semibold transition-colors"
                          title="App Store / Play Store"
                        >
                          <Smartphone className="w-2.5 h-2.5" />
                          <span>App</span>
                        </a>
                      )}
                    </div>

                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B2545] group-hover:text-[#0E6BA8] group-hover:underline"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <NewFooter />
    </div>
  );
}
