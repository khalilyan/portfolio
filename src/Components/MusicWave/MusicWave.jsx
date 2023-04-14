import React from 'react'
import './MusicWave.css'

export default function MusicWave({songWaveColor,handlePlay}) {
  return (
    <div className='musicAnimation' onClick={()=>handlePlay()} >
        <div style={{backgroundColor: songWaveColor?'red':'white',animationPlayState: songWaveColor? 'paused' : 'running'}} ></div>
        <div style={{backgroundColor: songWaveColor?'red':'white',animationPlayState: songWaveColor? 'paused' : 'running'}} ></div>
        <div style={{backgroundColor: songWaveColor?'red':'white',animationPlayState: songWaveColor? 'paused' : 'running'}} ></div>
    </div>
  )
}
