import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/foodbox";
import FoodForm from "./components/foodform";
// import SearchBar from "./components/searchbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      formShowing: false,
      search: "",
      filterFoods: foods,
      listOfFoods: [],
      listOfFoodsCalories: []
    };
  }

  showFoods = () => {
    let copyFoods = [...this.state.foods].map((eachFood, index) => {
      // console.log(eachFood)
      return (
        <li key={index}>
          <FoodBox addFoodTodayFunction={this.addFoodToday} {...eachFood} />
        </li>
      );
    });
    return copyFoods;
  };

  showFoodForm = () => {
    this.setState({ formShowing: !this.state.formShowing });
  };

  submitFood = (e, newName, newCalories, newImage, newQuantity) => {
    e.preventDefault();

    let foodsCopy = [...this.state.foods];
    foodsCopy.unshift({
      name: newName,
      calories: newCalories,
      image: newImage,
      quantity: newQuantity
    });
    this.setState({
      foods: foodsCopy,
      formShowing: false
    });
  };

  searchInput = e => {
    const keyPress = e.target.value;

    let filterFoods = foods.filter(eachFood => {
      return eachFood.name.toLowerCase().includes(keyPress.toLowerCase());
    });

    this.setState({
      search: e.target.value,
      foods: filterFoods
    });
  };

  addFoodToday = (name, calories, quantity) => {
    let listOfFoodsCopy = [...this.state.listOfFoods];
    listOfFoodsCopy.unshift({
      name: name,
      calories: calories,
      quantity: quantity
    });
    this.setState({
      listOfFoods: listOfFoodsCopy
    });
  };

  deleteItem = i => {
    // console.log('delete'+ i)
    let listOfFoodsCopy = [...this.state.listOfFoods];
    listOfFoodsCopy.splice(i, 1);
    this.setState({
      listOfFoods: listOfFoodsCopy
    });
  };

  sumOfCalories = () => {
    function getSum(total, num) {
      return total + Math.round(num);
    }
    let calorieList = [];
    this.state.listOfFoods.map(eachFood => {
      return calorieList.push(eachFood.calories * eachFood.quantity);
    });
    return calorieList.reduce(getSum, 0);
  };

  todaysFood = () => {
    return this.state.listOfFoods.map((eachItem, i) => {
      return (
        <tr key={i}>
          <td>{eachItem.quantity}</td>
          <td>{eachItem.name}</td>
          <td>{eachItem.calories * eachItem.quantity}</td>
          <td>
            <button className="button" onClick={() => this.deleteItem(i)}>
              X
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    // console.log(this.state.listOfFoods);
    // console.log(this.state.listOfFoods[0]);
    return (
      <div className="App">
        <div className="container">
          <nav>
            <input
              placeholder="Search for a food"
              name="search"
              onChange={this.searchInput}
              className="input"
            />
            <button
              className="button is-rounded is-info"
              onClick={this.showFoodForm}
            >
              Add Food
            </button>
          </nav>
          {this.state.formShowing && (
            <FoodForm submitFoodFunction={this.submitFood} />
          )}
          <ul>{this.showFoods()}</ul>
        </div>
        <div className="todayfoods">
          <h1>Foods Today</h1>
          <table className="table">
            <thead>
              <tr>
                <td>Quantity</td>
                <td>Name of Food</td>
                <td>Calories</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {this.todaysFood()}
              <tr>
                <td>
                  <h3>Total: {this.sumOfCalories()}</h3>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
