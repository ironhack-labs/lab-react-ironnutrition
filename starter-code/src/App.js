import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import FormFood from './FormFood';

class App extends Component {
  state = {
    allFoods: foods,
    showForm: false,
  }

  addFood = newFood => {
    console.log(newFood)
    console.log(foods)
    const copyFoods = [...this.state.allFoods];
    copyFoods.push(newFood)
    this.setState({ allFoods: copyFoods });

  }
  displayForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  render() {
    return (
      <div className="App">
        <h1>Track your food</h1>

        <button
          className="add-food"
          onClick={this.displayForm}
        >add food</button>

        <FormFood isVisible={this.state.showForm} clbk={this.addFood} handleDisplayForm={this.displayForm} />
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
