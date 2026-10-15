import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "../lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function WorkSection() {
  return (
    <section
      id="work"
      className="py-20 px-6 bg-[#FFFFFF] text-[#0D1321] relative overflow-hidden border-t border-[#E9C46A]/20"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex uppercase items-center font-bold bg-[#F4EDE0] border border-[#E9C46A]/50 px-4 py-2 rounded-full text-sm tracking-wider text-[#0D1321] mb-6 shadow-sm">
            My Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl uppercase tracking-wider font-bold mb-6 text-[#0D1321]">
            Featured Projects
          </h2>
          <p className="text-sm md:text-md font-semibold uppercase tracking-wider text-[#1D2D50]/80 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            expertise in various technologies.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.slice(0, 3).map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="rounded-2xl overflow-hidden group shadow-[0_10px_30px_rgba(13,19,33,0.06)] hover:shadow-[0_16px_45px_rgba(233,196,106,0.22)] transition-all duration-500 bg-[#FFFFFF] border border-[#E9C46A]/30 hover:border-[#E9C46A]"
            >
              <div
                className={
                  "aspect-video w-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden"
                }
              >
                <img
                  alt={project.title}
                  src={project.image}
                  className={`w-full h-full object-cover overflow-hidden image-transition transition-all duration-500 hover:scale-110 `}
                />
              </div>

              <div className="p-6">
                <h3 className="text-md font-bold mb-2 uppercase tracking-wider text-[#0D1321]">
                  {project.title}
                </h3>
                <p className="line-clamp-3 text-[#1D2D50]/80 mb-4 uppercase tracking-wider text-sm font-normal">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 uppercase tracking-wider rounded-full text-xs font-mono font-medium bg-[#F4EDE0] text-[#0D1321] border border-[#E9C46A]/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`/projects/${project.id}`}
                  className="text-[#0D1321] hover:text-[#E9C46A] text-sm font-semibold flex items-center transition-colors"
                >
                  <span className="group-hover:mr-1 uppercase tracking-wider transition-all duration-300">
                    View Project
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div>
          <div className="text-center mt-16">
            <motion.div className="inline-block">
              <a
                href="/projects"
                className="inline-flex uppercase tracking-wider text-sm items-center gap-2 bg-gradient-to-r from-[#E9C46A] via-[#F4D078] to-[#FFD3A5] text-[#0D1321] font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-[0_6px_22px_rgba(233,196,106,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>View all projects</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
