import "./Projects.scss";
import memeImage from "../../assets/meme.jpg";
import ahorroImage from "../../assets/ahorro.jpg";
import listaImage from "../../assets/lista.jpg";
import drinksImage from "../../assets/drinks.jpg";
import ecommerceImage from "../../assets/ecommerce.jpg";

const projectsData = [
  {
    id: 1,
    title: "Generador de Memes",
    description:
      "Este proyecto es un generador de memes donde el usuario puede modificar el texto y la imagen. Una vez satisfecho con el resultado, podrá descargar su meme para compartirlo. \n\n🔹 Tecnologías utilizadas: HTML, CSS y JavaScript para modificar dinámicamente el contenido y las propiedades.",
    image: memeImage,
    github: "https://github.com/maribelcongo/proyecto-meme",
  },
  {
    id: 2,
    title: "E-Commerce Encantada",
    description:
      "Encantada es el proyecto final de mi carrera en Desarrollo Frontend en ADA ITW. Es un e-commerce diseñado para ofrecer una experiencia de compra intuitiva y atractiva para usuarios interesados en carteras, mochilas, billeteras y riñoneras. \n\n🔹 Tecnologías utilizadas: React, Material-UI, Firebase para la gestión de usuarios y CSS para una interfaz moderna y responsive.",
    image: ecommerceImage,
    github: "https://github.com/maribelcongo/ecommerceApp",
  },
  {
    id: 3,
    title: "Lista de Tareas",
    description:
      "Esta app te ayuda a gestionar tus tareas pendientes. Permite visualizar las tareas registradas y filtrarlas en las categorías: Todas, Pendientes y Completas. \n\n🔹 Tecnologías utilizadas: React y LocalStorage para el almacenamiento de datos.",
    image: listaImage,
    github: "https://github.com/maribelcongo/lista-tareas",
  },
  {
    id: 4,
    title: "App Ahorro",
    description:
      "Aplicación web diseñada para ayudar a los usuarios a gestionar sus ahorros y gastos de manera efectiva. Permite rastrear saldos, categorizar transacciones y generar reportes de forma sencilla. \n\n🔹 Tecnologías utilizadas: HTML, CSS, JavaScript, FontAwesome y UUID.",
    image: ahorroImage,
    github: "https://github.com/maribelcongo/ahorro_app",
  },
  {
    id: 5,
    title: "App Drinks",
    description:
      "Proyec Drinks es una plataforma que ofrece recetas de bebidas, desde cócteles clásicos hasta mezclas innovadoras. Los usuarios pueden buscar bebidas por nombre o ingredientes y obtener instrucciones detalladas. \n\n🔹 Tecnologías utilizadas: HTML, SASS, JavaScript y API de bebidas.",
    image: drinksImage,
    github: "https://github.com/maribelcongo/proyect-drinks",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Mis Proyectos</h2>
      <p className="description_title">
        Aquí encontrarás algunos de mis trabajos más recientes.
      </p>

      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div
            className={`project ${index % 2 === 0 ? "left" : "right"}`}
            key={project.id}
          >
            <img src={project.image} alt={project.title} />
            <div className="info">
              <h3 className="project-title">{project.title}</h3>
              <p id="project-description">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver en GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
