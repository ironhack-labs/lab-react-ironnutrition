import React, { Component } from "react";

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
      id: Date.now(), // Generating a unique id for the new food item
      name,
      image,
      calories: parseInt(calories),
      servings: parseInt(servings),
    };
    this.props.onAddFood(newFood); // Call the function from App component
    this.setState({
      name: "",
      image: "",
      calories: "",
      servings: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={this.state.image}
          onChange={this.handleChange}
        />

        <label>Calories:</label>
        <input
          type="number"
          name="calories"
          value={this.state.calories}
          onChange={this.handleChange}
        />

        <label>Servings:</label>
        <input
          type="number"
          name="servings"
          value={this.state.servings}
          onChange={this.handleChange}
        />

        <button type="submit">Create</button>
      </form>
    );
  }
}

export default AddFoodForm;
