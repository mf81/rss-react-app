import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import uuid from "uuid/v1";

const AddTooDb = ({ fields, handleClose }) => {
  return (
    <React.Fragment>
      <Form>
        {Object.keys(fields).map(item => (
          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="4">
              {fields[item].label}
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                placeholder="Wpisz wartość lub pozostaw pole puste"
              />
            </Col>
          </Form.Group>
        ))}
        <Button variant="primary" type="submit">
          Zapisz do bazy
        </Button>
        <Button variant="secondary m-2" onClick={handleClose}>
          Anuluj
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default AddTooDb;

{
  /* <Form.Group as={Row} controlId="formPlaintextPassword">
<Form.Label column sm="4">
  {fields[item]}
</Form.Label>
<Col sm="8">
  <Form.Control
    type="text"
    placeholder="Wpisz wartość lub pozostaw pole puste"
  />
</Col>
</Form.Group> */
}

//<p>{Object.keys(data).forEach(item => ({ item }))}</p>
// Object.keys(data).map(item => {...});
// Object.keys(data).forEach(item => {...});

// sometimes you might be looking for values not keys >
// Object.values(someObject).map(function(item).

// {Object.keys(props.fields).map(item => (
//   <td key={uuid()}>
//     <Items data={data} item={item} />
//   </td>
// ))}
