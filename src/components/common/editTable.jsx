import React from "react";
import Form from "./form";
//import Joi from "joi-browser";

class EditTable extends Form {
  componentWillMount() {
    this.setState({ data: this.props.data });
  }

  doSubmit = () => {
    console.log("its submitted");

    console.log("its submitted from edit", this.state.data);
  };

  render() {
    const { fields } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {Object.keys(fields).map((item, i) => {
            return (
              item !== "_id" &&
              item !== "__v" &&
              this.renderInput(item, fields[item].label, "text", true)
            );
          })}
          {this.renderButton("Zapisz")}
        </form>
      </React.Fragment>
    );
  }
}

export default EditTable;
