import { useState } from 'react'
import { Card } from './Components/card'
import { TitleSection } from './Components/Title-section'
import { NavSection } from './Components/Nav-section'
import { SectionComp } from './Components/Section-comp'
import { Project } from './Components/Project'


import './Styles/App.css'
function App() {
  const [showCard, setShowCard] = useState(false)

  const saludo = () => {
    setShowCard(!showCard)
  }

  let content = showCard ?  'Show Less' :'Show More' ;

  console.log(showCard ? 'mostrar' : 'oculto')
  return (
    <>
      <header>
        <NavSection />

      </header>
      <main id='main'>
        <TitleSection />

        <SectionComp zone='about-section' innerText='About Me' quant={9}>
          <h3 className="personal-data">
            Hi, my name is Franco and I am a <span>Front End Developer</span>. I am passionate about coding and web development, trying to improve my skills every day.
            I have experience in <span>SEO</span> (Search Engine Optimization) on Tienda Nube E-commerce platforms, where I successfully ranked products among the top search results</h3>

          <ul className="languages">
            <li className='title'>Languages</li>
            <li>Spanish: Native</li>
            <li>English: B2 level - Anglia Certified</li>
            <li>Portuguese: Beginner - Currently Learning</li>
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
            <Card name='JQuery' imgSrc='.\Images\jquery.png' />
            <Card name='WordPress' imgSrc='.\Images\wordpress.png' />
            <Card name='Redux' imgSrc='.\Images\redux.png' />
          </div>
          <div className='skills'>
            <h3 className="skills-title">Others</h3>
            <Card name='Photoshop' imgSrc='.\Images\photoshop-logo.png' />
            <Card name='Excel' imgSrc='.\Images\excel.png' />
            <Card name='Tienda Nube' imgSrc='.\Images\tiendanube.png' />
            <Card name='SEO' imgSrc='.\Images\seo.png' details='Search Engine Optimization' />
          </div>
          {/* <div className="skills">
            <h3 className="skills-title">Learning</h3>
            <Card name='Figma'/>
          </div> */}

        </SectionComp>

        <SectionComp zone='projects-section' innerText='Projects' quant={10}>
          <Project name='Pokedex' img='./Images/Pokedex.jpg' link='https://francoguze.github.io/Pokedex-Javascript/' techs={['html5', 'css3', 'javascript']} show />
          <Project name='Palindrome Checker' img='./Images/Palindrome-Checker.jpg' link='https://francoguze.github.io/Palindrome-Checker-freeCodeCamp/' techs={['html5', 'css3', 'javascript']} show />
          <Project name='Pokedex V2' img='./Images/freeCodeCamp-Pokedex.jpg' link='https://francoguze.github.io/freeCodeCamp-Pokedex/' techs={['html5', 'css3', 'javascript']} position='center' show />
          <Project name='Random Quote Generator' img='./Images/Random-Quote-Generator.jpg' link='https://francoguze.github.io/Random-Quote-Machine-freeCodeCamp/' techs={['html5', 'css3', 'jquery', 'bootstrap']} show />

          <Project name='Pokedex' img='./Images/Pokedex.jpg' link='https://francoguze.github.io/Pokedex-Javascript/' techs={['html5', 'css3', 'javascript']} show={showCard} />
          <Project name='Palindrome Checker' img='./Images/Palindrome-Checker.jpg' link='https://francoguze.github.io/Palindrome-Checker-freeCodeCamp/' techs={['html5', 'css3', 'javascript']} show={showCard}/>
          <Project name='Pokedex V2' img='./Images/freeCodeCamp-Pokedex.jpg' link='https://francoguze.github.io/freeCodeCamp-Pokedex/' techs={['html5', 'css3', 'javascript']} position='center' show={showCard}/>
          <Project name='Pokedex V2' img='./Images/freeCodeCamp-Pokedex.jpg' link='https://francoguze.github.io/freeCodeCamp-Pokedex/' techs={['html5', 'css3', 'javascript']} position='center' show={showCard}/>

          <button className="more" onClick={saludo}>
            <h3>{content}</h3>
            <svg style={{rotate: `${showCard ? '180deg' : ''}`}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
          </button>
        </SectionComp>
      </main>

    </>
  )
}

export default App
