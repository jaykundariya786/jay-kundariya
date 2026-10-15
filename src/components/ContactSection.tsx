import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#FFFFFF] text-[#0D1321] relative overflow-hidden border-t border-[#E9C46A]/20"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex uppercase items-center font-bold bg-[#F4EDE0] border border-[#E9C46A]/50 px-4 py-2 rounded-full text-sm tracking-wider text-[#0D1321] mb-6 shadow-sm">
            Get In Touch
          </div>

          <h2 className="text-4xl md:text-5xl uppercase tracking-wider font-bold mb-6 text-[#0D1321]">
            Let's work together
          </h2>
          <p className="text-sm md:text-md font-semibold uppercase tracking-wider text-[#1D2D50]/80 max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? Feel free to
            reach out and let's create something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E9C46A]/35 shadow-[0_12px_35px_rgba(13,19,33,0.08)] max-w-sm mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              rel="noopener noreferrer"
              href="tel:+917984223426"
              className="flex items-center mx-auto justify-center w-12 h-12 text-[#E9C46A] rounded-full border border-[#E9C46A]/30 bg-[#0D1321] shadow-md hover:bg-[#E9C46A] hover:text-[#0D1321] transition-all duration-300 ease-in-out"
              target="_blank"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://wa.me/917984223426"
              className="flex items-center mx-auto justify-center w-12 h-12 text-[#E9C46A] rounded-full border border-[#E9C46A]/30 bg-[#0D1321] shadow-md hover:bg-[#E9C46A] hover:text-[#0D1321] transition-all duration-300 ease-in-out"
              target="_blank"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
