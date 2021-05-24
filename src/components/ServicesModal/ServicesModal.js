import React, {useState} from "react";
import { Container, Button, FormControl, Form, Modal} from "react-bootstrap";
import AddForm from "../AddressForm/AddressForm";
import Cards from "../Cards/Cards";


const ServicesModal = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [isCardShow, setCardSShow] = useState(true);

    const handleCard = (e) =>{
        e.preventDefault();

        setCardSShow(false); // Here we change state
    }

    
  
    return (
      <>
        <Button style={{marginTop:"20px"}} variant="primary" onClick={handleShow}>
          Get Started Today
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Enter your address to find services</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <AddForm />
          </Modal.Body>
          <Modal.Footer>
          {props.render && 
                <Button  variant="primary" type="submit" onClick={handleCard} >
                    Submit
                </Button>
          }
          {/* {isCardShow && <Cards/>} */}
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ServicesModal;