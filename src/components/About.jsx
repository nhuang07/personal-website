import useScrollAnimation from "./Scroll";
import { useState, useEffect } from "react";

// Typewriter effect hook
function useTypewriter(text, trigger, speed = 80, delay = 0) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!trigger) {
      setDisplayText("");
      setIsComplete(false);
      return;
    }

    let index = 0;
    setDisplayText("");
    setIsComplete(false);

    const startTyping = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [trigger, text, speed, delay]);

  return { displayText, isComplete };
}

export default function About() {
  const [ref, isVisible] = useScrollAnimation();
  const { displayText: typedName, isComplete: nameComplete } = useTypewriter(
    "hey, im nick!",
    isVisible,
    70,
    300 // Start after initial fade
  );

  return (
    <section
      id="about"
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          {/* Typewriter Name */}
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            {typedName}
            <span
              className={`inline-block w-[3px] h-[1em] bg-indigo-400 ml-1 align-middle ${
                nameComplete ? "opacity-0" : "animate-pulse"
              }`}
            />
          </h2>

          {/* Paragraphs - staggered fade in after name completes */}
          <p
            className={`text-xl text-gray-300 leading-relaxed transition-all duration-700 ${
              nameComplete
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            I'm a first-year Science student at the University of British
            Columbia, looking to specialize in Computer Science. I have a
            passion for building immersive experiences and solving real-world
            problems through code.
          </p>
          <p
            className={`text-xl text-gray-300 leading-relaxed transition-all duration-700 ${
              nameComplete
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: nameComplete ? "150ms" : "0ms" }}
          >
            I've won hackathons building VR apps with Unity, worked with EEG
            data for brain-computer interfaces, and I'm currently exploring
            full-stack development and machine learning.
          </p>
          <p
            className={`text-xl text-gray-300 leading-relaxed transition-all duration-700 ${
              nameComplete
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: nameComplete ? "300ms" : "0ms" }}
          >
            When I'm not coding or studying, you can find me playing sports,
            video games, hanging out with friends, or watching shows and movies.
          </p>
        </div>

        {/* Photo - slides in after name completes */}
        <div
          className={`flex-shrink-0 transition-all duration-1000 ${
            nameComplete
              ? "translate-x-0 opacity-100"
              : "translate-x-16 opacity-0"
          }`}
          style={{ transitionDelay: nameComplete ? "100ms" : "0ms" }}
        >
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-600 flex items-center justify-center text-9xl shadow-2xl shadow-blue-500/30 hover:shadow-indigo-500/50 transition-all duration-500 hover:scale-105 hover:rotate-2">
            <img
              src="/mePhoto.jpg"
              alt="Nicholas Huang"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <p className="text-center text-gray-400 text-sm mt-3">^ me! ^</p>
        </div>
      </div>
    </section>
  );
}
