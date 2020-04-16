import React, { Component } from 'react';
import foods from './foods.json';
import FoodBoxes from './components/FoodBoxes';
import TodaysFoods from './components/TodaysFoods';
import Search from './components/Search';
import AddFoodForm from './components/AddFoodForm';

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  state = {
    foods: foods.map(food => {
      return { ...food, show: true }
    }),
    todaysFoods: [],
    showForm: false,
  };

  addFood = (food) => {
    this.setState({
      foods: [
        ...this.state.foods,
        { ...food, show: true },
      ],
    }, this.toggleAddForm());
  };

  addTodaysFoods = (addedFood) => {
    // this function should be refactored into two functions
    // since it updates state of both foods and todaysFoods
    const { foods, todaysFoods } = this.state;

    const foodToUpdate = foods.findIndex(food => {
      return food.name === addedFood.name;
    });
    const updatedFoods = [...foods];
    updatedFoods.splice(foodToUpdate, 1, addedFood);

    const todaysFoodsToUpdate = todaysFoods.findIndex(food => {
      return food.name === addedFood.name;
    });
    const todaysUpdatedFoods = [...todaysFoods];

    if (todaysFoodsToUpdate === -1) {
      todaysUpdatedFoods.push(addedFood);
    } else {
      todaysUpdatedFoods[todaysFoodsToUpdate].quantity += addedFood.quantity;
    }

    this.setState({
      foods: updatedFoods,
      todaysFoods: todaysUpdatedFoods,
    })
  }

  removeTodaysFoods = (name) => {
    const { todaysFoods } = this.state;
    const todaysUpdatedFoods = todaysFoods.filter(food => food.name !== name);
    this.setState({
      todaysFoods: todaysUpdatedFoods,
    })
  }

  toggleAddForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  toggleFood = (searchResults) => {
    this.setState({
      foods: searchResults,
    });
  };

  render() {
    const { showForm, foods, todaysFoods } = this.state;
    return (
      <div className='App'>
        <section className='section'>
          <h1 className='title'>IronNutrition</h1>

          <div className='columns'>
            <div className='column is-one-fifth'>
              <button onClick={this.toggleAddForm} className='button is-info level-right'>Add Food</button>
            </div>
            <div className='column is-four-fifths'>
              {showForm && <AddFoodForm addFood={this.addFood} />}
            </div>
          </div>

          <Search foods={foods} toggleFood={this.toggleFood} />

          <div className='columns'>
            <div className='column'>
              <FoodBoxes foods={foods} addTodaysFoods={this.addTodaysFoods} />
            </div>
            <div className='column'>
              <TodaysFoods todaysFoods={todaysFoods} removeTodaysFoods={this.removeTodaysFoods} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
