import { FiGithub, FiLinkedin, FiFileText, FiMail } from "react-icons/fi";

export function FloaingBtn() {
  return (
    <div className="fixed bottom-10 right-4 z-50 flex flex-col items-center gap-2 ">
      <div className="flex flex-col gap-4 items-end">
        <a
          rel="noopener noreferrer"
          href="https://linkedin.com/"
          className="flex items-center justify-center w-10 h-10 text-blue-600 hover:w-12 hover:h-12 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
          target="_blank"
        >
          <FiLinkedin className="h-5 w-5" />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://github.com/"
          className="flex items-center justify-center w-10 h-10 text-blue-600 hover:w-12 hover:h-12 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
          target="_blank"
        >
          <FiGithub className="h-5 w-5" />
        </a>
        <a
          rel="noopener noreferrer"
          href="mailto:jaykundariya786@gmail.com"
          className="flex items-center justify-center w-10 h-10 text-blue-600 hover:w-12 hover:h-12 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
        >
          <FiMail className="h-5 w-5" />
        </a>
        <a
          rel="noopener noreferrer"
          href={require("../assets/JayKundariya.pdf")}
          className="flex items-center justify-center w-10 h-10 text-blue-600 hover:w-12 hover:h-12 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
          target="_blank"
        >
          <FiFileText className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
