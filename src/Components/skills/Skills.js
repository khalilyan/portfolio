import React from 'react'
import { motion } from 'framer-motion'
import "./skills.css"
  import HTML from './images/1200px-HTML5_logo_and_wordmark.svg.png'
  import Redux from './images/92065800-865a-11eb-9626-dff3cb7fef55.png'
  import PS from './images/Adobe_Photoshop_CC_icon.svg.png'
  import CSS3 from './images/CSS3_logo_and_wordmark.svg.png'
  import Git from './images/Git-Icon-1788C.png'
  import JS from './images/logo-javascript-png-html-code-allows-to-embed-javascript-logo-in-your-website-587.png'
  import ReactJs from './images/React.png'
  import TS from './images/TypeScript.png'
  import FM from './images/framer-motion-logo.png'
import { useEffect,useRef } from 'react'
import { useMediaQuery } from '@mui/material'

export default function Skills() {

  const SkillsContainer = useRef()
  const ListElement = useRef()
  const AboutMeTransition = useRef()
  const matches = useMediaQuery('(min-width: 768px)');

    useEffect(() => {
      window.addEventListener('scroll',()=>{
        let value = window.scrollY;
        let cssOf1 = SkillsContainer.current.style;
        let cssOf2 = AboutMeTransition.current.style

        cssOf1.backgroundPositionY+=value*5 +'%';
        cssOf2.fontSize=value*0.07+'px'
        })
        
      },[SkillsContainer.current]);

     const List = [{logo:HTML,name:'HTML5'},{logo:CSS3,name:'CSS3'},{logo:JS,name:'JavaScript'},{logo:TS,name:'TypeScript'},{logo:ReactJs,name:'ReactJs'},{logo:Redux,name:'Redux'},{logo:Git,name:'Git/Github'},{logo:FM,name:'Framer Motion'},{logo:PS,name:'Adobe PS'}];
     
     const parallax = (e) => {
      const x = -(e.clientX - window.innerWidth/2)/50;
      const y = -(e.clientY - window.innerHeight/2)/50;
      const style = ListElement.current.style;
      style.transform = `translateX(${x*2}px) translateY(${y}px)`;
     }

  return (
    <div className='SkillsContainer' ref={SkillsContainer} id='/portfolio/skills'>
       
        <div id='List' ref={ListElement} onMouseMove={parallax}>
            {
              List.map((item,index)=><motion.label 
                key={item.name}
                className='LogoItemContain'
                initial={{opacity:0.5,rotateX:90}}
                whileHover={{opacity:1,scale:1.2,rotate:5}}
                whileInView={{scale:1,rotateX:0}}
                transition={{duration:0.6, delay:index*0.05}}
              >
                <motion.img className='image' alt={item.name} src={item.logo} />
                  <motion.h2
                  initial={matches?{opacity:0}:{opacity:1}}
                  whileHover={matches?{opacity:1,scale:1.6}:{opacity:1}}
                  >{item.name}</motion.h2>
                  <div id='Logoline'></div>
                </motion.label>)
            }
        </div>
        <div id='AboutMeTransition' ref={AboutMeTransition}>
          ABOUT ME
        </div>
    </div>
  )
}
