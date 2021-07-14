import React, { Component } from 'react'
import './App.css';
import 'bulma/css/bulma.css';
import foodsJson from './foods.json';
import FootBox from './components/FoodBox'


class App extends Component {


  state = {
    foods: foodsJson
  }

  render() {
    return (
      <div>
        <h1>this is the Ironnutriation Lab</h1>
        <FootBox foods={ this.state.foods } />
      </div>
    )
  }
}


export default App;
