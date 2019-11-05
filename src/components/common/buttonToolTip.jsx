import React from "react";
import {
  Tooltip,
  OverlayTrigger,
  Button,
  ButtonToolbar
} from "react-bootstrap";

const buttonToolTip = ({
  key,
  label,
  comment,
  extraComment,
  variant,
  btn,
  handleShow,
  placement
}) => {
  return (
    <ButtonToolbar>
      <OverlayTrigger
        key={key}
        placement={!placement ? "top" : placement}
        overlay={
          <Tooltip id={`tooltip-${key}`}>
            {extraComment && <strong>{extraComment}: </strong>}
            {comment}
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
  );
};

export default buttonToolTip;
