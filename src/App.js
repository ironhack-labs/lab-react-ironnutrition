import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';



class App extends Component {

  state = {
    foods:foods
  }

addFoodHandler =(newFood) => {
    this.setState({
      foods: this.state.foods.concat(newFood)
    })
  }

render() {
  return(
    <div className="FoodBox">
      <AddFood addFoodHandler={this.addFoodHandler}></AddFood>

    {this.state.foods.map((food) => <FoodBox food={food}></FoodBox>)}
    </div>
  );
}
}


export default App;
