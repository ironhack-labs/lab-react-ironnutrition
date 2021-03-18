import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import Search from './Components/Search';
import TodaysFoods from './Components/TodaysFoods';

class App extends Component {
  state = {
    myFoods: [...foods],
    formRendered: false,
    searchInput: '',
    todaysFood: [],
  };
  renderForm = (boolean) => {
    this.setState({ formRendered: boolean });
  };
  addFood = (newFood) => {
    this.setState({ myFoods: [newFood, ...this.state.myFoods] });
  };
  getSearchInput = (input) => {
    this.setState({ searchInput: input });
  };
  getTodaysFood = (food) => {
    if (this.state.todaysFood.some((el) => el.name === food.name)) {
      const updatedTodaysFood = this.state.todaysFood.map((el) => {
        if (el.name === food.name) el.quantity += food.quantity;
        return el;
      });
      this.setState({ todaysFood: updatedTodaysFood });
    } else {
      this.setState({ todaysFood: [...this.state.todaysFood, food] });
    }
  };
  render() {
    return (
      <div className="App">
        <h1>
          <strong>IronNutrition</strong>
        </h1>
        {this.state.formRendered || (
          <button onClick={() => this.renderForm(true)}>Add new food</button>
        )}
        {this.state.formRendered || <Search search={this.getSearchInput} />}
        <div className="columns">
          <div className="column">
            {this.state.formRendered ? (
              <AddFoodForm
                renderForm={this.renderForm}
                addFood={this.addFood}
              />
            ) : (
              this.state.myFoods
                .filter((food) =>
                  food.name.match(new RegExp(this.state.searchInput, 'i'))
                )
                .map((el, i) => (
                  <Foodbox key={i} food={el} getFood={this.getTodaysFood} />
                ))
            )}
          </div>
          <div className="column">
            {this.state.formRendered || (
              <TodaysFoods list={this.state.todaysFood} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
