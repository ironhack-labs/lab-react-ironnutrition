import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox.js'

class App extends Component {
  
  constructor(props) {
    
    super(props);

    this.state = {
      foods
    };

  }

  render() {
    return (
      <div className="App">
        <FoodBox
        foods={this.state.foods}
        />
      </div>
    );
  }
}

export default App;
