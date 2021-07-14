import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJson from './foods.json';
import FoodBox from './components/Foodbox';
import AddForm from './components/AddForm';
import SearchBar from './components/Search';

class App extends Component {
  
  state = {
    foods: foodsJson,
    cloneFoods: foodsJson,
    showForm: false,
    foodsIAte: []
  }

  handleClick = () => {
    const newFormState = !this.state.showForm
    this.setState({
      showForm: newFormState
    })
  }

  handleAddFood = (event) => {
    event.preventDefault();
    let newFood = {
      name: event.target.name.value,
      calories: event.target.calories.value,
      image: event.target.image.value 
    }
    this.setState({
      showForm: false,
      foods: [newFood, ...this.state.foods]
      
      
    })
  }

  handleSearch = (event) => {
    const {foods} = this.state
    let searchedFood = event.target.value
    let filteredFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchedFood.toLowerCase())
    })
    this.setState( {cloneFoods: filteredFoods})
  }

  handleCalories = (event) => {
    event.preventDefault()

    let consumedFood = {
      name: event.target.name.value,
      calories: Number(event.target.calories.value),
      quantity: Number(event.target.quantity.value),
    }
    this.setState({
      foodsIAte: [consumedFood, ...this.state.foodsIAte]
    })
  }

  render() {
    const {showForm, cloneFoods, foodsIAte} = this.state

    let caloriesSum = foodsIAte.reduce((acc, food) => {
      return acc + (food.calories * food.quantity)
    }, 0)

    return (
      <div class="columns">
        <div class="column">

              {/* Conditional rendering of form */}
              {
                showForm ? <AddForm onAddFood={this.handleAddFood} onButtonClick={this.handleClick}/> : <button className="button is-link is-rounded"onClick={this.handleClick}>Add A Food</button>
              }
              {/* Implement search bar */}
              {
                <SearchBar onSearch={this.handleSearch}/>
              }

              {/* Displays our list of foods */}
              {
                cloneFoods.map(( singleFood, index) => {
                  return <FoodBox 
                    name={singleFood.name}
                    calories={singleFood.calories}
                    image={singleFood.image}
                    quantity={singleFood.quantity}
                    onAddCalories={this.handleCalories}
                    
                  />
                })
            }
        </div>
          
        <div class="column">
          <h2>Today's Foods</h2>
          <ul>
            {
            
            this.state.foodsIAte.map((food) => {
              return (
              <li>{food.quantity} {food.name} = {food.calories * food.quantity}cal</li>
              )
            
            })
            }
          </ul>
          
          {/* //{food.quantity >1 ? `s` : null} */}
          

          <div>Total: {caloriesSum}cal</div>

        </div>
      </div>
    )
  }
}


export default App;