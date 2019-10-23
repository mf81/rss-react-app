import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faTrashRestore } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  InputGroup,
  FormControl,
  ButtonToolbar
} from "react-bootstrap";

const SearchMany = ({
  fields,
  handleOnOffSearch,
  handleResetAll,
  onChangeSearchMany,
  sortBy
}) => {
  return (
    <React.Fragment>
      <ButtonToolbar>
        <Button
          //   variant={filterAll ? "outline-success m-2" : "success m-2"}
          onClick={handleResetAll}
        >
          <FontAwesomeIcon icon={faTrashRestore} size="sm" />
        </Button>
        {Object.keys(fields).map(item => {
          return (
            sortBy !== item && (
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
            )
          );
        })}
      </ButtonToolbar>
    </React.Fragment>
  );
};

export default SearchMany;
