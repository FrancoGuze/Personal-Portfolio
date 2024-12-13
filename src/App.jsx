// import { useState } from 'react'
import { Card } from './Components/card'
import { TitleSection } from './Components/Title-section'
import { NavSection } from './Components/Nav-section'
import { SectionComp } from './Components/Section-comp'
import { Project } from './Components/Project'
import './Styles/App.css'
function App() {
  // const [count, setCount] = useState(0)

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
          <Project name='Pokedex' img='./Images/Pokedex.jpg' />
          <Project name='Palindrome Checker' img='./Images/Palindrome-Checker.jpg' link='https://francoguze.github.io/Palindrome-Checker-freeCodeCamp/' />
          <Project name='Pokedex' img='./Images/Pokedex.jpg' />
          <Project name='Pokedex' img='./Images/Pokedex.jpg' techs = {['javascript','css3']}/>

        </SectionComp>
      </main>

    </>
  )
}

export default App
