import React, { useState,useRef } from 'react'
import { menu } from './sections'
import './Menu.css'
import { LayoutGroup } from 'framer-motion'
import { motion } from 'framer-motion'
import Btn1 from '../../Components/Buttons/Btn1/Btn1'
import MusicWave from '../../Components/MusicWave/MusicWave'
import track from './tristam-and-braken-frame-of-mind-monstercat-release.mp3'



export default function Menu() {
  const [selected, setSelected] = useState(0);
  const [MenuColor, setMenuColor] = useState('white');
  const [songWaveColor, setSongWaveColor] = useState(true);
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
   const backdrop = document.getElementsByClassName('MenuContain')[0].style;
   backdrop.backdropFilter= `blur(${window.scrollY/200}px)`
  
  if(window.scrollY>=WhiteSection.offsetTop-300){
    setMenuColor('black')
  } else {
    setMenuColor('white')
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
    <div className='MenuContain' style={{borderBottom: `1px solid ${MenuColor}`}} >
      <audio ref={audioRef} loop  src={track} autoPlay={songWaveColor} />
          <LayoutGroup>
            <div className="MenuContent">
              <MusicWave handlePlay={handlePlay} songWaveColor={!songWaveColor} />
                <nav className='navBar' >
                {
                    menu.map(((item,index) => <span key={index} >
                    <motion.label style={{opacity: selected===index? 1: .5,color: MenuColor}} whileHover={()=>setSelected(index)} onClick={()=>scrollToSection(index)}>{item.title}</motion.label>
                    {selected===index && <motion.div style={{backgroundColor: MenuColor}} layoutId='Active' id='line'></motion.div>}
                    </span>
                    ))
                }
                </nav>
                <div>
                  <Btn1 colorStyle={MenuColor} label={'Download CV'} />
                </div>
            </div>
    </LayoutGroup>
        </div>
  )
}
 