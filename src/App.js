import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bulma/css/bulma.css';
import _ from 'lodash';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'
import SearchBox from './components/SearchBox'

class App extends React.Component {
  state = {
    foodsArr: foods
  }

  addFoodHandler = (newFood) => {
    this.setState({
      foodsArr: this.state.foodsArr.concat(newFood)
    })
  }

  // TODO: add if condition for AddFood to appear on button click

  render() {
    return (
      <div className="container mt-5">
        <SearchBox></SearchBox>
        <AddFood addFoodHandler={this.addFoodHandler}></AddFood>
        {this.state.foodsArr.map((food) => <FoodBox key={food.name} name={food.name} image={food.image} calories={food.calories} quantity={food.quantity}></FoodBox>)}
      </div>
    )
  }
}

export default App;
