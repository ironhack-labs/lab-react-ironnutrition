import React, { Component } from "react";
import shortid from "shortid";

export default class FoodForm extends Component {
  state = {
    name: "",
    calories: "",
    image: ""
  };

  handleChange = e => {
      let { value, name } = e.target;

      this.setState({ [name]: value })
  };

  handleSubmit = e => {
    e.preventDefault();

    const newFood = this.state;
    newFood.id = shortid.generate();
    
    this.props.addFood(newFood);

    this.props.toggleFood();

    this.setState({
      name: "",
      calories: "",
      image: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label>Calories</label>
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={this.handleChange}
          />
          <label>Image</label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
          />
        <button type="submit">Add Food</button>
        </form>
      </div>
    );
  }
}
