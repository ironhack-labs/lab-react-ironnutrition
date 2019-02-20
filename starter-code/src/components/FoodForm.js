import React, { Component } from "react";
import foods from "../foods.json";

import "./FoodForm.css";

class FoodForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: "",
      image: "",
      quantity: ""
    };
  }

  genericOnChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.foodSubmit(this.state);
    this.setState = {
      name: "",
      calories: "",
      image: "",
      quantity: ""
    };
  }

  render() {
    return (
      <section className="FoodForm">
        <h2>Add Food</h2>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Name
            <input
              onChange={event => this.genericOnChange(event)}
              type="text"
              value={this.state.name}
              name="name"
              placeholder="Pasta"
            />
          </label>

          <label>
            Number of calories
            <input
              onChange={event => this.genericOnChange(event)}
              type="text"
              value={this.state.calories}
              name="calories"
              placeholder="3000"
            />
          </label>

          <label>
            Image
            <input
              onChange={event => this.genericOnChange(event)}
              type="text"
              value={this.state.image}
              name="image"
              placeholder="Choose an URL"
            />
          </label>
          <button> Submit </button>
        </form>
      </section>
    );
  }
}

export default FoodForm;
