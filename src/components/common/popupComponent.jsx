import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Popup = ({
  label,
  title,
  template,
  closeButton,
  btn,
  size,
  extraProps,
  variant
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Button
        variant={
          variant ? variant + " btn-sm " + btn : " primary btn-sm " + btn
        }
        onClick={handleShow}
      >
        {label}
      </Button>
      <Modal show={show} onHide={handleClose} size={size}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {extraProps
            ? AddExtraProps(template, { handleClose: handleClose })
            : template}
        </Modal.Body>
        {closeButton && (
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              {closeButton}
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </React.Fragment>
  );
};

function AddExtraProps(Component, extraProps) {
  return <Component.type {...Component.props} {...extraProps} />;
}

export default Popup;
