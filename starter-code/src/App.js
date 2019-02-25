import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './datasets/foods';
import FoodBox from './components/FoodBox';
import Header from './components/misc/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: [...foods]
    }
  }

  render() {

    const foodBoxes = this.state.foods
    .map(food => (
      <FoodBox food={food} key={food.name} />
    ));

    return (
      <div className="App">
        <Header />
        <div className="columns">
          <div className="column">
            {foodBoxes}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
