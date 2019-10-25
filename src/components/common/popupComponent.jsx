import React, { useState } from "react";
import {
  Tooltip,
  OverlayTrigger,
  Button,
  ButtonToolbar,
  Modal
} from "react-bootstrap";

const uuidv1 = require("uuid/v1");
const Popup = ({
  label,
  title,
  template,
  closeButton,
  btn,
  size,
  extraProps,
  variant,
  comment
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const placement = uuidv1();
  let comm;
  if (comment && comment.indexOf(":") !== -1) {
    comm = comment.toString().split(":")[1];
  } else comm = comment;

  console.log(comm);

  return (
    <React.Fragment>
      {comment ? (
        <ButtonToolbar>
          <OverlayTrigger
            key={placement}
            placement="right"
            overlay={
              <Tooltip id={`tooltip-${placement}`}>
                <strong>Uwagi: </strong>
                {comment && comm}
              </Tooltip>
            }
          >
            <Button
              variant={
                variant ? variant + " btn-sm " + btn : " primary btn-sm " + btn
              }
              onClick={handleShow}
            >
              {label}
            </Button>
          </OverlayTrigger>
        </ButtonToolbar>
      ) : (
        <Button
          variant={
            variant ? variant + " btn-sm " + btn : " primary btn-sm " + btn
          }
          onClick={handleShow}
        >
          {label}
        </Button>
      )}

      <Modal show={show} onHide={handleClose} size={size}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {extraProps
            ? addExtraProps(template, { handleClose: handleClose })
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

const addExtraProps = (Component, extraProps) => {
  return <Component.type {...Component.props} {...extraProps} />;
};

export default Popup;
