import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import AddFood from './components/AddFood';
import Foodbox from './components/FoodBox';
import Menu from './components/Menu';


class App extends Component {
  state = {
    foodList: foods,
    filteredList: foods,
    showForm: false,
    todaysFood:[],
    allCalories:[]
  };

  handleAdd = (event) => {
    event.preventDefault();
    console.log(event.target);

    let food = event.target;
    let newFood = {
      name: food.name.value,
      calories: food.calories.value,
      quantity: 0,
      image: food.image.value,
    };

    this.setState({
      foodList: [...this.state.foodList, newFood],
      filteredList: [...this.state.filteredList, newFood],
      showForm: false,
    });
  };

  handleFormShow = () => {
    this.setState({
      showForm: true,
    });
  };

  handleSearch = (event) => {
    event.preventDefault();
    let search = event.target.value;
    const { foodList } = this.state;

    let searchedList = foodList.filter((food) => {
      return food.name.toLowerCase().includes(search.toLowerCase());
    });

    this.setState({
      filteredList: searchedList,
    });
  };

  handleTodaysFood = (item) => {
    console.log('add quantity clicked');
    console.log(this.state.allCalories)

    let newItem = {
      name: item.name,
      quantity: item.quantity,
      calories: item.calories
    }

    this.setState({
      todaysFood: [...this.state.todaysFood, newItem],
      allCalories: [...this.state.allCalories, newItem.calories*newItem.quantity]
    })


  };

  render() {
    const { filteredList, showForm, todaysFood, allCalories } = this.state;

    return (
      <div className="app">
        <div className="header">
          <h1 className="headline">Nutritious and Delicious</h1>
        </div>
        <div className="filter">
          {showForm ? (
            <AddFood onAdd={this.handleAdd} />
          ) : (
            <button
              className="button"
              variant="outline-primary"
              onClick={this.handleFormShow}
            >
              Add new food
            </button>
          )}

          <input
            className="search"
            onChange={this.handleSearch}
            type="text"
            placeholder="Search"
          ></input>

          <hr></hr>
        </div>
        <div className="columns">
          <div className="column">
            {filteredList.map((food) => {
              return <Foodbox food={food} toSum={this.handleTodaysFood}/>;
            })}
          </div>
          <div className="column">
            <h2 className="subline">Today's foods</h2>
            <hr></hr>
            {todaysFood.map((item) => {
              return <Menu item={item}/>;
            })}
            <p> <span className="bold">Total:</span> 
            {allCalories.reduce((a,b) => {
              return a+b;
            },0)
            } 
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
