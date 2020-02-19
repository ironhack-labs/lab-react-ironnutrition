import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './components/FoodBox'
import foods from './foods.json'


class App extends Component {

  state = {
    foods
  }

  render() {
    return (

      <div className="App">
        {this.state.foods.map((food, index) => (
          < FoodBox name={food.name} 
        image={food.image} 
        calories={food.calories}
        quantity={food.quantity}
        />
        ))}
        
      </div>
    )
  }
}



export default App;
