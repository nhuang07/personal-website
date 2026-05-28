import useScrollAnimation from "./Scroll";

const skillGroups = [
  {
    label: "Languages",
    items: [
      { name: "Java", icon: "/logo_photos/java.svg" },
      { name: "Python", icon: "/logo_photos/python.svg" },
      { name: "C#", icon: "/logo_photos/csharp.png" },
      { name: "JavaScript", icon: "/logo_photos/javascript.svg" },
      { name: "TypeScript", icon: "/logo_photos/typescript.svg" },
      { name: "Lua", icon: "/logo_photos/lua.png" },
      { name: "R", icon: "/logo_photos/r.png" },
      { name: "Racket", icon: "/logo_photos/racket.svg" },
      { name: "HTML", icon: "/logo_photos/html.svg" },
      { name: "CSS", icon: "/logo_photos/css.svg" },
    ],
  },
  {
    label: "Frameworks & Libraries",
    items: [
      { name: "React.js", icon: "/logo_photos/react.svg" },
      { name: "Next.js", icon: "/logo_photos/next.png" },
      { name: "Node.js", icon: "/logo_photos/node.png" },
      { name: "Express.js", icon: "/logo_photos/express.svg" },
      { name: "TailwindCSS", icon: "/logo_photos/tailwind.png" },
      { name: "Tidymodels", icon: "/logo_photos/tidymodels.png" },
      { name: "Tidyverse", icon: "/logo_photos/tidyverse.png" },
      { name: "dplyr", icon: "/logo_photos/dplyr.webp" },
      { name: "ggplot2", icon: "/logo_photos/ggplot2.png" },
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      { name: "Git", icon: "/logo_photos/git.svg" },
      { name: "VS Code", icon: "/logo_photos/vscode.svg" },
      { name: "MongoDB", icon: "/logo_photos/mongodb.webp" },
      { name: "Postman", icon: "/logo_photos/postman.svg" },
      { name: "Unity", icon: "/logo_photos/unity.png" },
      { name: "IntelliJ", icon: "/logo_photos/intellij.svg" },
      { name: "Jupyter", icon: "/logo_photos/jupyter.png" },
      { name: "Android Studio", icon: "/logo_photos/androidstudio.png" },
    ],
  },
];

function SkillChip({ name, icon }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "7px 12px",
        border: "1px solid #1e1e1e",
        background: "#111",
        cursor: "default",
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1e1e1e")}
    >
      <img
        src={icon}
        alt={name}
        style={{ width: "18px", height: "18px", objectFit: "contain" }}
      />
      <span style={{ fontSize: "12px", color: "#666" }}>{name}</span>
    </div>
  );
}

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "3.5rem 2rem",
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
        skills
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2.25rem" }}>
        {skillGroups.map((group) => (
          <div key={group.label}>
            <div
              style={{
                fontSize: "11px",
                color: "#444",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.9rem",
                paddingBottom: "0.5rem",
                borderBottom: "1px solid #1a1a1a",
              }}
            >
              {group.label}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {group.items.map((skill) => (
                <SkillChip key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
