import React from "react";
import {
  Button,
  InputGroup,
  FormControl,
  ButtonToolbar
} from "react-bootstrap";

const SearchMany = ({ fields, handleOnOffSearch, onChangeSearchMany }) => {
  return (
    <React.Fragment>
      <ButtonToolbar>
        {Object.keys(fields).map(item => {
          return (
            <div key={item}>
              {fields[item].search && (
                <InputGroup className="m-1  input-group-sm">
                  <InputGroup.Prepend>
                    <Button
                      variant="outline-secondary btn-sm"
                      onClick={handleOnOffSearch}
                      name={item}
                    >
                      {fields[item].label + ":"}
                    </Button>
                  </InputGroup.Prepend>
                  <FormControl
                    className="input-group-sm"
                    id={item}
                    name={item}
                    key={item}
                    type="text"
                    value={fields[item].searchValue}
                    onChange={onChangeSearchMany}
                  />
                </InputGroup>
              )}
              {!fields[item].search && (
                <Button
                  variant="secondary btn-sm m-1"
                  onClick={handleOnOffSearch}
                  name={item}
                >
                  {fields[item].label}
                </Button>
              )}
            </div>
          );
        })}
      </ButtonToolbar>
    </React.Fragment>
  );
};

export default SearchMany;
