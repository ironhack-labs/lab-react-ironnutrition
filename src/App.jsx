import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox.jsx';
import Form from './components/Form';
import Search from './components/Search';

export class App extends Component {
  state = {
    showForm: false,
    foods: foodsJSON,
    search: 'toto',
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  addFood = (newFood) => {
    const updatedFood = [newFood, ...this.state.foods];
    this.setState({ foods: updatedFood, showForm: !this.state.showForm });
  };

  foodResults = (search) => {
    const results = [];
    this.state.foods.forEach((food) => {
      food.name.includes(search) && results.push(food);
    });
    this.setState({ foods: results });
  };

  render() {
    return (
      <div>
        <Search search={() => this.foodResults(this.state.search)} />
        <button onClick={this.toggleForm}>Add new food</button>
        {this.state.showForm && <Form addFood={this.addFood} />}
        {this.state.foods.map((food, index) => {
          return (
            <div key={index}>
              <FoodBox
                name={food.name}
                calories={food.calories}
                image={food.image}
                quantity={food.quantity}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
