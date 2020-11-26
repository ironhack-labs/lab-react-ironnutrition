import React, { Component } from 'react';
import './App.css';

import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import FoodSearch from './components/FoodSearch';

import foodList from './foods.json';

class App extends Component {
  state = {
    foodState: foodList, // looks at the data that is coming from .json file and from form
    filteredFoodListState: [], // filtered food list
    form: false,
    searching: false,
  };

  // handleRenderForm() - it changes the value of "form" in our state. Helps with rendering the food form.
  handleRenderForm = () => {
    // 1. Make a copy of our state so we are not directly affecting it.
    const stateCopy = { ...this.state };
    // 2. Change the form value within the state
    stateCopy.form = !this.state.form;
    // 3. Set the copy to state
    this.setState(stateCopy);
  };

  // handleAddNewFood() - The function that will help FoodForm.js to lift state.
  handleAddNewFood = (newFoodItem) => {
    // 1. Make a copy of our state so we are not directly affecting it.
    const stateCopy = { ...this.state };

    // 2. Change the form value within the state
    stateCopy.foodState = [...stateCopy.foodState, newFoodItem];

    // 2.5 Change form back to false
    stateCopy.form = !stateCopy.form;

    // 3. Set the copy to state
    this.setState(stateCopy);
  };

  // filter foods according to the incoming search value
  handleFilterFoods = (searchInput) => {
    const stateCopy = { ...this.state };

    // Filter through our foodState with the matching values of searchInput
    const filteredFoodList = stateCopy.foodState.filter((foodItem) =>
      foodItem.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Update the food state
    stateCopy.filteredFoodListState = filteredFoodList;
    stateCopy.searching = true;

    this.setState(stateCopy);
  };

  render() {
    return (
      <div className="App">
        {/* Search Bar */}
        <FoodSearch handleFilterSearch={this.handleFilterFoods} />

        <br />

        {/* Button to toggle our form */}
        <button onClick={this.handleRenderForm}>Add Food</button>

        {/* Toggle the form when this.state.form has the value of "true"*/}
        {this.state.form && (
          <FoodForm handleLiftFoodFormState={this.handleAddNewFood} />
        )}

        {/* Mapping through the state of foods and passing them to the FoodBox component */}
        {this.state.searching
          ? this.state.filteredFoodListState.map((foodItem, index) => (
              <FoodBox key={index} {...foodItem} />
            ))
          : this.state.foodState.map((foodItem, index) => (
              <FoodBox key={index} {...foodItem} />
            ))}
      </div>
    );
  }
}

/* const App = () => {
  const [foodState, setFoodState] = useState(foodList);
  return (
    <div>
      {foodState.map((foodItem, index) => (
        <FoodBox key={index} {...foodItem} />
      ))}
    </div>
  );
}; */

export default App;
