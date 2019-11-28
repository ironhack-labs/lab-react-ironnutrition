import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import FormFood from './FormFood';

class App extends Component {
  state = {
    allFoods: foods,
  }

  addFood = newFood => {
    console.log(newFood)
    console.log(foods)
    const copyFoods = [...this.state.allFoods];
    copyFoods.push(newFood)
    this.setState({ allFoods: copyFoods });

  }

  render() {
    return (
      <div className="App">
        <h1>Track your food</h1>

        <button
          className="add-food"
          onChange="">Add a new food</button>
        <FormFood clbk={this.addFood} />
        {
          this.state.allFoods.map((food, index) =>
            <FoodBox
              key={index}
              image={food.image}
              name={food.name}
              calories={food.calories}
              quantity={food.quantity} />
          )
        }
      </div >
    );
  }
}

export default App;
