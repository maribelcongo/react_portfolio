import { useState, useEffect } from "react";
import { Link } from "react-scroll"; // ⚡
import "./Navbar.scss";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import logoImage from "../../assets/logo.jpg";
const Navbar = () => {
  // Estado para el tema
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Estado para el menú móvil
  const [menuOpen, setMenuOpen] = useState(false);

  // Cambiar el tema y guardar en localStorage
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className={`navbar ${darkMode ? "dark-mode" : ""}`}>
      <div className="logo">
        <Link to="header" smooth={true} duration={500}>
          <img src={logoImage} alt="Logo" className="logo-img" />
        </Link>
      </div>

      {/* Menú Hamburguesa */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Links */}
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

        {/* Botón Modo Oscuro */}
        <li className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
