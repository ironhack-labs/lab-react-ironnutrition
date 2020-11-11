import React, { Component } from 'react'
import foods from './foods.json';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood'

class App extends Component {

  state = {
    foods: foods
  }

  addFoodHandler = theDish => {
    const dishesCopy = [...this.state.foods]
    // theDish.id = [...this.state.dishes].pop().id + 1
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

export default App;
