import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import FoodBox from './Components/FoodBox';
import FoodForm from './Components/FoodForm';

export class App extends Component {

  state = {
    foods: [...foodsJSON],
  }



  render() {
    return (
      <div>
         <FoodBox foods={this.state.foods}/>
         <FoodForm/>
      </div>
    )
  }
}

export default App;
