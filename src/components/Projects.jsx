import { useState } from "react";

const projects = [
  {
    num: "01",
    title: "match-a",
    award: "2nd place — youCode 2026 SAP challenge",
    description:
      "Volunteer lifecycle platform for BC nonprofits. Weighted matching algorithm scoring compatibility across skills, availability, and location. Churn prediction, Supabase Realtime subscriptions, matcha-themed UI.",
    tech: ["Next.js", "TypeScript", "Supabase", "TailwindCSS", "Vercel"],
    image: "/project_photos/fantasy-assistant-bg.png",
    github: "https://github.com/nhuang07/match-a",
    live: "https://match-a-seven.vercel.app/",
  },
  {
    num: "02",
    title: "NBA Fantasy Assistant",
    award: null,
    description:
      "Full-stack fantasy basketball analysis with JWT auth, roster management, start/sit recommendations, and real-time NBA data via external APIs. Caching layer to reduce API costs and improve response times.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "TailwindCSS"],
    image: "/project_photos/fantasy-assistant-bg.png",
    github: "https://github.com/nhuang07/nba-fantasy-helper",
    live: "https://fantasy-assistant.netlify.app/",
  },
  {
    num: "03",
    title: "Subscription Status Classifier",
    award: null,
    description:
      "ML model using KNN classification to predict newsletter subscription likelihood from Minecraft server data. Feature preprocessing, cross-validation, and parameter tuning in R.",
    tech: ["R", "KNN", "Tidymodels", "Tidyverse"],
    image: "/project_photos/subscription.png",
    github: "https://github.com/nhuang07/Subscription-Status-Predictor",
    live: null,
  },
  {
    num: "04",
    title: "MindMedVR",
    award: "3rd place junior track — natHacks 2024",
    description:
      "VR meditation game using real-time EEG brainwave data to help healthcare professionals improve focus. Detects alpha, delta, and beta waves to dynamically adjust gameplay based on stress levels.",
    tech: ["Unity", "C#", "Python", "OpenBCI", "VR"],
    image: "/project_photos/mindmedvr.jpg",
    github: "https://github.com/nhuang07/MindMedVR",
    live: "https://devpost.com/software/mindmedvr",
  },
  {
    num: "05",
    title: "GYM SIM",
    award: "1st place — Hack and Seek XR Hackathon 2024",
    description:
      "VR gym simulation focused on rehabilitation and proper form. Uses haptic feedback to provide corrective input on exercise form in real-time.",
    tech: ["Unity", "C#", "VR"],
    image: "/project_photos/gymsim.jpg",
    github: "https://github.com/nhuang07/gymsim",
    live: null,
  },
];

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
      }}
    >
      {/* Collapsed row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "40px 1fr auto",
          gap: "1rem",
          alignItems: "center",
          padding: "1.1rem 0",
        }}
      >
        <span
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "11px",
            color: "#333",
          }}
        >
          {project.num}
        </span>

        <div>
          <div
            style={{
              fontSize: "15px",
              color: hovered ? "#e8e4dc" : "#c8c4bc",
              fontWeight: 400,
              marginBottom: "3px",
              transition: "color 0.2s",
            }}
          >
            {project.title}
          </div>
          {project.award && (
            <div style={{ fontSize: "11px", color: "#6a5f50", marginBottom: "5px" }}>
              {project.award}
            </div>
          )}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: "10px",
                  color: "#444",
                  border: "1px solid #1e1e1e",
                  padding: "2px 7px",
                  letterSpacing: "0.02em",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "11px",
              color: "#444",
              letterSpacing: "0.04em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#e8e4dc")}
            onMouseLeave={(e) => (e.target.style.color = "#444")}
          >
            GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "11px",
                color: "#444",
                letterSpacing: "0.04em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#e8e4dc")}
              onMouseLeave={(e) => (e.target.style.color = "#444")}
            >
              Live ↗
            </a>
          )}
        </div>
      </div>

      {/* Expanded panel */}
      <div
        style={{
          height: hovered ? "240px" : "0",
          overflow: "hidden",
          transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          background: "#0f0f0f",
          borderTop: hovered ? "1px solid #1a1a1a" : "none",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            height: "240px",
          }}
        >
          {/* Left: text content */}
          <div
            style={{
              padding: "1.5rem 2rem 1.5rem 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "0.6rem",
            }}
          >
            <div
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "normal",
                fontSize: "22px",
                color: "#e8e4dc",
                fontWeight: 400,
              }}
            >
              {project.title}
            </div>
            {project.award && (
              <div style={{ fontSize: "11px", color: "#a89880", letterSpacing: "0.06em" }}>
                {project.award}
              </div>
            )}
            <p style={{ fontSize: "13px", color: "#777", lineHeight: 1.75, maxWidth: "420px" }}>
              {project.description}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "0.25rem" }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "10px",
                    color: "#555",
                    border: "1px solid #222",
                    padding: "2px 7px",
                    letterSpacing: "0.02em",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "10px", marginTop: "0.25rem" }}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "11px",
                  color: "#555",
                  border: "1px solid #222",
                  padding: "4px 12px",
                  letterSpacing: "0.04em",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#e8e4dc";
                  e.target.style.borderColor = "#555";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#555";
                  e.target.style.borderColor = "#222";
                }}
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "11px",
                    color: "#555",
                    border: "1px solid #222",
                    padding: "4px 12px",
                    letterSpacing: "0.04em",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#e8e4dc";
                    e.target.style.borderColor = "#555";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#555";
                    e.target.style.borderColor = "#222";
                  }}
                >
                  Live ↗
                </a>
              )}
            </div>
          </div>

          {/* Right: project image */}
          <div
            style={{
              overflow: "hidden",
              borderLeft: "1px solid #1a1a1a",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url('${project.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.6)",
                transform: hovered ? "scale(1.04)" : "scale(1)",
                transition: "transform 0.5s ease, filter 0.3s ease",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "3.5rem 2rem" }}>
      <div
        style={{
          fontSize: "11px",
          color: "#444",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: "2rem",
        }}
      >
        projects
      </div>

      <div style={{ borderTop: "1px solid #1a1a1a" }}>
        {projects.map((p) => (
          <ProjectRow key={p.num} project={p} />
        ))}
      </div>
    </section>
  );
}
