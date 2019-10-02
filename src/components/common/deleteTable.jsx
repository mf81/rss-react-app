import React from "react";
import { ButtonToolbar, Button } from "react-bootstrap";

const DeleteTable = ({ onClick, handleClose }) => {
  return (
    <React.Fragment>
      <ButtonToolbar>
        <Button variant="danger m-2" onClick={onClick}>
          Kasuj
        </Button>
        <Button variant="secondary m-2" onClick={handleClose}>
          Anuluj
        </Button>
      </ButtonToolbar>
    </React.Fragment>
  );
};

export default DeleteTable;
