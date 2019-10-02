import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import AddFood from "./AddFood.js";

class App extends Component {
  state = {
    foodList: foods,
    showForm: false,
    name: "",
    calories: "",
    image: "",
    searchThis: foods

    
  };

  // newerFoodArray = () =>
  //  this.state.foodList.map((eachFood, i) => {
  //   return eachFood.name;
  // });

  toggleForm = () => {
    let showBool = !this.state.showForm;
    this.setState({
      showForm: showBool
    });
  };

  addFoodHandler = theFood => {
    const foodCopy = [...this.state.foodList];
    foodCopy.push(theFood);
    this.setState({
      foodList: foodCopy
    });
    console.log(this.state.foodList);
  };

  handleInput = e => {
    console.log("HIT");
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log("THE FINAL STATE");
    console.log(this.state);
    // this.props.addTheFood(this.state);
    let name = this.state.name;
    let image = this.state.image;
    let calories = this.state.calories;
    let newFood = {
      name,
      image,
      calories
    };
    let oldFood = [...this.state.foodList];
    oldFood.push(newFood);
    this.setState({
      foodList: oldFood,
      name: "",
      calories: "",
      image: ""
    });
  };

  searchFunction = (e) => {
    console.log(e.target.value);
    console.log("searching..................");

    let copy = [...this.state.foodList];

    console.log(copy);

    let searchThis = copy.filter(eachItem => {

      console.log(eachItem);
      
      return eachItem.name.toLowerCase().includes(e.target.value);
    });

    this.setState({
      searchThis: searchThis
    });

    console.log(searchThis);
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="Search"
          onChange={this.searchFunction}
        />
        <br />
        <button className="newFoodButton" onClick={this.toggleForm}>
          {" "}
          Add Food{" "}
        </button>
        <div className="foodList">
          {this.state.showForm && (
            <AddFood
              // addTheFood={this.addFoodHandler}
              parentState={this.state}
              handleInput={this.handleInput}
              handleFormSubmit={this.handleFormSubmit}
            />
          )}
          <FoodBox foodList={this.state.searchThis} />
        </div>
      </div>
    );
  }
}

export default App;
