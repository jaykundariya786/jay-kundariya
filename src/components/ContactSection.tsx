import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className=" inline-flex uppercase items-center font-bold bg-gradient-to-r from-blue-600/20 to-blue-400/20 px-4 py-2 rounded-full text-sm tracking-wider text-blue-600 mb-6 animate-pulse">
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
          className="p-8 rounded-2xl bg-white/80 backdrop-blur-lg shadow-lg border-gray-100 max-w-sm mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              rel="noopener noreferrer"
              href="tel:+917984223426"
              className="flex items-center mx-auto justify-center w-12 h-12 text-blue-600 rounded-full border bg-white shadow-md hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
              target="_blank"
            >
              <IoCall className="text-xl" />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://wa.me/917984223426"
              className="flex items-center mx-auto justify-center w-12 h-12 text-blue-600 rounded-full border bg-white shadow-md hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
              target="_blank"
            >
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
