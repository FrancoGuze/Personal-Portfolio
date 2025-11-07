import { SectionComp } from "../Section-comp";
import { Project } from "../Project";
import { useEffect, useRef, useState } from "react";
export const ProjectsArea = ({ lang }) => {
  const [showCard, setShowCard] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState({
    title: "",
    description: "",
    techs: [{ name: "", img: "" }],
  });

  const show_more_text = () => {
    setShowCard(!showCard);
  };
  const dialogRef = useRef(null);

  const openDialog = () => {
    if (
      dialogRef.current &&
      typeof dialogRef.current.showModal === "function"
    ) {
      try {
        dialogRef.current.showModal();
      } catch (e) {
        // some browsers may throw if already open; ignore
      }
      setDialogOpen(true);
    } else {
      // fallback: keep state so render can react if needed
      setDialogOpen(true);
    }
  };
  const closeDialog = () => {
    if (dialogRef.current && typeof dialogRef.current.close === "function") {
      dialogRef.current.close();
    }
    setDialogOpen(false);
  };

  let content = showCard
    ? lang == "en"
      ? "Show Less"
      : "Mostrar Menos"
    : lang == "en"
    ? "Show More"
    : "Mostrar Más";

  return (
    <>
      <SectionComp
        zone="projects-section"
        innerText={lang == "en" ? "Projects" : "Proyectos"}
        quant={10}
      >
        <dialog ref={dialogRef} onClose={() => setDialogOpen(false)}>
          <h3>{lang === "en" ? "Project info" : "Informacion del proyecto"}</h3>{" "}
          <h4>
            {lang === "en" ? "Title:" : "Título:"}{" "}
            <span>{dialogData.title}</span>
          </h4>
          <p>
            {lang === "en" ? "Project link: " : "Link del proyecto:"}{" "}
            <a target="_blank" href={dialogData.link}>
              {dialogData.link}
            </a>
          </p>
          <div className="techs-ul-father">
            <p>
              {" "}
              {lang === "en" ? "Technologies applied: " : "Tecnologías usadas:"}
            </p>
            <ul className="techs-ul-element">
              {dialogData.techs.map((tech) => (
                <li key={tech}>
                  <img
                    title={tech}
                    key={tech}
                    src={`./Images/${tech + ".png"}`}
                    alt={`${tech} img`}
                  />
                </li>
              ))}
            </ul>
          </div>
          <h4>
            {lang === "en"
              ? "Project description"
              : "Descripción del proyecto: "}
          </h4>
          <p>
            {dialogData.description
              ? dialogData.description
              : lang === "en"
              ? "Description not available"
              : "No hay descripcion"}
          </p>
          <button id="close-dialog" onClick={closeDialog}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              aria-hidden="true"
              role="img"
            >
              <title>Cerrar</title>
              <g
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 6 L18 18" />
                <path d="M18 6 L6 18" />
              </g>
            </svg>
          </button>
        </dialog>
        <Project
          dialogHandler={openDialog}
          dialogDataHandler={setDialogData}
          name={
            lang == "en"
              ? "'La Santolina' Ecommerce"
              : "Tienda online 'La Santolina'"
          }
          img="./Images/LaSantolina.png"
          position={"center"}
          link="https://la-santolina.vercel.app/tienda"
          techs={["nextjs", "mongodb", "tailwind", "typescript", "html5",'aws',"figma"]}
          show
          description={
            lang === "en"
              ? "This e-commerce project was built with Next.js, MongoDB Atlas, Tailwind CSS, and TypeScript, combining modern front-end development with server-side rendering and dynamic data handling. It provides a complete online shopping experience with product browsing, category filtering, cart management, and an integrated checkout powered by the Mercado Pago API (Checkout Pro) for secure payments. Product images are hosted on AWS S3, ensuring fast delivery and scalability, while MongoDB Atlas manages product, user, and order data. The application also includes a fully functional admin panel, allowing product management, stock updates, and order tracking directly from the browser. Next.js handles caching and server-side rendering to improve performance and SEO, and the entire site is deployed on Vercel for fast and reliable hosting. The responsive layout is styled with Tailwind CSS, adapting seamlessly across mobile, tablet, and desktop. This project focuses on building a robust and maintainable e-commerce platform that connects front-end and back-end technologies to create a smooth, secure, and scalable shopping experience."
              : "Este proyecto de e-commerce fue desarrollado con Next.js, MongoDB Atlas, Tailwind CSS y TypeScript, combinando un desarrollo front-end moderno con renderizado del lado del servidor y manejo dinámico de datos. Ofrece una experiencia de compra completa con exploración de productos, filtrado por categorías, gestión de carrito y un proceso de pago integrado mediante la API de Mercado Pago (Checkout Pro) para realizar pagos de forma segura. Las imágenes de los productos se almacenan en AWS S3, lo que garantiza una entrega rápida y escalable, mientras que MongoDB Atlas gestiona los datos de productos, usuarios y pedidos. La aplicación incluye además un panel de administración completamente funcional, desde el cual se pueden gestionar productos, actualizar el stock y revisar pedidos directamente desde el navegador. Next.js se encarga del cacheado y el renderizado del lado del servidor para mejorar el rendimiento y el SEO, y todo el sitio está desplegado en Vercel, asegurando velocidad y estabilidad en la entrega. El diseño, construido con Tailwind CSS, es totalmente responsivo y se adapta sin problemas a móviles, tablets y escritorios. Este proyecto se centra en construir una plataforma de comercio electrónico sólida y mantenible, integrando tecnologías de front-end y back-end para ofrecer una experiencia de compra fluida, segura y escalable."
          }
        />
        <Project
          dialogHandler={openDialog}
          dialogDataHandler={setDialogData}
          name={
            lang == "en"
              ? "Global Temperature Graph"
              : "Gráfico de Temperatura Global"
          }
          img="./Images/heat_map.png"
          link="https://francoguze.github.io/Heat-Map-freeCodeCamp/"
          techs={["html5", "css3", "javascript", "d3js"]}
          position="center"
          show
          description={
            lang == "en"
              ? "This project visualizes global temperature variations over time using D3.js. I started by fetching historical temperature data from a JSON source and processing it into a structured dataset of years and months. Each temperature value is represented as a colored rectangle on a heat map, where the color scale reflects the degree of variation from the global average. D3.js handles the scales, axes, and interactive tooltips that display specific values when hovering over the map. The goal was to build an intuitive visualization that helps users perceive long-term climate trends through color and pattern rather than raw numbers."
              : "Este proyecto visualiza las variaciones de temperatura global a lo largo del tiempo utilizando D3.js. Comencé obteniendo datos históricos de temperatura desde una fuente JSON y procesándolos en un conjunto de datos estructurado por años y meses. Cada valor de temperatura se representa como un rectángulo de color en un mapa de calor, donde la escala cromática refleja el grado de variación respecto al promedio global. D3.js gestiona las escalas, los ejes y los tooltips interactivos que muestran valores específicos al pasar el cursor. El objetivo fue construir una visualización intuitiva que permita percibir las tendencias climáticas a largo plazo a través del color y el patrón, en lugar de solo números."
          }
        />

        <Project
          dialogHandler={openDialog}
          dialogDataHandler={setDialogData}
          name={
            lang == "en"
              ? "U.S Educational Attainment Map"
              : "Mapa de Educación en EE.UU."
          }
          img="./Images/choropleth_map.png"
          link="https://francoguze.github.io/Choropleth-Map-freeCodeCamp/"
          techs={["html5", "css3", "javascript", "d3js"]}
          position="center"
          show
          description={
            lang == "en"
              ? "This choropleth map shows educational attainment levels across U.S. counties. The project combines two data sources: GeoJSON data for the geographic boundaries of counties and a dataset of education statistics. I used the topojson-client library to convert the TopoJSON data into GeoJSON format, which D3.js can render as SVG paths. Each county is colored according to the percentage of adults with higher education, using a sequential color scale for clarity. I added tooltips to display county names and statistics, and drew state borders for visual structure. The result is a map that makes it easy to compare education levels across regions through color and geography."
              : "Este mapa coroplético muestra los niveles de educación en los distintos condados de Estados Unidos. El proyecto combina dos fuentes de datos: información geográfica en formato GeoJSON para los límites de los condados y un conjunto de estadísticas educativas. Utilicé la librería topojson-client para convertir los datos TopoJSON en GeoJSON, que D3.js puede renderizar como trayectorias SVG. Cada condado se colorea según el porcentaje de adultos con educación superior, empleando una escala de color secuencial para una lectura más clara. Se añadieron tooltips que muestran el nombre y los datos de cada condado, además de bordes estatales para dar contexto visual. El resultado es un mapa que permite comparar fácilmente los niveles educativos por región mediante color y geografía."
          }
        />

        <Project
          dialogHandler={openDialog}
          dialogDataHandler={setDialogData}
          name={
            lang == "en"
              ? "Video Game Sales Graph"
              : "Gráfico de Ventas de Videojuegos"
          }
          img="./Images/treemap_diagram.png"
          link="https://francoguze.github.io/Treemap-Diagram-freeCodeCamp/"
          techs={["html5", "css3", "javascript", "d3js"]}
          position="center"
          show
          description={
            lang == "en"
              ? "In this project, I used D3.js to build a treemap diagram that displays global video game sales by platform and genre. The data comes in a hierarchical JSON structure, which D3’s layout utilities transform into nested rectangles. Each rectangle’s size represents total sales volume, and its color indicates the game category. I included interactive tooltips that show the platform, genre, and exact sales figures when hovered. The legend clarifies the color groups and helps interpret the visualization. This project was a good exercise in working with hierarchical data and representing relationships visually through layout and proportion."
              : "En este proyecto utilicé D3.js para construir un diagrama de árbol (treemap) que muestra las ventas globales de videojuegos según plataforma y género. Los datos provienen de una estructura JSON jerárquica, y usando D3, los transformamos en un gráfico de rectángulos anidados. El tamaño de cada rectángulo representa el volumen total de ventas, mientras que el color indica la categoría del juego. Agregué tooltips interactivos que muestran la plataforma, el género y las cifras exactas de ventas al pasar el cursor. Una leyenda ayuda a interpretar los grupos de color y facilita la lectura del gráfico. Este proyecto fue un buen ejercicio para trabajar con datos jerárquicos y representar relaciones de manera visual mediante la disposición y la proporción."
          }
        />

        <Project
          dialogHandler={openDialog}
          dialogDataHandler={setDialogData}
          name={lang == "en" ? "U.S GDP Graph" : "Gráfico del PIB de EE.UU."}
          img="./Images/bar_chart.png"
          link="https://francoguze.github.io/Bar-Chart-freeCodeCamp/"
          techs={["html5", "css3", "javascript", "d3js"]}
          position="center"
          show={showCard}
          description={
            lang == "en"
              ? "This bar chart illustrates the Gross Domestic Product (GDP) of the United States over several decades. The project uses D3.js to fetch economic data from a JSON file and render it as scalable SVG bars. Each bar corresponds to a specific quarter, and its height reflects the GDP value for that period. D3’s scales and axes are used to translate data values into visual dimensions, while tooltips show the exact date and value when hovering. The goal was to turn a long list of economic data into a visual format that tells a clear story of growth over time."
              : "Este gráfico de barras representa el Producto Interno Bruto (PIB) de Estados Unidos a lo largo de varias décadas. El proyecto utiliza D3.js para obtener datos económicos desde un archivo JSON y renderizarlos como barras SVG escalables. Cada barra corresponde a un trimestre específico y su altura refleja el valor del PIB en ese período. Las escalas y ejes de D3 permiten traducir los valores numéricos en dimensiones visuales, mientras que los tooltips muestran la fecha y el valor exactos al pasar el cursor. El objetivo fue convertir una larga lista de datos económicos en una visualización que cuente una historia clara de crecimiento a lo largo del tiempo."
          }
        />

        <Project
          dialogHandler={openDialog}
          dialogDataHandler={setDialogData}
          name={
            lang == "en" ? "Markdown Previewer" : "Visualizador de Markdown"
          }
          img="./Images/MarkdownPreviewer.png"
          link="https://francoguze.github.io/Markdown-Previewer-freeCodeCamp/"
          techs={["html5", "css3", "react"]}
          position="center"
          show={showCard}
          description={
            lang == "en"
              ? "This project is a live Markdown editor built with React. It lets users write Markdown text and instantly see the rendered HTML output side by side. The app manages state through React hooks, updating the preview in real time as the user types. I used a Markdown parsing library to safely convert the input into formatted HTML, supporting common syntax like headers, lists, links, and code blocks. The layout is built with HTML and CSS, keeping the design simple and responsive. This project helped me explore dynamic rendering and state management in React through a practical, interactive tool."
              : "Este proyecto es un editor de Markdown en tiempo real construido con React. Permite escribir texto en formato Markdown y ver de inmediato el resultado renderizado en HTML, uno al lado del otro. La aplicación gestiona el estado mediante hooks de React, actualizando la vista previa a medida que el usuario escribe. Se utilizó una librería de análisis de Markdown para convertir el texto en HTML de forma segura, admitiendo encabezados, listas, enlaces y bloques de código. El diseño se realizó con HTML y CSS, manteniendo una interfaz simple y adaptable. Este proyecto me permitió practicar el renderizado dinámico y la gestión de estado en React a través de una herramienta práctica e interactiva."
          }
        />

        <Project
          dialogHandler={openDialog}
          dialogDataHandler={setDialogData}
          name={lang == "en" ? "Calculator" : "Calculadora"}
          img="./Images/calculator.png"
          link="https://francoguze.github.io/Javascript-Calculator-freeCodeCamp/"
          techs={["html5", "css3", "react", "typescript"]}
          position="center"
          show={showCard}
          description={
            lang == "en"
              ? "This calculator was built with React and TypeScript to practice component-based logic and typed state management. It performs basic arithmetic operations, handles keyboard input, and maintains correct operator precedence. TypeScript ensures strong typing across components, helping to prevent runtime errors. I used CSS Flexbox to organize the layout and added small transitions for visual feedback when pressing buttons. The project focuses on combining logic and interface behavior, showing how React and TypeScript work together to create reliable interactive applications."
              : "Esta calculadora fue desarrollada con React y TypeScript para practicar la lógica basada en componentes y la gestión de estado tipado. Realiza operaciones aritméticas básicas, acepta entrada desde el teclado y respeta la precedencia correcta de los operadores. TypeScript garantiza un tipado fuerte entre los componentes, ayudando a prevenir errores en tiempo de ejecución. Utilicé Flexbox en CSS para organizar la estructura y agregué pequeñas transiciones para la retroalimentación visual al presionar los botones. El proyecto se centra en combinar la lógica y el comportamiento de la interfaz, mostrando cómo React y TypeScript pueden trabajar juntos para crear aplicaciones interactivas y fiables."
          }
        />

        <Project
          dialogHandler={openDialog}
          dialogDataHandler={setDialogData}
          name={
            lang == "en"
              ? "Random Quote Generator"
              : "Generador de Frases Aleatorias"
          }
          img="./Images/Random-Quote-Generator.jpg"
          link="https://francoguze.github.io/Random-Quote-Machine-freeCodeCamp/"
          techs={["html5", "css3", "jquery", "bootstrap"]}
          show={showCard}
          description={
            lang == "en"
              ? "This app displays a random quote every time the user clicks a button. It was built with jQuery, Bootstrap, HTML5, and CSS3 as part of the freeCodeCamp Front End Libraries certification. The project includes a color adaptation function that detects the brightness of the background and adjusts text and button colors for proper contrast—light text on dark backgrounds and vice versa. Each quote and author appear with smooth transitions, and users can share quotes directly to Twitter with a single click. The layout is built with Bootstrap’s grid system, keeping it simple and adaptable. This project combines DOM manipulation, visual feedback, and event handling to create an interactive and visually dynamic interface."
              : "Esta aplicación muestra una frase aleatoria cada vez que el usuario hace clic en un botón. Fue construida con jQuery, Bootstrap, HTML5 y CSS3 como parte de la certificación de Librerías Front End de freeCodeCamp. Incluye una función de adaptación de color que detecta la luminosidad del fondo y ajusta los colores del texto y los botones para mantener el contraste adecuado: texto claro sobre fondo oscuro y viceversa. Cada frase y su autor aparecen con transiciones suaves, y el usuario puede compartirlas directamente en Twitter con un solo clic. El diseño utiliza el sistema de rejilla de Bootstrap para mantener una estructura simple y adaptable. Este proyecto combina manipulación del DOM, retroalimentación visual y manejo de eventos para crear una interfaz interactiva y visualmente dinámica."
          }
        />

        <Project
          dialogHandler={openDialog}
          dialogDataHandler={setDialogData}
          name={lang == "en" ? "Web Timer" : "Temporizador Web"}
          img="./Images/timer.png"
          link="https://francoguze.github.io/Web-Timer/"
          techs={["html5", "css3", "react", "typescript"]}
          position="center"
          show={showCard}
          description={
            lang == "en"
              ? "This timer app was created with React and TypeScript. It lets users start, pause, and reset a timer through a simple and intuitive interface. React hooks manage the timer’s state and updates, while TypeScript ensures predictable behavior and clear component structure. The layout is styled with CSS Flexbox for alignment and readability. I designed the project as a compact example of how to handle time-based state and user interaction in React using a clean, component-driven approach."
              : "Esta aplicación de temporizador fue creada con React y TypeScript. Permite iniciar, pausar y reiniciar un contador a través de una interfaz simple e intuitiva. Los hooks de React gestionan el estado y las actualizaciones del temporizador, mientras que TypeScript garantiza un comportamiento predecible y una estructura de componentes clara. El diseño está realizado con CSS Flexbox para mantener la alineación y la legibilidad. Concebí este proyecto como un ejemplo compacto de cómo manejar estado dependiente del tiempo y la interacción del usuario en React, aplicando un enfoque limpio basado en componentes."
          }
        />

        <Project
          dialogHandler={openDialog}
          dialogDataHandler={setDialogData}
          name={lang == "en" ? "Pokedex freeCodeCamp" : "Pokédex freeCodeCamp"}
          img="./Images/freeCodeCamp-Pokedex.jpg"
          link="https://francoguze.github.io/freeCodeCamp-Pokedex/"
          techs={["html5", "css3", "javascript"]}
          position="center"
          show={showCard}
          description={
            lang == "en"
              ? "This project recreates a functional Pokédex using HTML, CSS, and JavaScript. It allows users to search Pokémon by name or ID and displays key details such as their types, stats, and images. The app fetches real data from the PokéAPI, processes it, and dynamically updates the DOM to show the results. The interface is inspired by the look of a classic Pokédex and was designed to be accessible and mobile-friendly. This project focuses on using asynchronous requests and DOM manipulation to build an interactive experience powered by external API data."
              : "Este proyecto recrea una Pokédex funcional utilizando HTML, CSS y JavaScript. Permite buscar Pokémon por nombre o por ID, mostrando detalles como sus tipos, estadísticas e imagen. La aplicación obtiene los datos reales desde la PokéAPI, los procesa y actualiza dinámicamente el DOM para mostrar los resultados. La interfaz se inspira en la apariencia de una Pokédex clásica y está diseñada para ser accesible y adaptable a dispositivos móviles. Este proyecto se centra en el uso de solicitudes asincrónicas y manipulación del DOM para construir una experiencia interactiva impulsada por datos externos."
          }
        />

        <Project
          dialogHandler={openDialog}
          dialogDataHandler={setDialogData}
          name={lang == "en" ? "Drum Machine" : "Caja de Ritmos"}
          img="./Images/Drum-machine.png"
          link="https://francoguze.github.io/Drum-Machine-freeCodeCamp/"
          techs={["html5", "css3", "sass", "bootstrap", "react"]}
          show={showCard}
          description={
            lang == "en"
              ? "This Drum Machine lets users play sound samples by clicking pads or pressing corresponding keyboard keys. I built it using React along with SASS, Bootstrap, and HTML5/CSS3. Each pad triggers a different audio clip, and the interface gives visual feedback when a sound is played. The app manages active sounds and volume through React’s state and props system. Styling is modular and responsive, handled with SASS and Bootstrap for quick layout adjustments. This project combines user interaction, sound playback, and React’s component logic in a small but engaging creative application."
              : "Esta Caja de Ritmos permite reproducir sonidos al hacer clic en los pads o presionar las teclas correspondientes del teclado. La construí utilizando React junto con SASS, Bootstrap y HTML5/CSS3. Cada pad activa un clip de audio diferente, y la interfaz muestra retroalimentación visual al reproducirse un sonido. La aplicación gestiona los sonidos activos y el volumen mediante el sistema de estado y props de React. El estilo es modular y adaptable, realizado con SASS y Bootstrap para ajustar fácilmente la disposición. Este proyecto combina interacción del usuario, reproducción de sonido y lógica de componentes en React dentro de una aplicación creativa y atractiva."
          }
        />

        {/* <Project
        dialogHandler={openDialog}
          dialogDataHandler={setDialogData} name={lang == 'en' ? 'Pokedex V2' : 'Pokédex V2'} img='./Images/freeCodeCamp-Pokedex.jpg' link='https://francoguze.github.io/freeCodeCamp-Pokedex/' techs={['html5', 'css3', 'react']} position='center' show={showCard}/> */}

        <button className="more" onClick={show_more_text}>
          <h3>{content}</h3>
          <svg
            style={{ rotate: `${showCard ? "180deg" : ""}` }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </button>
      </SectionComp>
    </>
  );
};
