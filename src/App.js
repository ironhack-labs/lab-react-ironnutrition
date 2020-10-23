
import React, { Component } from 'react'
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './component/foodbox/FoodBox';
import NewFood from './component/newfood/NewFood';


export default class App extends Component {

  state = {
    foods: foods,
    formNewFood: false
  }

  showFormAddFood = (formInvisible) => {
    if(this.state.formNewFood) {
      this.setState({
        formNewFood: true
      })
    } else {
      this.setState({
        formNewFood: formInvisible
      })
    }


  }

  addFoodHandler= (newFood) => {
    const foodArrCopy = [...this.state.foods]
    foodArrCopy.push(newFood)

    this.setState({
      foods: foodArrCopy
    })
  }

  render() {
    return (
      <div>
        <h1 className="title">IronNutrition</h1>
        {this.state.foods.map((food, index) => 
          <FoodBox key='index' foodType={food}/>
        )}
        <button className="button is-primary" onClick={(e) => this.showFormAddFood(e)}>Add new food</button>
        {this.state.formNewFood &&  
        <NewFood addNewFood={this.addFoodHandler} formNewFood={this.showFormAddFood}/>}
      </div>
    )
  }
}

