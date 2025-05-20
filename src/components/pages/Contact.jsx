import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2>Contacto</h2>
      <p>¡Hablemos! Encuéntrame en mis redes sociales o envíame un correo.</p>

      <div className="contact-icons">
        <motion.a
          href="https://linkedin.com/in/maribelcongo"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaLinkedin className="icon linkedin" />
        </motion.a>
        <motion.a
          href="https://github.com/maribelcongo"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaGithub className="icon github" />
        </motion.a>
        <motion.a
          href="mailto:congoceleste1@gmail.com"
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaEnvelope className="icon email" />
        </motion.a>
      </div>

      {/* Botón de descarga CV */}
      <motion.a
        href="/maribel frontend.pdf"
        download="maribel frontend.pdf"
        className="download-btn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Descargar CV
      </motion.a>
    </motion.section>
  );
};

export default Contact;
