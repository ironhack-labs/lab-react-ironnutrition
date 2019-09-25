import React, { Component } from "react";
import "./FoodBox.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export default class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  updateQuantity(event) {
    this.setState({
      quantity: event.target.valueAsNumber
    });
  }

  render() {
    const food = this.props.food;

    return (
      <Card className="food-box mb-3">
        <Card.Img variant="top" src={food.image} />
        <Card.Body>
          <Card.Title>{food.name}</Card.Title>
          <Card.Text>{food.calories} cal</Card.Text>
        </Card.Body>
        <Card.Body>
          <Form>
            <Form.Control
              type="number"
              value={this.state.quantity}
              onChange={this.updateQuantity}
              min={1}
            />
          </Form>
        </Card.Body>
        <Card.Body>
          <Button
            onClick={() =>
              this.props.addFood({ ...food, quantity: this.state.quantity })
            }
          >
            +
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
