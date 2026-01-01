import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 border-b border-blue-500/30 shadow-lg shadow-blue-500/10"
          : "bg-slate-900/80 border-b border-blue-500/20"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          NH
        </h1>
        <div className="flex items-center gap-3 md:gap-6 text-sm md:text-base">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-gray-300 hover:text-indigo-400 transition-all duration-300 hover:scale-110"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-300 hover:text-indigo-400 transition-all duration-300 hover:scale-110"
          >
            Contact
          </button>
          <a
            href="/Nicholas_Huang_Resume_Final.pdf"
            target="_blank"
            className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            Resume
          </a>
          <div className="flex items-center gap-2 md:gap-3 md:ml-2 md:pl-3 md:border-l border-gray-700">
            <a
              href="https://github.com/nhuang07"
              target="_blank"
              className="text-xl md:text-2xl hover:text-blue-400 transition-all duration-300 hover:scale-110"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/nickhua"
              target="_blank"
              className="text-2xl hover:text-indigo-400 transition-all duration-300 hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
