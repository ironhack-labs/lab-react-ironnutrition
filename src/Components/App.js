import { React, Component } from 'react';
import './App.css';
import FoodBox from './FoodBox';
import Button from './Button';
import AddFoodForm from './AddFoodForm';

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

  render() {
    return (
      <main>
        <Button onClick={() => this.displayFoodForm()}>Add food</Button>
        {this.state.displayForm && (
          <AddFoodForm addFood={(food) => this.addFood(food)} />
        )}
        {this.state.foods.map((food, idx) => (
          <FoodBox
            key={idx}
            image={food.image}
            name={food.name}
            calories={food.calories}
          />
        ))}
      </main>
    );
  }
}

export default App;
