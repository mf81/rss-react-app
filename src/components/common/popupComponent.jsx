import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Popup = ({ name, template }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Button variant="primary btn-sm" onClick={handleShow}>
        ...
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{template}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default Popup;
