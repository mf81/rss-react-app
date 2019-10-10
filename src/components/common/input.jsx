import React from "react";

const Input = ({ name, label, errors, ...rest }) => {
  return (
    <div className="form-group" key={"div" + name}>
      <label htmlFor={name} key={"label" + name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        key={name}
        {...rest}
        className="form-control"
      />
      {errors[name] && (
        <div className="alert alert-danger m-2">{errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
