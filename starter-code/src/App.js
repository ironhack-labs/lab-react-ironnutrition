import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox.js';
import AddButton from './components/AddButton/AddButton.js';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      foods: foods,
    }
  }

  addFoodHandler = (newFood) => {
    let updatedFood = [...this.state.foods];
    updatedFood.push(newFood);

    this.setState({ ...this.state, foods: updatedFood });
  }

  quantityHandler = (id, quantity) => {
    let updatedFood = [...this.state.foods];
    updatedFood[id].quantity = quantity;

    this.setState({ ...this.state, foods: updatedFood });
  }

  render() {

    let foodsList = this.state.foods.map((foodElem, i) => { 
      return <FoodBox quantityHandler={this.quantityHandler} key={i} index={i} food={foodElem}></FoodBox> 
    })

    return (
      <div className="App">
        <AddButton addFoodHandler={this.addFoodHandler}></AddButton>
        {foodsList}
      </div>
    );
  }
}

export default App;
