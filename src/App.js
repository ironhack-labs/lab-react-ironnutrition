import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodList from './components/FoodList';
import SelectedFoodList from './components/SelectedFoodList';
import AddFood from './components/AddFood';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  state = {
    foods,
    displayedFoods: foods,
    showAddForm: false
  };

  clickAddFoodHandler = () => {
    this.setState({
      showAddForm: !this.state.showAddForm,
    });
  }

  addFoodHandler = (newFood) => {
    const newFoods = [newFood, ...this.state.foods];
    this.setState({
      foods: newFoods, 
      showAddForm: false,
      displayedFoods: newFoods
    })
  }

  filterFoodHandler = (searchedFood) => {
    this.setState({
      displayedFoods: this.state.foods.filter(food => food.name.toUpperCase().includes(searchedFood.toUpperCase()))
    })
  }

  selectFoodHandler = (selectedFood) => {
    this.setState({
      foods: this.state.foods.map((food) => {
        if (selectedFood.name === food.name) {
          return {
            ...food,
            quantity: food.quantity + selectedFood.quantity,
          };
        }
        return food;
      })
    })
  }

  deleteSelectedHandler = (foodName) => {
    this.setState({
      foods: this.state.foods.map(food => {
        if (foodName === food.name) {
          return {
            ...food,
            quantity: 0
          };
        }
        return food;
      })
    })
  }

  render() {
    const selectedFoods = this.state.foods.filter(food => food.quantity > 0);

    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <SearchBar filterFood={this.filterFoodHandler} />
        <div className="columns">
          <FoodList>
            {this.state.displayedFoods.map(food => {
              return <FoodBox key={food.name} {...food} selectFood={this.selectFoodHandler} />
            })}
          </FoodList>
          <div className="column content">
            <SelectedFoodList selectedFoods={selectedFoods} deleteSelected={this.deleteSelectedHandler} />
            <div>
              {!this.state.showAddForm && (
                <button onClick={this.clickAddFoodHandler} className="button is-info">
                  Add a new food
                </button>
              )}
              {this.state.showAddForm && <AddFood addFood={this.addFoodHandler} />}
            </div>         
          </div>
        </div>
      </div>
    )
  }
};


export default App;
