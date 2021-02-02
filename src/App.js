import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'
import SearchBar from './components/SearchBar'
import CalcFood from './components/CalcFood'
import FoodList from './components/FoodList';

class App extends React.Component {
  state = { 
    foods: foods,
    displayedFoods: [...foods],
    todaysFood: []
   }

  handleAddFood = (newFood) => {
    const newFoods = [newFood, ...this.state.foods]
    console.log('help')
    this.setState({
      foods: newFoods,
      displayedFoods: newFoods
    })
  }

  handleFoodSearch = (searchValue) => {
    const newFoods = this.state.foods.filter( foodElm => (foodElm.name.toUpperCase().includes(searchValue.toUpperCase())))
    this.setState({
      displayedFoods: newFoods
    })
  }

  handleTodaysFood = (addedFood) => {
    const newTodaysFood = [addedFood, ...this.state.todaysFood]
    this.setState({
      todaysFood: newTodaysFood
    });
  }


  render() {
    
    return (
      <div className="App">
        <AddFood addFood={this.handleAddFood} />

        <SearchBar filterFood={this.handleFoodSearch}/>
        <div class="columns">
          <div class="column">
            <FoodList foods={this.state.displayedFoods} handleTodaysFood={this.handleTodaysFood}/>
          </div>
          <div class="column">
           <CalcFood todaysFood={this.state.todaysFood}/>
          </div>
        </div>
        

      </div>
    );
  }
}



export default App;