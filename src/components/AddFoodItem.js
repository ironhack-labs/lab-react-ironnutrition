import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

class AddFoodItem extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.onAdd}>
          <Form.Row>
            <Col xs={7}>
              <Form.Control name="name" placeholder="Name" />
            </Col>
            <Col>
              <Form.Control name="calories" placeholder="Calories" />
            </Col>
            <Col>
              <Form.Control name="image" placeholder="Image" />
            </Col>
          </Form.Row>
          <Button variant="primary" type="submit"> Submit </Button>
        </Form>
      </div>
    );
  }
}

export default AddFoodItem;
