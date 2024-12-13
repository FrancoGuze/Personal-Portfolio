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
            <Card name='HTML5' imgSrc='public\images\html5.png' />
            <Card name='CSS3' imgSrc='public\images\css3.png' />
            <Card name='JavaScript' imgSrc='public\images\javascript.png' />
            <Card name='React' imgSrc='public\images\react.png' />
            <Card name='Bootstrap' imgSrc='public\images\bootstrap.png' />
            <Card name='JQuery' imgSrc='public\images\jquery.png' />
            <Card name='WordPress' imgSrc='public\images\wordpress.png' />
            <Card name='Redux' imgSrc='public\images\redux.png' />
          </div>
          <div className='skills'>
            <h3 className="skills-title">Others</h3>
            <Card name='Photoshop' imgSrc='public\images\photoshop-logo.png' />
            <Card name='Excel' imgSrc='public\images\excel.png' />
            <Card name='Tienda Nube' imgSrc='public\images\tiendanube.png' />
            <Card name='SEO' imgSrc='public\images\seo.png' details='Search Engine Optimization' />
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
