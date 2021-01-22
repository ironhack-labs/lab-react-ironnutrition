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
    displayedFoods: [...foods],
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
      showAddForm: false
    })
  }

  filterFoodHandler = (searchedFood) => {
    this.setState({
      displayedFoods: this.state.foods.filter(food => food.name.toUpperCase().includes(searchedFood.toUpperCase()))
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <SearchBar filterFood={this.filterFoodHandler} />
        <div className="columns">
          <FoodList>
            {this.state.displayedFoods.map(food => {
              return <FoodBox key={food.name} {...food} />
            })}
          </FoodList>
          <div className="column content">
            <SelectedFoodList />
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
