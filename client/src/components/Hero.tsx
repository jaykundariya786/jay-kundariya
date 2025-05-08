import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code } from "lucide-react";
import Lottie from "lottie-react";
import heroAnimationData from "@/components/animation/hero.json";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay for animation effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Add scroll reveal for elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen bg-gray-50 flex items-center -mt-4 justify-center px-6 relative overflow-hidden "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  relative">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-3xl pt-10 shadow-lg px-10">
            <div className=" inline-flex uppercase items-center font-bold bg-gradient-to-r from-blue-600/20 to-blue-400/20 px-4 py-2 rounded-full text-sm tracking-wider text-blue-600 mb-6 animate-pulse">
              <Code className="w-6 h-6 mr-4" /> Developer
            </div>
            <h4 className="text-xl md:text-2xl uppercase tracking-wider font-bold  leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Hey! I am
            </h4>
            <h1 className="text-3xl md:text-4xl uppercase tracking-wider font-bold  leading-tight mb-8 py-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Jay Kundariya
            </h1>
            <p className="text-sm md:text-md font-semibold uppercase tracking-wider text-black mb-8 leading-relaxed">
              A React native developer who have fair amount of experience in
              javascript. I create rich mobile applications that lead to grow
              your product in a better manner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div>
                <div className="text-center">
                  <motion.div className="inline-block">
                    <a
                      href="/contact"
                      className="gradient-bg inline-flex uppercase tracking-wider text-sm items-center gap-2 hover:text-black text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-purple-300/30 hover:shadow-xl transition-all duration-300"
                    >
                      <span>Let's connect</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero animation */}
          <div className="lg:ml-auto flex w-full max-h-[450px] justify-center">
            <img
              src="../../assets/profile-image.png"
              alt="Email icon"
              className="max-h-[450px] shadow-2xl rounded-3xl "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
