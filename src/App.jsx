import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Header />
      {/* Secciones siempre visibles en la Home */}
      <About />
      <Projects />
      <Contact />
    </Router>
  );
};

export default App;
