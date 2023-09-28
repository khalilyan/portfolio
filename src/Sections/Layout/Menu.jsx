import React, { useState,useRef } from 'react'
import { menu } from './sections'
import './Menu.css'
import { LayoutGroup } from 'framer-motion'
import { motion } from 'framer-motion'
import Btn1 from '../../Components/Buttons/Btn1/Btn1'
import MusicWave from '../../Components/MusicWave/MusicWave'
import track from './tristam-and-braken-frame-of-mind-monstercat-release.mp3'
import MessageModal from '../../Components/Modals/MessageModal'



export default function Menu() {
  const [selected, setSelected] = useState(0);
  const [songWaveColor, setSongWaveColor] = useState(false);
  const audioRef = useRef();

  const scrollToSection = (index) =>{
      const sectionPosition = document.getElementById(index).offsetTop;
        window.scrollTo({
        left: 0,
        top: sectionPosition-70
        })    
    }
    

 const sections = document.querySelectorAll('section');
 
 window.addEventListener('scroll',()=>{
   const WhiteSection = document.getElementById(3);
   if(window.innerWidth>768){
    const backdrop = document.getElementById('menuContain');
    backdrop.style.backdropFilter= `blur(${window.scrollY/200}px)`
   }
  
 
  sections.forEach((section,index)=>{
    const sectionTop = section.offsetTop-61;
    const sectionHeight = section.clientHeight;
      if(window.scrollY>=sectionTop-sectionHeight/10){
        setSelected(index)
      }
    })
  })


  
  const handlePlay = () => {
    setSongWaveColor(!songWaveColor);
    !songWaveColor?audioRef.current.play():audioRef.current.pause()
  }


  
  return (
    <div id='menuContain' className='MenuContain' style={{borderBottom: `1px solid white`}} >
      <audio ref={audioRef} loop  src={track} autoPlay={false} />
          <LayoutGroup>
            <div className="MenuContent">
              <MusicWave handlePlay={handlePlay} songWaveColor={!songWaveColor} />
                <nav className='navBar' >
                {
                    menu.map(((item,index) => <span key={index} >
                    <motion.label style={{opacity: selected===index? 1: .5}} whileHover={()=>setSelected(index)} onClick={()=>scrollToSection(index)}>{item.title}</motion.label>
                    {selected===index && <motion.div  layoutId='Active' id='line'></motion.div>}
                    </span>
                    ))
                }
                </nav>
                <div>
                  <Btn1 label={'Download CV'} />
                </div>
            </div>
    </LayoutGroup>
        </div>
  )
}
 