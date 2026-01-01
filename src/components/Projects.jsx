import useScrollAnimation from "./Scroll";
import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation();

  const projects = [
    {
      title: "MindMedVR",
      description:
        "VR meditation game using EEG brainwave data to help healthcare professionals improve focus. Detects alpha, delta, and beta waves in real-time to dynamically adjust gameplay.",
      tech: ["Python", "C#", "Unity", "OpenBCI", "VR"],
      award: "3rd Place - natHacks 2024",
      image: <FaGithub />,
      github: "https://github.com/nhuang07/MindMedVR",
    },
    {
      title: "Newsletter Subscription Predictor",
      description:
        "ML model using KNN classification to predict newsletter subscription likelihood based on user playtime and demographics from Minecraft server data.",
      tech: ["R", "KNN Classification", "Tidymodels"],
      award: null,
      image: "📊",
      github: "https://github.com/nhuang07/Subscription-Status-Predictor",
    },
    {
      title: "GYM SIM",
      description:
        "VR gym simulation focused on rehabilitation and proper form. Uses haptic feedback to provide corrective input on exercise form.",
      tech: ["C#", "Unity", "VR"],
      award: "1st Place - Hack and Seek XR Hackathon 2024",
      image: "💪",
      github: "https://github.com/yourusername/gym-sim",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`min-h-screen px-6 py-20 relative overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className={`text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-slate-800/60 backdrop-blur-sm rounded-lg border border-blue-400/20 hover:border-indigo-400/40 transition-all duration-500 group hover:scale-[1.02] overflow-hidden shadow-xl shadow-blue-500/10 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row relative">
                <div className="md:w-2/5 bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-600 flex items-center justify-center text-9xl shadow-lg shadow-blue-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300 min-h-[300px]">
                  <div className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {project.image}
                  </div>
                </div>
                <div className="md:w-3/5 p-8">
                  {project.award && (
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-sm rounded-full mb-3 text-white shadow-lg">
                      {project.award}
                    </span>
                  )}
                  <h3 className="text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-indigo-600/30 text-indigo-300 text-sm rounded-full border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 hover:scale-110"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  className="absolute bottom-4 right-4 p-3 bg-slate-900/80 hover:bg-slate-800 rounded-full border border-indigo-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-110 shadow-lg"
                  title="View on GitHub"
                >
                  <span className="text-2xl">
                    <FaGithub />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
