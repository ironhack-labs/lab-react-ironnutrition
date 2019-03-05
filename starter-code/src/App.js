import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';


class App extends Component 
{
  state = {
    foods,
    search: '',
    filteredFoods:foods,
    isHidden: true,
    order: []
  }

  addFoodToList = (e) => {
    e.preventDefault()
    console.log(e.target.food.value, e.target.quantity.value)
  }

  showForm = () => {
    if(!this.state.isHidden){
      return (
        <div>
          <form onSubmit={this.addFoodToList}/>
            <input name="food" placeholder="Add Product" />
            <input name="quantity" placeholder="Add Quantity" />

            <button>Submit</button>
        </div>
      )
    }
  }

  handleChange = (e) => {
    let search = e.target.value
  }

  toggleButton = () => {
    this.setState ({
      isHidden: this.state.isHidden
    })
  }


  render() 
  {
    return (
    <div className='App'>
    <button onClick={this.toggleButton}>Add Food</button>
     
      <FoodBox />
    </div>
    )
  }
}

export default App;


// handleChange
// pushOrder
// showOrder
// showFoods
// addFoodToList
// showForm
// toggleHidden

