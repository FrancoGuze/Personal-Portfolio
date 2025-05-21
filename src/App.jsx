import { useState } from 'react'
import { Card } from './Components/card'
import { TitleSection } from './Components/Title-section'
import { NavSection } from './Components/Nav-section'
import { SectionComp } from './Components/Section-comp'
import { Project } from './Components/Project'
import { FooterSection } from './Components/Footer-section'


import './Styles/App.css'
function App() {
  const [showCard, setShowCard] = useState(false)
  const [lang,setLang] = useState('es')
  
  const show_more_text = () => {
    setShowCard(!showCard)
  }

  let content = showCard ? lang == 'en' ? "Show Less" : "Mostrar Menos" : lang == 'en' ? "Show More" : "Mostrar Más";

  return (
    <>
      <header>
        <NavSection onChangelang={setLang} currLang={lang}/>

      </header>
      <main id='main'>
        <TitleSection currLang={lang} />

        <SectionComp zone='about-section' innerText={lang == 'en' ? 'About Me' : "Sobre mi"} quant={9}>
          <h3 className="personal-data">

            {lang == 'es' ?
              <>
                Hola, soy < span > Franco</span>, un <span>Desarrollador Front End Junior</span> enfocado en construir aplicaciones web responsivas, accesibles y visualmente atractivas. Tengo experiencia desarrollando con tecnologías modernas como <span>JavaScript</span>, <span>React</span>, <span>TypeScript</span>, <span>Tailwind CSS</span> y <span>Redux</span> y siempre busco profundizar mis conocimientos y mejorar la calidad de mi trabajo. <br /> <br />
                A lo largo del tiempo, he construído y mantenido aplicaciones web, adquiriendo habilidades prácticas tanto en desarrollo front-end como en <span>optimización SEO</span>, especialmente para plataformas de comercio electrónico como <span>Tienda Nube</span>. Gracias a estos esfuerzos, he ayudado a que productos aparezcan entre los primeros resultados de búsqueda, generando un impacto real. <br /> <br />
                También estoy familiarizado con herramientas como <span>WordPress</span>, <span>Photoshop</span> y <span>Excel</span> y actualmente estoy ampliando mis conocimientos en áreas como <span>PostgreSQL</span>, <span>Bash</span> y <span>Docker</span>. <br /> <br />
                Estoy firmemente comprometido a crecer como desarrollador y ampliar mis conocimientos en las areas del desarrollo web, y así poder ofrecer un mejor servicio a los usuarios.
              </>
              :
              <>
              Hi, I’m <span>Franco</span> – a <span>Junior Front End Developer</span> focused on building responsive, accessible, and visually engaging web applications. I have experience developing with modern technologies like <span>JavaScript</span>, <span>React</span>, <span>TypeScript</span>, <span>Tailwind CSS</span>, and <span>Redux</span> and I’m always looking to deepen my knowledge and improve the quality of my work. <br /> <br />
                Over time, I’ve built and maintained web apps, gaining practical skills in both front-end development and <span>SEO optimization</span>, particularly for <span> Tienda Nube</span> e-commerce platforms. Thanks to these efforts, I’ve helped products rank among the top search results, driving real-world impact.<br /> <br />
                I'm also familiar with tools like <span>WordPress</span>, <span>Photoshop</span>, and <span>Excel</span> and I'm currently expanding my knowledge in areas like <span> PostgreSQL</span>, <span>Bash</span>, and <span>Docker</span>. <br /> <br />
                I am firmly committed to growing as a developer and expanding my knowledge in the areas of web development, in order to provide better service to users.
                </>
            }


          </h3>

          <ul className="languages">
            <li className='title'>{lang == 'en' ? "Languages":"Lenguajes"}</li>
            <li>{lang == 'en' ? "Spanish: Native":"Español: Nativo"}</li>
            <li>{lang == 'en' ? "English: B2 level - Anglia Certified":"Inglés: Nivel B2 - Certificado por Anglia"}</li>
            {/* <li>Portuguese: Beginner - Currently Learning</li> */}
          </ul>
        </SectionComp>

        <SectionComp zone='skills-section' innerText={lang == 'en' ? 'Skills' : "Habilidades"} quant={12}>

          <div className='skills'>
            <h3 className="skills-title">Front-End</h3>
            <Card name='HTML5' imgSrc='.\Images\html5.png' />
            <Card name='CSS3' imgSrc='.\Images\css3.png' />
            <Card name='JavaScript' imgSrc='.\Images\javascript.png' />
            <Card name='React' imgSrc='.\Images\react.png' />
            <Card name='Bootstrap' imgSrc='.\Images\bootstrap.png' />
            <Card name='Tailwind' imgSrc='.\Images\tailwind.png' />
            <Card name='TypeScript' imgSrc='.\Images\typescript.png' />
            <Card name='Sass' imgSrc='.\Images\sass.png' />
            <Card name='JQuery' imgSrc='.\Images\jquery.png' />
            <Card name='Redux' imgSrc='.\Images\redux.png' />
            <Card name='D3.js' imgSrc='.\Images\d3js.png' />

          </div>
          <div className='skills'>
            <h3 className="skills-title">{lang == 'en' ? 'Others' : "Otros"}</h3>
            <Card name='Photoshop' imgSrc='.\Images\photoshop-logo.png' />
            <Card name='Excel' imgSrc='.\Images\excel.png' />
            <Card name='Tienda Nube' imgSrc='.\Images\tiendanube.png' />
            <Card name='SEO' imgSrc='.\Images\seo.png' details='Search Engine Optimization' />
            <Card name='WordPress' imgSrc='.\Images\wordpress.png' />

          </div>
          <div className="skills">
            <h3 className="skills-title">{lang == 'en' ? 'Learning' : "Aprendiendo"}</h3>
            <Card name='PostgreSQL' imgSrc='.\Images\postgresql.png' />
            <Card name='Bash' imgSrc='.\Images\bash.png' />
            <Card name='Docker' imgSrc='.\Images\docker.png' />
          </div>

        </SectionComp>

        <SectionComp zone='projects-section' innerText={lang == 'en' ? 'Projects' : "Proyectos"} quant={10}>
           {/* <Project name={lang == 'en' ? 'Pokedex' : 'Pokédex'} img='./Images/Pokedex.jpg' link='https://francoguze.github.io/Pokedex-Javascript/' techs={['html5', 'css3', 'javascript']} show /> */}
  <Project name={lang == 'en' ? 'Calculator' : 'Calculadora'} img='./Images/calculator.png' link='https://francoguze.github.io/Javascript-Calculator-freeCodeCamp/' techs={['html5', 'css3', 'react', 'typescript']} position='center' show />
  <Project name={lang == 'en' ? 'Global Temperature Graph' : 'Gráfico de Temperatura Global'} img='./Images/heat_map.png' link='https://francoguze.github.io/Heat-Map-freeCodeCamp/' techs={['html5', 'css3', 'javascript', 'd3js']} position='center' show />
  <Project name={lang == 'en' ? 'U.S Educational Attainment Map' : 'Mapa de Educación en EE.UU.'} img='./Images/choropleth_map.png' link='https://francoguze.github.io/Choropleth-Map-freeCodeCamp/' techs={['html5', 'css3', 'javascript', 'd3js']} position='center' show />
  <Project name={lang == 'en' ? 'Markdown Previewer' : 'Visualizador de Markdown'} img='./Images/MarkdownPreviewer.png' link='https://francoguze.github.io/Markdown-Previewer-freeCodeCamp/' techs={['html5', 'css3', 'react']} position='center' show />
  <Project name={lang == 'en' ? 'Video Game Sales Graph' : 'Gráfico de Ventas de Videojuegos'} img='./Images/treemap_diagram.png' link='https://francoguze.github.io/Treemap-Diagram-freeCodeCamp/' techs={['html5', 'css3', 'javascript', 'd3js']} position='center' show={showCard} />
  <Project name={lang == 'en' ? 'Random Quote Generator' : 'Generador de Frases Aleatorias'} img='./Images/Random-Quote-Generator.jpg' link='https://francoguze.github.io/Random-Quote-Machine-freeCodeCamp/' techs={['html5', 'css3', 'jquery', 'bootstrap']} show={showCard} />
  <Project name={lang == 'en' ? 'U.S GDP Graph' : 'Gráfico del PIB de EE.UU.'} img='./Images/bar_chart.png' link='https://francoguze.github.io/Bar-Chart-freeCodeCamp/' techs={['html5', 'css3', 'javascript', 'd3js']} position='center' show={showCard} />
  <Project name={lang == 'en' ? 'Web Timer' : 'Temporizador Web'} img='./Images/timer.png' link='https://francoguze.github.io/Web-Timer/' techs={['html5', 'css3', 'react', 'typescript']} position='center' show={showCard} />
  {/* <Project name={lang == 'en' ? 'PROCESS' : 'PROCESO'} img='./Images/.png' link='' techs={['html5', 'css3', 'react']} position='center' show /> */}
  {/* <Project name={lang == 'en' ? 'Palindrome Checker' : 'Verificador de Palíndromos'} img='./Images/Palindrome-Checker.jpg' link='https://francoguze.github.io/Palindrome-Checker-freeCodeCamp/' techs={['html5', 'css3', 'javascript']} show={showCard} /> */}
  <Project name={lang == 'en' ? 'Pokedex freeCodeCamp' : 'Pokédex freeCodeCamp'} img='./Images/freeCodeCamp-Pokedex.jpg' link='https://francoguze.github.io/freeCodeCamp-Pokedex/' techs={['html5', 'css3', 'javascript']} position='center' show={showCard} />
  <Project name={lang == 'en' ? 'Drum Machine' : 'Caja de Ritmos'} img='./Images/Drum-machine.png' link='https://francoguze.github.io/Drum-Machine-freeCodeCamp/' techs={['html5', 'css3', 'sass', 'bootstrap', 'react']} show={showCard} />
  <Project name={lang == 'en' ? 'Palindrome Checker' : 'Verificador de Palíndromos'} img='./Images/Palindrome-Checker.jpg' link='https://francoguze.github.io/Palindrome-Checker-freeCodeCamp/' techs={['html5', 'css3', 'javascript']} position='center' show={showCard} />
  {/* <Project name={lang == 'en' ? 'Pokedex V2' : 'Pokédex V2'} img='./Images/freeCodeCamp-Pokedex.jpg' link='https://francoguze.github.io/freeCodeCamp-Pokedex/' techs={['html5', 'css3', 'react']} position='center' show={showCard}/> */}

          <button className="more" onClick={show_more_text}>
            <h3>{content}</h3>
            <svg style={{ rotate: `${showCard ? '180deg' : ''}` }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
          </button>
        </SectionComp>
      </main >
      <FooterSection />

      <img className='background_waves el1' src="./Images/background_waves.png" alt="wave" />
      <img className='background_waves el2' src="./Images/background_waves.png" alt="wave" />
      <img className='background_waves el3' src="./Images/background_waves.png" alt="wave" />
    </>
  )
}

export default App


