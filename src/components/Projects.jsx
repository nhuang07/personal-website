import useScrollAnimation from "./Scroll";
import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "NBA Fantasy Assistant",
      description:
        "An assistant for NBA fantasy leagues, with custom scoring input, sit / start recommendations, data persistence with roster saving, and user authentication. Implements CRUD operations to pull live data from SportsData.io's API, and Highlightly's API.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "JWT",
        "TailwindCSS",
        "REST APIs",
        "MongoDB",
      ],
      award: null,
      image: (
        <img
          src="/project_photos/fantasy-assistant-bg.png"
          alt="Fantasy Assistant"
          className="w-full h-full object-cover"
        />
      ),
      github: "https://github.com/nhuang07/nba-fantasy-helper",
      live: "https://fantasy-assistant.netlify.app/",
    },
    {
      title: "DermAI",
      description:
        "Skincare analysis app, utilizing API calls to Google Gemini's API, and generating structured, reliable AI skincare recommendations. Implemented Google OAuth in order to store scan history for each user. Built during JourneyHacks 2026.",
      tech: [
        "React.js",
        "Next.js",
        "Supabase",
        "Google Gemini API",
        "TailwindCSS",
      ],
      award: null,
      image: (
        <img
          src="/project_photos/dermai-bg.png"
          alt="DermAI"
          className="w-full h-full object-cover"
        />
      ),
      github: "https://github.com/nhuang07/dermai",
      live: "https://dermai-gray.vercel.app/",
    },
    {
      title: "Wedoo",
      description:
        "Built for nwHacks 2026, Wedoo is a habit tracker you can share with your friends. Either AI can generate tasks for you, or you can create tasks for yourself, and you and your friends work together to take care of your own Wedoo by completing your tasks on time.",
      tech: [
        "React Native",
        "Expo",
        "Typescript",
        "Supabase",
        "Google Gemini API",
        "Expo Push Notifications",
      ],
      award: null,
      image: (
        <img
          src="/project_photos/wedoo.jpg"
          alt="Wedoo"
          className="w-full h-full object-cover"
        />
      ),
      github: "https://github.com/nhuang07/wedoo",
      live: "https://devpost.com/software/wedoo",
    },
    {
      title: "MindMedVR",
      description:
        "VR meditation game using EEG brainwave data, designed to help healthcare professionals improve focus. Detects alpha, delta, and beta waves in real-time to dynamically adjust gameplay based on stress levels.",
      tech: ["Python", "C#", "Unity", "OpenBCI", "VR"],
      award: "3rd Place Junior Track - natHacks 2024",
      image: (
        <img
          src="/project_photos/mindmedvr.jpg"
          alt="MindMedVR"
          className="w-full h-full object-cover"
        />
      ),
      github: "https://github.com/nhuang07/MindMedVR",
      live: "https://devpost.com/software/mindmedvr",
    },
    {
      title: "Newsletter Subscription Predictor",
      description:
        "ML model using KNN classification to predict newsletter subscription likelihood based on user playtime and demographics from Minecraft server data.",
      tech: ["R", "KNN Classification", "Tidymodels"],
      award: null,
      image: (
        <img
          src="/project_photos/subscription.png"
          alt="Subscription Classifier"
          className="w-full h-full object-cover"
        />
      ),
      github: "https://github.com/nhuang07/Subscription-Status-Predictor",
      live: null,
    },
    {
      title: "GYM SIM",
      description:
        "VR gym simulation focused on rehabilitation and proper form. Uses haptic feedback to provide corrective input on exercise form.",
      tech: ["C#", "Unity", "VR"],
      award: "1st Place - Hack and Seek XR Hackathon 2024",
      image: (
        <img
          src="/project_photos/gymsim.jpg"
          alt="GymSim"
          className="w-full h-full object-cover"
        />
      ),
      github: "https://github.com/nhuang07/gymsim",
      live: null,
    },
  ];

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="projects"
      ref={ref}
      className={`min-h-screen px-4 sm:px-6 py-16 sm:py-20 relative overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-10 sm:mb-16 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Projects
        </h2>

        <div className="relative">
          {/* Desktop arrows - hidden on mobile */}
          <button
            onClick={prevProject}
            className="hidden md:block absolute -left-16 top-1/2 -translate-y-1/2 z-20 p-3 bg-slate-800/80 hover:bg-slate-700 rounded-full border border-blue-400/30 hover:border-indigo-400/60 transition-all duration-300 hover:scale-110"
          >
            <FaChevronLeft className="text-xl text-white" />
          </button>

          <div
            key={currentIndex}
            className="animate-fadeIn bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-blue-400/20 shadow-2xl shadow-blue-500/10 overflow-hidden"
          >
            <div className="h-80 sm:h-90 bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-600 flex items-center justify-center text-6xl sm:text-8xl">
              {projects[currentIndex].image}
            </div>
            <div className="p-5 sm:p-8">
              {projects[currentIndex].award && (
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-xs sm:text-sm rounded-full mb-3 sm:mb-4 text-white">
                  {projects[currentIndex].award}
                </span>
              )}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                {projects[currentIndex].title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                {projects[currentIndex].description}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {projects[currentIndex].tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 bg-indigo-600/30 text-indigo-300 text-xs sm:text-sm rounded-full border border-indigo-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={projects[currentIndex].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 rounded-lg border border-indigo-400/30 hover:border-blue-400/60 transition-all duration-300"
                >
                  <FaGithub className="text-lg" />
                  <span>GitHub</span>
                </a>
                {projects[currentIndex].live && (
                  <a
                    href={projects[currentIndex].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 rounded-lg transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Desktop arrows - hidden on mobile */}
          <button
            onClick={nextProject}
            className="hidden md:block absolute -right-16 top-1/2 -translate-y-1/2 z-20 p-3 bg-slate-800/80 hover:bg-slate-700 rounded-full border border-blue-400/30 hover:border-indigo-400/60 transition-all duration-300 hover:scale-110"
          >
            <FaChevronRight className="text-xl text-white" />
          </button>
        </div>

        {/* Mobile arrows - below card */}
        <div className="flex md:hidden justify-center gap-6 mt-6">
          <button
            onClick={prevProject}
            className="p-3 bg-slate-800/80 hover:bg-slate-700 rounded-full border border-blue-400/30 transition-all duration-300"
          >
            <FaChevronLeft className="text-xl text-white" />
          </button>
          <button
            onClick={nextProject}
            className="p-3 bg-slate-800/80 hover:bg-slate-700 rounded-full border border-blue-400/30 transition-all duration-300"
          >
            <FaChevronRight className="text-xl text-white" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-3 mt-6 sm:mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-indigo-400 w-8"
                  : "bg-slate-600 hover:bg-slate-500 w-2.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
