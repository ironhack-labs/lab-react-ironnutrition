import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './FoodBox';


class App extends Component {
  render() {
    let foodList = foods;
    return (
      <div className="App">
        <div className="container">
          <h1>Ironnutrition</h1>
          <div className="columns">
            <div className="column">
              {foodList.map(e => <FoodBox name={e.name} calories={e.calories} image={e.image}></FoodBox>)}
            </div>
            <div className="column">
              <h2>Today's foods</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
