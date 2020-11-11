import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';
import './App.css';

class App extends Component {
  state = {
    foods: foods,
    filteredFoodsList: foods,
  };

  addOneFood = oneFood => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.unshift(oneFood)
    this.setState({
      foods: foodsCopy
    })
  };

  filterFoods = foodName => {
    const foodsCopy2 = [...this.state.foods];
    const foodNameList = foodName.toLowerCase();
    const filteredFoods = foodsCopy2.filter(food => {
      return food.name.toLowerCase().includes(foodNameList);
    });
    this.setState({ filteredFoodsList: filteredFoods})
  };

  render () {
    return (
      <div className="App">
        <h1>Iron Nutrition</h1>
        <div >
          <AddFood addOneFood = {this.addOneFood}/>
          <Search filterFoods = {this.filterFoods}/> 
          {this.state.filteredFoodsList.map((oneFood, index) => {
            return (
            <FoodBox key={index} name={oneFood.name} image={oneFood.image} calories={oneFood.calories} quantity={oneFood.quantity} />
            )
          })}
        </div> 
      </div>
    );
  }
}
export default App;
