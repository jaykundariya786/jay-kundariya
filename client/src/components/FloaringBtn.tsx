import { FileText, Github, Linkedin, Mail, Star } from "lucide-react";

export function FloaingBtn({}) {
  return (
    <div className="fixed bottom-10 right-4 z-50 flex flex-col items-center gap-2 ">
      <div className="flex flex-col gap-4 ">
        <a
          href="https://linkedin.com/"
          className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
          target="_blank"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="https://github.com/"
          className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
          target="_blank"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="mailto:jaykundariya786@gmail.com"
          className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
        >
          <Mail className="h-5 w-5" />
        </a>
        <a
          href="../../assets/JayKundariya.pdf"
          className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
          target="_blank"
        >
          <FileText className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
