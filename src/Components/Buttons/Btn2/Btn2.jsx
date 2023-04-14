import React from 'react'
import './Btn2.css'

export default function Btn2({label,href}) {
  return (
    <a style={{textDecoration: 'none',color: 'white'}} href={href} target='_blank' className="box-3">
    <div className="btn btn-three">
      {label}
    </div>
    </a>
  )
}
