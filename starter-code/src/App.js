import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          foods.map((food, index) =>
            <FoodBox key={index}
              image={food.image}
              name={food.name}
              calories={food.calories}
              quantity={food.quantity} />
          )
        }
      </div>
    );
  }
}

export default App;
