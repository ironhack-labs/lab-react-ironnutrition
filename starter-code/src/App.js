import React, { Component } from 'react';
import FoodBox from './components/FoodBox'
import foods from './foods.json'
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          quantity: 0,
      }
  }
render() {
  return (
      <div className="page-view">
        <h2 className="is-size-2 has-text-weight-bold">IronNutrition</h2>
        {foods.map(food=>
          <FoodBox
              key = {food.name+food.image}
              name = {food.name} 
              calories = {food.calories}
              image = {food.image}
              quantity = {food.queantity}
          />
        )}
      </div>
  );
}
}

export default App;
