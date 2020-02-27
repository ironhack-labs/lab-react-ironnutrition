import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodButton from "./components/AddFoodButton";
import Search from "./components/Search";

class App extends Component {
  state = {
    foodArr: [...foods],
    filtered: [...foods],
    showedForm: false
  };

  addNewFood = newFood => {
    const foodCopy = [...this.state.foodArr];
    foodCopy.unshift(newFood);
    console.log(foodCopy);

    this.setState({ foodArr: foodCopy });
  };

  toggleButton = () => {
    this.setState({ showedForm: !this.state.showedForm });
  };

  // searchFunction = e => {
  //   let { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  filterFunc = subStr => {
    const filteredArr = this.state.filtered.filter(oneFood =>
      oneFood.name.toLowerCase().includes(subStr)
    );
    this.setState({ foodArr: filteredArr });
  };

  render() {
    return (
      <div className='App'>
        <button onClick={this.toggleButton}>New Food</button>
        {this.state.showedForm ? <AddFoodButton addFood={this.addNewFood} /> : null}
        <Search searchedString={this.filterFunc} />
        {this.state.foodArr.map((oneFood, index) => (
          <FoodBox key={index} addFood={this.addNewFood} {...oneFood} />
        ))}
      </div>
    );
  }
}

export default App;
