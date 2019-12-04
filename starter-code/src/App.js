import React, { Component } from "react";
import "bulma/css/bulma.css";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox/FoodBox";

class App extends Component {
  constructor() {
    super();

    this.foods = [...foods];

    this.state = {
      currentFood: {
        name: "",
        calories: null,
        image: ""
      },
      foods: this.foods,
      showForm: false
    };
  }

  showForm() {
    let showFormUpdated = this.state.showForm;
    showFormUpdated = !showFormUpdated;

    this.setState({
      ...this.state,
      showForm: showFormUpdated
    });
  }
  updateFood(e, key) {
    e.preventDefault();
    let currentFood = { ...this.state.currentFood };
    currentFood[key] = e.target.value;

    this.setState({
      ...this.state,
      currentFood: currentFood
    });
  }
  addFood(e) {
    e.preventDefault();
    let foodsUpdated = [...this.state.foods]
    foodsUpdated.unshift(this.state.currentFood)

    this.setState({
      ...this.state,
      foods: foodsUpdated,
      showForm: false
      
    });
  }

  searchFood(e){
    e.preventDefault();
    let foods = [...this.foods];
    let foodsFound;
   
    foodsFound = foods.filter((food) => food.name.toLowerCase().includes(e.target.value.toLowerCase()))
   
    this.setState({
      ...this.state,
      foods: foodsFound
    });
    
  }

  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Search food" onChange={(e) => this.searchFood(e)}/>
        <button onClick={() => this.showForm()}>Add New Food</button>
        {this.state.showForm === true && (
          <form>
            <input
              type="text"
              placeholder="name"
              onChange={e => this.updateFood(e, "name")}
            />
            <input
              type="number"
              placeholder="calories"
              onChange={e => this.updateFood(e, "calories")}
            />
            <input
              type="text"
              placeholder="image url"
              onChange={e => this.updateFood(e, "image")}
            />
            <input
              type="submit"
              onClick={e => this.addFood(e)}
              value="Submit"
            />
          </form>
        )}

        {this.state.foods.map((food, idx) => (
          <FoodBox key={idx} {...food}></FoodBox>
        ))}
      </div>
    );
  }
}

export default App;
