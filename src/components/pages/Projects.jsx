import "./Projects.scss";

const projectsData = [
  {
    id: 1,
    title: "Generador de Memes",
    description:
      "Este proyecto trata de un generador de meme, donde el usuario puede manipular el texto y la imagen del meme. Y cuando quede conforme, podrá descargar su meme para usarlo o compartirlo donde quiera.                 Conocimientos en práctica: HTML, CSS y JavaScript para modificar dinámicamente su contenido y propiedades.                     ",

    image: "/assets/meme.png",
    github: "https://github.com/maribelcongo/proyecto-meme",
  },
  {
    id: 2,
    title: "E-Commerce Encantada",
    description:
      "Encantada es el proyecto final de la carrera de Desarrollo Frontend en ADAITW. Este e-commerce está diseñado para ofrecer una experiencia de compra intuitiva y atractiva para los usuarios interesados en carteras, mochilas, billeteras y riñoneras. El proyecto utiliza React ,Material-UI ffirebase para el manejo de la informacion del usuario ,css para crear una interfaz moderna y responsive..",
    image: "/assets/encantada-ecommerce.jpg",
    github: "https://github.com/maribelcongo/ecommeceApp",
  },
  {
    id: 3,
    title: "Lista de Tareas",
    description:
      "  esta app tiene como fin ayudarte a llevar un registro de tus tareas pendientes, mostrando las tareas registradas y permitiendo filtrarlas con las categorías: Todas, Pendientes, y Completas  desarrollada  con React y almacenamiento en LocalStorage. ",

    image: "/assets/todo-list.jpg",
    github: "https://github.com/maribelcongo/lista-tareas",
  },
  {
    id: 4,
    title: "app ahorro",
    description:
      " es una aplicación web diseñada para ayudar a los usuarios a gestionar sus ahorros y gastos de manera efectiva. La app ofrece funciones para rastrear saldos, categorizar transacciones y generar reportes, todo mientras mantiene una interfaz amigable, fue desarrollada con html, css, javascript,font awesomwe uuid ",
    image: "/assets/todo-list.jpg",
    github: "https://github.com/maribelcongo/ahorro_app",
  },
  {
    id: 5,
    title: "app drinks",
    description:
      "Proyec Drinks es una plataforma que ofrece una amplia gama de recetas de bebidas, desde cócteles clásicos hasta mezclas innovadoras. Los usuarios pueden crear, modificar y buscar bebidas por nombre o por ingredientes, y obtener instrucciones detalladas para prepararlas, desarrollada con html,sass,javascript api de bebidas.",
    image: "/assets/todo-list.jpg",
    github: "https://github.com/maribelcongo/proyect-drinks",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Mis Proyectos</h2>
      <p>Aquí encontrarás algunos de mis trabajos más recientes.</p>

      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div
            className={`project ${index % 2 === 0 ? "left" : "right"}`}
            key={project.id}
          >
            <img src={project.image} alt={project.title} />
            <div className="info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
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
