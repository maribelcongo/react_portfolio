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
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github" />
        </a>
        <a href="mailto:tucorreo@example.com">
          <FaEnvelope className="icon email" />
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
