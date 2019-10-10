import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import uuid from "uuid/v1";
import FormComponent from "./form";

class AddTooDb extends FormComponent {
  doSubmit = () => {
    console.log("its submitted");
  };

  render() {
    const { fields, handleClose } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {Object.keys(fields).map(item =>
            this.renderInput(item, fields[item].label, "text", true)
          )}
          {this.renderButton("Zapisz")}
          <Button variant="secondary m-2" onClick={handleClose}>
            Anuluj
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default AddTooDb;
