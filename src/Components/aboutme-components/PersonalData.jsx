import { SectionComp } from "../Section-comp";

export const PersonalData = ({ lang }) => {
  return (
    <SectionComp
      zone="about-section"
      innerText={lang == "en" ? "About Me" : "Sobre mí"}
      quant={9}
    >
      <h3 className="personal-data">
        {lang == "es" ? (
          <>
            Hola, soy <span> Franco</span>, un{" "}
            <span>Desarrollador Web Full Stack Junior</span> enfocado en
            construir aplicaciones web responsivas, accesibles y visualmente
            atractivas. Tengo experiencia desarrollando con tecnologías modernas
            como <span>JavaScript</span>, <span>React</span>,{" "}
            <span>TypeScript</span>, <span>Tailwind CSS</span> y{" "}
            <span>Redux</span> en el <span>frontend</span> y <span>NodeJs</span>
            , <span>Express</span>,<span> MongoDB</span> y{" "}
            <span>PostgreSQL</span> en el <span>backend</span> y siempre busco
            profundizar mis conocimientos y mejorar la calidad de mi trabajo.{" "}
            <br />
            <br />A lo largo del tiempo, he construído y mantenido aplicaciones
            web, adquiriendo habilidades prácticas tanto en desarrollo front-end
            como en <span>optimización SEO</span>, especialmente para
            plataformas de comercio electrónico como <span>Tienda Nube</span>.
            Gracias a estos esfuerzos, he ayudado a que productos aparezcan
            entre los primeros resultados de búsqueda, generando un impacto
            real. <br /> <br />
            También estoy familiarizado con herramientas como{" "}
            <span>WordPress</span>, <span>Photoshop</span> y <span>Excel</span>{" "}
            y actualmente estoy ampliando mis conocimientos en áreas como{" "}
            <span>Bash</span> y <span>Docker</span>. <br /> <br />
            Estoy firmemente comprometido a crecer como desarrollador y ampliar
            mis conocimientos en las áreas del desarrollo web y así poder
            ofrecer un mejor servicio a los usuarios.
          </>
        ) : (
          <>
            Hi, I’m <span>Franco</span> – a{" "}
            <span>Junior Full Stack Web Developer</span> focused on building
            responsive, accessible, and visually engaging web applications. I
            have experience developing with modern technologies like{" "}
            <span>JavaScript</span>, <span>TypeScript</span>, <span>React</span>
            , <span>Next.js</span>, <span>Redux</span>, and{" "}
            <span>Tailwind CSS</span> on the <span>frontend</span>, as well as{" "}
            <span>Node.js</span>, <span>Express</span>, <span>MongoDB</span>,
            and <span>PostgreSQL</span> on the <span>backend</span>. I’m always
            looking to deepen my knowledge, refine my skills, and deliver
            high-quality digital experiences. <br />
            <br />
            Over time, I’ve built and maintained web apps, gaining practical
            skills in both front-end development and{" "}
            <span>SEO optimization</span>, particularly for{" "}
            <span> Tienda Nube</span> e-commerce platforms. Thanks to these
            efforts, I’ve helped products rank among the top search results,
            driving real-world impact.
            <br /> <br />
            I'm also familiar with tools like <span>WordPress</span>,{" "}
            <span>Photoshop</span>, and <span>Excel</span> and I'm currently
            expanding my knowledge in areas like <span>Bash</span>, and{" "}
            <span>Docker</span>. <br /> <br />I am firmly committed to growing
            as a developer and expanding my knowledge in the areas of web
            development, in order to provide better service to users.
          </>
        )}
      </h3>

      <ul className="languages">
        <li className="title">{lang == "en" ? "Languages" : "Lenguajes"}</li>
        <li key="spanish">
          {lang == "en" ? "Spanish: Native" : "Español: Nativo"}
        </li>
        <li key="english">
          {lang == "en"
            ? "English: B2 level - Anglia Certified"
            : "Inglés: Nivel B2 - Certificado por Anglia"}
        </li>
        {/* <li>Portuguese: Beginner - Currently Learning</li> */}
      </ul>
    </SectionComp>
  );
};
