import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/Form';

class App extends React.Component {
  state = {
    foods: foods,
  };

  displayFoods = () => {
    return this.state.foods.map((food) => {
      return (
        <FoodBox
          name={food.name}
          calories={food.calories}
          image={food.image}
          quantity={food.quantity}
        />
      );
    });
  };

  addFood = (food) => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(food);

    this.setState({ foods: foodsCopy });
  };

  displayForm = () => {
    const foodsCopy = [...this.state.foods];
    const showForm = !this.state.foods.displayForm;

    this.setState({ foods: foodsCopy, displayForm: showForm });
  };

  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>

        <button onClick={() => this.displayForm()} class="button is-primary">
          Add New Food
        </button>

        {this.state.displayForm ? (
          <Form addFood={(food) => this.addFood(food)} />
        ) : (
          ''
        )}
        <div className="food-container">{this.displayFoods()}</div>
      </div>
    );
  }
}

export default App;
