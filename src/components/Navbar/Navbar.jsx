import { useState } from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";
import "./Navbar.scss";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${darkMode ? "dark-mode" : ""}`}>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Sobre Mí
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Proyectos
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </Link>
        </li>
        <li className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </li>
      </ul>
    </nav>
  );
};

// Agregar validación de props
Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default Navbar;
