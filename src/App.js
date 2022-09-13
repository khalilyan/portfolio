import './App.css';
import Intro from './Components/intro/Intro';
import About from './Components/about/About';
import Contact from './Components/contact/Contact';
import Skills from './Components/skills/Skills';
import Projects from './Components/projects/Projects';
import MenuPC from './Components/menu/Menu';

function App() {
  return (
    <>
      <MenuPC/>
    <div className="App">
      <Intro/>
      <Skills/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
    </>
  );
}

export default App;
