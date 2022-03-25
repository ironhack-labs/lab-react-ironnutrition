import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import foods from "./foods.json";
import FoodBox from './components/FoodBox/FoodBox';
 import NewForm from './components/NewForm/NewForm';

class App extends Component {
  state = {
    foods: [...foods],
  };

  onAddFood = (food) => {
    const newFood = {
      ...food,
      id: uuidv4(),
    };
    this.setState({ foods: [newFood, ...this.state.foods]});
  };

  render() {
    const { foods } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <NewForm onAddFood={this.onAddFood} />
          <FoodBox foods={foods} />
        </header>
      </div>
    );
  }
}

export default App;
