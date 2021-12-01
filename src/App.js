import React, {Component} from 'react';
import logo from './logo.svg';
import FoodBox from './FoodBox/FoodBox'
import Foods from './foods.json'
import NewFood from './NewFood.js/NewFood'
import './App.css';
import 'bulma/css/bulma.css';


class App extends Component {
    constructor() {
      super()

      this.state = {
        Foods: Foods,
        search: "",
        todayFood: [],
        calories: 0,
      }
    }


  addFood = (food) => {
    const foodsCopy = [...Foods]
    foodsCopy.push(food)

    this.setState({
      Foods: foodsCopy
    })
  }

  handleChange = (e) => {
    let { name, value } = e.currentTarget

    this.setState({
        [name]: value,
    })

    this.filterFood(value)
  }

  filterFood = (filter) => {
    let filterCopy = [...Foods]
    
    filterCopy = filterCopy.filter(this.includes(filter))

    this.setState({
      Foods: filterCopy
    })
  }

  includes = (filter) =>{
    return function(value){
      let name = value.name.toUpperCase()
      return name.includes(filter.toUpperCase())
    }
  }

  addingFood = (food) => {
    let text = `${food.quantity} ${food.name} = ${food.calories} cal`
    let arrayCopy = [...this.state.todayFood]
    arrayCopy.push(text)

    this.setState({
      todayFood: arrayCopy,
      calories: this.state.calories + food.calories * food.quantity
    })


  }


  render() {

  return (
    <div className="App">
      <input onChange={this.handleChange} value={this.state.search} name="search" type="text"></input>
      <NewFood addFood = {this.addFood} />
      <div>{this.state.Foods.map((elm => {
        return (
          <FoodBox addingFood={this.addingFood} food={elm} />
        )
      }))}</div>

      <div>
        <h3>Today's food</h3>
        <ul>
          {this.state.todayFood.map((elm) => {
            return (
              <li>{elm}</li>
            )
          })}
        </ul>
        <p>Total calories: {this.state.calories}</p>
      </div>
    </div>
  );
}
}

export default App;


