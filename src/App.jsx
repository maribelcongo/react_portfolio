import { BrowserRouter as Router } from "react-router-dom";
import Presentation from "./components/Presentation/Presentation";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <main className="content">
          <Presentation />
          <About />
          <Projects />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
