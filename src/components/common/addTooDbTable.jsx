import React from "react";
import { Button } from "react-bootstrap";
import FormComponent from "./form";

class AddTooDb extends FormComponent {
  // componentWillMount() {
  //   this.setState({ data: this.props.data });
  // }

  doSubmit = () => {
    console.log("its submitted from add");
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
