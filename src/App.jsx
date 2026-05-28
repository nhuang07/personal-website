import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div style={{ background: "#0c0c0c", minHeight: "100vh", color: "#e8e4dc" }}>
      <Navbar />
      <About />
      <div style={{ height: "1px", background: "#1a1a1a", margin: "0 2rem" }} />
      <Projects />
      <div style={{ height: "1px", background: "#1a1a1a", margin: "0 2rem" }} />
      <Skills />
      <div style={{ height: "1px", background: "#1a1a1a", margin: "0 2rem" }} />
      <Contact />
    </div>
  );
}

export default App;
