import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/misc/FoodBox/FoodBox';


class App extends Component {

  state = {
    foods: foods
}

  render() {
    return (
      <div className='App'>
        <h1>IronNutrition</h1>
        <div className=''>
          {foods.map((food,index) => {
            return (
            <FoodBox food={food} key={index}/>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
