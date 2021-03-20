import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodies from './Components/Foodbox';
import Form from './Components/FoodForm';

class App extends React.Component {
  state = {
    foods: foods,
  };

  handleMeals = (newMeal) => {
    this.setState({ meals: [newMeal, ...this.state.meals] });
    console.log(newMeal);
  };

  render() {
    return (
      <div className="App">
        <h1>Hello Fellow Kids </h1>
        <Form addFood={this.handleMeals} />
        {this.state.foods.map((food, index) => (
          <Foodies key={index} food={food} />
        ))}
        ;
      </div>
    );
  }
}
export default App;
