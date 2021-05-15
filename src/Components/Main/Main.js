import React from 'react';
import './Main.css';
import 'bulma/css/bulma.css';

import FoodBox from '../FoodBox/FoodBox';
import NewFood from '../NewFood/NewFood';
import Search from '../Search/Search';

import foods from '../../foods.json';

export default class Main extends React.Component {
  state = {
    allFoods: foods,
    showingForm: false,
    filter: '',
    addedFoods: {},
  };

  handleNewFood = (food) => {
    const copy = [...this.state.allFoods];
    copy.push(food);
    this.setState({ allFoods: copy });
  };

  addFood = (food) => {
    const copy = { ...this.state.addedFoods };
    copy[food.name] = {
      name: food.name,
      calories: food.calories,
      quantity: copy[food.name]
        ? copy[food.name].quantity + food.quantity
        : food.quantity,
      total: copy[food.name] ? copy[food.name].total + food.total : food.total,
    };
    this.setState({ addedFoods: copy });
  };

  removeFood = (name) => {
    const copy = { ...this.state.addedFoods };
    delete copy[name];
    this.setState({ addedFoods: copy });
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  toggleForm = () => {
    this.setState({ showingForm: !this.state.showingForm });
  };

  render() {
    const filteredFoods = this.state.allFoods.filter((food) =>
      food.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    const addedFoods = Object.values(this.state.addedFoods);
    const total = addedFoods.reduce((a, b) => a + b.total, 0);

    return (
      <div>
        <h1 className="title">IronNutrition</h1>
        <Search changeListener={this.changeFilter} value={this.state.filter} />
        <div className="columns">
          <div className="column">
            {filteredFoods.map((food) => {
              return (
                <FoodBox
                  key={food.name}
                  {...food}
                  addFoodListener={this.addFood}
                />
              );
            })}
            <button onClick={this.toggleForm}>New Food</button>
            {this.state.showingForm && <NewFood newFood={this.handleNewFood} />}
          </div>
          <div className="column">
            <h1 className="title is-4">Today's Foods</h1>
            <ul>
              {addedFoods.map((food) => {
                return (
                  <li key={food.name}>
                    {food.quantity} {food.name} = {food.total} cal
                    <button
                      onClick={() => {
                        this.removeFood(food.name);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
            <h1 className="subtitle">Total: {total} cal</h1>
          </div>
        </div>
      </div>
    );
  }
}
