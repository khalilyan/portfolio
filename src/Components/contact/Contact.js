import React from 'react'
import './contact.css'
import { ContactList } from './ContactList'
import { motion } from 'framer-motion'
import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import {useMediaQuery} from '@mui/material';

export default function Contact() {

  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const matches = useMediaQuery('(min-width: 385px)');


  const ModalStyle = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: matches?300:240,
    bgcolor: 'white',
    p: 4,
  };
  
  return (
    <div className='ContactContainer' id='/portfolio/contact' >
        <Modal
        disableAutoFocus={true}
        open={open}
        onClose={()=>setOpen(false)}
        >
        <Box sx={ModalStyle} >
          <Typography fontSize={23} >
          +374 93-08-82-38
          </Typography>
        </Box>
        </Modal>

        <Modal
        disableAutoFocus={true}
        open={openTwo}
        onClose={()=>setOpenTwo(false)}
        >
        <Box sx={ModalStyle} >
          <Typography fontSize={23} >
          armkhalilyan@gmail.com
          </Typography>
        </Box>
        </Modal>
        
      <div id='Contact1'>
      {
        ContactList.map((el,index)=>(
          <motion.label key={Math.random()} className='ContactItem'
          onClick={()=>{
            if((index===1 || index===5) && (window.innerWidth<768)){
              if(index===1) setOpen(true);
              if(index===5) setOpenTwo(true);
            }
          }}
          initial={{opacity:0,scale:0}}
          whileInView={{opacity:1,scale:1}}
          transition={{delay: index*0.1,duration:0.3}}
          viewport={{once:true}}          
           >
            {el.icon}
            <a href={el.src} target='_blank' id='contactTitile' >{el.title} </a>
          </motion.label>
        ))
      }
        </div>
    </div>
  )
}
