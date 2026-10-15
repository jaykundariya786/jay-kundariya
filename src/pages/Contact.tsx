import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0D1321]">
      <Navbar />
      <div className="pt-20 pb-10 sm:pb-20">
      <div className="mx-auto mb-16 text-center relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1321]/90 via-[#1D2D50]/80 to-[#0D1321]/90" />
        <img
          src={require("../assets/contact.avif")}
          alt="Team Collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <div className="inline-block px-4 items-center font-bold py-2 text-sm tracking-wider uppercase rounded-full bg-[#FFFFFF]/10 border border-[#E9C46A]/30 text-[#E9C46A] mb-4">
              Contact
            </div>
            <h1 className="text-4xl md:text-5xl uppercase tracking-wider font-bold text-white sm:text-4xl mb-4 sm:mb-6">
              Get in Touch
            </h1>
            <p className="text-sm md:text-md font-semibold uppercase tracking-wider text-[#F4EDE0] max-w-2xl mx-auto">
              Have a question or want to work together? We'd love to hear from
              you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto uppercase tracking-wider font-bold text-sm px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#FFFFFF] border border-[#E9C46A]/30 p-8 rounded-2xl shadow-[0_10px_30px_rgba(13,19,33,0.06)]"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-[#0D1321] mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E9C46A]/35 focus:ring-2 focus:ring-[#E9C46A] focus:border-[#E9C46A] bg-white text-[#0D1321] outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-[#0D1321] mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E9C46A]/35 focus:ring-2 focus:ring-[#E9C46A] focus:border-[#E9C46A] bg-white text-[#0D1321] outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm text-[#0D1321] mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E9C46A]/35 focus:ring-2 focus:ring-[#E9C46A] focus:border-[#E9C46A] bg-white text-[#0D1321] outline-none"
                  placeholder="Your message..."
                />
              </div>

              <div itemType="submit" className="">
                <motion.div className="inline-block">
                  <a
                    href="mailto:jaykundariya786@gmail.com"
                    className="bg-gradient-to-r from-[#E9C46A] via-[#F4D078] to-[#FFD3A5] text-[#0D1321] text-center my-5 hover:brightness-105 inline-flex uppercase tracking-wider text-sm items-center gap-2 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
                  >
                    <span>Submit</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.div>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-[#FFFFFF] border border-[#E9C46A]/30 p-8 rounded-2xl shadow-[0_10px_30px_rgba(13,19,33,0.06)] mb-8">
              <div className="space-y-6 text-[#0D1321]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F4EDE0] border border-[#E9C46A]/30 rounded-full flex items-center justify-center text-[#E9C46A]">
                    <Mail className="w-6 h-6 text-[#E9C46A]" />
                  </div>
                  <div>
                    <h3 className="text-[#0D1321]">Email</h3>
                    <p className="font-semibold lowercase text-[#1D2D50]/80">
                      jaykundariya786@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F4EDE0] border border-[#E9C46A]/30 rounded-full flex items-center justify-center text-[#E9C46A]">
                    <Phone className="w-6 h-6 text-[#E9C46A]" />
                  </div>
                  <div>
                    <h3 className="text-[#0D1321]">Phone</h3>
                    <p className="font-semibold text-[#1D2D50]/80">
                      +91 7984223426
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F4EDE0] border border-[#E9C46A]/30 rounded-full flex items-center justify-center text-[#E9C46A]">
                    <MapPin className="w-6 h-6 text-[#E9C46A]" />
                  </div>
                  <div>
                    <h3 className="text-[#0D1321]">Location</h3>
                    <p className="font-semibold text-[#1D2D50]/80">
                      Surat
                      <br />
                      Gujrat, india
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[300px] rounded-2xl overflow-hidden shadow-lg border border-[#E9C46A]/20">
              <iframe
                title="map"
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
      <NewFooter />
    </div>
  );
}
