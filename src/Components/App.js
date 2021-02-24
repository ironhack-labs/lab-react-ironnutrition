import { React, Component } from 'react';
import './App.css';
import FoodBox from './FoodBox';
import Button from './Button';
import AddFoodForm from './AddFoodForm';
import Search from './Search';

import jsonFoods from '../foods.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: jsonFoods,
      displayForm: false,
    };
  }

  displayFoodForm() {
    this.setState({
      displayForm: true,
    });
  }

  addFood(newFood) {
    const foods = [...this.state.foods];
    foods.push(newFood);
    this.setState({ foods, displayForm: false });
  }

  filterFood({ searchTerm }) {
    this.setState({
      foods: this.state.foods.filter((food) => food.name.includes(searchTerm)),
    });
  }

  updateQuantity(updatedFoodIdx, updatedQuantity) {
    const newFood = { ...this.state.foods[updatedFoodIdx] };
    newFood.quantity = +updatedQuantity + 1;
    const allFoods = [...this.state.foods];
    allFoods.splice(updatedFoodIdx, 1, newFood);
    this.setState({
      foods: allFoods,
    });
  }

  render() {
    return (
      <main>
        <Search filterFood={(inputText) => this.filterFood(inputText)} />
        <Button onClick={() => this.displayFoodForm()}>Add food</Button>
        {this.state.displayForm && (
          <AddFoodForm addFood={(food) => this.addFood(food)} />
        )}
        {this.state.foods.map((food, idx) => (
          <FoodBox
            key={idx}
            id={idx}
            image={food.image}
            name={food.name}
            calories={food.calories}
            quantity={food.quantity}
            onChange={(updatedFood, updateQuantity) =>
              this.updateQuantity(updatedFood, updateQuantity)
            }
          />
        ))}
      </main>
    );
  }
}

export default App;
