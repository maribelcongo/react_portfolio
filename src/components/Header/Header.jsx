import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Navbar from "../Navbar/Navbar";
import logoImage from "../../assets/logo.jpg";

import "../Header/header.scss";

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

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
    <header className={`header ${darkMode ? "dark-mode" : ""}`}>
      {/* Logo */}
      <div className="box_img">
        <Link to="header" smooth={true} duration={500}>
          <img src={logoImage} alt="Logo" className="logo" />
        </Link>
      </div>

      {/* Navbar con darkMode compartido */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  );
};

export default Header;
