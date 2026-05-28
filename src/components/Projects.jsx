import { useState } from "react";
import useScrollAnimation from "./Scroll";

const projects = [
  {
    num: "01",
    title: "match-a",
    award: "2nd place — youCode 2026 SAP challenge",
    description: "Volunteer lifecycle platform for BC nonprofits. Weighted matching algorithm scoring compatibility across skills, availability, and location. Churn prediction, Supabase Realtime subscriptions, matcha-themed UI.",
    tech: ["Next.js", "TypeScript", "Supabase", "TailwindCSS", "Vercel"],
    image: "/project_photos/fantasy-assistant-bg.png",
    github: "https://github.com/nhuang07/match-a",
    live: "https://match-a-seven.vercel.app/",
  },
  {
    num: "02",
    title: "NBA Fantasy Assistant",
    award: null,
    description: "Full-stack fantasy basketball analysis with JWT auth, roster management, start/sit recommendations, and real-time NBA data via external APIs. Caching layer to reduce API costs and improve response times.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "TailwindCSS"],
    image: "/project_photos/fantasy-assistant-bg.png",
    github: "https://github.com/nhuang07/nba-fantasy-helper",
    live: "https://fantasy-assistant.netlify.app/",
  },
  {
    num: "03",
    title: "DermAI",
    award: null,
    description: "Skincare analysis app using Google Gemini API to generate structured AI skincare recommendations. Implemented Google OAuth to store scan history per user. Built during JourneyHacks 2026.",
    tech: ["Next.js", "React", "Supabase", "Google Gemini API", "TailwindCSS"],
    image: "/project_photos/dermai-bg.png",
    github: "https://github.com/nhuang07/dermai",
    live: "https://dermai-gray.vercel.app/",
  },
  {
    num: "04",
    title: "Wedoo",
    award: null,
    description: "Habit tracker you share with friends. AI generates tasks or you create your own, and you and your friends work together to take care of your Wedoo by completing tasks on time. Built for nwHacks 2026.",
    tech: ["React Native", "Expo", "TypeScript", "Supabase", "Gemini API", "Expo Push Notifications"],
    image: "/project_photos/wedoo.jpg",
    github: "https://github.com/nhuang07/wedoo",
    live: "https://devpost.com/software/wedoo",
  },
  {
    num: "05",
    title: "Subscription Status Classifier",
    award: null,
    description: "ML model using KNN classification to predict newsletter subscription likelihood from Minecraft server data. Feature preprocessing, cross-validation, and parameter tuning in R.",
    tech: ["R", "KNN", "Tidymodels", "Tidyverse"],
    image: "/project_photos/subscription.png",
    github: "https://github.com/nhuang07/Subscription-Status-Predictor",
    live: null,
  },
  {
    num: "06",
    title: "MindMedVR",
    award: "3rd place junior track — natHacks 2024",
    description: "VR meditation game using real-time EEG brainwave data to help healthcare professionals improve focus. Detects alpha, delta, and beta waves to dynamically adjust gameplay based on stress levels.",
    tech: ["Unity", "C#", "Python", "OpenBCI", "VR"],
    image: "/project_photos/mindmedvr.jpg",
    github: "https://github.com/nhuang07/MindMedVR",
    live: "https://devpost.com/software/mindmedvr",
  },
  {
    num: "07",
    title: "GYM SIM",
    award: "1st place — Hack and Seek XR Hackathon 2024",
    description: "VR gym simulation focused on rehabilitation and proper form. Uses haptic feedback to provide corrective input on exercise form in real-time.",
    tech: ["Unity", "C#", "VR"],
    image: "/project_photos/gymsim.jpg",
    github: "https://github.com/nhuang07/gymsim",
    live: null,
  },
];

const wrap = { maxWidth: "1100px", margin: "0 auto", padding: "0 3rem" };

function ProjectRow({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderBottom: "1px solid #1a1a1a",
        overflow: "hidden",
        cursor: "default",
        transition: "background 0.3s",
        background: hovered ? "#0f0f0f" : "transparent",
      }}
    >
      {/* Row — always visible, never replaced */}
      <div style={{ display: "grid", gridTemplateColumns: "48px 1fr auto", gap: "1.5rem", alignItems: "center", padding: "1.25rem 0" }}>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "11px", color: "#333" }}>
          {project.num}
        </span>

        <div>
          <div style={{ fontSize: "16px", color: hovered ? "#e8e4dc" : "#c8c4bc", fontWeight: 400, marginBottom: "4px", transition: "color 0.2s" }}>
            {project.title}
          </div>
          {project.award && (
            <div style={{ fontSize: "11px", color: "#6a5f50", marginBottom: "6px" }}>{project.award}</div>
          )}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
            {project.tech.map((t) => (
              <span key={t} style={{ fontSize: "10px", color: "#444", border: "1px solid #1e1e1e", padding: "2px 7px", letterSpacing: "0.02em" }}>{t}</span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "11px", color: "#444", letterSpacing: "0.04em", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.target.style.color = "#e8e4dc")}
            onMouseLeave={(e) => (e.target.style.color = "#444")}
          >GitHub</a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: "11px", color: "#444", letterSpacing: "0.04em", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = "#e8e4dc")}
              onMouseLeave={(e) => (e.target.style.color = "#444")}
            >Live ↗</a>
          )}
        </div>
      </div>

      {/* Expansion — slides down below the row, keeps row intact */}
      <div style={{
        display: "grid",
        gridTemplateRows: hovered ? "1fr" : "0fr",
        transition: "grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}>
        <div style={{ overflow: "hidden" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "48px 1fr 320px",
            gap: "1.5rem",
            padding: "0 0 1.5rem 0",
            borderTop: "1px solid #1a1a1a",
            paddingTop: "1.25rem",
          }}>
            {/* Spacer to align with title column */}
            <div />

            {/* Description */}
            <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.8, paddingRight: "1rem" }}>
              {project.description}
            </p>

            {/* Image */}
            <div style={{ height: "140px", overflow: "hidden", border: "1px solid #1e1e1e" }}>
              <div style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url('${project.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.65)",
                transform: hovered ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.5s ease",
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: "4rem 0",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.7s, transform 0.7s",
      }}
    >
      <div style={wrap}>
        <div style={{ fontSize: "13px", fontWeight: 500, color: "#888", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "3rem", paddingBottom: "1rem", borderBottom: "1px solid #1e1e1e" }}>
          Projects
        </div>
        <div style={{ borderTop: "1px solid #1a1a1a" }}>
          {projects.map((p) => <ProjectRow key={p.num} project={p} />)}
        </div>
      </div>
    </section>
  );
}
