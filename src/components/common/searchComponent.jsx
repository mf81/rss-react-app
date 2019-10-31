import React from "react";
import {
  Button,
  InputGroup,
  FormControl,
  Container,
  Row,
  Col
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

const Search = ({
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
    <Container fluid>
      <Row>
        <Col md="auto">
          <Button
            variant={
              filterAll ? "outline-success m-2 mx-auto" : "success m-2 mx-auto"
            }
            onClick={handleAll}
          >
            <FontAwesomeIcon icon={faPowerOff} />
          </Button>
        </Col>
        <Col md={11}>
          <InputGroup className="m-2">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                {filterAll ? "Wszystkie:" : fields[sortBy].label + ":"}
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              className="input-group-sm"
              id={sortBy}
              name={sortBy}
              key={sortBy}
              type="text"
              value={fields[sortBy].searchValue}
              onChange={onChange}
              placeholder={placeholder}
              onFocus={onFocus}
            />
          </InputGroup>

          {notFound && <div className="alert alert-danger m-2">{notFound}</div>}
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
