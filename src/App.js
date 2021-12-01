import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import AddFood from './AddFood';

class App extends Component {

  constructor(){
    super()

    this.state = {
      foods,
      foodForm: false
    }
  }

  handleChange = (e) => {
    let input = e.target.value.toLowerCase()

    let filteredFoods = foods.filter(elem => elem.name.toLowerCase().includes(input))

    this.setState({
      foods: filteredFoods
    })
}

  showFoodForm(){
    this.setState({
      foodForm: !this.state.foodForm,
    })
  }

  addFood = (newFood) => {
    console.log(newFood)
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(newFood)

    this.setState({
        foods: foodsCopy,
        foodForm: false
    })
  }

  render() {
    return (
      <div className="App">
        <input type="search" placeholder="Search here" onChange={this.handleChange} value={this.state.searchValue} name="searchValue" />
        {this.state.foodForm && <AddFood addOneFood={this.addFood}/>}
        <button className="btn" onClick={() => this.showFoodForm()}>Create new food</button>
        {this.state.foods.map(food => {
          return(
            <FoodBox {...food}/>
          )
        })}
      </div>
    );
  }
}

export default App;
