import React, { Component } from 'react';
import foodsDB from './foods.json';
import './App.css';
import Food from './components/Food.js';
import Form from './components/Form.js';

class App extends Component {
  state = {
    foods: foodsDB,
    food: {},
    toAdd: {},
    form: undefined,
    todaysFood: [],
    totalCalories: 0
  };

  handleInput = e => {
    const key = e.target.name;
    const { value } = e.target;

    this.setState(prevState => {
      let { food } = prevState;
      food[key] = value;

      return { food };
    });
  };

  addFood = e => {
    e.preventDefault();
    this.setState(prevState => {
      const { foods, food } = prevState;
      foods.push(food);

      return { foods, food: {}, form: undefined };
    });
  };

  showForm = () => {
    this.setState(prevState => {
      const form = <Form addFood={this.addFood} handleInput={this.handleInput} />;
      return { form };
    });
  };

  handleQuery = e => {
    const query = e.target.value.toLowerCase();
    this.setState(prevState => {
      const foods = foodsDB.filter(
        food =>
          food.name.toLowerCase().includes(query) ||
          food.quantity
            .toString()
            .toLowerCase()
            .includes(query) ||
          food.calories
            .toString()
            .toLowerCase()
            .includes(query)
      );

      return { foods };
    });
  };

  handleAddToList = (name, calories) => e => {
    const quantity = e.target.value;
    this.setState(prevState => {
      const toAdd = { name, calories, quantity };
      return { toAdd };
    });
  };

  addTodaysFood = (name, calories, quantity) => () => {
    this.setState(prevState => {
      let todaysFood = [];

      const isRepeated = prevState.todaysFood.reduce((accum, currentFood) => {
        return accum || currentFood.name === name;
      }, false);

      if (isRepeated) {
        todaysFood = prevState.todaysFood.map(food => {
          if (food.name === name) food.quantity = parseInt(food.quantity, 10) + parseInt(quantity, 10);
          return food;
        });
      } else {
        todaysFood = [
          ...prevState.todaysFood,
          {
            name,
            calories,
            quantity
          }
        ];
      }

      const totalCalories = todaysFood.reduce((accum, currentFood) => {
        return accum + currentFood.calories * currentFood.quantity;
      }, 0);

      return { todaysFood, totalCalories };
    });
  };

  render() {
    const { foods, todaysFood, totalCalories } = this.state;
    return (
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title is-1">IronNutrition</h1>
            <div className="field">
              <input type="text" name="query" id="query" onChange={this.handleQuery} className="input" />
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="foods-container">
              <button
                className="button is-primary"
                onClick={this.showForm}
                style={{
                  marginBottom: '20px'
                }}
              >
                Add new food
              </button>
              {this.state.form}
              {foods.map((food, index) => (
                <Food
                  name={food.name}
                  cals={food.calories}
                  img={food.image}
                  key={index}
                  handleAddToList={this.handleAddToList}
                  addTodaysFood={this.addTodaysFood}
                />
              ))}
            </div>
          </div>
          <div className="column">
            <h2 className="subtitle is-4">Today's foods</h2>
            <ul>
              <br />
              {todaysFood.map((food, index) => (
                <li key={index}>
                  {food.quantity} {food.name} - {food.calories}
                </li>
              ))}
              <br />
            </ul>
            <p>
              <b>Total: {totalCalories} cal</b>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
