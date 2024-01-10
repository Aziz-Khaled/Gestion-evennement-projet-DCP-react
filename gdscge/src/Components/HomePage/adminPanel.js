import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {addNewEvent} from '../../Redux/actions/actions'
import { useDispatch } from 'react-redux'

function AdminPanel() {
  const dispatch = useDispatch() ;

  const [show, setShow] = useState(false);
  const [nameEvent , setNameEvent] = useState("");
  const [descriptionEvent , setDescriptionEvent] = useState ("");
  const [imageEvent , setImageEvent] = useState ("");
  const [dateEvent , setDateEvent] = useState(new Date ())
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const addEvent = () => {

    dispatch (addNewEvent({
      nameEvent , descriptionEvent  , imageEvent , dateEvent
    }))
    console.log("Component - New Event:", addNewEvent);
    handleClose()

  }


  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        adding new event
      </Button>

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>event title : </Form.Label>
        <Form.Control type="email" onChange={(e)=> setNameEvent (e.target.value)}   />
        </Form.Group>


        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>event description</Form.Label>
        <Form.Control type="email" onChange={(e)=> setDescriptionEvent (e.target.value)} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>event image </Form.Label>
        <Form.Control type="email"    onChange={(e)=> setImageEvent (e.target.value)} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>event date</Form.Label>
        <Form.Control type="date"  onChange={(e)=> setDateEvent (e.target.value)}  />
        </Form.Group>
      
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={addEvent}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AdminPanel;