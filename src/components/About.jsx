import useScrollAnimation from "./Scroll";
import { useState, useEffect, useRef } from "react";

export default function About() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div
          className={`flex-1 space-y-6 transition-all duration-1000 delay-200 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            hey, im nick!
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            I'm a first-year Science student at the University of British
            Columbia, looking to specialize in Computer Science. I have a
            passion for building immersive experiences and solving real-world
            problems through code.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            I've won hackathons building VR apps with Unity, worked with EEG
            data for brain-computer interfaces, and I'm currently exploring
            full-stack development and machine learning.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            When I'm not coding or studying, you can find me playing sports,
            video games, hanging out with friends, or watching shows and movies.
          </p>
        </div>
        <div
          className={`flex-shrink-0 transition-all duration-1000 delay-400 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
          }`}
        >
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-600 flex items-center justify-center text-9xl shadow-2xl shadow-blue-500/30 hover:shadow-indigo-500/50 transition-all duration-500 hover:scale-105 hover:rotate-2">
            <img
              src="/mePhoto.jpg"
              alt="Nicholas Huang"
              className="w-full h-full object-ver rounded-2xl object-cover"
            />
          </div>
          <p className="text-center text-gray-400 text-sm mt-3">^ me! ^</p>
        </div>
      </div>
    </section>
  );
}
