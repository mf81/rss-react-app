import React, { Component } from "react";
import Joi from "joi-browser";
import schema from "./joiSchema.js";
import Input from "./input";

class Form extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const result = Joi.validate(this.state.data, schema, {
      abortEarly: false
    });
    if (!result.error) return null;
    const errors = {};
    result.error.details.map(m => {
      return (errors[m.path[0]] = m.message);
    });
    return errors;
  };

  validateProperty = currentTarget => {
    const { name, value } = currentTarget;
    const obj = { [name]: value };
    const singleSchema = {
      [name]: schema[name]
    };
    const { error } = Joi.validate(obj, singleSchema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget }) => {
    console.log(currentTarget);
    const { name, value } = currentTarget;
    const errors = { ...this.state.errors };

    const errorMessage = this.validateProperty(currentTarget);
    if (errorMessage) errors[name] = errorMessage;
    else delete errors[name];

    const data = { ...this.state.data };
    data[name] = value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text", autoFocus) {
    return (
      <Input
        name={name}
        label={label}
        errors={this.state.errors}
        type={type}
        value={this.state.data[name]}
        onChange={this.handleChange}
        key={name}
        autoFocus={autoFocus}
      />
    );
  }
}

export default Form;
