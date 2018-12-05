import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox/FoodBox.js'
import FoodsForm from './components/foodsForm/FoodsForm.js'
import Toggable from './components/Toggable/Toggable'
let foodsCreated = foods;
class App extends Component {
  constructor() {
    super();
    this.state = {
        foods: foodsCreated , 
      

    }
  }

  submitHandler = (state) => {
    // console.log(foods)
    // console.log(state)
    let newArr = foods.push(state)
    this.setState(...this.state, foods: newArr)
    console.log(this.state)

  }

  render() {
    return (
      <div className="App">
       
       <Toggable>
        <FoodsForm submitHandler={this.submitHandler} />
        </Toggable>
        { this.state.foods.map((food,index) => 
         <FoodBox key={index} image={food.image}  name={food.name} calories={food.calories} quantity = {food.quantity}  />) 
      }
      
      </div>
    );
  }

}
export default App;
