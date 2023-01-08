// import Modal from "../Ui/Modal";
import { Button, Modal } from "react-bootstrap";
const cartElements = [
  {
    id:1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },

  {
    id:2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    id:3,
    title: "Yellow and Black Colors",
    price: 0,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];
const Card = (props) => {
   let Total=0;
  const Result = cartElements.map((item) => {
    Total=Total+item.price;
   return (
    <li key={item.id}>
        {item.title} {item.price} 
    </li>
    );
  });

  return (
    <Modal  show={true} onHide={props.Data}>
    <Modal.Header closeButton>
      <Modal.Title>Your</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        {Result}
        <div>
            Total={Total};
        </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.Data} >
        Close
      </Button>
      <Button variant="primary" >
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  )

};
export default Card;
