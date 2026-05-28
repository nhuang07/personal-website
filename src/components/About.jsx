import { useState, useEffect } from "react";
import useScrollAnimation from "./Scroll";

function useTypewriter(text, trigger, speed = 70, delay = 300) {
  const [charCount, setCharCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!trigger) {
      setCharCount(0);
      setIsComplete(false);
      return;
    }
    let index = 0;
    setCharCount(0);
    setIsComplete(false);
    const startTyping = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          index++;
          setCharCount(index);
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(startTyping);
  }, [trigger, text, speed, delay]);

  return { charCount, isComplete };
}

const PLAIN = "hey, i'm ";
const STYLED = "nick.";
const FULL = PLAIN + STYLED;

const wrap = { maxWidth: "1100px", margin: "0 auto", padding: "0 3rem" };

export default function About() {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const { charCount, isComplete: nameComplete } = useTypewriter(
    FULL,
    heroVisible,
  );

  const plainPart = FULL.slice(0, Math.min(charCount, PLAIN.length));
  const styledCount = Math.max(0, charCount - PLAIN.length);
  const styledPart = STYLED.slice(0, styledCount);

  return (
    <>
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>

      {/* Hero */}
      <section
        id="about"
        ref={heroRef}
        style={{
          paddingTop: "9rem",
          paddingBottom: "6rem",
          opacity: heroVisible ? 1 : 0,
          transition: "opacity 0.7s",
        }}
      >
        <div style={wrap}>
          <div
            style={{
              fontSize: "11px",
              color: "#444",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1.75rem",
            }}
          >
            based in Vancouver, BC. born and raised in Calgary, AB.
          </div>

          <h1
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(48px, 7vw, 80px)",
              lineHeight: 1.05,
              color: "#e8e4dc",
              marginBottom: "1.5rem",
            }}
          >
            {plainPart}
            {styledPart && (
              <em style={{ fontStyle: "italic", color: "#a89880" }}>
                {styledPart}
              </em>
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

          <p
            style={{
              fontSize: "17px",
              color: "#666",
              lineHeight: 1.85,
              maxWidth: "520px",
              marginBottom: "2.5rem",
              opacity: nameComplete ? 1 : 0,
              transform: nameComplete ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.6s, transform 0.6s",
            }}
          >
            Second-year CS & Statistics student at UBC. I enjoy building
            projects like full-stack apps, and have recently been exploring ML
            and AI. 4.33 GPA, multiple hackathon placements, and I'm always
            working on something new.
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
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                fontSize: "13px",
                letterSpacing: "0.06em",
                color: "#0c0c0c",
                background: "#e8e4dc",
                padding: "10px 24px",
                border: "none",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#d0ccc4")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#e8e4dc")
              }
            >
              view projects
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                fontSize: "13px",
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
        </div>
      </section>

      <div style={{ height: "1px", background: "#1a1a1a" }} />

      {/* About — only visible once scrolled to */}
      <section
        ref={aboutRef}
        style={{
          padding: "4rem 0",
          opacity: aboutVisible ? 1 : 0,
          transform: aboutVisible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s, transform 0.7s",
        }}
      >
        <div style={wrap}>
          <div
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: "#888",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "3rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #1e1e1e",
            }}
          >
            About
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 400px",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
              }}
            >
              {[
                <>
                  I'm a second-year student at the{" "}
                  <span style={{ color: "#a89880" }}>
                    University of British Columbia
                  </span>
                  , working toward a degree in Computer Science and Statistics.
                </>,
                <>
                  I first got into programming through hackathons in high
                  school, building a VR gym simulator and a brainwave-driven
                  meditation game. Most recently, I participated in nwHacks
                  2026, as well as youCode 2026, where my team and I built a
                  volunteer matching platform for BC nonprofits that{" "}
                  <span style={{ color: "#a89880" }}>
                    placed 2nd at youCode 2026
                  </span>
                  .
                </>,
                <>
                  Outside of building projects and academics, I love playing
                  sports, hanging out with friends, watching shows and movies,
                  or doing whatever new hobby I may be fixated on at the moment.
                </>,
              ].map((text, i) => (
                <p
                  key={i}
                  style={{ fontSize: "15px", color: "#666", lineHeight: 1.85 }}
                >
                  {text}
                </p>
              ))}
            </div>

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "380px",
                  height: "280px",
                  background: "#181818",
                  border: "1px solid #1e1e1e",
                  overflow: "hidden",
                  margin: "0 auto 0.75rem",
                }}
              >
                <img
                  src="/nickmountain.png"
                  alt="Nicholas Huang"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <span
                style={{
                  fontSize: "11px",
                  color: "#333",
                  letterSpacing: "0.04em",
                }}
              >
                ^ me! ^
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
