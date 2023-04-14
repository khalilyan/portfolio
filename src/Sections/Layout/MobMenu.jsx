import React from 'react'
import './MobMenu.css'
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { menu } from './sections';
import Hamburger from 'hamburger-react'
import Btn1 from '../../Components/Buttons/Btn1/Btn1';


export default function MobMenu() {
    const [selected, setSelected] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const scrollToPage = (index) =>{
      setSelected(index)
      setOpen(false)
      const sectionPosition = document.getElementById(index).offsetTop;
      window.scrollTo({
        left: 0,
        top: sectionPosition-60
    })    
   };


  return (
    <div className='MobMenuContain' >
        <div className="MobMenuWrapper">

        <div className='btnAndHamburger' >
        <div className='MobSlice1' >
          <Hamburger color='white' size={30} rounded toggled={isOpen} toggle={setOpen} />
        </div> 
          <Btn1 label={'Download CV'} />
        </div>


        <AnimatePresence>
        {isOpen ?<motion.div className="MobSlice2"
        initial={{height: 0, opacity: 0}}
        animate={{height: 300, opacity: 1}}
        exit={{height: 0, opacity: 0}}
        >
        <motion.nav className='navMobList'
       initial={{display: 'none', opacity: 0}}
       animate={{display: 'flex', opacity: 1}}
       exit={{display: 'none', opacity: 0}}
        >
          {
            menu.map(((item,index) => <span key={index} style={{
              background: selected===index?'rgba(255, 255, 255, 0.144)':'transparent'
            }} className='MobMenuItem' >
            <label onClick={()=>scrollToPage(index)}>{item.title}</label>
            </span>
              ))
          }
        </motion.nav>
        </motion.div> : null
        
      }
      </AnimatePresence>
        </div>
    </div>
  )
}
