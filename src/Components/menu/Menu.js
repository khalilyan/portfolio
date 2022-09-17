import React, { useState,useEffect, useRef } from 'react'
import { links } from './paths'
import { Link } from 'react-router-dom'
import { motion, LayoutGroup } from 'framer-motion'
import { Spin as Hamburger } from 'hamburger-react'
import './menu.css'
import { useMediaQuery } from '@mui/material'

export default function MenuPC() {

    const [selected,setSelected] = useState(0);
    const [mobMenuOpen,setMobMenuOpen] = useState(false);

   
    const handleLocation = (e) => {
        const target = e.target.getAttribute('href');
             let location = document.getElementById(target).offsetTop;
            window.scrollTo({
                left: 0,
                top: location - 79
            })
    }

    const handleLocationMob = (e) => {
        const target = e.target.getAttribute('href');
        let location = document.getElementById(target).offsetTop;
            window.scrollTo({
                left: 0,
                top: location
            })
    }


    window.addEventListener('scroll',function(){
        if(window.innerWidth>1024){
            const scrollValue = window.scrollY;
            if(scrollValue>= 0  ) setSelected(0);
            if(scrollValue>= 427 ) setSelected(1);
            if(scrollValue>= 1550) setSelected(2);
            if(scrollValue>= 2500) setSelected(3);
            if(scrollValue>= 3300) setSelected(4);
        }
        if(window.innerWidth<=1024){
            const scrollValue = window.scrollY;
            if(scrollValue>= 0  ) setSelected(0);
            if(scrollValue>= 627 ) setSelected(1);
            if(scrollValue>= 1250) setSelected(2);
            if(scrollValue>= 2500) setSelected(3);
            if(scrollValue>= 3200) setSelected(4);
        }
        if(window.innerWidth<=900){
            const scrollValue = window.scrollY;
            if(scrollValue>= 0  ) setSelected(0);
            if(scrollValue>= 527 ) setSelected(1);
            if(scrollValue>= 1250) setSelected(2);
            if(scrollValue>= 2500) setSelected(3);
            if(scrollValue>= 3100) setSelected(4);
        }})

        const menuRef = useRef()
        useEffect(()=>{
            if(window.innerWidth<=768 && mobMenuOpen===true){
                menuRef.current.style.height='100%'
            } else {
                menuRef.current.style.height='0%'
            }    
        },[mobMenuOpen])
     const matches = useMediaQuery('(min-width: 765px)');
     const matchesForFont = useMediaQuery('(min-width: 430px)');
     useEffect(()=>{
        if(matches){
            setMobMenuOpen(false);
         }
     },[matches])
     
       
  return (
    <nav className='navbar' ref={menuRef}>
       <div className='navContainer'>
        
        <LayoutGroup>
        {
            links.map((item,index)=><motion.div key={index} >
                <Link
                style={{
                    color: selected===index?"#ffffff":"#1f4dff"
                }}
                to={item.url}
                onClick={(e)=>{
                    handleLocation(e);                   
                }}
                >{item.text} </Link>
               {selected===index && <motion.div layoutId='Active' id='line'></motion.div>}
            </motion.div>
            )
        }
        </LayoutGroup>
        </div>
        <div className='mobMenuContain' >
            <span id='hamburger'>
            <Hamburger size={40} color='white' toggled={mobMenuOpen}  onToggle={()=>setMobMenuOpen(!mobMenuOpen)}/>
            </span>
            {
                mobMenuOpen && <div className='MobMenu'>
                {
                    links.map((item,index)=><motion.div id='MobMenuItem' key={index} >
                        <Link
                        style={{
                            fontSize: !matchesForFont?'20px':'27px',
                            color: selected===index?"#ff0000":"#ffffff"
                        }}
                        to={item.url}
                        onClick={(e)=>{
                            handleLocationMob(e);
                            setMobMenuOpen(false)                   
                        }}
                        >{item.text} </Link>
                    {selected===index && <motion.div layoutId='Active' id='line'></motion.div>}
                    </motion.div>
                    )
                } 
                </div>
            }
        </div>

    </nav>
  )
}
