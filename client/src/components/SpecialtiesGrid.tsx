import { motion } from "framer-motion";
import Lottie from "lottie-react";
import servicesAnimationData from "@/components/animation/service.json";
import { services } from "@/lib/DummyData";
import {
  SiFirebase,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiNestjs,
  SiGraphql,
} from "react-icons/si";
import ContactBackground from "./ContactBackground";

export default function SpecialtiesGrid() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 sm:px-6 relative overflow-hidden">
      <ContactBackground />

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2  mb-16 gap-16 items-center">
          <motion.div
            className=" mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 text-sm uppercase items-center font-bold rounded-full bg-primary/10 text-blue-600 mb-4">
              Specialties
            </div>
            <h2 className="text-3xl md:text-4xl uppercase tracking-wider font-bold mb-6 gradient-text">
              What I Do Best
            </h2>
            <p className="text-sm uppercase tracking-wider font-semibold text-black text-muted-foreground max-w-2xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <>
              <div className="bg-white/80 flex flex-col justify-between backdrop-blur-sm border h-[280px] border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                <div>
                  <div className="w-14 h-14 bg-primary/10 text-blue-600 bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-blue-400/20 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg uppercase tracking-wider font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 uppercase tracking-wider text-sm mb-4">
                    {service.description}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="skills-section">
          <div className="skills-grid">
            <div className="bg-white/80 flex flex-row justify-center items-center gap-5 rounded-lg py-3 px-5 border-white border hover:border-blue-600 transition-all duration-300 shadow-md hover:shadow-none hover:scale-105 group">
              <SiReact className="w-6 h-6 text-blue-600" />
              <span>React</span>
            </div>
            <div className="bg-white/80 flex flex-row justify-center items-center gap-5 rounded-lg py-3 px-5 border-white border hover:border-blue-600 transition-all duration-300 shadow-md hover:shadow-none hover:scale-105 group">
              <SiReact className="w-6 h-6 text-blue-600" />
              <span>React Native</span>
            </div>
            <div className="bg-white/80 flex flex-row justify-center items-center gap-5 rounded-lg py-3 px-5 border-white border hover:border-blue-600 transition-all duration-300 shadow-md hover:shadow-none hover:scale-105 group">
              <SiJavascript className="w-6 h-6 text-blue-600" />
              <span>JavaScript</span>
            </div>
            <div className="bg-white/80 flex flex-row justify-center items-center gap-5 rounded-lg py-3 px-5 border-white border hover:border-blue-600 transition-all duration-300 shadow-md hover:shadow-none hover:scale-105 group">
              <SiTypescript className="w-6 h-6 text-blue-600" />
              <span>TypeScript</span>
            </div>
            <div className="bg-white/80 flex flex-row justify-center items-center gap-5 rounded-lg py-3 px-5 border-white border hover:border-blue-600 transition-all duration-300 shadow-md hover:shadow-none hover:scale-105 group">
              <SiNextdotjs className="w-6 h-6 text-blue-600" />
              <span>Next.js</span>
            </div>
            <div className="bg-white/80 flex flex-row justify-center items-center gap-5 rounded-lg py-3 px-5 border-white border hover:border-blue-600 transition-all duration-300 shadow-md hover:shadow-none hover:scale-105 group">
              <SiTailwindcss className="w-6 h-6 text-blue-600" />
              <span>Tailwind CSS</span>
            </div>
            <div className="bg-white/80 flex flex-row justify-center items-center gap-5 rounded-lg py-3 px-5 border-white border hover:border-blue-600 transition-all duration-300 shadow-md hover:shadow-none hover:scale-105 group">
              <SiNodedotjs className="w-6 h-6 text-blue-600" />
              <span>Node.js</span>
            </div>
            <div className="bg-white/80 flex flex-row justify-center items-center gap-5 rounded-lg py-3 px-5 border-white border hover:border-blue-600 transition-all duration-300 shadow-md hover:shadow-none hover:scale-105 group">
              <SiFirebase className="w-6 h-6 text-blue-600" />
              <span>Firebase</span>
            </div>
            <div className="bg-white/80 flex flex-row justify-center items-center gap-5 rounded-lg py-3 px-5 border-white border hover:border-blue-600 transition-all duration-300 shadow-md hover:shadow-none hover:scale-105 group">
              <SiMongodb className="w-6 h-6 text-blue-600" />
              <span>MongoDB</span>
            </div>
            <div className="bg-white/80 flex flex-row justify-center items-center gap-5 rounded-lg py-3 px-5 border-white border hover:border-blue-600 transition-all duration-300 shadow-md hover:shadow-none hover:scale-105 group">
              <SiGraphql className="w-6 h-6 text-blue-600" />
              <span>GraphQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
