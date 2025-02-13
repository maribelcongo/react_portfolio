import { useEffect } from "react";
import "./Header.scss";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Header = () => {
  useEffect(() => {
    const createBubble = () => {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      document.querySelector(".header").appendChild(bubble);

      // Posición y tamaño aleatorio
      const size = Math.random() * 50 + 10;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;

      // Eliminar burbuja después de la animación
      setTimeout(() => {
        bubble.remove();
      }, 4000);
    };

    // Crear burbujas cada 500ms
    const interval = setInterval(createBubble, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="content">
        <h1>Maribel Congo</h1>
        <p>Desarrolladora Frontend</p>
        <div className="icons">
          <a
            href="https://github.com/tuperfil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tuperfil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:tuemail@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
