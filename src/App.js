import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './foodbox/FoodBox';

class App extends Component {
  state = {
    foodList: foods,
    showForm: false,
    // name: '',
    // calories: 0,
    // image: '',
    todaysFood: [],
  };
  displayFood = () => {
    let arr = this.state.foodList.map((food) => {
      return (
        <FoodBox
          key={food.name}
          name={food.name}
          calories={food.calories}
          image={food.image}
          theClickedFoodProp={this.clickedFood}
        />
      );
    });
    return arr;
  };

  displayTodaysFood = () => {
    let arr = this.state.todaysFood.map((food) => {
      return (
        <li>
          {food.name} {food.calories}
        </li>
      );
    });
    return arr;
  };
  toggleForm = () => {
    // if (this.state.showForm === false) {
    this.setState({
      showForm: !this.state.showForm,
    });
    // }
  };

  addFood = (e) => {
    e.preventDefault();
    let newFoodObj = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: 0,
    };
    let foodListCopy = [...this.state.foodList];
    foodListCopy.push(newFoodObj);

    this.setState({
      foodList: foodListCopy,
      showForm: false,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  searchList = (e) => {
    let filterFoods = foods.filter((eachFood) => {
      return eachFood.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({
      foodList: filterFoods,
    });
  };

  clickedFood = (food) => {
    console.log(food);
    let newTodaysFood = [...this.state.todaysFood];
    newTodaysFood.push(food);

    this.setState({
      todaysFood: newTodaysFood,
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleForm}>Add Food</button>

        <input type="text" placeholder="Search" onChange={this.searchList} />

        {this.state.showForm ? (
          <form onSubmit={this.addFood}>
            <label>Food Name:</label>
            <input onChange={this.handleChange} type="text" name="name" />
            <br />
            <label>Calories:</label>
            <input onChange={this.handleChange} type="number" name="calories" />
            <br />
            <label>Image URL:</label>
            <input onChange={this.handleChange} type="text" name="image" />
            <br />
            <input type="submit" />
          </form>
        ) : (
          ''
        )}
        <h1>hi</h1>
        {this.displayTodaysFood()}
        {this.displayFood()}
      </div>
    );
  }
}

export default App;
