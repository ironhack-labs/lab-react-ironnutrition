import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox'
import FoodForm from './FoodForm'
import Search from './Search'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      foodList: foods,
    }
  }

  addNewFood (newFoodDetails) {
      let oneNewFood = [...this.state.foodList]
      oneNewFood.push(newFoodDetails)
  
      this.setState({
        ...this.state,
        foodList: oneNewFood
      })
  }

  render() {
    return (
      <div>
      <div>
      <h1>IronNutrition</h1>
      <Search></Search>
      <FoodForm newFood={(newFood) => this.addNewFood(newFood)}></FoodForm>
      </div>
      <React.Fragment>
        {this.state.foodList.map((food, index) => {
          return (
            <FoodBox
              key = {index}
              image = {food.image}
              name = {food.name}
              calories = {food.calories}
              quantity = {food.quantity} />
          );
        })
      }
      </React.Fragment>
    )
    </div>
    )
  }
}
  
  export default App;
