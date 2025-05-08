import { motion } from "framer-motion";
import ContactBackground from "@/components/ContactBackground";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white relative overflow-hidden"
    >
      {/* Animated background */}
      {/* <ContactBackground /> */}

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-block uppercase items-center font-bold px-4 tracking-wider py-2 text-sm rounded-full bg-blue-600/10 text-blue-600 mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl uppercase tracking-wider font-bold mb-6 gradient-text">
            Let's work together
          </h2>
          <p className="text-sm md:text-md font-semibold uppercase tracking-wider text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? Feel free to
            reach out and let's create something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="p-8 rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl border border-gray-100 max-w-2xl mx-auto"
        >
          <div className="mb-8 text-center">
            <motion.div className="inline-block">
              <a
                href="/contact"
                className="gradient-bg inline-flex uppercase tracking-wider text-sm items-center gap-2 text-white hover:text-black font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-purple-300/30 hover:shadow-xl transition-all duration-300"
              >
                <span>Send me a message</span>
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-blue-600"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 mb-3 shadow-sm">
                <FiGithub className="text-xl" />
              </div>
              <span className="text-sm uppercase tracking-wider font-medium text-gray-800">
                GitHub
              </span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-blue-600"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 mb-3 shadow-sm">
                <FiLinkedin className="text-xl" />
              </div>
              <span className="text-sm uppercase tracking-wider font-medium text-gray-800">
                LinkedIn
              </span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-blue-600"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 mb-3 shadow-sm">
                <FiTwitter className="text-xl" />
              </div>
              <span className="text-sm uppercase tracking-wider font-medium text-gray-800">
                Twitter
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
