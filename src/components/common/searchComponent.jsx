import React from "react";

const Search = ({ value, onChange }) => {
  return (
    <input
      id="valueSearch"
      name="valueSearch"
      key="valueSearch"
      type="text"
      value={value}
      onChange={onChange}
      className="form-control"
    />
  );
};

export default Search;
