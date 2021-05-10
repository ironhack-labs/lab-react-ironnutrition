import React from 'react';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './components/FoodBox';
import Form from './components/Form';

class App extends React.Component {
  state = {
    food: foods,
  };

  addFood = (food) => {
    const arrayCopy = [...this.state.food];
    arrayCopy.push(food);
    this.setState({ food: arrayCopy });
  };

  displayFood = () => {
    //esto es displayFood
    return this.state.food.map((food, index) => {
      return <FoodBox food={food} key={index} />;
    });
  };
  render() {
    return (
      <div className="app">
        <Form addFood={(food) => this.addFood(food)} />
        {this.displayFood()}
      </div>
    );
  }
}

export default App;
