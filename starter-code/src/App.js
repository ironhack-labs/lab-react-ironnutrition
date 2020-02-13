import React, { Component } from 'react';
import './App.css';
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from './FoodBox';
import Buttons from './Buttons';

class App extends Component {
  state = {
    foods,
    allFoods: foods,
    foodForm: false,
    totalCalories: 0
  };

  toggleFoodForm = () => {
    this.setState({
      foodForm: !this.state.foodForm
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.toggleFoodForm();
    // console.log("submit ", this.state);
    let newFoods = [...this.state.foods];
    newFoods.unshift({
      name: this.state.food,
      calories: this.state.calories,
      quantity: 1,
      image: this.state.image
    });

    this.setState({
      foods: newFoods,
      allFoods: newFoods
    });
  };

  handleInputChange = e => {
    console.log("change", e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  showFoodForm = () => {
    if (this.state.foodForm) {
      return (
        <form onSubmit={this.handleFormSubmit}>
          <label>
            <b>Food Name:</b>
          </label>
          <input
            onChange={this.handleInputChange}
            type="text"
            name="food"
            placeholder="Food Name..."
          />
          <br />
          <label>
            <b>Calories:</b>{" "}
          </label>
          <input
            onChange={this.handleInputChange}
            type="number"
            name="calories"
            placeholder="Caloric-Count..."
          />
          <br />
          <label>
            <b>Image URL: </b>
          </label>
          <input
            onChange={this.handleInputChange}
            type="url"
            name="image"
            placeholder="Image URL..."
          />
          <br />
          <Buttons btnType="button is-info" type="submit" btnText="Submit" />
        </form>
      );
    } else {
      return (
        <Buttons
          actions={this.toggleFoodForm}
          btnText="+ Add New Food"
          btnType="button is-primary"
        />
      );
    }
  };


  handleSearchChange = (e) => {
    let searchList = [...this.state.allFoods];
    let searchListSelection = searchList.filter(eachItem => {
      return eachItem.name.toLowerCase().includes(e.target.value.toLowerCase())
    });
    this.setState({
      foods: searchListSelection
    });
  };

  addToList = (i) => {
    // console.log(foods)
    return (
      <div className="column is-offset-1">
        <h2>Today's List</h2>
        <br />
        <ul>
          <li>{}</li>
        </ul>
        <br />
        <h4>Total Calories = {this.state.totalCalories}</h4>
      </div>
    );
  }

  render() {
    // console.log(this.state.foods)

    return (
      <div className="App container">
        <h1>IronNutrition</h1>
          {this.showFoodForm()}
          <br/>
          <input onChange={this.handleSearchChange} name="search" placeholder="Search for food..." />
          <br/>
          <br/>
          <div className="columns is-half">
            <FoodBox data={this.state.foods} />
            {this.addToList()}
          </div>
          
      </div>
    );
  }
}

export default App;
