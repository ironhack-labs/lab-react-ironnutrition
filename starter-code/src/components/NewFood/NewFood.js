import React, { Component } from "react";
import "./NewFood.css";

class NewFood extends Component {
  state = {
    name: "",
    calories: "",
    image: "",
    quantity: 0
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addNewFood(this.state);
    this.setState({
      name: "",
      calories: "",
      image: "",
      quantity: 0
    });
  };

  onChangeHandler = event => {
    console.log(this.state);
    let { name, value } = event.target;
    this.setState({ [name]: value }, () => console.log(this.state));
  };

  render() {
    const { name, calories, image } = this.state;

    return (
      <div className="new-food-container">
        <form onSubmit={event => this.handleFormSubmit(event)}>
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="Name of food item"
            value={name}
            onChange={event => this.onChangeHandler(event)}
          ></input>
          <br />

          <label>Calories</label>
          <input
            name="calories"
            type="text"
            placeholder="Total number of calories"
            value={calories}
            onChange={event => this.onChangeHandler(event)}
          ></input>
          <br />

          <label>Image</label>
          <input
            name="image"
            type="text"
            placeholder="Image of food item"
            value={image}
            onChange={event => this.onChangeHandler(event)}
          ></input>
          <br />
          <button className="button is-info">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default NewFood;
