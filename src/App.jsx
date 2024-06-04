import About from './sections/About/About'
import './App.css'
import Projects from './sections/Projects/Projects'
import { projectsData } from './dummyData/dummyData'


function App() {
  return (
    <>
      <About />
      <Projects data={projectsData}/>
    </>
  )
}

export default App
