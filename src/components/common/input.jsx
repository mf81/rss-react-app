import React from "react";
import uuid from "uuid/v1";

const Input = ({ name, label, errors, ...rest }) => {
  return (
    <div className="form-group" key={uuid()}>
      <label key={uuid()} htmlFor={name}>
        {label}
      </label>
      <input
        key={uuid()}
        id={name}
        name={name}
        {...rest}
        className="form-control"
      />
      {/* {errors[name] && (
        <div className="alert alert-danger m-2">{errors[name]}</div>
      )} */}
    </div>
  );
};

export default Input;
