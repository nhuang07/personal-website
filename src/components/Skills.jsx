import useScrollAnimation from "./Scroll";
import { useState, useEffect, useRef } from "react";

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation();

  const skills = {
    Languages: [
      {
        name: "Java",
        icon: "/logo_photos/java.svg",
      },
      {
        name: "Python",
        icon: "/logo_photos/python.svg",
      },
      { name: "C#", icon: "/logo_photos/csharp.png" },
      {
        name: "JavaScript",
        icon: "/logo_photos/javascript.svg",
      },
      {
        name: "Lua",
        icon: "/logo_photos/lua.png",
      },
      {
        name: "R",
        icon: "/logo_photos/r.png",
      },
      {
        name: "Racket",
        icon: "/logo_photos/racket.svg",
      },
      {
        name: "HTML",
        icon: "/logo_photos/html.svg",
      },
      {
        name: "CSS",
        icon: "/logo_photos/css.svg",
      },
    ],
    "Developer Tools & Platforms": [
      { name: "VS Code", icon: "/logo_photos/vscode.svg" },
      { name: "Git", icon: "/logo_photos/git.svg" },
      {
        name: "Android Studio",
        icon: "/logo_photos/androidstudio.png",
      },
      { name: "IntelliJ", icon: "/logo_photos/intellij.svg" },
      { name: "Jupyter Notebook", icon: "/logo_photos/jupyter.png" },
      { name: "Unity", icon: "/logo_photos/unity.png" },
      { name: "Postman", icon: "/logo_photos/postman.svg" },
      { name: "MongoDB", icon: "/logo_photos/mongodb.webp" },
    ],
    "Frameworks & Libraries": [
      { name: "React.js", icon: "/logo_photos/react.svg" },
      { name: "Node.js", icon: "/logo_photos/node.png" },
      { name: "Express.js", icon: "/logo_photos/express.svg" },
      { name: "Next.js", icon: "/logo_photos/next.png" },
      { name: "TailwindCSS", icon: "/logo_photos/tailwind.png" },
      { name: "Tidymodels", icon: "/logo_photos/tidymodels.png" },
      { name: "Tidyverse", icon: "/logo_photos/tidyverse.png" },
      { name: "dplyr", icon: "/logo_photos/dplyr.webp" },
      { name: "ggplot2", icon: "/logo_photos/ggplot2.png" },
    ],
  };

  return (
    <section
      id="skills"
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
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={category}
              className={`bg-slate-800/60 backdrop-blur-sm p-6 rounded-lg border border-blue-400/20 hover:border-indigo-400/40 transition-all duration-500 hover:scale-105 shadow-xl shadow-blue-500/10 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              } ${index === 2 ? "md:col-span-2 md:max-w-md md:mx-auto" : ""}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold text-indigo-400 mb-6 text-center">
                {category}
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {items.map((skill, i) => (
                  <div key={i} className="group relative">
                    <div className="flex flex-col items-center gap-2 px-4 py-3 bg-slate-700/50 rounded-lg border border-indigo-400/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 cursor-default min-w-24">
                      <span className="text-blue-200 text-xs font-medium text-center">
                        {skill.name}
                      </span>
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-10 h-10 md:w-12 md:h-12 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
