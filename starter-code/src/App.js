import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import FoodBox from "./FoodBox";
import foods from "./foods.json";
import AddFood from "./AddFood";
import AddItem from "./AddItem";

class App extends Component {
  state = {
    foods: foods,
    filteredFoods: foods,
    boughtFoods: [],
    totalCalories: 0
  };

  loopThroughFoods = () => {
    return this.state.filteredFoods.map((eachFood, i) => {
      return <FoodBox buyFood={this.buyFood} food={eachFood} />;
    });
  };

  setFood = e => {
    e.preventDefault();

    let foodCopy = [...this.state.foods];
    console.log(foodCopy);
    let food = {
      name: e.target.elements.name.value,
      calories: e.target.elements.calories.value,
      image: e.target.elements.image.value
    };
    foodCopy.push(food);
    this.setState({
      filteredFoods: foodCopy,
      foods: foodCopy
    });
    (e.target.elements.name.value = ""), (e.target.elements.calories.value = ""), (e.target.elements.image.value = "");
    // this.loopThroughFoods();
  };

  buyFood = (food, quantity) => {
    console.log(food);
    let boughtFoodsCopy = [...this.state.boughtFoods];

    boughtFoodsCopy.push({
      name: food.name,
      quantity: quantity,
      calories: quantity * food.calories
    });
    this.setState({
      boughtFoods: boughtFoodsCopy,
      totalCalories: this.state.totalCalories + food.calories * quantity
    });
  };

  filterFoods = e => {
    let filteredFoods = this.state.foods.filter(eachfood => {
      return eachfood.name.includes(e.target.value);
    });
    this.setState({
      filteredFoods
    });
  };

  // addItems = (e) => {
  //   let items = this.state.
  // }

  render() {
    return (
      <div >
        <h1 class="title" >IronNutrition</h1>
        <div class="bigdiv">
        <div class="middle">
          <h2 >Search for an expecific Food:</h2>
        
          <input  name="foods" onChange={this.filterFoods} type="text" />
        
          <h2 >Add your own food:</h2>
          <AddFood setFood={this.setFood} />
          {this.loopThroughFoods()}
          
        </div>
        <div class="boughtFood">
          <AddItem boughtFoods={this.state.boughtFoods} />
          <h3><strong>Total Calories {this.state.totalCalories}</strong></h3>
        </div> 
        </div>
      </div>
    );
  }
}

export default App;
