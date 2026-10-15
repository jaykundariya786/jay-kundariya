import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

// Crisp SVG Icons for Technologies shown in the video
function ReactIcon() {
  return (
    <svg className="w-8 h-8" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
      <path
        d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5z"
        fill="#539E43"
      />
      <path
        d="M16 5.8l9.6 5.5v11L16 27.9l-9.6-5.6v-11L16 5.8z"
        fill="#68A063"
      />
      <path
        d="M13.5 13.5v7h2.2v-4.2c0-1.1.7-1.8 1.8-1.8s1.8.7 1.8 1.8v4.2h2.2v-4.5c0-2-1.3-3.2-3.2-3.2-1.4 0-2.4.7-2.9 1.7v-1h-1.9z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function GraphQLIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 100 100" fill="none">
      <path
        d="M50 12L82.9 31V69L50 88L17.1 69V31L50 12Z"
        stroke="#E10098"
        strokeWidth="6"
        fill="none"
      />
      <path
        d="M50 12L50 88M17.1 31L82.9 69M17.1 69L82.9 31"
        stroke="#E10098"
        strokeWidth="5"
      />
      <circle cx="50" cy="12" r="7" fill="#E10098" />
      <circle cx="82.9" cy="31" r="7" fill="#E10098" />
      <circle cx="82.9" cy="69" r="7" fill="#E10098" />
      <circle cx="50" cy="88" r="7" fill="#E10098" />
      <circle cx="17.1" cy="69" r="7" fill="#E10098" />
      <circle cx="17.1" cy="31" r="7" fill="#E10098" />
    </svg>
  );
}

function AWSIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
      <text
        x="6"
        y="18"
        fill="#232F3E"
        fontFamily="sans-serif"
        fontWeight="900"
        fontSize="12"
      >
        aws
      </text>
      <path
        d="M7 23c6.5 4 17.5 4 24-1"
        stroke="#FF9900"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M30 19.5l2 2.5-3.5 1"
        fill="#FF9900"
        stroke="#FF9900"
        strokeWidth="0.8"
      />
    </svg>
  );
}

function DockerIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#2496ED">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 2.714h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.185-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm0-2.714h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185h-2.119a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.93 2.714h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm16.745-.632c-.378-.266-.995-.414-1.637-.414a3.9 3.9 0 00-.916.11 4.7 4.7 0 00-.518-1.574 4.5 4.5 0 00-1.89-1.785l-.578-.288-.344.536a4.8 4.8 0 00-.638 1.63 4.2 4.2 0 00-.97-.116H.27a.27.27 0 00-.27.27v4.618a8.3 8.3 0 002.58 6.046c2.47 2.38 6.09 3.01 9.99 3.01 7.15 0 11.23-4.22 11.23-10.5 0-.58-.06-1.12-.17-1.543" />
    </svg>
  );
}

function TSIcon() {
  return (
    <div className="w-7 h-7 rounded-md bg-[#3178C6] flex items-center justify-center text-white font-bold text-xs font-mono shadow-xs">
      TS
    </div>
  );
}

function JSIcon() {
  return (
    <div className="w-7 h-7 rounded-md bg-[#F7DF1E] flex items-center justify-center text-[#000000] font-black text-xs font-mono shadow-xs">
      JS
    </div>
  );
}

function ShopifyIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 100 115" fill="none">
      <path
        d="M82.2 24.3c-.3-.2-.7-.2-.9 0-.2.2-7.8 7.3-7.8 7.3s-5.2-13.6-5.4-14.2c-.3-.8-.9-1.3-1.8-1.4l-14.5-1.4c-.6-.1-1.2.2-1.6.6-.4.4-.5 1-.4 1.6l4.2 28.5L34 50.4l-7-1.9c-.8-.2-1.7.1-2.2.8L1.6 86.6c-.6.9-.5 2.1.2 2.9l46.2 25.1c.6.3 1.3.3 1.9 0l48.3-24.8c.7-.4 1.1-1.1 1.1-1.9L83 25.1c0-.4-.3-.7-.8-.8z"
        fill="#95BF47"
      />
      <path
        d="M51.8 15.1l13.7 1.3c.7.1 1.2.5 1.5 1.1.2.5 5.4 14.2 5.4 14.2l-23-4.5 2.4-12.1z"
        fill="#5E8E3E"
      />
      <path
        d="M60.6 47.9c-1.3-.8-3.2-1.4-5.3-1.4-5.5 0-9.2 3.5-9.2 8.7 0 7.8 10.9 9.1 10.9 14.8 0 2.8-2.2 4.4-5.4 4.4-3.3 0-6.1-1.5-7.5-2.8l-1.3 5c1.7 1.2 4.9 2.4 8.7 2.4 7.2 0 11.2-4 11.2-9.6 0-8.6-11-9.5-11-14.8 0-2.3 1.8-3.7 4.5-3.7 2.4 0 4.6.8 5.7 1.6l1.7-4.6z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function AngularIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 250 250" fill="none">
      <polygon points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" fill="#DD0031" />
      <polygon points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 203.9,186.3 218.1,63.2" fill="#C3002F" />
      <path d="M125,52.1L66.8,182.6h21.7l11.7-29.2h49.4l11.7,29.2H183L125,52.1z M125,83.9l17.8,44.4h-35.6L125,83.9z" fill="#FFFFFF" />
    </svg>
  );
}

function HTMLIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
      <path d="M6 3l2.2 24.3L16 30l7.8-2.7L26 3H6z" fill="#E44D26" />
      <path d="M16 5v22.8l6.1-2.1L23.8 5H16z" fill="#F16529" />
      <path d="M16 11.5h-4.8l.3 3.6H16v-3.6zm0 7.3h-2.5l-.2-2.1h-3.6l.4 5.3H16v-3.2z" fill="#EBEBEB" />
      <path d="M16 11.5v3.6h4.5l-.4 4.5-4.1 1.1v3.3l6.5-1.8.6-7.1v-3.6H16z" fill="#FFFFFF" />
    </svg>
  );
}

function CSSIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
      <path d="M6 3l2.2 24.3L16 30l7.8-2.7L26 3H6z" fill="#1572B6" />
      <path d="M16 5v22.8l6.1-2.1L23.8 5H16z" fill="#33A9DC" />
      <path d="M16 11.5h-4.8l.3 3.6H16v-3.6zm0 7.3h-2.5l-.2-2.1h-3.6l.4 5.3H16v-3.2z" fill="#EBEBEB" />
      <path d="M16 11.5v3.6h4.5l-.4 4.5-4.1 1.1v3.3l6.5-1.8.6-7.1v-3.6H16z" fill="#FFFFFF" />
    </svg>
  );
}

function MagentoIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
      <path d="M16 2.5L3.5 9.7v14.6l4.2-2.4V12.1l8.3-4.8 8.3 4.8v9.8l4.2 2.4V9.7L16 2.5z" fill="#EE672F" />
      <path d="M16 15.6l-4.2 2.4v8.8l4.2 2.4 4.2-2.4V18l-4.2-2.4z" fill="#EE672F" />
    </svg>
  );
}

function AzureIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 96 96" fill="none">
      <path d="M54.5 10L14 74h28.5L54.5 10z" fill="#0078D4" />
      <path d="M54.5 10L36 50l14.5 24h31.5L54.5 10z" fill="#50E6FF" />
      <path d="M50.5 74l-8-13-14 13h22z" fill="#0078D4" opacity="0.3" />
    </svg>
  );
}

function DevOpsIcon() {
  return (
    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-[#0078D4] to-[#2496ED] flex items-center justify-center text-white font-mono text-[9px] font-bold shadow-xs">
      ∞
    </div>
  );
}

function ChromeIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="#4285F4" />
      <path d="M50 50L89 50A45 45 0 0 1 27.5 89Z" fill="#FBBC05" />
      <path d="M50 50L27.5 89A45 45 0 0 1 27.5 11Z" fill="#34A853" />
      <path d="M50 50L27.5 11A45 45 0 0 1 89 50Z" fill="#EA4335" />
      <circle cx="50" cy="50" r="20" fill="#FFFFFF" />
      <circle cx="50" cy="50" r="16" fill="#4285F4" />
    </svg>
  );
}

function WebpackIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 100 100" fill="none">
      <polygon points="50,15 85,32.5 85,67.5 50,85 15,67.5 15,32.5" fill="#8DD6F9" />
      <polygon points="50,22 78,36 78,64 50,78 22,64 22,36" fill="#1C78C0" />
      <polygon points="50,33 65,40.5 65,59.5 50,67 35,59.5 35,40.5" fill="#FFFFFF" />
    </svg>
  );
}

function JavaIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
      <path d="M13.5 24.5c2.5.2 6.5.2 9.5-1.5-1.5-.8-3.5-1.2-5-1.2-2.5 0-4.5.8-4.5 2.7z" fill="#E76F00" />
      <path d="M12 21c3.5.5 8.5.2 12-2-1.5-.7-4.5-1-6.5-1-3 0-5.5.8-5.5 3z" fill="#E76F00" />
      <path d="M19 13.5c1.5 1.5 1.5 3 0 4.5-2 2-5 2.5-6.5 4.5 3-.5 6-1.5 8-3.5 2.5-2.5 2-4.5-1.5-5.5z" fill="#5382A1" />
      <path d="M15 8c1 1.5 1 2.5 0 3.5-1.5 1.5-3.5 2-4.5 3.5 2-.5 4-1 5.5-2.5 2-2 1.5-3.5-1-4.5z" fill="#5382A1" />
    </svg>
  );
}

