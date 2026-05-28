import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.1rem 3rem",
        borderBottom: "1px solid #1a1a1a",
        background: scrolled ? "rgba(12,12,12,0.97)" : "rgba(12,12,12,0.85)",
        backdropFilter: "blur(8px)",
        transition: "background 0.3s",
      }}
    >
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: "14px",
          color: "#666",
          letterSpacing: "0.06em",
        }}
      >
        nick huang
      </span>

      <div style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
        {["about", "projects", "skills", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            style={{
              fontSize: "13px",
              color: "#555",
              letterSpacing: "0.04em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#e8e4dc")}
            onMouseLeave={(e) => (e.target.style.color = "#555")}
          >
            {section}
          </button>
        ))}

        <a
          href="/Updated_Resume_Nicholas_Huang.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "12px",
            color: "#e8e4dc",
            border: "1px solid #2a2a2a",
            padding: "5px 14px",
            letterSpacing: "0.04em",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.borderColor = "#555")}
          onMouseLeave={(e) => (e.target.style.borderColor = "#2a2a2a")}
        >
          resume ↗
        </a>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            paddingLeft: "0.5rem",
            borderLeft: "1px solid #1e1e1e",
          }}
        >
          <a
            href="https://github.com/nhuang07"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#444",
              fontSize: "18px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#e8e4dc")}
            onMouseLeave={(e) => (e.target.style.color = "#444")}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/nickhua"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#444",
              fontSize: "18px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#e8e4dc")}
            onMouseLeave={(e) => (e.target.style.color = "#444")}
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}
