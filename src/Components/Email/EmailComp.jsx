import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './EmailComp.css'
import Input1 from '../Inputs/Input1';

export const EmailComp = () => {
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4gtxhzo', 'template_ugbgouf', formRef.current, 'yGB2jcNiIgNuIAgDu')
      .then((result) => {
          console.log('messege sent');
      }, (error) => {
          console.log('error');
      });
  };

  return (
    <form ref={formRef} className='EmailContainer' onSubmit={sendEmail}>
      <Input1 placeholder='Name' type="text" name="from_name"/>
      <Input1 placeholder='Email' type="email" name="from_email" />
      <textarea className='textArea' placeholder='Message...' name="message" />
      <input className='sendBtn' type="submit" value="Send" />
    </form>
  );
};