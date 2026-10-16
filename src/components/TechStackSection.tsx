import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

// =====================================================================
// Import Real High-Resolution Brand Icons from src/icons
// =====================================================================
import reactIcon from "../icons/reactjs.png";
import expoIcon from "../icons/expo.png";
import nextIcon from "../icons/nextjs.png";
import androidIcon from "../icons/android.png";
import flutterIcon from "../icons/flutter.png";
import swiftIcon from "../icons/swift.png";

import tsIcon from "../icons/typescript.png";
import jsIcon from "../icons/js.png";
import dartIcon from "../icons/dart.png";
import nodeIcon from "../icons/nodejs.png";
import pythonIcon from "../icons/python.png";
import graphqlIcon from "../icons/graphql.png";

import reduxIcon from "../icons/redux.png";
import muiIcon from "../icons/materialui.png";
import htmlIcon from "../icons/html5.png";
import cssIcon from "../icons/css3.png";
import figmaIcon from "../icons/figma.png";
import flutterflowIcon from "../icons/flutterflow.png";

import firebaseIcon from "../icons/firebase.png";
import awsIcon from "../icons/aws.png";
import gcloudIcon from "../icons/gcloud.png";
import mongoIcon from "../icons/mongodb.png";
import openaiIcon from "../icons/openai.png";
import angularIcon from "../icons/angular.png";

interface TechItem {
  id: string;
  name: string;
  icon: string;
}

// 4 Columns of technologies (6 unique items each = 24 total)
const COLUMNS: TechItem[][] = [
  // Column 1: Core Mobile & Cross-Platform
  [
    { id: "reactjs", name: "React Native", icon: reactIcon },
    { id: "expo", name: "Expo", icon: expoIcon },
    { id: "android", name: "Android Native", icon: androidIcon },
    { id: "swift", name: "Swift / iOS", icon: swiftIcon },
    { id: "flutter", name: "Flutter", icon: flutterIcon },
    { id: "nextjs", name: "Next.js", icon: nextIcon },
  ],
  // Column 2: Languages & Runtime
  [
    { id: "typescript", name: "TypeScript", icon: tsIcon },
    { id: "javascript", name: "JavaScript", icon: jsIcon },
    { id: "nodejs", name: "Node.js", icon: nodeIcon },
    { id: "python", name: "Python", icon: pythonIcon },
    { id: "dart", name: "Dart", icon: dartIcon },
    { id: "graphql", name: "GraphQL", icon: graphqlIcon },
  ],
  // Column 3: State, UI & Design
  [
    { id: "redux", name: "Redux Toolkit", icon: reduxIcon },
    { id: "figma", name: "Figma", icon: figmaIcon },
    { id: "materialui", name: "Material UI", icon: muiIcon },
    { id: "html5", name: "HTML5", icon: htmlIcon },
    { id: "css3", name: "CSS3", icon: cssIcon },
    { id: "flutterflow", name: "FlutterFlow", icon: flutterflowIcon },
  ],
  // Column 4: Cloud, Backend & AI
  [
    { id: "firebase", name: "Firebase", icon: firebaseIcon },
    { id: "aws", name: "AWS", icon: awsIcon },
    { id: "gcloud", name: "Google Cloud", icon: gcloudIcon },
    { id: "mongodb", name: "MongoDB", icon: mongoIcon },
    { id: "openai", name: "OpenAI", icon: openaiIcon },
    { id: "angular", name: "Angular", icon: angularIcon },
  ],
];

interface VerticalColumnProps {
  items: TechItem[];
  reverse?: boolean;
  duration?: number;
}

function VerticalColumn({
  items,
  reverse = false,
  duration = 22,
}: VerticalColumnProps) {
  // Duplicate array 3 times for a smooth seamless loop
  const loopItems = [...items, ...items, ...items];

  return (
    <div className="h-full overflow-hidden flex flex-col items-center">
      <motion.div
        animate={{
          y: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="flex flex-col gap-2.5 xs:gap-3 sm:gap-3.5 shrink-0 py-2"
      >
        {loopItems.map((item, idx) => (
          <motion.div
            key={`${item.id}-${idx}`}
            whileHover={{ scale: 1.12, y: -2 }}
            transition={{ duration: 0.18 }}
            className="w-11 h-11 xs:w-13 xs:h-13 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[#FFFFFF] border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.1)] flex items-center justify-center p-2 xs:p-2.5 sm:p-3 transition-shadow cursor-pointer select-none group relative"
            title={item.name}
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 object-contain select-none pointer-events-none drop-shadow-2xs transition-transform duration-200 group-hover:scale-105"
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechStackSection() {
  const handleScrollToProjects = () => {
    const el =
      document.getElementById("projects") ||
      document.getElementById("case-study");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="tech-stack"
      className="relative w-full py-14 sm:py-20 lg:py-24 bg-[#0B2545] px-4 sm:px-6 lg:px-8 select-none overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0E6BA8]/18 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#A9DDE8]/12 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* White Master Showcase Card */}
        <div className="bg-[#F8FCFD] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(11,37,69,0.25)] border border-[#A9DDE8]/40 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Badge, Description, and CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 bg-[#F8FCFD] border border-[#A9DDE8]/60 shadow-2xs px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0B2545] w-fit mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#10A36B]" />
              <span>Core Tech Stack</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-sans font-bold text-3xl sm:text-4xl lg:text-[40px] text-[#0B2545] tracking-tight leading-tight mb-4"
            >
              Key Technologies &amp; Platforms
            </motion.h2>

            {/* Subheading / Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs sm:text-sm text-[#0B2545]/70 leading-relaxed max-w-sm mb-6 sm:mb-8 font-sans"
            >
              Battle-tested across 20+ commercial applications. From native
              iOS/Android bridges and 60 FPS gesture engines to scalable cloud
              backends and real-time WebSockets.
            </motion.p>

            {/* Primary Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B2545] hover:bg-[#0E6BA8] text-[#F8FCFD] text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-md border border-[#0E6BA8]/35 cursor-pointer"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: 4-Column Infinite Vertical Scrolling Grid */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[20px] xs:rounded-[24px] sm:rounded-[28px] bg-[#A9DDE8]/15 p-2 xs:p-3 sm:p-5 h-[320px] sm:h-[400px] overflow-hidden border border-[#A9DDE8]/40">
              {/* Top Gradient Fade Overlay */}
              <div className="absolute top-0 inset-x-0 h-14 sm:h-16 bg-gradient-to-b from-[#F8FCFD] via-[#F8FCFD]/80 to-transparent z-10 pointer-events-none" />

              {/* Bottom Gradient Fade Overlay */}
              <div className="absolute bottom-0 inset-x-0 h-14 sm:h-16 bg-gradient-to-t from-[#F8FCFD] via-[#F8FCFD]/80 to-transparent z-10 pointer-events-none" />

              {/* 4 Alternating Vertical Columns */}
              <div className="grid grid-cols-4 gap-1.5 xs:gap-2.5 sm:gap-3.5 h-full">
                <VerticalColumn
                  items={COLUMNS[0]}
                  reverse={false}
                  duration={20}
                />
                <VerticalColumn
                  items={COLUMNS[1]}
                  reverse={true}
                  duration={24}
                />
                <VerticalColumn
                  items={COLUMNS[2]}
                  reverse={false}
                  duration={19}
                />
                <VerticalColumn
                  items={COLUMNS[3]}
                  reverse={true}
                  duration={23}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
