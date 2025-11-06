import { useState } from "react";
import { PersonalData } from "./Components/aboutme-components/PersonalData";
import { SkillsComponent } from "./Components/skills-components/SkillsComponent";
import { TitleSection } from "./Components/Title-section";
import { NavSection } from "./Components/Nav-section";
import { SectionComp } from "./Components/Section-comp";
import { Project } from "./Components/Project";
import { ProjectsArea } from "./Components/projects-components/ProjectsArea";
import { FooterSection } from "./Components/Footer-section";

import "./Styles/App.css";
function App() {
  const [lang, setLang] = useState("es");

  return (
    <>
      <header>
        <NavSection onChangelang={setLang} currLang={lang} />
      </header>
      <main id="main">
        <TitleSection currLang={lang} />

        <PersonalData lang={lang} />

        <SkillsComponent lang={lang} />

        <ProjectsArea lang={lang} />
      </main>
      <FooterSection />

      <img
        className="background_waves el1"
        src="./Images/background_waves.png"
        alt="wave"
      />
      <img
        className="background_waves el2"
        src="./Images/background_waves.png"
        alt="wave"
      />
      <img
        className="background_waves el3"
        src="./Images/background_waves.png"
        alt="wave"
      />
    </>
  );
}

export default App;
