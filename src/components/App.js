import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import foods from '../foods.json';
import FoodBox from './FoodBox'
import AddFoodForm from './AddFoodForm'

class App extends Component {

  constructor() {
    super()
    this.state = {
      foodsList: foods,
      showForm:'none'
    }
  }

  addOneFood = newFood => {
    const foodsListCopy = [...this.state.foodsList]
    foodsListCopy.push(newFood)
    this.setState({ foodsList : foodsListCopy })
  } 

  showForm = () => {
    let showed = this.state.showForm === 'none' ? 'block' : 'none'
    this.setState({showForm: showed})
  }

  render() {
    return (
      <>
        <h1>IronNutrition</h1>
        
        <button onClick={this.showForm}>Add new food</button>
        <div style={{display: this.state.showForm}}>
          <AddFoodForm addOneFood={this.addOneFood} />
        </div>


        {this.state.foodsList.map((food, idx) => {
          return <FoodBox key={idx} food={food}/>
        })}
      </>
    )
  }
}

export default App;
