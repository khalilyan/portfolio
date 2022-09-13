import React from 'react'
import "./Intro.css"
import {motion} from 'framer-motion'
import { useRef,useEffect } from 'react';
import me from './me.png'
import MouseIcon from '@mui/icons-material/Mouse';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';



export default function Intro() {

  const IntroContainer = useRef()
    useEffect(() => {
      window.addEventListener('scroll',()=>{
        let value = window.scrollY
        let css = IntroContainer.current.style
        css.backgroundPositionY=value*-5 +'%'
        })
    },[IntroContainer.current])
    
    const textAnimation = {
      hidden: {x:-200,opacity:0},
      visible: {x:0,opacity:1}
    }

    const Myimage = useRef()
    const parallax = (e) => {
      const x = -(e.clientX - window.innerWidth/2)/20;
      const y = -(e.clientY - window.innerHeight/2)/20;
      const style = Myimage.current.style;
      style.transform = `translateX(${x}px) translateY(${y}px)`;
     }

  return (
    <div className='IntroContainer' ref={IntroContainer} id='/'>
      <div className='wrapper'>

        <div id='Poster'>
          <div id='txtContain'>
          <motion.h1 
          variants={textAnimation}
          initial='hidden'
          whileInView='visible'
          transition={{duration:0.5,delay:0.5,ease:'easeInOut'}}
          >Armen Khalilyan</motion.h1>
          <motion.h1
           variants={textAnimation}
           initial='hidden'
           whileInView='visible'
           transition={{duration:0.5,delay:0.6,ease:'easeInOut'}}
          >Front-end developer</motion.h1>
          <motion.p
           variants={textAnimation}
           initial='hidden'
           whileInView='visible'
           transition={{duration:0.5,delay:0.7,ease:'easeInOut'}}
          >Welcome to my portfolio i'm front-end developer and creator websites.</motion.p>
        </div>
          <motion.img 
          id='myPhoto'
          onMouseMove={parallax}
          ref={Myimage}
          src={me} 
          initial={{scale:0.9,opacity:0}}
          animate={{scale:1,opacity:1}}
          transition={{duration:1,ease:'easeInOut'}}
          />
        </div>

        <motion.span id='scrolldownContainer'
        initial={{y:-5,opacity:1}}
        whileInView={{y:5,opacity:0.5}}
        transition={{
            duration:0.8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
        }}
        >
        <MouseIcon fontSize='large'/>
        <KeyboardDoubleArrowDownIcon fontSize='large'/>
          Dcroll down for meeting
        </motion.span>

        </div>
    </div>
  )
}
