import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import FoodBox from "./Component/FoodBox/FoodBox";
import foods from "./foods.json";
import ToggleForm from "./Component/ToggleForm/ToggleForm";
import SearchBar from './Component/searchBar/SearchBar'

class App extends Component {
  constructor() {
    super();
    this.state = {foods: foods};
    this.addFood = this.addFood.bind(this)
  }

  addFood(e, state) {
    e.preventDefault();
    const foods = this.state.foods;
    this.setState({...state, food: foods.unshift(state)})
  }
  handleUpdateInfo = (e)=>{
    this.state.foods = foods
    let food = this.state.foods.filter(elem => {
    return elem.name.includes(e)
  })
    this.setState({foods: food})
}
  render() {
    return (
      <div class="App">
        <SearchBar handleUpdateInfo={this.handleUpdateInfo}/>
        <ToggleForm addFood={this.addFood}/>
        {this.state.foods.map(food =><FoodBox {...food}/>)}

      </div>
    );
  }
}

export default App;
