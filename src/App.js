import "./App.css";
import About from "./components/About/About";
import Certificate from "./components/Certificate/Certificate";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Navbar from "./components/Navbar/Navbar";
import Showcase from "./components/Showcase/Showcase";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <About />
      <Education />
      <Skills />
      <Certificate />
      <Contact />
    </div>
  );
}

export default App;
