import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json'
import FoodBox from "./Components/FoodBox"
import FormFood from './Components/FormFood'

class App extends React.Component {

  state = {
    foods: foods
  }

  addFoodHandler = (newFood) => {
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(newFood)    

    this.setState({
      foods: foodsCopy
    })
    console.log(foodsCopy);
  }

  render() {
    return (
      <div className="App">
        <FormFood addFood = {this.addFoodHandler}/>
        <FoodBox />
      </div>
    );
  }
}

export default App;
