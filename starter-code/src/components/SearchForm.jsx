import React from "react";

import Form from "react-bootstrap/Form";

export default props => (
  <Form className="mb-3">
    <Form.Group>
      <Form.Label>Find Food</Form.Label>
      <Form.Control
        type="text"
        value={props.query}
        onChange={event => props.performSearch(event.target.value)}
        // onChange={props.performSearch}
        placeholder="Query"
      />
    </Form.Group>
  </Form>
);
