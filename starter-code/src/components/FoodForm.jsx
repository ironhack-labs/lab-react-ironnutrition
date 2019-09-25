import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class FoodForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: 100,
      image: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCaloriesChange = this.handleCaloriesChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleCaloriesChange(event) {
    this.setState({
      calories: event.target.valueAsNumber
    });
  }

  handleImageChange(event) {
    this.setState({
      image: event.target.value
    });
  }

  handleSubmission(event) {
    event.preventDefault();
    this.props.addFood({
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image
    });
  }

  render() {
    return (
      <Form className="mb-3" onSubmit={this.handleSubmission}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
            placeholder="Name"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Calories</Form.Label>
          <Form.Control
            type="number"
            value={this.state.calories}
            onChange={this.handleCaloriesChange}
            placeholder="Quantity"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>URL of image</Form.Label>
          <Form.Control
            type="url"
            value={this.state.image}
            onChange={this.handleImageChange}
            placeholder="URL of image"
            required
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
