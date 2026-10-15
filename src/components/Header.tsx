import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";

export default function Header() {
  const isActive = (path: string) => {
    return location === path;
  };

  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";
  const headerClass =
    scrollPosition > 80
      ? "py-3 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E9C46A]/30 shadow-md translate-y-0 opacity-100"
      : isHome
      ? "-translate-y-full opacity-0 pointer-events-none"
      : "py-5 bg-[#FFFFFF] border-b border-[#E9C46A]/20";

  const handleMenuToggle = isMenuOpen ? "h-[140px] mt-4" : "h-0 mt-0";

  return (
    <header
      className={`text-[#0D1321] sticky top-0 z-50 left-0 w-full px-6 transition-all duration-300 ${headerClass}`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <img
            src={require("../assets/logo.png")}
            alt="Logo"
            className="icon contact-icon"
          />
        </a>

        <div className="hidden uppercase tracking-wider text-sm font-bold md:flex items-center space-x-8">
          <a
            href="/"
            className={`transition duration-300 ${
              isActive("/") ? "text-[#E9C46A]" : "text-[#1D2D50] hover:text-[#E9C46A]"
            }`}
          >
            Home
          </a>
          <a
            href="/projects"
            className={`transition duration-300 ${
              isActive("/projects") ? "text-[#E9C46A]" : "text-[#1D2D50] hover:text-[#E9C46A]"
            }`}
          >
            Projects
          </a>

          <a
            href="/contact"
            className={`transition duration-300 ${
              isActive("/contact") ? "text-[#E9C46A]" : "text-[#1D2D50] hover:text-[#E9C46A]"
            }`}
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden hover-element w-12 h-12 shadow-md rounded-xl bg-[#F4EDE0] border border-[#E9C46A]/30 flex items-center justify-center focus:outline-none transition-transform duration-300 text-[#E9C46A]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-[#0D1321]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`top-20 md:hidden right-4 w-[90vw] max-w-[320px] ${handleMenuToggle} bg-[#FFFFFF] border border-[#E9C46A]/30 rounded-2xl p-4 shadow-xl transition-all overflow-hidden duration-300`}
      >
        <div className="uppercase tracking-wider gap-4 text-sm font-bold flex flex-col text-[#0D1321]">
          <a
            href="/"
            className={`transition duration-300 ${
              isActive("/") ? "text-[#E9C46A]" : "hover:text-[#E9C46A]"
            }`}
          >
            Home
          </a>
          <a
            href="/projects"
            className={`transition duration-300 ${
              isActive("/projects") ? "text-[#E9C46A]" : "hover:text-[#E9C46A]"
            }`}
          >
            Projects
          </a>

          <a
            href="/contact"
            className={`transition duration-300 ${
              isActive("/contact") ? "text-[#E9C46A]" : "hover:text-[#E9C46A]"
            }`}
          >
            Contact
          </a>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {/* <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 md:hidden right-4 w-[90vw] max-w-[320px] bg-white/90 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden z-50 border border-gray-100"
          >
            <nav className="p-4">
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="block py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-700"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="block py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-700"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="block py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence> */}
    </header>
  );
}
