import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import "./About.scss";

const skills = [
  { icon: <FaReact className="react" />, name: "REACt" },
  { icon: <FaHtml5 className="html" />, name: "HTML5" },
  { icon: <FaCss3Alt className="css" />, name: "CSS3" },
  { icon: <FaSass className="sass" />, name: "SASS" },
  { icon: <SiTailwindcss className="tailwind" />, name: "TAILWIND" },
  { icon: <SiJavascript className="js" />, name: "JAVASCRIPT" },
  { icon: <FaGitAlt className="git" />, name: "GIT" },
];

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-text">
          <h2>Sobre Mí</h2>
          <p>Estas son algunas de las tecnologías con las que he trabajado.</p>
        </div>

        <div className="skills">
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              perMove: 1,
              gap: "2px",
              autoplay: true,
              interval: 2500,
              pauseOnHover: true,
              arrows: true,
              pagination: false,
              breakpoints: {
                768: { perPage: 2 },
                1024: { perPage: 2 },
              },
            }}
          >
            {skills.map((skill, index) => (
              <SplideSlide key={index}>
                <div className="icon">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default About;
