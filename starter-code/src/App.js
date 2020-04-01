import React, { Component } from 'react';
import food from './foods.json'
import 'bulma/css/bulma.css';
import FoodBox from './Components/FoodBox'
import AddFood from './Components/AddFood'
import './App.css';

class App extends Component {

  state = {
    allFood: food
  }

  addFoodHandler = (theFood) => {
    const foodCopy = [...this.state.allFood];
    foodCopy.unshift(theFood)
    this.setState({
      allFood: foodCopy
    })
  }

  showFood = () => {
    this.setState({
      showFood: !this.state.showFood
    })
  }

  
  filteredFoods = (e) => {
    const filteredFoods = [...this.state.allFood]
     filteredFoods.filter(food => {
       console.log(e.target.value)
      return food.name.toLowerCase().includes(e.target.value)
    })

    this.setState({
      foods:filteredFoods
    })
  }

  render() {

    let addFoodForm = null
    if(this.state.showFood === true){
      addFoodForm = <AddFood addTheFood={this.addFoodHandler}/>
     // console.log(addFoodForm)
    }
  
    return (
      <div>
      <input type="text" onChange={this.filteredFoods} placeholder='Search Food'/> 

        <button onClick= {this.showFood}> Add new Food</button>
        {addFoodForm}
        {this.state.allFood.map((food, index) =>
          <FoodBox key={index} {...food} addTheFood={this.addFoodHandler}/>
        )}

      </div>
            )
  }
}


export default App;
