import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import SearchBar from './components/SearchBar';


class App extends React.Component {
  state = {
    foods: foods,
    displayedFoods: [...foods]
  }

  handleAddFood = (newFoodItem) => {
    const newFoods = [newFoodItem, ...this.state.foods]
    this.setState({
      foods: newFoods,
      displayedFoods: newFoods
    })
  }

  handleFilterFood = (value) => {
    const newFoods = this.state.foods.filter(food => (food.name.toUpperCase().includes(value.toUpperCase())))
    this.setState({
      displayedFoods: newFoods
    })
  }

  render() {
    const foodList = this.state.displayedFoods.map((element) => {
      return <FoodBox key={element.name} food={element} />
    })

    return (
      <div className="App">

        <SearchBar filterFood={this.handleFilterFood} />

        <AddFood addFood={this.handleAddFood} />
        {foodList}

        </div>
   )
 }
}

export default App;
