import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-12 sm:px-6 bg-[#FFFFFF] text-[#0D1321] relative overflow-hidden border-t border-[#E9C46A]/20">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-16 gap-16 items-center">
          <motion.div
            className="mb-4 lg:mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex uppercase items-center font-bold bg-[#F4EDE0] border border-[#E9C46A]/50 px-4 py-2 rounded-full text-sm tracking-wider text-[#0D1321] mb-6 shadow-sm">
              About Me
            </div>
            <div className="text-sm uppercase tracking-wider font-semibold text-[#0D1321] max-w-2xl mx-auto">
              <div className="info-item">
                <span className="label">Name:</span>
                <span className="value">Jay Kundariya</span>
              </div>
              <div className="info-item">
                <span className="label">Email:</span>
                <span className="value">jaykundariya786@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="label">Phone:</span>
                <span className="value">+91 7984223426</span>
              </div>
              <div className="info-item">
                <span className="label">Education:</span>
                <span className="value">B.E. (Computer Engineering)</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-wider font-semibold text-[#1D2D50] leading-relaxed max-w-2xl mx-auto">
              Enthusiastic and motivated{" "}
              <span className="text-[#0D1321] font-bold border-b border-[#E9C46A]">REACT NATIVE DEVELOPER</span> with{" "}
              <span className="text-[#0D1321] font-bold border-b border-[#E9C46A]">3 YEARS</span> of experience in
              developing Android and iOS applications. Proven skill in working
              independently or as part of a team, with a focus on delivering
              excellent results even under tight deadlines. Excited to join a
              reputable company, take on challenges, bring innovation, and
              contribute ideas to propel projects forward.
            </p>

            <div className="text-lg uppercase tracking-wider font-bold mt-6 gradient-text">
              <span className="text-3xl md:text-4xl text-[#0D1321]">20+</span> Projects Completed
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
