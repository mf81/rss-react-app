import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

const Search = ({
  value,
  onChange,
  handleAll,
  placeholder,
  filterAll,
  onFocus,
  notFound,
  sortBy,
  fields
}) => {
  return (
    <React.Fragment>
      <Button
        variant={filterAll ? "outline-success m-2" : "success m-2"}
        onClick={handleAll}
      >
        <FontAwesomeIcon icon={faPowerOff} />
      </Button>

      <InputGroup className="m-2">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">
            {filterAll ? "Wszystkie:" : fields[sortBy].label + ":"}
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          className="input-group-sm"
          id="valueSearch"
          name="valueSearch"
          key="valueSearch"
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={onFocus}
        />
      </InputGroup>

      {notFound && <div className="alert alert-danger m-2">{notFound}</div>}
    </React.Fragment>
  );
};

export default Search;
