import React, { Component } from "react";
import "../App.css";
import "bulma/css/bulma.css";
import foods from '../foods.json'
import FoodBox from "./FoodBox.js";
import AddFood from "./AddFood.js";

class Main extends Component {

  state = {
    theList: foods,
    filteredList: foods,
    todaysFoods: [],
    nameInput: "",
    caloriesInput: "",
    imageInput: "",
    searchInput: "",
    formShowing: false
  };

  showListOfFoods = (index) => {
    return(
        this.state.filteredList.map((eachFoodItem)=>{
            return (<FoodBox key={index} oneFood = {eachFoodItem} />)
        })
    )
}

addFoodHandler = (theFood) => {
  const foodsCopy = [...this.state.foods];
  foodsCopy.push(theFood);
  this.setState({
    foods: foodsCopy
  })
}

  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <AddFood addTheFood={this.addFoodHandler} />
        <div>
          <input
            type="text"
            className="input search-bar"
            name="search"
            placeholder="Search"
            value=""
          />
        </div>
        <div className="columns">
          <div className="column">

          <div className="listOfFoods">
                {this.showListOfFoods()}
                </div>

            <div className="box">
            </div>
          </div>
          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
              <li>1 Pizza = 400 cal</li>
              <li>2 Salad = 300 cal</li>
            </ul>
            <strong>Total: 700 cal</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
