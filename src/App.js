import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import { v4 as uuidv4 } from 'uuid'
import FoodBox from './components/misc/FoodBox/FoodBox';
import SearchBar from './components/misc/SearchBar/SearchBar';
import Foodform from './components/misc/FoodForm/Foodform';
import TodaysFood from './components/misc/TodaysFood/TodaysFood';

class App extends Component {
  state = {
    foods: [...foods],
    showForm: false,
    addFoodButton: true,
    filter: '',
    todaysFood: []
  }

  //Creamos una copia porque si alteramos el array original, al hacer la búsqueda y retroceder, no va a devolver los elementos originales.
  searchedFood = [...foods]


  showForm() {
    if (!this.state.showForm && this.state.addFoodButton) {
      this.setState({
        showForm: true,
        addFoodButton: false
      })
    } else {
      this.setState({
        showForm: false,
        addFoodButton: true
      })
    }
  }

  addFood = (food) => {
    const newFood = {
      ...food,
      id: uuidv4()
    }
    console.log(newFood)

    this.setState(
      { foods: [newFood, ...this.state.foods] }
    )
  }

  filterFoods = (event) => {
    console.log(event.target.value)

    this.setState({
      filter: event.target.value,
      foods: this.searchedFood.filter(food => food.name.toUpperCase().includes(event.target.value.toUpperCase()))
    })
  }
  
  addToTodaysFood = (food) => {
    const newFood = {
      ...food
    }

    this.setState({ todaysFood: [newFood, ...this.state.todaysFood] })
  }

  removeFromTodaysFood = (food) => {
    const foodToRemove = {
      ...food
    }

    this.setState({ todaysFood: [...this.state.todaysFood.filter(food => food.name !== foodToRemove.name)] })
}
  

  render() {
    return(
      <div className="App">
      <h1 className='mt-4'>IronNutrion</h1>
        <button 
        className={`button ${this.state.addFoodButton ? "is-info" : "is-danger"} mb-4 mt-4`} 
        onClick={() => this.showForm()}
        >
          {this.state.addFoodButton ? "Add new food" : "Cancel"}
        </button>
        {this.state.showForm && <Foodform showForm={() => this.showForm()} addFood={this.addFood} />}
        <SearchBar  filterFoods={this.filterFoods} filter={this.state.filter}/>

        <div>
          <div>
            {this.state.foods.map((food, id) => {
              return <FoodBox key={ id } food={ food } addToTodaysFood={this.addToTodaysFood}/>
            })}
          </div>

          {this.state.todaysFood.length && 
          <TodaysFood foods={this.state.todaysFood} removeFromTodaysFood={this.removeFromTodaysFood}/>
          }
        </div>


      </div>
    )
  }
}

export default App;