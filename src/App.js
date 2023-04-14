import './App.css';
import PreLoader from './Components/PreLoader/PreLoader';
import Contact from './Sections/Contact/Contact';
import Intro from './Sections/Intro/Intro';
import Menu from './Sections/Layout/Menu';
import Projects from './Sections/Projects/Projects';
import Skills from './Sections/Skills/Skills';
import { memo } from 'react';
import MobMenu from './Sections/Layout/MobMenu';
import { useMediaQuery } from 'react-responsive'


export default memo(function App() {
 
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
 
 

  return (
    <>
    <PreLoader/>
    <div className="App">
      {
        isTabletOrMobile?<MobMenu/>:<Menu/>
      }
      <Intro/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>

    </>
  );
})

