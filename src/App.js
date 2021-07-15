import React, { Component } from 'react'
import './App.css';
import 'bulma/css/bulma.css';
import foodsJson from './foods.json';
import FootBox from './components/FoodBox'
import TodaysFood from './components/TodaysFood'


class App extends Component {


  state = {
    foods: foodsJson,
    list: []
  }

  handlePlus = (event) => {
    event.preventDefault()

    
    console.log(event.target.querySelector('.input').value)

    let todayList = {
      name: event.target.querySelector('.name').textContent,
      calories: event.target.querySelector('.calories').textContent,
      quantity: event.target.querySelector('.input').value
    }

    this.setState({
      list: [todayList, ...this.state.list]
    })
  }

  render() {
    return (
      <div>
        <h1>This is the Ironnutriation Lab</h1>
        <FootBox 
        foods={ this.state.foods } 
        onPlus={this.handlePlus}
        />
        <TodaysFood list={ this.state.list } />

      </div>
    )
  }
}


export default App;
