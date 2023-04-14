import React from 'react'
import './Intro.css'
import { motion } from 'framer-motion'
import ScrollDown from '../../Components/ScrollDown/ScrollDown'

export default function Intro() {
  return (
    <section id='0' className='IntroContainer' >
        <div className='IntroTxtContainer'>
          <svg id='title' width="100%" height="100" >
            <text id='text' x="50%" y="70%" dominantBaseline="middle" textAnchor="middle"  className='FDev' >Frontend Developer.</text>
          </svg>
          <svg id='mobileTitle' width="100%" height="120" >
            <text id='text' x="50%" y="30%" dominantBaseline="middle" textAnchor="middle"  className='FDev' >Frontend </text>
            <text id='text' x="50%" y="80%" dominantBaseline="middle" textAnchor="middle"  className='FDev' >Developer</text>
          </svg>
          <div className='introTxt' >
            <motion.p
            initial={{y: 50,opacity: 0}}
            animate={{y: 0,opacity: 1}}
            transition={{duration: 2,delay: 3,ease: 'easeInOut'}}
            >I like to craft solid and scalable frontend products with great user experiences.</motion.p>
            <motion.p
            initial={{y: 50,opacity: 0}}
            animate={{y: 0,opacity: 1}}
            transition={{duration: 2,delay: 3.5,ease: 'easeInOut'}}
            >Strong passion for creating beautiful and functional web experiences.</motion.p>
            </div>
        </div>
        <div className='ScrollContain' >
        <ScrollDown/>
        </div>
        <div className="curve"></div>
    </section>
  )
}
