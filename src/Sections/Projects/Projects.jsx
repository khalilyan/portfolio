import React from 'react'
import ProjItem from '../../Components/ProjectsItem/ProjItem'
import './Projects.css'
import { projects } from './data'
import { motion } from 'framer-motion'
import { ProjectCurveAnimation } from '../../animtions/allAnimations'
import { ProjectItemAnimation } from '../../animtions/allAnimations'

export default function Projects() {
  return (
    <>
    <section id='2'  className='ProjectsContainer' >
        <div className="ProjList">
        {
            projects.map((item,index)=>(<motion.div
              initial={ProjectItemAnimation.initial}
              whileInView={ProjectItemAnimation.whileInView}
              transition={{duration: 1,delay: index*0.2}}
              viewport={ProjectItemAnimation.viewport}
              key={item.name}
            >
                <ProjItem img={item.image} projName={item.name} repo={item.repository} web={item.web} key={item.name} about={item.about} />
              </motion.div>
            ))
        }
        </div>
    </section>
      
      <motion.div
      initial={ProjectCurveAnimation.initial}
      whileInView={ProjectCurveAnimation.whileInView}
      transition={ProjectCurveAnimation.transition}
      viewport={ProjectCurveAnimation.viewport}
      className="custom-shape-divider-bottom-1680435553">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill" />
        </svg>
      </motion.div>
    </>
  )
}
