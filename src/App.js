import './App.css';
import PreLoader from './Components/PreLoader/PreLoader';
import Contact from './Sections/Contact/Contact';
import Intro from './Sections/Intro/Intro';
import Menu from './Sections/Layout/Menu';
import Projects from './Sections/Projects/Projects';
import Skills from './Sections/Skills/Skills';
import { memo, useRef, useState } from 'react';
import MobMenu from './Sections/Layout/MobMenu';
import { useMediaQuery } from 'react-responsive'
import Nosie from './Components/Nosie/Nosie';


export default memo(function App() {
 
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })


  const [cursorX,setCursorX] = useState();  
  const [cursorY,setCursorY] = useState();
  
 window.addEventListener('mousemove',(e)=>{
  setCursorX(e.clientX)
  setCursorY(e.clientY)
 })
 


  return (
    <>
    <Nosie/>
    {
      !isTabletOrMobile?<div 
      className='cursor'
      style={{
            left: cursorX+'px',
            top: cursorY+'px'
          }}
      ></div>: null
    }
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

