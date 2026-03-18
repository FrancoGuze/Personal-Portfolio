import { AboutSection } from './components/portfolio/about-section'
import { ContactSection } from './components/portfolio/contact-section'
import { Footer } from './components/portfolio/footer'
import { HeroSection } from './components/portfolio/hero-section'
import { Navbar } from './components/portfolio/navbar'
import { ProjectsSection } from './components/portfolio/projects-section'
import { SkillsSection } from './components/portfolio/skills-section'
import { useEffect, useState } from 'react'
import { ProjectDialog } from './components/portfolio/project-dialog'

function App() {
  const [dialog, setDialog] = useState<{
    title: string
    description: string
    paragraphs: string[]
    images: string[]
  } | null>(null)

  useEffect(() => {
    if (!dialog) {
      return
    }

    const { body, documentElement } = document
    const scrollBarWidth = window.innerWidth - documentElement.clientWidth

    body.style.setProperty("--scrollbar-compensation", `${scrollBarWidth}px`)
    body.classList.add("is-scroll-locked")

    return () => {
      body.classList.remove("is-scroll-locked")
      body.style.removeProperty("--scrollbar-compensation")
    }
  }, [dialog])

  return (
    <>
      <Navbar />
      <main className='overflow-x-hidden'>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onInfo={setDialog} />
        <ContactSection />
      </main>
      <Footer />
      <ProjectDialog
        open={!!dialog}
        title={dialog?.title}
        description={dialog?.description}
        paragraphs={dialog?.paragraphs}
        images={dialog?.images}
        onClose={() => setDialog(null)}
      />
    </>

  )
}

export default App
