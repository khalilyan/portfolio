import React from 'react'
import './ProjItem.css'
import { useState,useEffect,useRef} from 'react'
import Btn2 from '../Buttons/Btn2/Btn2'

export default function ProjItem({projName,img,web,repo,about}) {
    const [cursorX, setCursorX] = useState(0)
    const [cursorY, setCursorY] = useState(0)
    const [shadow, setShadow] = useState(0)

    const ItemRef = useRef();
   useEffect(() => {
       if(window.innerWidth>=768){
        ItemRef.current.style.transform = `rotateX(${-cursorY/50}deg) rotateY(${cursorX/50}deg)`
        ItemRef.current.style.boxShadow = `${-cursorX/50}px ${-cursorY/50}px ${shadow}px rgb(255,255,255,.4)`
    }
   }, [cursorY])
   
    

  return (
    <figure>
    <div ref={ItemRef} onMouseMove={(event)=>{
        setCursorX(event.clientX%1000)
        setCursorY(event.clientY%1000)
        setShadow(20)
    }}
    onMouseLeave={(e)=>{
        setCursorY(0)
        setCursorX(0)
        setShadow(0)
    }}
    className='ProjItemContainer' >
        <img  width={350} src={img} alt={projName} />
        <label style={{fontFamily: `'Orbitron', sans-serif`}}>{projName}</label>
        <div className="projActions">
            <Btn2 href={web} label={'Open Web'}/>
            <Btn2 href={repo} label={'Repository'}/>
        </div>   
        <p>{about}</p>     
    </div>
    </figure>
  )
}
