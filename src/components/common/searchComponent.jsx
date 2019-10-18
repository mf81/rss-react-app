import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

const Search = ({
  value,
  onChange,
  handleAll,
  state,
  placeholder,
  filterAll,
  onFocus,
  sortBy,
  notFound
}) => {
  return (
    <React.Fragment>
      <Button
        variant={filterAll ? "success m-2" : "outline-success m-2"}
        onClick={handleAll}
      >
        {filterAll ? (
          <FontAwesomeIcon icon={faToggleOn} />
        ) : (
          <FontAwesomeIcon icon={faToggleOff} />
        )}
        {filterAll ? "Wszystkie" : " Szukam po: " + sortBy}
      </Button>
      <input
        id="valueSearch"
        name="valueSearch"
        key="valueSearch"
        type="text"
        value={value}
        onChange={onChange}
        className="form-control"
        placeholder={placeholder}
        onFocus={onFocus}
      />

      {notFound && <div className="alert alert-danger m-2">{notFound}</div>}
    </React.Fragment>
  );
};

export default Search;
