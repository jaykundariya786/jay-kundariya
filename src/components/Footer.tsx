import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className=" bg-gray-900 text-white py-12">
      <div className="max-w-7xl container mx-auto md:px-6">
        <div className="grid grid-cols-1 uppercase tracking-wider font-bold text-sm md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-xl font-bold font-sans bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Jay Kundariya
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Building exceptional digital experiences through innovative
              technology solutions.
            </p>
          </div>
          <div />
          <div />
          <div className="flex justify-end space-x-4">
            <a
              href="https://github.com/"
              className="text-gray-400 hover:text-white transition duration-300 "
            >
              <FiGithub className="text-xl" />
            </a>
            <a
              href="https://twitter.com/"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FiTwitter className="text-xl" />
            </a>
            <a
              href="https://linkedin.com/"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FiLinkedin className="text-xl" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 justify-center pt-8 flex flex-col md:flex-row items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} JayKundariya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
