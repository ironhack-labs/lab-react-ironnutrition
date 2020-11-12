import React , {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json'
import FoodBox from './Components/Foodbox.js';

import AddFood from './Components/AddFood.js'
class App extends Component {
  state = {
  foods : foods
}
addFoodHandler = theDish => {
  const dishesCopy = [...this.state.foods]
  dishesCopy.push(theDish)
  console.log(dishesCopy)
  this.setState({
    dishesCopy: dishesCopy
  })
}
searchFood = event => {
const dishesCopy2 = [...this.state.foods]
const newList = dishesCopy2.filter(food => food.name.includes(event.target.value))
this.setState({
dishesCopy2: newList
})
}
render() {
  return (
    <div className="App">
      <div>
        <input type="text" className="input" placeholder="Search..." onChange={this.searchFood}/>
      </div>
      <AddFood addFood={this.addFoodHandler} />
      <div className="add-form">
        {this.state.foods.map((oneFood, index) => {
          return (
            <FoodBox key = {index} name={oneFood.name} image={oneFood.image} calories={oneFood.calories} quantity={oneFood.quantity} />
          )
        })}
      </div>
    </div>
  );
}
}	

export default App

