import { SectionComp } from "../Section-comp";
import { Card } from "../card";
export const SkillsComponent = ({ lang }) => {
  return (
    <>
      <SectionComp
        zone="skills-section"
        innerText={lang == "en" ? "Skills" : "Habilidades"}
        quant={8}
      >
        <div className="skills">
          <h3 className="skills-title">Front-End</h3>
          <Card name="HTML5" imgSrc=".\Images\html5.png" />
          <Card name="CSS3" imgSrc=".\Images\css3.png" />
          <Card name="JavaScript" imgSrc=".\Images\javascript.png" />
          <Card name="React" imgSrc=".\Images\react.png" />
          <Card name="Bootstrap" imgSrc=".\Images\bootstrap.png" />
          <Card name="Tailwind" imgSrc=".\Images\tailwind.png" />
          <Card name="TypeScript" imgSrc=".\Images\typescript.png" />
          <Card name="Sass" imgSrc=".\Images\sass.png" />
          <Card name="JQuery" imgSrc=".\Images\jquery.png" />
          <Card name="Redux" imgSrc=".\Images\redux.png" />
          <Card name="D3.js" imgSrc=".\Images\d3js.png" />
        </div>
        <div className="skills">
          <h3 className="skills-title">Back-End</h3>
          <Card name="NodeJS" imgSrc=".\Images\nodejs.png" />
          <Card name="MongoDB" imgSrc=".\Images\mongodb.png" />
          <Card name="PostgreSQL" imgSrc=".\Images\postgresql.png" />
          <Card name="Express" imgSrc=".\Images\express.png" />
        </div>
        <div className="skills">
          <h3 className="skills-title">Full-Stack</h3>
          <Card name="NextJS" imgSrc=".\Images\nextjs.png" />
        </div>
        <div className="skills">
          <h3 className="skills-title">{lang == "en" ? "Others" : "Otros"}</h3>
          <Card name="Photoshop" imgSrc=".\Images\photoshop.png" />
          <Card name="Excel" imgSrc=".\Images\excel.png" />
          <Card name="Tienda Nube" imgSrc=".\Images\tiendanube.png" />
          <Card name="Figma" imgSrc=".\Images\figma.png" />
          <Card name="Amazon Web Services" imgSrc=".\Images\aws.png" />
          <Card
            name="SEO"
            imgSrc=".\Images\seo.png"
            details="Search Engine Optimization"
          />
          <Card name="WordPress" imgSrc=".\Images\wordpress.png" />
        </div>
        <div className="skills">
          <h3 className="skills-title">
            {lang == "en" ? "Learning" : "Aprendiendo"}
          </h3>
          <Card name="Bash" imgSrc=".\Images\bash.png" />
          <Card name="Docker" imgSrc=".\Images\docker.png" />
        </div>
      </SectionComp>
    </>
  );
};
