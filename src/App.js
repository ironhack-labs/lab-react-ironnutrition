import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsData from './foods.json';
import FoodBox from './components/foodbox'


class App extends Component {
  state = {
    foods: foodsData,
  }

  render(){
    let foodArr = this.state.foods;

    return (
      <div className="App">
        <h1 style={{'font-size': '40px'}}>IronNutrition</h1>
        {foodArr.map((fooditem, key) => {
          return <FoodBox key={foodArr.indexOf(fooditem)} {...fooditem} />
        })
        }
      </div>
    );
  }
  
}

export default App;
