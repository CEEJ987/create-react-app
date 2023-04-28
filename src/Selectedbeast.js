import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

function SelectedBeast(props){
  const [show, setShow] = useState(true)
  const handleClose = () => {
     props.updateFunction(false);
     setShow(false);
  }
  const handleshow = () => setShow(true);

  //ClickUpdateFunction(Modal)
  
 //  console.log(click)
 return(
     <Modal show={show} onHide={handleClose}>
     <Modal.Header closeButton>
       <Modal.Title>{props.currentBeast.title}</Modal.Title>
     </Modal.Header>
     <Modal.Body><img width="450px" src={props.currentBeast.imgurl}/></Modal.Body>
     <Modal.Footer>
      <p style={{marginRight: "10%"}}>{props.currentBeast.description}</p>
       <Button variant="secondary" onClick={handleClose}>
         Close
       </Button> 
       <Button variant="primary" onClick={handleClose}>
         Save Changes
       </Button>
     </Modal.Footer>
   </Modal>
 )
   
}
export default SelectedBeast