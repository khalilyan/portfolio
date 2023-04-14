import React, { useRef } from 'react'
import './Input1.css'
import { memo } from 'react'

export default memo(function Input1({placeholder,type,name}) {
    
    const labelRef = useRef()
  return (
    <div className='input-group' >
        <input  
        onChange={e=>{
            if(e.target.value!==''){
                labelRef.current.style.top = '-20px'
                labelRef.current.style.background = 'black'
                labelRef.current.style.color = 'white'
                labelRef.current.style.borderRadius = '3px'
            }
        }} className='Input1' type={type}  name={name} />
        <label ref={labelRef} className="placeholder">{placeholder}</label>
    </div>
  )
})
