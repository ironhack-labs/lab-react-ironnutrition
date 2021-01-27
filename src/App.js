import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import {FoodBox} from './components/FoodBox';
import {AddFood} from './components/AddFood';
import {SearchBar} from './components/SearchBar';
import {TodaysFood} from './components/TodaysFood';

class App extends React.Component {
  
  state = { 
    foods: foods,
    todaysFoods: []
  }

  handleAddFood = (oneFood) => {
    const newFoods = [oneFood, ...this.state.foods]
    this.setState({
      foods: newFoods
    })
  }

  handleFoodSearch = (value) => {
    const filteredFoods = value ? this.state.foods.filter(food => food.name.toUpperCase().includes(value.toUpperCase())) : foods;

    this.setState({
      foods: filteredFoods
    })
  }

  handleTodayFood = foods => {
    const selectedFoods = [foods, ...this.state.todaysFoods];

    this.setState({
      todaysFoods: selectedFoods
    })
  }

  render() {
    const foodList = this.state.foods.map(elm => {
      return <FoodBox key={elm.name} foodToday={this.handleTodayFood} food={elm} />
    })

    const selectedFoods = this.state.todaysFoods.map(food => {
      return (
        <li key={food.name}>{food.quantity} {food.name} = {food.calories * food.quantity} cal</li>
      )
    })

    const selectedFoodsCal = this.state.todaysFoods.map(food => {
      return food.calories;
    })

    return (
      <div className="App">
        <SearchBar filterFood={this.handleFoodSearch} />
        <div className="columns">
          <div className="column">
            {foodList}
          </div>
          <div className="column has-text-left">
            <TodaysFood foodForToday={selectedFoods} calories={selectedFoodsCal} />
          </div>
        </div>
        <AddFood NewFood={this.handleAddFood} />
      </div>
    );
  }
}

export default App;
