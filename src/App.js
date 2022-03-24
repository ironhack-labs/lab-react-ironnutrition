import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Button from './components/misc/Button';
import NewForm from './components/newForm/NewForm'

class App extends Component {
  state = {
    foods: [...foods],
  };

  onAddFood = (food) => {
    const newFood = {
        ...food,
        id: uuidv4()
    }
    this.setState({ foods: [newFood, ...this.state.foods] })
} 
  render() {
    const { foods } = this.state;

    return (
      <div className="IronNutrition">
        <div>
         <Button />
        </div>
        <FoodBox foods={foods} />
      </div>
    );
  }
}

export default App;
