import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)",
      }}
    >
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <div
          className="absolute animate-blob"
          style={{
            top: "25%",
            left: "25%",
            width: "700px",
            height: "700px",
            background: "rgba(59, 130, 246, 0.35)",
            borderRadius: "50%",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute animate-blob animation-delay-2000"
          style={{
            top: "33%",
            right: "25%",
            width: "800px",
            height: "800px",
            background: "rgba(168, 85, 247, 0.35)",
            borderRadius: "50%",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute animate-blob animation-delay-4000"
          style={{
            bottom: "25%",
            left: "50%",
            width: "750px",
            height: "750px",
            background: "rgba(99, 102, 241, 0.3)",
            borderRadius: "50%",
            filter: "blur(120px)",
          }}
        />
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(150px, -150px) scale(1.4);
          }
          66% {
            transform: translate(-120px, 120px) scale(0.7);
          }
        }
        .animate-blob {
          animation: blob 18s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
