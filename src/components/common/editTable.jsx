import React from "react";
import Form from "./form";
import Joi from "joi-browser";
import uuid from "uuid/v1";

class EditTable extends Form {
  state = { data: {} };

  componentWillMount() {
    this.setState({ data: this.props.data });
  }

  schema = {
    imieNazwisko: Joi.string()
      .required()
      .label("Imię Nazwisko")
      .error(() => {
        return {
          message: "Pole użytkownika nie może być puste..."
        };
      })
  };

  render() {
    const { data, fields } = this.props;

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {Object.keys(fields).map((item, i) => {
            return (
              <div key={uuid()}>
                {item !== "_id" &&
                  item !== "__v" &&
                  this.renderInput(item, fields[item].label, "text", true)}
              </div>
            );
          })}
          ;{this.renderButton("Zapisz")}
        </form>
      </React.Fragment>
    );
  }
}

export default EditTable;

// this.renderInput(item, fields[item].label, "text", true)
