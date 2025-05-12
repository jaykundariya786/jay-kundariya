import { motion } from "framer-motion";

export default function ContactBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-blue-600/20 to-blue-600/20 z-10" />

      {/* Center decorative element */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-3xl opacity-5 text-purple-400"
        animate={{ scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M30.8,-52.6C41.3,-50.5,52,-44.7,61.5,-35.6C71,-26.5,79.3,-13.3,79.1,-0.1C79,13,70.3,26,60.1,34.2C49.9,42.4,38.1,45.8,27.3,52.2C16.5,58.6,6.6,68,-2,69.3C-10.6,70.7,-18.9,63.9,-27.5,57.7C-36.1,51.5,-45,45.9,-52.7,37.7C-60.4,29.5,-67,14.8,-68.1,-0.6C-69.2,-16,-64.6,-32,-57.2,-46.1C-49.7,-60.2,-39.3,-72.4,-26.8,-73.1C-14.3,-73.8,0.4,-62.9,10.5,-55.2C20.7,-47.4,26.2,-41.8,30.8,-52.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>
    </div>
  );
}
