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
      listOfFoods: []
    };
  }

  showFoods = () => {
    let copyFoods = [...this.state.foods].map((eachFood, index) => {
      // console.log(eachFood)
      return (
        <li key={index}>
          <FoodBox updateFoodList={this.updateFoodList} {...eachFood} />
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

  updateFoodList = foodBoxState => {
    let newListOfFoods = [...this.state.listOfFoods];

    newListOfFoods[foodBoxState.name] = foodBoxState;

    this.setState({
      listOfFoods: newListOfFoods
    });
  };

  showTodaysFood = () => {
    let foods = this.state.listOfFoods;
    let array = [];
    let total = 0;
    for (let key in foods) {
      console.log(Number(foods[key].calories));
      total += Number(foods[key].quantity) * Number(foods[key].calories);
      array.push(
        <li key={key}>
          name: {key}- calories:{" "}
          {Number(foods[key].quantity) * Number(foods[key].calories)}
        </li>
      );
    }
    return (
      <ul>
        TOTAL is {total}!!!!<br></br> {array}
      </ul>
    );
  };

  render() {
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
          {this.showTodaysFood}
        </div>
      </div>
    );
  }
}

export default App;
