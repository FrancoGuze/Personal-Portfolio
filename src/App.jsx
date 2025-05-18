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

  const saludo = () => {
    setShowCard(!showCard)
  }

  let content = showCard ? 'Show Less' : 'Show More';

  return (
    <>
      <header>
        <NavSection />

      </header>
      <main id='main'>
        <TitleSection />

        <SectionComp zone='about-section' innerText='About Me' quant={9}>
          <h3 className="personal-data">
            Hi, I’m <span>Franco</span> – a <span>Junior Front End Developer</span> focused on building responsive, accessible, and visually engaging web applications. I have experience developing with modern technologies like <span>JavaScript</span>, <span>React</span>, <span>TypeScript</span>, <span>Tailwind CSS</span>, and <span>Redux</span>, and I’m always looking to deepen my knowledge and improve the quality of my work. <br /> <br />
            Over time, I’ve built and maintained web apps, gaining practical skills in both front-end development and <span>SEO optimization</span>, particularly for <span> Tienda Nube</span> e-commerce platforms. Thanks to these efforts, I’ve helped products rank among the top search results, driving real-world impact.<br /> <br />
            I'm also familiar with tools like <span>WordPress</span>, <span>Photoshop</span>, and <span>Excel</span>, and I'm currently expanding my knowledge in areas like <span> PostgreSQL</span>, <span>Bash</span>, and <span>Docker</span>. <br /> <br />
            Whether I’m styling components or improving site performance, I’m committed to growing as a developer and delivering solid user experiences.
          </h3>

          <ul className="languages">
            <li className='title'>Languages</li>
            <li>Spanish: Native</li>
            <li>English: B2 level - Anglia Certified</li>
            {/* <li>Portuguese: Beginner - Currently Learning</li> */}
          </ul>
        </SectionComp>

        <SectionComp zone='skills-section' innerText='Skills' quant={12}>

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
            <h3 className="skills-title">Others</h3>
            <Card name='Photoshop' imgSrc='.\Images\photoshop-logo.png' />
            <Card name='Excel' imgSrc='.\Images\excel.png' />
            <Card name='Tienda Nube' imgSrc='.\Images\tiendanube.png' />
            <Card name='SEO' imgSrc='.\Images\seo.png' details='Search Engine Optimization' />
            <Card name='WordPress' imgSrc='.\Images\wordpress.png' />

          </div>
          <div className="skills">
            <h3 className="skills-title">Learning</h3>
            <Card name='PostgreSQL' imgSrc='.\Images\postgresql.png' />
            <Card name='Bash' imgSrc='.\Images\bash.png' />
            <Card name='Docker' imgSrc='.\Images\docker.png' />
          </div>

        </SectionComp>

        <SectionComp zone='projects-section' innerText='Projects' quant={10}>
          {/* <Project name='Pokedex' img='./Images/Pokedex.jpg' link='https://francoguze.github.io/Pokedex-Javascript/' techs={['html5', 'css3', 'javascript']} show /> */}
          <Project name='Calculator' img='./Images/calculator.png' link='https://francoguze.github.io/Javascript-Calculator-freeCodeCamp/' techs={['html5', 'css3', 'react', 'typescript']} position='center' show />
          <Project name='Global Temperature Graph' img='./Images/heat_map.png' link='https://francoguze.github.io/Heat-Map-freeCodeCamp/' techs={['html5', 'css3', 'javascript', 'd3js']} position='center' show />
          <Project name='U.S Educational Attainment Map' img='./Images/choropleth_map.png' link='https://francoguze.github.io/Choropleth-Map-freeCodeCamp/' techs={['html5', 'css3', 'javascript', 'd3js']} position='center' show />
          <Project name='Markdown Previewer' img='./Images/MarkdownPreviewer.png' link='https://francoguze.github.io/Markdown-Previewer-freeCodeCamp/' techs={['html5', 'css3', 'react']} position='center' show />
          <Project name='Video Game Sales Graph' img='./Images/treemap_diagram.png' link='https://francoguze.github.io/Treemap-Diagram-freeCodeCamp/' techs={['html5', 'css3', 'javascript', 'd3js']} position='center' show={showCard} />
          <Project name='Random Quote Generator' img='./Images/Random-Quote-Generator.jpg' link='https://francoguze.github.io/Random-Quote-Machine-freeCodeCamp/' techs={['html5', 'css3', 'jquery', 'bootstrap']} show={showCard} />
          <Project name='U.S GDP Graph' img='./Images/bar_chart.png' link='https://francoguze.github.io/Bar-Chart-freeCodeCamp/' techs={['html5', 'css3', 'javascript', 'd3js']} position='center' show={showCard} />
          <Project name='Web Timer' img='./Images/timer.png' link='https://francoguze.github.io/Web-Timer/' techs={['html5', 'css3', 'react', 'typescript']} position='center' show={showCard} />
          {/* <Project name='PROCESO' img='./Images/.png' link='' techs={['html5', 'css3', 'react']} position='center' show /> */}
          <Project name='Palindrome Checker' img='./Images/Palindrome-Checker.jpg' link='https://francoguze.github.io/Palindrome-Checker-freeCodeCamp/' techs={['html5', 'css3', 'javascript']} show={showCard} />
          <Project name='Pokedex freeCodeCamp' img='./Images/freeCodeCamp-Pokedex.jpg' link='https://francoguze.github.io/freeCodeCamp-Pokedex/' techs={['html5', 'css3', 'javascript']} position='center' show={showCard} />
          <Project name='Drum Machine' img='./Images/Drum-machine.png' link='https://francoguze.github.io/Drum-Machine-freeCodeCamp/' techs={['html5', 'css3', 'sass', 'bootstrap', 'react']} show={showCard} />
          <Project name='Palindrome Checker' img='./Images/Palindrome-Checker.jpg' link='https://francoguze.github.io/Palindrome-Checker-freeCodeCamp/' techs={['html5', 'css3', 'javascript']} show={showCard} />
          {/* <Project name='Pokedex V2' img='./Images/freeCodeCamp-Pokedex.jpg' link='https://francoguze.github.io/freeCodeCamp-Pokedex/' techs={['html5', 'css3', 'react']} position='center' show={showCard}/> */}

          <button className="more" onClick={saludo}>
            <h3>{content}</h3>
            <svg style={{ rotate: `${showCard ? '180deg' : ''}` }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
          </button>
        </SectionComp>
      </main>
      <FooterSection/>
       
    <img className='background_waves el1' src="./Images/background_waves.png" alt="wave" />
    <img className='background_waves el2' src="./Images/background_waves.png" alt="wave" />
    <img className='background_waves el3' src="./Images/background_waves.png" alt="wave" />
    </>
  )
}

export default App
