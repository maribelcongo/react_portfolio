import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        {/* Imagen de perfil */}
        <div className="about-image">
          <img src="/images/profile.jpg" alt="Tu Nombre" />
        </div>

        {/* Texto sobre ti */}
        <div className="about-text">
          <h2>Sobre Mí</h2>
          <p>
            ¡Hola! soy una apasionada desarrolladora frontend. Me encanta crear
            interfaces modernas, accesibles y optimizadas para una mejor
            experiencia de usuario.
          </p>

          {/* Tecnologías */}
          <div className="skills">
            <h3>Skills</h3>
            <div className="icons">
              <div className="icon">
                <FaReact className="react" /> React
              </div>
              <div className="icon">
                <FaHtml5 className="html" /> HTML
              </div>
              <div className="icon">
                <FaCss3Alt className="css" /> CSS
              </div>
              <div className="icon">
                <FaSass className="sass" /> SASS
              </div>
              <div className="icon">
                <SiTailwindcss className="tailwind" /> Tailwind
              </div>
              <div className="icon">
                <SiJavascript className="js" /> JavaScript
              </div>
              <div className="icon">
                <FaGitAlt className="git" /> Git
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