// 4 Columns of technologies matching the video
const COLUMNS = [
  // Column 1
  [
    { id: "graphql", icon: GraphQLIcon, name: "GraphQL" },
    { id: "nodejs", icon: NodeIcon, name: "Node.js" },
    { id: "java", icon: JavaIcon, name: "Java" },
    { id: "shopify", icon: ShopifyIcon, name: "Shopify" },
    { id: "aws", icon: AWSIcon, name: "AWS" },
    { id: "react-1", icon: ReactIcon, name: "React" },
  ],
  // Column 2
  [
    { id: "react-native", icon: ReactIcon, name: "React Native" },
    { id: "angular", icon: AngularIcon, name: "Angular" },
    { id: "confluence", icon: AzureIcon, name: "Confluence" },
    { id: "docker-2", icon: DockerIcon, name: "Docker" },
    { id: "devops-2", icon: DevOpsIcon, name: "DevOps" },
    { id: "magento-2", icon: MagentoIcon, name: "Magento" },
  ],
  // Column 3
  [
    { id: "docker", icon: DockerIcon, name: "Docker" },
    { id: "azure", icon: AzureIcon, name: "Azure" },
    { id: "magento", icon: MagentoIcon, name: "Magento" },
    { id: "webpack", icon: WebpackIcon, name: "Webpack" },
    { id: "devops", icon: DevOpsIcon, name: "CI/CD" },
    { id: "chrome", icon: ChromeIcon, name: "Web" },
  ],
  // Column 4
  [
    { id: "js", icon: JSIcon, name: "JavaScript" },
    { id: "ts", icon: TSIcon, name: "TypeScript" },
    { id: "chrome-4", icon: ChromeIcon, name: "Browser" },
    { id: "html", icon: HTMLIcon, name: "HTML5" },
    { id: "css", icon: CSSIcon, name: "CSS3" },
    { id: "webpack-4", icon: WebpackIcon, name: "Bundler" },
  ],
];

interface VerticalColumnProps {
  items: typeof COLUMNS[0];
  reverse?: boolean;
  duration?: number;
}

function VerticalColumn({ items, reverse = false, duration = 22 }: VerticalColumnProps) {
  // Duplicate array 3 times for a seamless infinite loop without jumps
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
        className="flex flex-col gap-3.5 sm:gap-4 shrink-0"
      >
        {loopItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={`${item.id}-${idx}`}
              whileHover={{ scale: 1.12, y: -2 }}
              transition={{ duration: 0.2 }}
              className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-[#FFFFFF] border border-gray-100/80 shadow-[0_6px_18px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] flex items-center justify-center p-2.5 sm:p-3 transition-shadow cursor-pointer select-none group"
              title={item.name}
            >
              <Icon />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function TechStackSection() {
  const handleScrollToProjects = () => {
    const el = document.getElementById("projects") || document.getElementById("case-study");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="tech-stack"
      className="relative w-full py-14 sm:py-20 lg:py-24 bg-[#0D1321] px-4 sm:px-6 lg:px-8 select-none overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#E9C46A]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#4CC9F0]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* White Master Showcase Card (Exact UI as in video) */}
        <div className="bg-[#FFFFFF] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.3)] border border-white/20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Badge, Description, and CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Pill Badge with asterisk/sparkle */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 bg-[#FFFFFF] border border-gray-200 shadow-2xs px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0D1321] w-fit mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0D1321]" />
              <span>Our Tech Stack</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-sans font-bold text-3xl sm:text-4xl lg:text-[40px] text-[#0D1321] tracking-tight leading-tight mb-4"
            >
              Key Technologies &amp; Platforms
            </motion.h2>

            {/* Subheading / Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm mb-6 sm:mb-8 font-sans"
            >
              We work with leading platforms and technologies that empower digital transformation, accelerate delivery, and drive measurable business results.
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
                className="inline-flex items-center gap-2 bg-[#0D1321] hover:bg-[#1D2D50] text-[#FFFFFF] text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-md cursor-pointer"
              >
                <span>Explore Tech Stack</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: 4-Column Infinite Vertical Scrolling Grid */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[24px] sm:rounded-[28px] bg-[#F8F9FA] p-3 sm:p-5 h-[360px] sm:h-[400px] overflow-hidden border border-gray-100">
              {/* Top Gradient Fade Overlay */}
              <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#F8F9FA] via-[#F8F9FA]/80 to-transparent z-10 pointer-events-none" />

              {/* Bottom Gradient Fade Overlay */}
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#F8F9FA] via-[#F8F9FA]/80 to-transparent z-10 pointer-events-none" />

              {/* 4 Alternating Vertical Columns */}
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5 h-full">
                <VerticalColumn items={COLUMNS[0]} reverse={false} duration={20} />
                <VerticalColumn items={COLUMNS[1]} reverse={true} duration={24} />
                <VerticalColumn items={COLUMNS[2]} reverse={false} duration={19} />
                <VerticalColumn items={COLUMNS[3]} reverse={true} duration={23} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
