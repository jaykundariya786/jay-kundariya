import { motion } from "framer-motion";
import Lottie from "lottie-react";
import servicesAnimationData from "../components/animation/service.json";
import { services } from "../lib/DummyData";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiFirebase,
} from "react-icons/si";
import ContactBackground from "./ContactBackground";

const ReactIcon = SiReact as any;
const JsIcon = SiJavascript as any;
const TsIcon = SiTypescript as any;
const NextIcon = SiNextdotjs as any;
const TailwindIcon = SiTailwindcss as any;
const FirebaseIcon = SiFirebase as any;

export default function SpecialtiesGrid() {
  return (
    <section id="specialties" className="py-20 px-4 md:px-8 lg:px-12 sm:px-6 relative overflow-hidden bg-[#FFFFFF] text-[#0D1321] border-t border-[#E9C46A]/20">
      <ContactBackground />

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-16 gap-16 items-center">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex uppercase items-center font-bold bg-[#F4EDE0] border border-[#E9C46A]/50 px-4 py-2 rounded-full text-sm tracking-wider text-[#0D1321] mb-6 shadow-sm">
              Specialties
            </div>
            <h2 className="text-3xl md:text-4xl uppercase tracking-wider font-bold mb-6 text-[#0D1321]">
              What I Do Best
            </h2>
            <p className="text-sm uppercase tracking-wider font-semibold text-[#1D2D50]/80 max-w-2xl mx-auto">
              One fundamental aspect of IT services is infrastructure
              management. This involves the design, implementation, and
              maintenance of the hardware, software, networks, and servers.
            </p>
          </motion.div>

          <div className="flex items-center justify-center">
            <Lottie
              animationData={servicesAnimationData}
              className="w-64 h-64 opacity-100 "
              loop={true}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#FFFFFF] hover:bg-[#F4EDE0]/50 flex flex-col justify-between backdrop-blur-sm border h-[280px] border-[#E9C46A]/30 rounded-2xl p-6 hover:border-[#E9C46A] transition-all duration-300 shadow-[0_10px_30px_rgba(13,19,33,0.06)] hover:shadow-[0_14px_40px_rgba(233,196,106,0.2)] hover:scale-105 group mx-auto"
            >
              <div>
                <div className="w-14 h-14 bg-[#0D1321] text-[#E9C46A] border border-[#E9C46A]/30 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-lg uppercase tracking-wider font-semibold text-[#0D1321] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#1D2D50]/80 uppercase tracking-wider text-sm mb-4">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-section">
          <div className="skills-grid">
            <div className="bg-[#FFFFFF] hover:bg-[#F4EDE0] flex flex-row justify-center items-center gap-5 rounded-xl py-3 px-5 border border-[#E9C46A]/35 hover:border-[#E9C46A] transition-all duration-300 shadow-sm hover:scale-105 group text-[#0D1321]">
              <ReactIcon className="w-6 h-6 text-[#4CC9F0]" />
              <span className="font-semibold">React</span>
            </div>
            <div className="bg-[#FFFFFF] hover:bg-[#F4EDE0] flex flex-row justify-center items-center gap-5 rounded-xl py-3 px-5 border border-[#E9C46A]/35 hover:border-[#E9C46A] transition-all duration-300 shadow-sm hover:scale-105 group text-[#0D1321]">
              <ReactIcon className="w-6 h-6 text-[#4CC9F0]" />
              <span className="font-semibold">React Native</span>
            </div>
            <div className="bg-[#FFFFFF] hover:bg-[#F4EDE0] flex flex-row justify-center items-center gap-5 rounded-xl py-3 px-5 border border-[#E9C46A]/35 hover:border-[#E9C46A] transition-all duration-300 shadow-sm hover:scale-105 group text-[#0D1321]">
              <JsIcon className="w-6 h-6 text-[#E9C46A]" />
              <span className="font-semibold">JavaScript</span>
            </div>
            <div className="bg-[#FFFFFF] hover:bg-[#F4EDE0] flex flex-row justify-center items-center gap-5 rounded-xl py-3 px-5 border border-[#E9C46A]/35 hover:border-[#E9C46A] transition-all duration-300 shadow-sm hover:scale-105 group text-[#0D1321]">
              <TsIcon className="w-6 h-6 text-[#4CC9F0]" />
              <span className="font-semibold">TypeScript</span>
            </div>
            <div className="bg-[#FFFFFF] hover:bg-[#F4EDE0] flex flex-row justify-center items-center gap-5 rounded-xl py-3 px-5 border border-[#E9C46A]/35 hover:border-[#E9C46A] transition-all duration-300 shadow-sm hover:scale-105 group text-[#0D1321]">
              <NextIcon className="w-6 h-6 text-[#0D1321]" />
              <span className="font-semibold">Next.js</span>
            </div>
            <div className="bg-[#FFFFFF] hover:bg-[#F4EDE0] flex flex-row justify-center items-center gap-5 rounded-xl py-3 px-5 border border-[#E9C46A]/35 hover:border-[#E9C46A] transition-all duration-300 shadow-sm hover:scale-105 group text-[#0D1321]">
              <TailwindIcon className="w-6 h-6 text-[#4CC9F0]" />
              <span className="font-semibold">Tailwind CSS</span>
            </div>
            <div className="bg-[#FFFFFF] hover:bg-[#F4EDE0] flex flex-row justify-center items-center gap-5 rounded-xl py-3 px-5 border border-[#E9C46A]/35 hover:border-[#E9C46A] transition-all duration-300 shadow-sm hover:scale-105 group text-[#0D1321]">
              <FirebaseIcon className="w-6 h-6 text-[#FFD3A5]" />
              <span className="font-semibold">Firebase</span>
            </div>
            {/* <div className="bg-white/80 hover:bg-white flex flex-row justify-center items-center gap-5 rounded-lg py-3 px-5 border-white border hover:border-blue-600 transition-all duration-300 shadow-md hover:shadow-none hover:scale-105 group">
              <SiNodedotjs className="w-6 h-6 text-blue-600" />
              <span>Node.js</span>
            </div>
            <div className="bg-white/80 hover:bg-white flex flex-row justify-center items-center gap-5 rounded-lg py-3 px-5 border-white border hover:border-blue-600 transition-all duration-300 shadow-md hover:shadow-none hover:scale-105 group">
              <SiMongodb className="w-6 h-6 text-blue-600" />
              <span>MongoDB</span>
            </div>
            <div className="bg-white/80 hover:bg-white flex flex-row justify-center items-center gap-5 rounded-lg py-3 px-5 border-white border hover:border-blue-600 transition-all duration-300 shadow-md hover:shadow-none hover:scale-105 group">
              <SiGraphql className="w-6 h-6 text-blue-600" />
              <span>GraphQL</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
