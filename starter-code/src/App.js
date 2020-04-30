import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

class App extends Component {
  
  state = {
     newFoodList: [],
     foods: foods
  }

  render() {
    return (
      <div className="App">
        {this.state.foods.map((element, key) => (
          <FoodBox
          key={key}
          name={element.name}
          calories={element.calories}
          image={element.image}
          quantity={element.quantity}
          />
        ))}
      </div>
    );
  }
}

export default App;
