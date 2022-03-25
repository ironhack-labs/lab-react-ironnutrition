import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import foods from './foods.json';
import { v4 as uuidv4 } from 'uuid';
import FoodList from './Components/FoodList/FoodList';
import Navbar from './Components/Misc/Navbar/Navbar';
import FoodForm from './Components/FoodForm/FoodForm';


class App extends Component {
  state = {
    foods: [...foods],
    search: '',
    formState: false
  }

  // **ADD A NEW FOOD BOX LOGIC**
  onAddFood = (food) => {
    const newFood = {
      ...food,
      id: uuidv4()
    }
    this.setState({
      //   (this is the new) we add
      foods: [newFood, ...this.state.foods],
      //            (this are the full array of food) we have in state

      //when i add a food, i return the state into "false"
      formState: false
    })
  }

  // **HIDE/APPEAR FORM LOGIC**
  turnOnForm = () => {
    this.setState({
      formState: true
    })
  }

  // **SEARCH LOGIC**
  foodSearch = () => {
    const { foods, search } = this.state

    return foods.filter(food => {
      if (food.name.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    });
  }

  // **CHANGE-IMPUT SEARCH LOGIC**
  handleOnChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    const { search } = this.state
    const foods = this.foodSearch();

    return (
      <div className='App'>
        <Navbar />

        {/* BUTTON DISPLAY THE FORM */}
        <div className='text-center'>
          {this.state.formState
            ? (<FoodForm addFood={this.onAddFood} />) : (<button className='button is-success is-outlined' onClick={this.turnOnForm}> Add new food </button>)}
        </div>

        {/* SEARCH BAR */}
        <div className='mt-4'>
          <input className="input is-rounded" 
          id="search" 
          name="search" 
          value={search} 
          type="text" 
          placeholder="Search" 
          onChange={this.handleOnChange}/>
        </div>

        {/* FOOD LIST COLUMN */}
        <div className="columns">
          <div className='column'>
            <FoodList foods={foods} />
          </div>

          {/* CALORIE LIST COLUMN */}
          <div className='column'>

          </div>
        </div>
      </div>
    )
  }
}
export default App