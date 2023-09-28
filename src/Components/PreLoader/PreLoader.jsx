import React from 'react'
import { useEffect } from 'react'
import { preLoaderAnim } from '../../animtions/PreLoader'
import './PreLoader.css'
import { motion } from 'framer-motion'

export default function PreLoader() {
    useEffect(() => {
        preLoaderAnim()
    }, [])
    
    return (
    <div className='preloader' >
        <motion.div
        transition={{duration: 2,delay: 2.8}}
        className="txt-container">
            <motion.span
            initial={{y: 50,opacity: 0}}
            animate={{y: 0,opacity: 1}}
            transition={{duration: .5,ease: 'easeInOut'}}
            >WELCOME</motion.span>
            <motion.span
            initial={{y: 50,opacity: 0}}
            animate={{y: 0,opacity: 1}}
            transition={{delay: .3,duration: .5,ease: 'easeInOut'}}
            >TO</motion.span>
            <motion.span
            initial={{y: 50,opacity: 0}}
            animate={{y: 0,opacity: 1}}
            transition={{delay: .6,duration: .5,ease: 'easeInOut'}}
            >PORTFOLIO</motion.span>
            <motion.span
            initial={{y: 80,opacity: 0}}
            animate={{y: 0,opacity: 1}}
            transition={{delay: .9,duration: .5,ease: 'easeInOut'}}
            >ARMEN KHALILYAN</motion.span>
        </motion.div>
    </div>
  )
}
