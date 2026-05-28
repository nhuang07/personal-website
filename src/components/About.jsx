import { useState, useEffect, useRef } from "react";
import useScrollAnimation from "./Scroll";

function useTypewriter(text, trigger, speed = 70, delay = 300) {
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
    "hey, i'm nick.",
    isVisible
  );

  return (
    <>
      {/* Hero */}
      <section
        id="about"
        ref={ref}
        style={{
          paddingTop: "8rem",
          paddingBottom: "5rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          maxWidth: "760px",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.7s",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            color: "#444",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "1.75rem",
          }}
        >
          based in Vancouver, BC
        </div>

        <h1
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(40px, 6vw, 64px)",
            lineHeight: 1.05,
            color: "#e8e4dc",
            marginBottom: "1.25rem",
          }}
        >
          {typedName.split("nick.")[0]}
          {typedName.includes("nick.") && (
            <em style={{ fontStyle: "italic", color: "#a89880" }}>nick.</em>
          )}
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "0.85em",
              background: "#a89880",
              marginLeft: "4px",
              verticalAlign: "middle",
              opacity: nameComplete ? 0 : 1,
              animation: nameComplete ? "none" : "blink 1s step-end infinite",
            }}
          />
        </h1>

        <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>

        <p
          style={{
            fontSize: "16px",
            color: "#666",
            lineHeight: 1.85,
            maxWidth: "480px",
            marginBottom: "2.25rem",
            opacity: nameComplete ? 1 : 0,
            transform: nameComplete ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.6s, transform 0.6s",
          }}
        >
          First-year CS & Statistics student at UBC. I build things — full-stack
          apps, ML models, VR experiences. 4.33 GPA, hackathon placements,
          always working on something.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            opacity: nameComplete ? 1 : 0,
            transition: "opacity 0.6s 0.15s",
          }}
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              fontSize: "12px",
              letterSpacing: "0.06em",
              color: "#0c0c0c",
              background: "#e8e4dc",
              padding: "9px 22px",
              border: "none",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#d0ccc4")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#e8e4dc")}
          >
            view projects
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              fontSize: "12px",
              letterSpacing: "0.06em",
              color: "#555",
              background: "none",
              border: "none",
              borderBottom: "1px solid #2a2a2a",
              paddingBottom: "2px",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#e8e4dc";
              e.currentTarget.style.borderColor = "#555";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#555";
              e.currentTarget.style.borderColor = "#2a2a2a";
            }}
          >
            get in touch
          </button>
        </div>
      </section>

      <div style={{ height: "1px", background: "#1a1a1a", margin: "0 2rem" }} />

      {/* About */}
      <section style={{ padding: "3.5rem 2rem" }}>
        <div
          style={{
            fontSize: "11px",
            color: "#444",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          about
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 180px",
            gap: "3rem",
            alignItems: "start",
            maxWidth: "760px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              <>I'm a first-year student at the <span style={{ color: "#a89880" }}>University of British Columbia</span>, working toward a degree in Computer Science and Statistics.</>,
              <>I got into programming through hackathons — building a VR gym simulator, a brainwave-driven meditation game, and most recently a volunteer matching platform for BC nonprofits that <span style={{ color: "#a89880" }}>placed 2nd at youCode 2026</span>.</>,
              <>Outside of building things: I coach badminton, play chess, and watch too many shows.</>,
            ].map((text, i) => (
              <p key={i} style={{ fontSize: "15px", color: "#666", lineHeight: 1.85 }}>
                {text}
              </p>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: "150px",
                height: "150px",
                background: "#181818",
                border: "1px solid #1e1e1e",
                overflow: "hidden",
                margin: "0 auto 0.5rem",
              }}
            >
              <img
                src="/mePhoto.jpg"
                alt="Nicholas Huang"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <span style={{ fontSize: "11px", color: "#333", letterSpacing: "0.04em" }}>
              ^ me! ^
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
