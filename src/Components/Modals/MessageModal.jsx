import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './MessageModal.css'

export default function MessageModal({Modalopen,setModalOpen}) {
  
    const onCloseModal = () => setModalOpen(false);
    
    return (
      <div >
        <Modal className='ModalContainer'
               open={Modalopen[0]} 
               onClose={onCloseModal} 
               closeOnEsc 
               blockScroll 
               showCloseIcon={false} 
               center
               classNames={{
                overlay: 'customOverlay',
                modal: 'customModal',
              }}
               >
          <div className='ModalWrapper' >
            <h2 style={{color: Modalopen[3]}} >{Modalopen[1]}</h2>
            <p style={{fontFamily: 'sans-serif',color: 'white'}} >{Modalopen[2]}</p>
          </div>
        </Modal>
      </div>
    );
  };
  
