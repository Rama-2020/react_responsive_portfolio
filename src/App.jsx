import About from './sections/About/About'
import './App.css'
import Projects from './sections/Projects/Projects'
import { projectsData } from './dummyData/dummyData'
import Skills from './sections/Skills/Skill'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'


function App() {
  return (
    <>
      <About />
      <Projects data={projectsData}/>
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
