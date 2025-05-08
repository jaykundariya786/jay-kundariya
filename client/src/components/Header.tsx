import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

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

  const headerClass =
    scrollPosition > 50
      ? "py-3 bg-gray-900/90 backdrop-blur-sm shadow-sm"
      : "py-5";

  return (
    <header
      className={`bg-gray-900 text-white sticky top-0 z-50 left-0 w-full px-6 transition-all duration-300 ${headerClass}`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Profile Avatar */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="../../assets/logo.png"
            alt="Email icon"
            className="icon contact-icon"
          />
        </a>

        <div className="hidden uppercase tracking-wider text-sm font-bold md:flex items-center space-x-8">
          <a
            href="/"
            className={`transition duration-300 ${
              isActive("/") ? "text-blue-600" : "hover:text-blue-600"
            }`}
          >
            Home
          </a>
          <a
            href="/projects"
            className={`transition duration-300 ${
              isActive("/projects") ? "text-blue-600" : "hover:text-blue-600"
            }`}
          >
            Projects
          </a>

          <a
            href="/contact"
            className={`transition duration-300 ${
              isActive("/contact") ? "text-blue-600" : "hover:text-blue-600"
            }`}
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden hover-element w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center focus:outline-none transition-transform duration-300 hover:rotate-90"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-700"
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

      {/* Mobile Menu */}
      <AnimatePresence>
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
                    href="/services"
                    className="block py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="block py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-700"
                  >
                    About
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
                    href="/career"
                    className="block py-2 px-4 rounded-lg hover:bg-gray-100 text-gray-700"
                  >
                    Career
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
      </AnimatePresence>
    </header>
  );
}
