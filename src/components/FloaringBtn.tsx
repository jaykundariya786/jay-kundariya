import { Linkedin, Github, FileText, Mail } from "lucide-react";

export function FloaingBtn() {
  return (
    <div className="fixed bottom-10 right-4 z-50 flex flex-col items-center gap-2 ">
      <div className="flex flex-col gap-4 items-end">
        <a
          rel="noopener noreferrer"
          href="https://linkedin.com/"
          className="flex items-center justify-center w-10 h-10 text-[#0D1321] hover:w-12 hover:h-12 rounded-full bg-white border border-[#E9C46A]/35 shadow-md hover:shadow-[0_4px_16px_rgba(233,196,106,0.4)] hover:bg-[#E9C46A] hover:text-[#0D1321] transition-all duration-300 ease-in-out"
          target="_blank"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://github.com/"
          className="flex items-center justify-center w-10 h-10 text-[#0D1321] hover:w-12 hover:h-12 rounded-full bg-white border border-[#E9C46A]/35 shadow-md hover:shadow-[0_4px_16px_rgba(233,196,106,0.4)] hover:bg-[#E9C46A] hover:text-[#0D1321] transition-all duration-300 ease-in-out"
          target="_blank"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          rel="noopener noreferrer"
          href="mailto:jaykundariya786@gmail.com"
          className="flex items-center justify-center w-10 h-10 text-[#0D1321] hover:w-12 hover:h-12 rounded-full bg-white border border-[#E9C46A]/35 shadow-md hover:shadow-[0_4px_16px_rgba(233,196,106,0.4)] hover:bg-[#E9C46A] hover:text-[#0D1321] transition-all duration-300 ease-in-out"
        >
          <Mail className="h-5 w-5" />
        </a>
        <a
          rel="noopener noreferrer"
          href={require("../assets/JayKundariya.pdf")}
          className="flex items-center justify-center w-10 h-10 text-[#0D1321] hover:w-12 hover:h-12 rounded-full bg-white border border-[#E9C46A]/35 shadow-md hover:shadow-[0_4px_16px_rgba(233,196,106,0.4)] hover:bg-[#E9C46A] hover:text-[#0D1321] transition-all duration-300 ease-in-out"
          target="_blank"
        >
          <FileText className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
