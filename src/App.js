import './App.css';
import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foodList from './foods.json';
import FoodBox from './Components/FoodBox';


class App extends Component {
  state = {
    foodState: foodList
  };

  render() {
    return (
      <div>
        {this.state.foodState.map((foodItem, index) => (
          <FoodBox key={index} {...foodItem} />
        ))}
      </div>
    );
  }
}
    

export default App;
