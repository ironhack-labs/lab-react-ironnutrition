import React, { Component } from "react";
//import "./FoodForm.css";

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

  OnChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preDefault();
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
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              onChange={this.OnChange}
              type="text"
              value={this.state.name}
              name="name"
              placeholder="Pasta"
            />
          </label>

          <label>
            Number of calories
            <input
              onChange={this.OnChange}
              type="text"
              value={this.state.calories}
              name="calories"
              placeholder="3000"
            />
          </label>

          <label>
            Image
            <input
              onChange={this.OnChange}
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