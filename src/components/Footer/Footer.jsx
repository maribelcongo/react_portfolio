import { motion } from "framer-motion";
import Contact from "../pages/Contact";
import "./Footer.scss";
import backgroundImage from "../../assets/fondo.jpg";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="footer-container">
        <Contact />
      </div>
    </motion.footer>
  );
};

export default Footer;
