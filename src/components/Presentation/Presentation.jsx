import { useEffect } from "react";
import "./Presentation.scss";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Presentation = () => {
  useEffect(() => {
    const createBubble = () => {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      document.querySelector(".Presentation").appendChild(bubble);

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

    const interval = setInterval(createBubble, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="Presentation">
      <div className="content">
        {/* Foto de perfil a la izquierda */}
        <div className="image-container">
          <img
            src="/foto_Perfil.jpg"
            alt="Maribel Congo"
            className="profile-img"
          />
        </div>

        {/* Contenido a la derecha */}
        <div className="text-content">
          <h1>Maribel Congo</h1>
          <p>Desarrolladora frontend</p>
          <div className="icons">
            <a
              href="https://github.com/maribelcongo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/maribelcongo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:congoceleste1@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
