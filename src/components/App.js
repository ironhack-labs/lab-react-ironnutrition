import React, { Component } from 'react';
import './App.css';

import 'bulma/css/bulma.css'
import foods from './foods.json'

import FoodList from './foodList/FoodList'
import TodayList from './todayList/TodayList';

class App extends Component {

  constructor() {

    super()
    this.state = {
      todayList: []
    }
  }

  updateTodayFood = (addedFood) => {

    addedFood.totalCalories = addedFood.calories * addedFood.quantity

    const stateCopy = [...this.state.todayList]

    stateCopy.push(addedFood)

    this.setState({ todayList: stateCopy })
  }

  render() {

    return (

      <section className='app'>

        <FoodList data={foods} updateTodayFood={this.updateTodayFood} />

        <TodayList foodList={this.state.todayList} />

      </section>

    )

  }
}

export default App;
