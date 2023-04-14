import React from 'react'
import { memo } from 'react'
import { motion } from 'framer-motion'
import './Skills.css'
import { data } from './data'
import {FiCheck}  from 'react-icons/fi'; 
import { SkillsItemAnimation } from '../../animtions/allAnimations'


export default memo(function Skills() {
  
  return (
    <section id='1' className='SkillsContainer' >
      <div className="list">
       {
        data.map((item,index) =>(
          <li  key={item.name}>
            {item.logo && <img src={item.logo} alt={item.name} />}
          </li>
        ))
       }
        {
        data.map((item,index) =>(
          <li key={index}>
            {item.logo && <img src={item.logo} alt={item.name} />}
          </li>
        ))
       }
       </div>
       <div className="SkillsSection2">
        <div className="SkillWrapper2">
       {
        data.map((item,index) =>(
          <motion.label
          initial={SkillsItemAnimation.initial}
          whileInView={SkillsItemAnimation.whileInView}
          transition={{duration: 1,delay: index*0.2}}
          viewport={SkillsItemAnimation.viewport}
          className='skillItem' key={item.name}>
            {item.name!=='...' && <FiCheck size={50} strokeWidth="true"  />}
            <p>{item.name}</p>
          </motion.label>
        ))
       }
       </div>
       </div>
       <div className='aboutSkills' style={{display: 'flex',flexDirection: 'column',alignItems: 'center',opacity: .5,fontFamily: 'Orbitron, sans-serif',textAlign: 'center',margin: '0px 50px'}} >
            <p>{"I also know other languages like a TypeScript,C++,Python and more frameworks for Frontend programming, but I don't use often them practically."}</p>
            <p>{"main and practical skills are mentioned above"}</p>
       </div>
    </section>
  )
})
