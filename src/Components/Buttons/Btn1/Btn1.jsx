import React from 'react'
import './Btn1.css'
import CV from '../../Armen Khalilyan(CV).pdf'

export default function Btn1({label,onClick,colorStyle}) {
  return (
    <a href={CV} download>
      <button onClick={onClick} className="btn1" style={{border: `1px solid ${colorStyle}`}}>
          <svg style={{stroke: colorStyle}} id='svg' width="150px" height="50px" viewBox="0 0 180 60" className="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
          </svg>
          <span style={{color: colorStyle}} >{label}</span>
        </button>
    </a>
  )
}
