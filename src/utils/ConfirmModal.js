import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmModal = ({visible,setVisible, title, onOK}) => {

    const save = ()=>{
        onOK();
        setVisible(false);
    }


  return (
    <div>
    <Modal show={visible} onHide={setVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>İşlemi onaylıyor musunuz?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> setVisible(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={save}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  )
}

export default ConfirmModal