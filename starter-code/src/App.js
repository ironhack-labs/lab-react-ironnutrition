import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FoodBox from "./FoodBox";
import NewFoodForm from "./NewFoodForm";
import Search from "./Search";
import foods from "./foods.json";

class App extends Component {
  state = {
    foods: foods,
    filteredFoods: foods,
    adding: false,
    boughtFoods: [],
    totalCalories: 0
  };
  changeAddingState = () => {
    this.setState({
      adding: !this.state.adding
    });
  };
  renderTheForm = () => {
    if (!this.state.adding) {
      return null;
    } else {
      return <NewFoodForm addFoodItem={this.addFoodItem} />;
    }
  };

  searchFood = e => {
    let filteredFoods = this.state.foods.filter(foodItems => {
      return foodItems.name.includes(e.target.value);
    });
    this.setState({
      filteredFoods: filteredFoods
    });
    if (e.target.value.length == 0) {
      this.setState({
        filteredFoods: filteredFoods
      });
    }
  };

  addFoodItem = e => {
    e.preventDefault();
    let foodsCopy = [...this.state.foods];

    foodsCopy.unshift({
      name: e.target.elements.name.value,
      calories: e.target.elements.calories.value,
      image: e.target.elements.image.value
    });
    this.setState({
      foods: foodsCopy,
      filteredFoods: foodsCopy,
      adding: false
    });
  };

  loopThruFoods = () => {
    return this.state.filteredFoods.map(foodItem => {
      return (
        <FoodBox
          key={Math.random()}
          food={foodItem}
          addListItem={this.addListItem}
        />
      );
    });
  };

  addListItem = (foodItem, quantity) => {
    let arrayString = [];
    for (let i = 0; i < this.state.boughtFoods.length; i++) {
      arrayString.push(this.state.boughtFoods[i].name);
    }
    if (arrayString.includes(foodItem.name)) {
      console.log("duplicate");
      /*Duplicate code handler*/
      let newFoodList = [...this.state.boughtFoods];
      newFoodList[arrayString.indexOf(foodItem.name)].calories +=
        foodItem.calories * quantity;
      newFoodList[arrayString.indexOf(foodItem.name)].quantity =
        parseInt(newFoodList[arrayString.indexOf(foodItem.name)].quantity) +
        parseInt(quantity);

      this.setState({
        boughtFoods: newFoodList,
        totalCalories: this.state.totalCalories + foodItem.calories * quantity
      });
    } else {
      let newFoodList = [...this.state.boughtFoods];

      newFoodList.push({
        name: foodItem.name,
        calories: foodItem.calories * quantity,
        quantity: quantity
      });
      this.setState({
        totalCalories: this.state.totalCalories + foodItem.calories * quantity,
        boughtFoods: newFoodList
      });
    }
    console.log(arrayString);
    // if (this.state.boughtFoods.length > 0) {
    // }
  };

  renderListItems = () => {
    // console.log(this.state.boughtFoods);
    return this.state.boughtFoods.map((items, i) => {
      return (
        <ul>
          <li>
            <strong>
              {items.quantity} {items.name} = {items.calories} calories
            </strong>
          </li>

          <button onClick={event => this.deleteListItem(i)}>Delete</button>
        </ul>
      );
    });
  };

  deleteListItem = i => {
    let boughtFoodsCopy = [...this.state.boughtFoods];

    console.log(this.state.boughtFoods[i]);

    boughtFoodsCopy.splice(i, 1);
    this.setState({
      boughtFoods: boughtFoodsCopy,
      totalCalories:
        this.state.totalCalories - this.state.boughtFoods[i].calories
    });
  };
  render() {
    return (
      <div>
        <h1 id="title">
          <center>IronNutrition</center>
        </h1>
        <div className="App">
          <div className="forms">
            <button onClick={this.changeAddingState}>Add food item</button>
            <br />

            {this.renderTheForm()}
          </div>
          <div className="foods">
            Search!
            <input
              id="searching"
              name="searchQuery"
              onChange={this.searchFood}
              type="text"
            />
            {this.loopThruFoods()}
          </div>
          <div className="listOfFoods">
            FOODS:{this.renderListItems()}
            <br />
            <hr />
            <strong>Total calories: {this.state.totalCalories}kcal</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
