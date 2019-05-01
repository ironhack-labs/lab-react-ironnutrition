import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox';
import AddFood from './AddFood';

class App extends Component {
  constructor () {
    super ()
    this.state = {
      foods : foods
    } 
  }

addNewFood(newFood) {
  let foodsIncluidingNewFoods = [...this.state.foods]
  
  
  foodsIncluidingNewFoods.push(newFood)

  this.setState({
    ...this.state,
    foods: foodsIncluidingNewFoods
  })



}

  render() {
    return (
      <React.Fragment>
          {this.state.foods.map((food, i) => {
            return <FoodBox {...food} key= {i}/>
          })}
          <AddFood add={(newFood) => this.addNewFood(newFood)}/>
      </React.Fragment>
    );
  }
}

export default App;
