import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json'
import FormAddFood from './components/FormAddFood';

class App extends Component {
  state = {
    foods: foods
  }

  handleAddFood = (newFood) => {
    const { foods } = this.state;

    this.setState({
      foods: [...foods, newFood]
    });
  }

  render() {
    const { foods } = this.state;

    return (
      <div className="App">
        <FormAddFood foods={foods} click={this.handleAddFood}/>
        {foods.map((food, index) => (
          <FoodBox key={index} food={food}/>
        ))}
      </div>
    );
  }
}

export default App;
