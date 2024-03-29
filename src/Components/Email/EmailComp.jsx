import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import './EmailComp.css'
import Input1 from '../Inputs/Input1';
import MessageModal from '../Modals/MessageModal';

export const EmailComp = () => {

  const [Modalopen, setModalOpen] = useState(false);
  const formRef = useRef();
  const sendEmail = (e) => {

    e.preventDefault();
    const inputs = document.querySelectorAll('input');
    const textarea = document.querySelectorAll('textarea');

    if(inputs[1].value !== '' && textarea[0].value !== ''){
    emailjs.sendForm('service_ydeg9cm', 'template_14edodg', formRef.current, 'F1W_guyFWY7rP_njC')
      .then((result) => {
        setModalOpen([true,'Message sent!','I’ll answer you as soon as possible','green'])
          inputs[0].value = '';
          inputs[1].value = '';
          textarea[0].value = '';
          inputs[2].onclick = ()=>'';
      }, (error) => {
        setModalOpen([true,'Message not sent :(','Check your internet connection','darkred'])
      });
    }
  };

  return (
    <form ref={formRef} className='EmailContainer' onSubmit={sendEmail}>
      <MessageModal Modalopen={Modalopen} setModalOpen={setModalOpen}/>
      <Input1 placeholder='Name' type="text" name="from_name"/>
      <Input1 placeholder='Email' type="email" name="from_email" />
      <textarea className='textArea' placeholder='Message...' name="message" />
      <input className='sendBtn' type="submit" value="Send" />
    </form>
  );
};