import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsApi from './foods.json';
import FoodBox from './FoodBox'

class App extends Component {

  state = {foods: []}

  componentDidMount() {
    this.setState({ foods:  foodsApi});
  }


  render() {
    const { foods } = this.state;
    const displayFoodList =  foods.map((food, i) => <FoodBox food={food.name} cal={food.calories} quantity={food.quantity} />)
    return (
      <div className="App">
        {displayFoodList}
      </div>
    );
  }
}

export default App;
