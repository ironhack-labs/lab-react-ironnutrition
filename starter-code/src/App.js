import React, { Component } from "react";
import foods from "./foods.json";
import FoodBox from "./Comps/FoodBox";

export default class App extends Component {
  state = {
    foods: foods,
    showForm: false,
    newFoodName: "",
    newFoodCal: 0,
    newFoodImg: "",
  };
  showFood = () => {
    return this.state.foods.map((eachFood, i) => {
      return <FoodBox key={i} theFood={eachFood} />;
    });
  };
  toggleForm = () => {
    this.state.showForm
      ? this.setState({ showForm: false })
      : this.setState({ showForm: true });
  };
  submitFood = e => {
    e.preventDefault();
    let clone = [...this.state.foods];
    let newFood = {
      name: this.state.newFoodName,
      calories: this.state.newFoodCal,
      image: this.state.newFoodImg,
    };
    clone.unshift(newFood);
    this.setState({ foods: clone });
    this.toggleForm();
  };
  updateInput = e =>
    this.setState({ [e.target.name]: e.target.value }, () => this.showFood);
  render() {
    return (
      <div className="App">
        <button onClick={this.toggleForm} className="button is-success">
          Add Food
        </button>
        {this.state.showForm && (
          <form onSubmit={this.submitFood}>
            <input
              type="text"
              className="input input2"
              placeholder="Food name..."
              value={this.state.newFoodName}
              name="newFoodName"
              onChange={this.updateInput}
            />
            <input
              type="text"
              className="input input2"
              placeholder="Calories..."
              value={this.state.newFoodCal}
              name="newFoodCal"
              onChange={this.updateInput}
            />
            <input
              type="text"
              className="input input2"
              placeholder="Image URL..."
              value={this.state.newFoodImg}
              name="newFoodImg"
              onChange={this.updateInput}
            />
            <button className="button is-info">Add to list</button>
          </form>
        )}
        <br />
        <br />
        <br />
        {this.showFood()}
      </div>
    );
  }
}
