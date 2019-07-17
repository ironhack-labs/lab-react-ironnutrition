import React, { Component } from "react";
import foods from "./foods.json";
import "./App.css";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import SearchBar from "./components/SearchBar";
import FoodList from "./components/FoodList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
      filtered: foods,
      formOpen: false,
      foodList: []
    };
  }

  addFoodHandler = food => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.unshift(food);
    this.setState({
      foods: foodsCopy,
      filtered: foodsCopy,
      formOpen: false
    });
  };

  toggleForm = () => {
    this.setState({
      formOpen: !this.formOpen
    });
  };

  handleSearch = searchStr => {
    const filteredFoods = [...this.state.foods].filter(el => {
      let regex = new RegExp(searchStr, "i");
      return el.name.match(regex);
    });
    this.setState({
      filtered: filteredFoods
    });
  };

  addToFoodListHandler = (index, quantity) => {
    let food = this.state.filtered[index];
    let foods = [...this.state.foodList];
    let foodInList = foods.find(el => el.name === food.name);
    if (foodInList) {
      foodInList.quantity = Number(
        Number(foodInList.quantity) + Number(quantity)
      );
    } else {
      food.quantity = Number(quantity);
      foods.push(food);
    }
    this.setState({
      foodList: foods
    });
    console.log(this.state.foodList);
  };

  deleteFoodHandler = index => {
    const foodsCopy = [...this.state.foodList];
    foodsCopy.splice(index, 1);
    this.setState({
      foodList: foodsCopy
    });
  };

  render() {
    console.log(this.state.foodList);

    return (
      <div className="App">
        {!this.state.formOpen ? (
          <button onClick={this.toggleForm}>Add food</button>
        ) : (
          <AddFoodForm pushFood={this.addFoodHandler} />
        )}
        <SearchBar searchFoods={this.handleSearch} />
        <div className="columns">
          <div className="column">
            {this.state.filtered.map((el, index) => (
              <FoodBox
                key={index}
                {...el}
                addToFoodList={quantity =>
                  this.addToFoodListHandler(index, quantity)
                }
              />
            ))}
          </div>
          <FoodList
            foodsToList={this.state.foodList}
            deleteFood={index => this.deleteFoodHandler(index)}
          />
        </div>
      </div>
    );
  }
}

export default App;
