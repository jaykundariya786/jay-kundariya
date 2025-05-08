import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

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
      className="py-20 px-6 bg-gray-50 relative overflow-hidden"
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
          <div className="inline-block uppercase items-center font-bold px-4 tracking-wider py-2 text-sm rounded-full bg-blue-600/10 text-blue-600 mb-4">
            My Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl uppercase tracking-wider font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-sm md:text-md font-semibold uppercase tracking-wider text-muted-foreground max-w-2xl mx-auto">
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
              className="rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-500 bg-white"
            >
              <div
                className={
                  "aspect-video w-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
                }
              >
                <img
                  src={project.image}
                  className={`w-full h-full object-cover overflow-hidden image-transition transition-all duration-500 hover:scale-110 `}
                />
              </div>

              <div className="p-6">
                <h3 className="text-md font-bold mb-2 uppercase tracking-wider">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-gray-900 mb-4 uppercase tracking-wider text-sm font-semibold">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 uppercase tracking-wider rounded-full text-xs font-medium bg-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`/projects/${project.id}`}
                  className="text-blue-600 text-sm font-medium flex items-center"
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
                className="gradient-bg inline-flex uppercase tracking-wider text-sm items-center gap-2 text-white hover:text-black font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-purple-300/30 hover:shadow-xl transition-all duration-300"
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
