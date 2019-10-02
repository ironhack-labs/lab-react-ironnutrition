import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      newFoodsArr: foods,
      displayForm: false
    };
  }

  showForm() {
    this.setState({
      ...this.state,
      displayForm: true
    });
  }

  updateState(newFood) {
    let newState = {
      ...this.state,
      displayForm: false,
    };

    newState.foods.unshift(newFood);
    newState.newFoodsArr.push(newFood)

    this.setState(newState);
  }

  searchFood(e) {
    let newFoods = {...this.state};
    let searchWord = e.target.value;
    let filteredFoods = newFoods.newFoodsArr.filter(food => food.name.toLowerCase().includes(searchWord.toLowerCase()))
    newFoods.foods = filteredFoods
    this.setState (newFoods)
    
  }

  render() {
    return (
      <div>
        <h1>IronNutrition</h1>
        <input type="search" defaultValue="" onChange={(e) => this.searchFood(e)}/>
        
        <button onClick={() => this.showForm()}>Add new food</button>
        {this.state.displayForm && <Form sendStateFromApp={(state) => this.updateState(state)}></Form>}
        {this.state.foods.map((foods, idx) => (
          <FoodBox key={idx} {...foods}></FoodBox>
        ))}
      </div>
    );
  }
}

export default App;
