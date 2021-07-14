import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox'
import Search from './components/Search';
import Total from './components/TotalCalories';
import AddForm from './components/AddForm';

class App extends Component {

    state = {
      foods: foodsJson,
      filteredFoods: foodsJson,
      total: [],
      showForm: false
  }

  handleAddNewFood = (event) => {

          
          event.preventDefault();

        
          let newFood = {
            name: event.target.name.value,
            calories: event.target.calories.value,
            image: event.target.image.value
          }
          console.log(newFood)
          
          this.setState({
            foods: [newFood, ...this.state.foods],
            filteredFoods: [newFood, ...this.state.foods],
            showForm: false
          })

          console.log(this.state.filteredFoods)
        }

        handleClick = () => {
          this.setState({
              showForm: true
          })
        }

        handleSearchFood = (event) => {
          let searchedFood = event.target.value
          const {foods} = this.state 
          let filteredFoods = foods.filter((food) => {
            return food.name.toLowerCase().includes(searchedFood.toLowerCase())
          })

          this.setState({
            filteredFoods: filteredFoods
          })
        }

        handleAddTotal = (event, quantity, food) => {
          event.preventDefault()

          let foodObj = {
            name: food.name,
            calories: food.calories,
            quantity: quantity
          }



          this.setState({
            total: [foodObj, ...this.state.total]
          })
  }

  render() {
    const {filteredFoods} = this.state 
    const {showForm} = this.state

    return (
      <div className="header-container">
        <h1 align="center" title-color="primary" class="title is-1">IronNutricion</h1>
        <Search onSearchFood={this.handleSearchFood}/>
        <div className="columns">
          <div className="column">
          {
            showForm ? <AddForm onAddNewFood={this.handleAddNewFood} /> : <button  onClick={this.handleClick} className="button is-danger">Add Your New food</button>
          }
          {
          filteredFoods.map((singleFood, i) => {
            
            return <FoodBox
              key={i}    
              food={singleFood}
              handleAddTotal={this.handleAddTotal}
            />
          })
        }
          </div>
          <div className="column">
            <Total foods={this.state.total}/>
          </div>
        </div>

      </div>
    )
  }
}

export default App;