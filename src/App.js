import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';

export default class App extends Component {
  state = {
    food: foods,
    showForm: false,
    //false because you want the default to be not show the form
  };

  handleAddFood = (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let calories = event.target.calories.value;
    let image = event.target.image.value;
    this.setState({
      food: [
        ...this.state.food,
        { name: name, calories: calories, image: image },
      ],
    });
  };

  //------- METHOD for Button to show form-----------
  handleClick = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  handleFilter = (event) => {
    let inp = event.target.value;
    let newFoods = this.state.food.filter(() => {
      return foods.name.includes(inp);
    });
    this.setState({
      filteredFoods: newFoods,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>show form to add food</button>
        <AddFood />
        <Search
          onChange={this.handleSearch}
          input
          type="text"
          className="input"
          placeholder="search"
          value={this.state.input}
        />
        {this.state.food.map((food) => {
          return (
            <div className="App">
              <FoodBox
                name={food.name}
                calories={food.calories}
                image={food.image}
                quantity={food.quantity}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
