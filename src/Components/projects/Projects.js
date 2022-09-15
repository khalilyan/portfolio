import './projects.css'
import React, { useState } from 'react'
import { List } from './WebList'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { AnimatePresence,motion,LayoutGroup } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function Projects() {
  const [selected, setSelected] = useState(0)

  const next = () =>{
    if(selected===2){
      setSelected(0);
    }else{
      setSelected((prevItem)=>prevItem+1)
    }
  }

  const prev = () =>{
    if(selected===0){
      setSelected(2);
    } else {
      setSelected((prevItem)=>prevItem-1)
    }
  }

  return (
    <div className='projectsContainer' id='/portfolio/projects'>
          <button id='left' onClick={prev}>
          <ArrowBackIosIcon fontSize='large' />
          </button>
        <motion.div id='ProjectWrapper'>
          <AnimatePresence  exitBeforeEnter >
          {
            List.map((img,index)=>(
              index===selected &&
              <div id='itemContainer' key={Math.random()}>
                <motion.img className='itemImg' width={800} height={400} src={img.imgurl} alt={img.imgurl}
                 initial={{opacity:0,scale:0.9}}
                 whileInView={{opacity:1,scale:1}}
                 transition={{duration:0.8,ease: 'backInOut'}}
                 exit={{opacity:0,scale:1.1}}
                />
                <motion.div id='BtnsContain'
                 initial={{opacity:0,scale:0.8}}
                 whileInView={{opacity:1,scale:1}}
                 transition={{duration:1.1,ease: 'backInOut'}}
                 exit={{opacity:0,scale:1.1}}
                >
                  <button className='itemTargetBtn' >
                    <a href={img.page} target='_blank' >Go to Page</a>
                  </button>
                  <button className='itemTargetBtn'>
                    <a href={img.repository} target='_blank'>Repository</a>
                  </button>
                  </motion.div>
                  <div id='MobileContrBtns' >
                  <button onClick={prev} id='MobileLeft' ><ArrowBackIcon fontSize='large' /></button>
                  <button onClick={next} id='MobileRight' ><ArrowForwardIcon fontSize='large' /></button>
                  </div>
              </div>
            ))
          }
          </AnimatePresence>
        </motion.div>
        <button id='right' onClick={next}>
                  <ArrowForwardIosIcon fontSize='large'  />
                  </button >
    </div>
  )
}
