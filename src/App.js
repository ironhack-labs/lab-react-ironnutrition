
import React, { Component } from 'react'
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './component/foodbox/FoodBox';


export default class App extends Component {

  state = {
    foods: foods
  }

  addNewFood = (e) => {
    console.log('check')
    return(
    <div>
      <form >
        <label>Name:</label>
        <input type="text" name="name" value='' />

        <label>Number of calories:</label>
        <input type="text" name="calories" value=''  />

        <label>Image:</label>
        <input type="image" src='' alt="Submit" width="48" height="48" />

        
        <button onClick={this.submitFood}>Submit</button>
      </form>  
    </div>
    )
  }

  submitFood = () => {

  }

  render() {
    return (
      <div>
        <h1 className="title">IronNutrition</h1>
        {this.state.foods.map((food, index) => 
          <FoodBox key='food' foodType={food}/>
        )}
        <button onClick={(e) => this.addNewFood(e)}>Add new food</button>
  
      </div>
    )
  }
}

