import React, { useState,useEffect } from 'react'
import './about.css'
import voice from './aboutmeVoice.mp3'
import {Howl, Howler} from 'howler';
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';



export default function About() {

  const [play,setPlay] = useState(false);

  const sound = new Howl({
      src: voice,
      html5: true,
      onend: ()=>setPlay(false)
    });

  const isPlyaing = () => {
      setPlay(!play);
      if(play === false){
        sound.play()
      }
      if(play === true){
        Howler.stop()
      }
 }
  

  return (
    <motion.div 
    className='AboutContainer' 
    id='/about'
    initial={{background: '#190028'}}
    whileInView={{background: '#BBBBBB'}}
    transition={{duration:1,delay:1}}
    viewport={{once:true}}
    >
      <div id='aboutmeSlice1' >

      <motion.div 
      id='ProfilePhoto'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true}}
      transition={{ delay: 0.5,duration:1}}
      ></motion.div>
      <motion.span 
      onClick={()=>isPlyaing()}
      initial={{opacity: 0,scale: 0}}
      whileInView={{opacity: 1,scale: 1}}
      viewport={{once: true}}
      transition={{ delay: 0.5,duration:1}}
      >
      <RecordVoiceOverIcon id={(play===true)?'voiceBtnPaused':'voiceBtnPlayed'} fontSize='large' />
      </motion.span>
      </div>


      <motion.span 
      id='aboutText'
      initial={{opacity: 0,y: 100}}
      whileInView={{opacity: 1,y: 0}}
      transition={{ delay: 0.7,duration:1}}
      viewport={{once: true}}
      >
      <Typewriter
      options={{
        strings: ['I am Armen, 22 years old Front-end developer.',"I'm hardworking and like teamwork.", "I'm looking my first team and expect a good environment and experienced colleagues in my first workplace, where I can grow as a developer.", 'Studied programming alone (with Google)', "I'm spend 60% of the day on programming.","The way of programming i'm started from 2022", "In this moment i'm student of National Polytechnic University of Armenia.","I'm creating projects(including this portfolio) and have public pages in my Github","My hobby is listening music and creating the new in any field","I like to set goals and achieve them."  ],
        delay: 80,
        autoStart: true,
        deleteSpeed: 10,
        loop: true
      }}
      />
      </motion.span>

    </motion.div>
  )
}
