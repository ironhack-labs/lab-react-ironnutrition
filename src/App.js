import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './Components/FoodBox';
import AddFood from './Components/AddFood';
import Search from './Components/Search';
import trashIcon from './trash.svg';

class App extends Component {
  state = {
    foods: foods,
    isFormOpen: false,
    filtered: foods,
    today: [],
  };
  clickForm = () => {
    this.setState({
      isFormOpen: !this.state.isFormOpen,
    });
  };
  addFoodHandler = (theFood) => {
    const foodCopy = [...this.state.foods];
    //push to the first element of array
    foodCopy.unshift(theFood);
    this.setState({
      foods: foodCopy,
      filtered: foodCopy,
      isFormOpen: false,
    });
  };
  filterFoodFunc = (input) => {
    const filtered = this.state.foods.filter((el) =>
      el.name.toLowerCase().includes(input.toLowerCase())
    );
    this.setState({
      filtered: filtered,
    });
  };
  addTodaysFoodHandler = (food) => {
    const today = [...this.state.today];
    let foundFood = today.find((el) => el.name === food.name);

    if (foundFood) {
      //if I found food, just update quantity and calories
      foundFood.quantity += food.quantity;
      foundFood.calories += food.calories * food.quantity;
    } else {
      food.calories *= food.quantity;
      today.push(food);
    }

    this.setState({
      today: today,
    });
  };

  removeTodayFoodHandler(ingredient) {
    let today = [...this.state.today];
    today.splice(
      today.findIndex((el) => el.name === ingredient.name),
      1
    );

    this.setState({
      today: today,
    });
  }
  render() {
    const { isFormOpen, filtered, today } = this.state;
    const buttonText = isFormOpen ? 'Click to hide' : 'Click to show';
    return (
      <div className="App">
        <div className="container">
          <h1 className="Title">IronNutrition</h1>
          <div>
            <Search filterFood={this.filterFoodFunc} />
            <button className="button" onClick={this.clickForm}>
              {buttonText}
            </button>
            <div>
              {isFormOpen && <AddFood addTheFood={this.addFoodHandler} />}
              <div style={{ width: '70%', float: 'left' }}>
                {filtered.map((oneFood, i) => {
                  return (
                    <Foodbox
                      key={i}
                      food={oneFood}
                      addFood={this.addTodaysFoodHandler}
                    />
                  );
                })}
              </div>
            </div>
            <div style={{ width: '30%', float: 'right' }}>
              <h2>Today's food</h2>
              <ul>
                {today.map((ingredient, i) => {
                  return (
                    <li key={i}>
                      {ingredient.quantity} {ingredient.name} ={' '}
                      {ingredient.calories} cal
                      <button onClick={() => this.removeTodayFoodHandler(ingredient)}>
                        <img src={trashIcon} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
