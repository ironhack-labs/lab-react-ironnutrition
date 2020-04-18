import React, { Component } from 'react';
import FoodBox from './components/FoodBox'
import AddButton from './components/AddButton';
import SearchBar from './components/SearchBar';
import MenuCount from './components/MenuCount';
import Foods from './foods.json'
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {

  state = {
    foodFilter: "",
    listFood: Foods,
    listTodayFood: [],
  }

  addFoodHandler = (theFood) => {
    const newListFood = [...this.state.listFood, theFood]; /* theFood => Is the same as "newListFood.push(theFood)" */
    this.setState({
      listFood: newListFood,
    })
  }

  handleFilter = event => {
    this.setState({
      foodFilter: event.target.value
    })
  }

  handleAddToTodaysFood = (todaysFood) => {
    console.log(todaysFood.name)
    const newListTodayFood = [...this.state.listTodayFood, todaysFood]; 
    this.setState({
      listTodayFood: newListTodayFood,
    })
  }

  calcualteAmountOfCalories = () => {    
    const total = this.state.listTodayFood.reduce((accumulator, foods) => foods.quantity * foods.calories, 0); 
    return total;
}

  render() {
    const { foodFilter } = this.state;
    const filteredFood = this.state.listFood.filter((food) => {
      return food.name.toLowerCase().indexOf( foodFilter.toLowerCase() ) !== -1
    })
    
    return (
      <div >
        <header className="search-bar-container">
          <SearchBar inputValue={this.state.foodFilter} inputOnChange={this.handleFilter}/>
        </header>
        
        <section className="principal-container">
          <div className="FoodBox-container">
            {filteredFood.map((list) => (
              <FoodBox
                image={ list.image }
                name={ list.name }
                calories={ list.calories }
                addFoodToday = { this.handleAddToTodaysFood }/> 
            ))}
          </div>

          <div>
            <div className="menu-count-box">
              <h2>Today's foods</h2>
            </div>
            {this.state.listTodayFood.map((list) => (
              <MenuCount
                image= { list.image }
                name= { list.name }
                calories= { list.calories }
                quantity= { list.quantity } />
            ))}
            <p>Total Calories: { this.calcualteAmountOfCalories() } cal</p>
          </div>
        </section>

        <AddButton addFood = { this.addFoodHandler }/>

      </div>  
    );
  }
}

export default App;
