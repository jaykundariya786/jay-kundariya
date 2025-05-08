import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Projects() {
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

  return (
    <div className="min-h-screen  bg-gray-50">
      <div className="mx-auto mb-16 text-center relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-70" />
        <img
          src="../../assets/projcts.avif"
          alt="Team Collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <div className="inline-block px-4 py-2 uppercase items-center font-bold text-sm tracking-wider rounded-full bg-white/10 text-white mb-4">
              Our Projects
            </div>
            <h1 className="text-4xl md:text-5xl uppercase tracking-wider font-bold text-white sm:text-4xl mb-4 sm:mb-6">
              I doing world class
              <br />
              projects in your way
            </h1>
            <p className="text-sm md:text-md font-semibold uppercase tracking-wider text-white max-w-2xl mx-auto">
              Our projects are born from a passion for innovation that knows no
              bounds. We see challenges as opportunities to push the envelope
              and explore new frontiers.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <>
              <motion.div
                key={project.id}
                variants={item}
                className="rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-500 bg-white"
              >
                <div
                  className={`aspect-video w-full flex items-center justify-center scale-100 transition-transform duration-500`}
                >
                  <img
                    src={project.image}
                    className={`w-full h-full object-cover overflow-hidden image-transition transition-all duration-500 hover:scale-110 `}
                  />
                  <div className="absolute top-4 uppercase items-center font-bold left-4 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white text-sm">
                    {project.category}
                  </div>
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    {project.tags.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 uppercase items-center font-bold bg-blue-600/10 backdrop-blur-sm rounded-full text-slate-700 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-md font-bold mb-2 uppercase tracking-wider">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-gray-900 mb-4 uppercase tracking-wider text-sm font-semibold ">
                    {project.description}
                  </p>
                  <a
                    href={`/projects/${project.id}`}
                    className="text-primary text-sm font-medium flex items-center"
                  >
                    <span className="group-hover:mr-1 uppercase tracking-wider transition-all duration-300">
                      View Project
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            </>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 mt-20 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl md:text-4xl uppercase tracking-wider font-bold mb-6 ">
            Need any further Assistance?
          </h3>
          <p className="mb-8 text-white/90 text-sm md:text-md font-semibold uppercase tracking-wider max-w-2xl mx-auto">
            Feel free to reach out for any type of assistance.
          </p>
          <div>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a
                  href="/contact"
                  className="bg-white text-blue-600 inline-flex uppercase tracking-wider text-sm items-center gap-2 font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-purple-300/30 hover:shadow-xl transition-all duration-300"
                >
                  <span>Book an appointment now</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
