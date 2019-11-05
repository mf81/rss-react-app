import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ButtonToolTip from "./buttonToolTip";

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
  comment,
  extraComment,
  placement
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const key = uuidv1();
  let comm;
  if (comment && comment.indexOf(":") !== -1) {
    comm = comment.toString().split(":")[1];
  } else comm = comment;

  return (
    <React.Fragment>
      {comment ? (
        <ButtonToolTip
          key={key}
          variant={variant}
          handleShow={handleShow}
          label={label}
          comment={comm}
          extraComment={extraComment}
          placement={placement}
        />
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
