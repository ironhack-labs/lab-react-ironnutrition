import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';

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

  render() {
    const foodList = this.state.displayedFoods.map((element) => {
      return <FoodBox key={element.name} food={element} />
    })

    return (
      <div className="App">
        <AddFood addFood={this.handleAddFood}/>
        {foodList}


      </div>
    )
  }
}

export default App;
