import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'
import SearchBar from './components/SearchBar'
import CalcFood from './components/CalcFood'

class App extends React.Component {
  state = { 
    foods: foods,
    displayedFoods: [...foods]
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

  render() {
    const foodList = this.state.displayedFoods.map(element => {
      return <FoodBox key={element.name} food={element} />

    })
    return (
      <div className="App">
        <AddFood addFood={this.handleAddFood} />

        <SearchBar filterFood={this.handleFoodSearch}/>
        <div class="columns">
          <div class="column">
            {foodList}
          </div>
          <div class="column">
           <h1>Today´s foods:</h1>
           <CalcFood />
          </div>
        </div>
        

      </div>
    );
  }
}

export default App;