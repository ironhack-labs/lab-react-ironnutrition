import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

// console.log(foods)
class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
      formActive: false,
      search: undefined
    };
  }
  updateState(state) {
    let newState = {
      ...this.state,
      formActive: false
    };
    newState.foods.unshift(state);
    this.setState(newState);
  }
  showForm() {
    let newState = {
      ...this.state,
      formActive: true
    };
    this.setState(newState);
  }
  updateSearch(e) {
    let search = e.target.value;
    console.log(typeof(search))
    let newFoods = this.state.foods.filter(food => {console.log(food.name);food.name.includes(search)})
    console.log(newFoods)
    let newState = {
      ...this.state,
      foods: newFoods
    }
    this.setState(newState)
  }
  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        
        <button onClick={e => this.showForm(e)}>Add food</button>
        {this.state.formActive && (
          <form>
            <AddFoodForm
              sendStateFromApp={state => this.updateState(state)}
            ></AddFoodForm>
          </form>
        )}
        <Search
          searchFood={e => {
            this.updateSearch(e);
          }}
        ></Search>
        {this.state.foods.map((food, idx) => {
          return <FoodBox key={idx} {...food}></FoodBox>;
        })}
      </div>
    );
  }
}

export default App;
