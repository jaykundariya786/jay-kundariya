import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="min-h-screen pb-10 sm:pb-20 bg-gray-50">
      <div className="mx-auto mb-16 text-center relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-70" />
        <img
          src="../../assets/contact.avif"
          alt="Team Collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <div className="inline-block px-4  items-center font-bold py-2 text-sm tracking-wider uppercase  rounded-full bg-white/10 text-white mb-4">
              Contact
            </div>
            <h1 className="text-4xl md:text-5xl uppercase tracking-wider font-bold text-white sm:text-4xl  mb-4 sm:mb-6">
              Get in Touch
            </h1>
            <p className="text-sm md:text-md font-semibold uppercase tracking-wider text-white max-w-2xl mx-auto">
              Have a question or want to work together? We'd love to hear from
              you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto uppercase tracking-wider font-bold text-sm">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm  mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm  mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm  mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Your message..."
                />
              </div>

              <a type="submit">
                <div className="">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                  >
                    <a
                      href="mailto:jaykundariya786@gmail.com"
                      className="gradient-bg text-center my-5 inline-flex uppercase tracking-wider text-sm items-center gap-2 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-purple-300/30 hover:shadow-xl transition-all duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </motion.div>
                </div>
              </a>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <FiMail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="">Email</h3>
                    <p className="font-semibold lowercase text-gray-600">
                      jaykundariya786@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <FiPhone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="">Phone</h3>
                    <p className="font-semibold text-gray-600">
                      +91 7984223426
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <FiMapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="">Location</h3>
                    <p className="font-semibold text-gray-600">
                      Surat
                      <br />
                      Gujrat, india
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[300px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=surat&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
