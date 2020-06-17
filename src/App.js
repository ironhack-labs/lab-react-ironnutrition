import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import Search from './components/Search';
import 



class App extends Component {

  state = {
    foodItems: foods,
    showSection: false,
    filteredFood: foods
  }

  handleClick = () => {

    this.setState({
      showSection: !this.state.showSection
    })
  }

  handleAddFood = (event) => {
    event.preventDefault()
    let name = event.target.name.value
    let calories = event.target.calories.value
    // let image = event.target.image.value

    this.setState({
      foodItems: [...this.state.foodItems, { name: name, calories: calories }],
      showSection: !this.state.showSection
    })
  }

  handleFilter = (event) => {
    let input = event.target.value


    let filterFoodItems = this.state.foodItems.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase())
    })

    this.setState({
      filteredFood: filterFoodItems
    })
  }


  render() {
    return (
      <>
        <button onClick={this.handleClick}>Add Food</button>
        {this.state.showSection && <FoodForm
          onAddFood={this.handleAddFood}
        />}
        <Search
          onFilter={this.handleFilter}
        />
        <div className='container'>
          {this.state.filteredFood.map((food, index) => {
            return <FoodBox
              key={index}
              name={food.name}
              calories={food.calories}
              image={food.image}
              quantity={food.quantity}
            />
          })}
        </div>
        {/* List of today's food */}
        <div>
          <h3>Today's food</h3>
          <ul>
            <li></li>
            <p>Total:</p>
          </ul>
        </div>

      </>
    )
  }
};

export default App;
