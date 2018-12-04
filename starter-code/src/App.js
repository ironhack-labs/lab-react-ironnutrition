import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";

import FoodBox from "./components/FoodBox";
import AddFood from "./components/AddFood";
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
      foodsFiltered: [],
      formShowed: false
    };
  }

  componentWillMount =() =>{
    this.setState({foodsFiltered: this.state.foods})
  }

  toggleForm = () => {
    let show = !this.state.formShowed;
    this.setState({ ...this.state, formShowed: show });
  };

  addFoodHandler = (theFood) => {
    const foodCopy = [...this.state.foods];
    foodCopy.push(theFood);
    this.setState({
      foods: foodCopy,
      formShowed: false
    })
  }

  filterList = (event) => {
    console.log(event.target.value.toLowerCase())
    var updatedList = this.state.foods;
    updatedList = updatedList.filter(function(food){
      return food.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({foodsFiltered: updatedList});
  }

  render() {
    console.log();

    return (
      <React.Fragment>
        <div className="App">
          <h1 className="title">IronNutrition</h1>
          <SearchBar filterList={this.filterList}></SearchBar>
          <div className='buttonAdd'>
            <a onClick={this.toggleForm} className="button is-primary">
              Add new food
            </a>
          </div>

          {this.state.formShowed && <AddFood addFoodHandler={this.addFoodHandler} />}

          {this.state.foodsFiltered.map((food, i) => (
            <FoodBox
              key={i}
              name={food.name}
              img={food.image}
              calories={food.calories}
              quantity={food.quantity}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
