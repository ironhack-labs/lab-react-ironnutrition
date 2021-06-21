import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import { Component } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

import FoodForm from './components/FoodForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: [...foods],
      addFood: [],
      displayForm: false,
      todaysFood: [],
    };
  } //costructor bracket

  handleFormDisplay = () => {
    this.setState({
      displayForm: true,
    });
  };
  header = () => {
    // create a header function, if state displayForm true , render the foodform, if false render the button

    if (this.state.displayForm) {
      return <FoodForm addFood={this.handleAddFood} />;
    }
    return (
      <button
        className="button is-info margin-bottom"
        style={{ margin: '10px' }}
        onClick={this.handleFormDisplay}
      >
        Add Food
      </button>
    );
  };

  handleAddFood = (foodToBeAdd) => {
    const { foodList } = this.state; //destructurization
    const copyOfFoodList = [...foodList]; //made copy of foodList

    copyOfFoodList.push(foodToBeAdd); //push of the parameter passed by callabck from FoodForm.jsx to the new array

    this.setState({
      // foodList: [foodToBeAdd, ...foodList],  // option 2: instead of making push, adding directly
      foodList: copyOfFoodList, // made new state equal to my new array with the pushed element
      displayForm: false, // will hide the foodForm after submitting
    });
  };

  handleSearchBar = (event) => {
    event = event.target.value;
    let newFoodList;

    if (event.length === 0) {
      newFoodList = this.state.foodList;
    } else {
      newFoodList = this.state.foodList.filter((food) =>
        food.name.toLowerCase().includes(event)
      );
    }
    this.setState({
      foodList: newFoodList,
    });
    console.log('newfoodlist', newFoodList);
  };

  handleSelectFood = (foodObject) => {
    const todaysFoodCopy = [...this.state.todaysFood];

    console.log('hola', foodObject);

    todaysFoodCopy.push(foodObject);
    this.setState({
      todaysFood: todaysFoodCopy,
    });
  };

  render() {
    const { foodList, todaysFood } = this.state;
    return (
      //foodform and addfood has to be outside the second return cos otherwise will print the form each time there is a new food. form for each food printed
      <div className="App text-center">
        <h1 className="title is-1">IronNutrition</h1>
        <input
          className="input margin-bottom"
          // value={this.event.target.value}
          onChange={this.handleSearchBar}
          style={{ width: '100%', height: '30px', margin: '10px' }}
          placeholder="Search for your food..."
          type="text"
          name="value"
        />
        <div>
          {this.header()}

          <div class="column content">
            <h1 class="subtitle">Today's Food</h1>
            <div>
              {todaysFood.map((foodItemToAdd, index) => (
                <div key={index}>
                  {foodItemToAdd.quantity} {foodItemToAdd.name} =
                  {foodItemToAdd.calories * foodItemToAdd.quantity} cal
                </div>
              ))}
            </div>
          </div>

          {foodList.map((item, index) => {
            //into the return i create the map for each element food in the array
            return (
              <FoodBox
                key={index}
                food={item}
                index={index}
                addTodaysFood={this.handleSelectFood}
              ></FoodBox>
            );
          })}
        </div>
      </div>
    );
  }
} // class braket

export default App;
