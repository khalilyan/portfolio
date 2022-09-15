import React from 'react'
import './contact.css'
import { ContactList } from './ContactList'
import { motion } from 'framer-motion'


export default function Contact() {
  return (
    <div className='ContactContainer' id='/portfolio/contact' >
      <div id='Contact1'>
      {
        ContactList.map((el,index)=>(
          <motion.label key={Math.random()} className='ContactItem'
          initial={{opacity:0,scale:0}}
          whileInView={{opacity:1,scale:1}}
          transition={{delay: index*0.3,duration:0.3}}
          viewport={{once:true}}          
           >
            {el.icon}
            <a href={el.src} target='_blank' >{el.title}</a>
          </motion.label>
        ))
      }
        </div>
    </div>
  )
}
