import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import {FoodBox} from './components/FoodBox';
import {AddFood} from './components/AddFood';
import {SearchBar} from './components/SearchBar';

class App extends React.Component {
  
  state = { foods }

  handleAddFood = (oneFood) => {
    const newFoods = [oneFood, ...this.state.foods]
    this.setState({
      foods: newFoods
    })
  }

  handleFoodSearch = (value) => {
    const filteredFoods = value ? this.state.foods.filter(food => food.name.toUpperCase().includes(value.toUpperCase())) : foods;

    this.setState({
      foods: filteredFoods
    })
  }

  render() {
    const foodList = this.state.foods.map(elm => {
      return <FoodBox key={elm.name} food={elm} />
    })

    return (
      <div className="App">
        <AddFood NewFood={this.handleAddFood} />
        <SearchBar filterFood={this.handleFoodSearch} />
        {foodList}
      </div>
    );
  }
}

export default App;
