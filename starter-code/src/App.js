import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import Foodbox from "./Foodbox/Foodbox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foodsArray: [...foods],
      currentFood: {
        name: "",
        image: "",
        calories: 0,
      },
      isFormDisplayed: false,
      searchString:""
    };
  }

  updateFood(e, key) {
    let foodUpdated = { ...this.state.currentFood };
    foodUpdated[key] = e.target.value;
    this.setState({
      ...this.state,
      currentFood: foodUpdated,
    });
  }

  saveFood(e) {
    e.preventDefault();
    if (this.state.isFormDisplayed) {
      let copyFood = [...this.state.foodsArray];
      let copyCurrent = { ...this.state.currentFood };
      copyFood.push(copyCurrent);
      this.setState({
        ...this.state,
        foodsArray: copyFood,
        isFormDisplayed: false,
      });
      return;
    } else {
      this.setState({
        ...this.state,
        isFormDisplayed: true,
      });
      return;
    }
  }

  findFood(e){
    this.setState({
      ...this.state,
      searchString: e.target.value
    })   
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="Search Food"
          onChange={e => this.findFood(e)}
          value={this.state.searchString}
        />
        <button onClick={e => this.saveFood(e)}>Add New Food</button>
        <div>
          {this.state.isFormDisplayed && (
            <form>
              <input
                type="text"
                placeholder="Enter Food Name"
                onChange={e => this.updateFood(e, "name")}
                value={this.state.currentFood.name}
              />
              <input
                type="text"
                placeholder="Enter Image Url"
                onChange={e => this.updateFood(e, "image")}
                value={this.state.currentFood.image}
              />
              <input
                type="number"
                placeholder="Enter Calories"
                onChange={e => this.updateFood(e, "calories")}
                value={this.state.currentFood.calories}
              />
            </form>
          )}
        </div>
        {this.state.foodsArray.filter(food => food.name.includes(this.state.searchString)).map((food, i) => (
          <Foodbox key={i} payload={{ ...food }}></Foodbox>
        ))}
      </div>
    );
  }
}

export default App;



// {this.state.foodsArray.filter(food => {
//   let pattern = new RegExp ("/^"+ this.state.searchString +"/g");
//   return pattern.test(food.name)
// }).map((food, i) => (
//   <Foodbox key={i} payload={{ ...food }}></Foodbox>
// ))}