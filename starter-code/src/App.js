import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import FoodBox from "./Component/FoodBox/FoodBox";
import foods from "./foods.json";
import ToggleForm from "./Component/ToggleForm/ToggleForm";

class App extends Component {
  constructor() {
    super();
    this.state = {foods};
    this.addFood = this.addFood.bind(this)
  }





  addFood(e, state) {
    e.preventDefault();
    const foods = this.state.foods;
    this.setState({...state, food: foods.unshift(state)})
  }




  
  render() {
    return (
      <div>
        <ToggleForm addFood={this.addFood}/>

        {this.state.foods.map(food =><FoodBox {...food}/>)}

      </div>
    );
  }
}

export default App;
