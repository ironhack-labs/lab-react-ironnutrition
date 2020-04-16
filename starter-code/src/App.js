import React, { Component } from 'react';
import foods from './foods.json';
import FoodBoxes from './components/FoodBoxes';
import TodaysFoods from './components/TodaysFoods';
import Search from './components/Search';
import AddFoodButton from './components/AddFoodButton';
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

  getIndex = (foodToFind, foodArray) => {
    const foodIndex = foodArray.findIndex(food => {
      return food.name === foodToFind.name;
    })
    return foodIndex;
  }

  addTodaysFoods = (addedFood) => {
    const { todaysFoods } = this.state;
    const foodToUpdate = this.getIndex(addedFood, todaysFoods);
    const todaysFoodsUpdated = [...todaysFoods];
    if (foodToUpdate === -1) {
      todaysFoodsUpdated.push(addedFood);
    } else {
      todaysFoodsUpdated[foodToUpdate].quantity += addedFood.quantity;
    }
    this.setState({
      todaysFoods: todaysFoodsUpdated,
    })
  }

  removeTodaysFoods = (name) => {
    const { todaysFoods } = this.state;
    const todaysFoodsUpdated = todaysFoods.filter(food => food.name !== name);
    this.setState({
      todaysFoods: todaysFoodsUpdated,
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
      <div className='App section'>
        <h1 className='title'>IronNutrition</h1>

        <div className='columns'>
          <AddFoodButton toggleAddForm={this.toggleAddForm} />
          {showForm && <AddFoodForm addFood={this.addFood} />}
        </div>

        <Search foods={foods} toggleFood={this.toggleFood} />

        <div className='columns'>
          <FoodBoxes foods={foods} addTodaysFoods={this.addTodaysFoods} />
          <TodaysFoods todaysFoods={todaysFoods} removeTodaysFoods={this.removeTodaysFoods} />
        </div>
      </div>
    );
  }
}

export default App;
