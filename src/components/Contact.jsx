import useScrollAnimation from "./Scroll";
import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={ref}
      className={`min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`max-w-2xl text-center relative z-10 transition-all duration-1000 delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          contact me!
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          I'm always open to internship opportunities, collaborations, or just
          chatting about anything!
        </p>
        <div className="flex flex-col gap-4 items-center mb-8">
          <div className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-300">
            <span className="text-2xl">📧</span>
            <span className="text-lg">nicholashuang0707@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-all duration-300">
            <span className="text-2xl">📱</span>
            <span className="text-lg">403-890-7929</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-300">
            <span className="text-2xl">
              <img
                src="/logo_photos/instagram.svg"
                alt="instagram-logo"
                className="w-6 h-6 md:h-8 md:w-8"
              />
            </span>
            <span className="text-lg">@nicholashhhhhh</span>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <a
            href="https://linkedin.com/in/nickhua"
            target="_blank"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-110 flex items-center gap-2"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nhuang07"
            target="_blank"
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 rounded-lg transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-110 flex items-center gap-2"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <footer className="mt-16 text-center text-gray-400 text-sm relative z-10">
        <p>© 2025 Nicholas Huang. All rights reserved.</p>
      </footer>
    </section>
  );
}
