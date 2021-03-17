import './App.css';
import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foodListJSON from './foods.json';
import FoodBox from './components/FoodBox.jsx';
import FormFood from './components/FormFood';

export class App extends Component {
  state = {
    foods: foodListJSON,
  };

  addFood = (aValueFromChild) => {
    this.setState({ foods: [aValueFromChild, ...this.state.foods] });
  };

  render() {
    return (
      <div>
        <FormFood addFood={this.addFood} />
        <FoodBox foods={this.state.foods} />
      </div>
    );
  }
}

export default App;
