import React, { Component } from 'react';
import './App.css';
import foods from './foods.json'
import 'bulma/css/bulma.css';
import Food from './components/Food';


class App extends Component {
  constructor() {
    super()
    this.foods = [...foods]
    this.state = {
      foods: [...this.foods]
    }
  }
  render() {
    return (

      <div class="container">
        <h1 class="title">IronNutrition</h1>
        <div>
          <input type="text" class="input search-bar" name="search" placeholder="Search" value="" />
        </div>
        <div class="columns">
          <div class="column">
            {this.state.foods.map((food, idx) => (<Food key={idx} payLoad={food} />))}
          </div>
        </div>
      </div>


    )
  }
}
export default App;
