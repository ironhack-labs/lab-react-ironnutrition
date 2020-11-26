import './App.css';
import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foodList from './foods.json';
import FoodBox from './Components/FoodBox';


class App extends Component {
  render() {
    return (
      <div>
        {foodList.map((foodItem, index) => (
          <FoodBox key={index} {...foodItem} />
        ))}
      </div>
    );
  }
}
    

export default App;
