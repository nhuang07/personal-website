import useScrollAnimation from "./Scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactItems = [
  {
    label: "nicholashuang0707@gmail.com",
    href: "mailto:nicholashuang0707@gmail.com",
  },
  {
    label: "linkedin.com/in/nickhua",
    href: "https://linkedin.com/in/nickhua",
  },
  {
    label: "github.com/nhuang07",
    href: "https://github.com/nhuang07",
  },
];

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <>
      <section
        id="contact"
        ref={ref}
        style={{
          padding: "3.5rem 2rem 5rem",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.7s, transform 0.7s",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            color: "#444",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          contact
        </div>

        <p
          style={{
            fontSize: "15px",
            color: "#666",
            lineHeight: 1.85,
            maxWidth: "420px",
            marginBottom: "2rem",
          }}
        >
          Always open to internships, collabs, or just a good conversation.
          Reach out however.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {contactItems.map((item) => (
            <div
              key={item.label}
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <span
                style={{
                  width: "4px",
                  height: "4px",
                  background: "#2a2a2a",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              />
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "14px",
                  color: "#555",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#e8e4dc")}
                onMouseLeave={(e) => (e.target.style.color = "#555")}
              >
                {item.label}
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer
        style={{
          padding: "1.5rem 2rem",
          borderTop: "1px solid #1a1a1a",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "11px", color: "#333", letterSpacing: "0.04em" }}>
          © 2026 Nicholas Huang
        </span>
        <div style={{ display: "flex", gap: "1.25rem" }}>
          {[
            { href: "https://github.com/nhuang07", label: "GitHub" },
            { href: "https://linkedin.com/in/nickhua", label: "LinkedIn" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "11px",
                color: "#333",
                letterSpacing: "0.06em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#888")}
              onMouseLeave={(e) => (e.target.style.color = "#333")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
