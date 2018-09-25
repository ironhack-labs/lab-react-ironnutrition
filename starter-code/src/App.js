import React, { Component } from "react";

import "./App.css";

import FoodList from "./Foodlist";
import "bulma/css/bulma.css";

import foods from "./foods.json";
import NewFood from "./NewFood";

class App extends Component {
  state = {
    foodList: foods.slice(),
    showForm: true
  };

  addNewFood = (e, newThingToAdd) => {
    e.preventDefault();

    const newFood = {
     name: newThingToAdd.nameField,
      calories: newThingToAdd.caloriesField,
      image: newThingToAdd.imageField,
    };

    const allTheFoods = [...this.state.foods];
    // const allTheMovies = this.state.movies.slice()
    // either of these works, they each simply make a duplicate of this.state.movies

    allTheFoods.push(newFood);

    this.setState({foodList: allTheFoods })

  }



  render() {
    return(

      <div>

    <FoodList foods={this.state.foodList.slice()} />
    <NewFood addnew = {this.addNewFood} />
    </div> 
      )
  }
}

export default App;
