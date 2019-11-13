import React, { Component } from "react";
import allFoods from "./foods.json";
import FoodBox from "./Comps/FoodBox";

export default class App extends Component {
  state = {
    foods: allFoods,
    //allFoods: foods,
    showForm: false,
    newFoodName: "",
    newFoodCal: 0,
    newFoodImg: "",
    searchbar: "",
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
  updateInput = e => this.setState({ [e.target.name]: e.target.value });
  updateSearch = e => {
    let new_clone = allFoods.filter(obj => obj.name.includes(e.target.value));
    this.setState({ foods: new_clone, [e.target.name]: e.target.value });
  };
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
        <input
          type="text"
          placeholder="Search for food..."
          className="input searchbar"
          value={this.state.searchbar}
          name="searchbar"
          onChange={this.updateSearch}
        />
        <br />
        <br />
        {this.showFood()}
      </div>
    );
  }
}
