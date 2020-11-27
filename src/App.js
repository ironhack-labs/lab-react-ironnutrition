import './App.css';
import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foodList from './foods.json';
import FoodBox from './Components/FoodBox';
import FoodForm from './Components/FoodForm';
import FoodSearch from './Components/FoodSearch';

class App extends Component {
  state = {
    foodState: foodList,
    form: false,
    filteredFoodListState: [],
    searching: false,
    todaysFoodList: [],
  };

  handleRenderForm = () => {
    const stateCopy = { ...this.state };
    stateCopy.form = !this.state.form;
    this.setState(stateCopy);
  };

  handleAddNewFood = (newFoodItem) => {
    const stateCopy = { ...this.state };
    stateCopy.foodState = [...stateCopy.foodState, newFoodItem];
    stateCopy.form = !stateCopy.form;
    this.setState(stateCopy);
  };

  handleFilterFoods = (searchInput) => {
    const stateCopy = { ...this.state };
    const filteredFoodList = stateCopy.foodState.filter((foodItem) =>
      foodItem.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    stateCopy.filteredFoodListState = filteredFoodList;
    stateCopy.searching = true;

    this.setState(stateCopy);
  };

  handleAddFoodToTodaysList = (foodObject) => {
    const stateCopy = { ...this.state };
    foodObject.calories *= foodObject.quantity;
    stateCopy.todaysFoodList.push(foodObject);
    this.setState(stateCopy);
  };

  handleCalculateTotalCalories = () =>
    this.state.todaysFoodList.reduce((acc, val) => acc + val.calories, 0);
  render() {
    return (
      <div className="App">
        <FoodSearch handleFilterSearch={this.handleFilterFoods} />
        <button onClick={this.handleRenderForm}>Add Food</button>
        {this.state.form && (
          <FoodForm handleLiftFoodFormState={this.handleAddNewFood} />
        )}

        <div>
          <div style={{ width: '70%', float: 'left' }}>
            {this.state.searching
              ? this.state.filteredFoodListState.map((foodItem, index) => (
                  <FoodBox
                    key={index}
                    {...foodItem}
                    handleAddFood={this.handleAddFoodToTodaysList}
                  />
                ))
              : this.state.foodState.map((foodItem, index) => (
                  <FoodBox
                    key={index}
                    {...foodItem}
                    handleAddFood={this.handleAddFoodToTodaysList}
                  />
                ))}
          </div>

          <div style={{ width: '30%', float: 'right' }}>
            <h2>Today's Food</h2>
            <ul>
              {this.state.todaysFoodList.map((element, index) => (
                <li key={index}>
                  {element.quantity} {element.name} = {element.calories} cal
                </li>
              ))}
              <p>Total: {this.handleCalculateTotalCalories()} calories</p>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
