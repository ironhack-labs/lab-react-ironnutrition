import React, { Component } from "react";
import { Button, Form, Input, InputNumber } from "antd";

class AddFoodForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      calories: "",
      servings: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, image, calories, servings } = this.state;
    const newFood = {
      id: Date.now(),
      name,
      image,
      calories: parseInt(calories),
      servings: parseInt(servings),
    };
    this.props.onAddFood(newFood);
    this.setState({
      name: "",
      image: "",
      calories: "",
      servings: "",
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label="Name">
          <Input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form.Item>

        <Form.Item label="Image">
          <Input
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
          />
        </Form.Item>

        <Form.Item label="Calories">
          <InputNumber
            name="calories"
            value={this.state.calories}
            onChange={(value) => this.setState({ calories: value })}
          />
        </Form.Item>

        <Form.Item label="Servings">
          <InputNumber
            name="servings"
            value={this.state.servings}
            onChange={(value) => this.setState({ servings: value })}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default AddFoodForm;
