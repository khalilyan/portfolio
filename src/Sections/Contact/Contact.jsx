import React from 'react'
import { EmailComp } from '../../Components/Email/EmailComp'

import './Contact.css'
import { contacts } from './data'

export default function Contact() {
  return (    
    <section id='3' className='ContactContainer' >
      <div className='ContactWrapper'>
          <EmailComp/>

          <div className="contactList">
            {
              contacts.map(item=>(<div key={item.name} className='contactItem' >
                  {item.icon}
                  {item.value?<a href={item.value}>{item.name}</a>: <span>{item.name}</span> }
                  
                </div>)
              )
            }
          </div>
      </div>

    <p id='footer' >© Portfolio was created from scratch by me</p>
    </section>
  )
}
