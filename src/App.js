import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import { Component } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
// import AddFood from './components/AddFood';
import FoodForm from './components/FoodForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: [...foods],
      searchInput: ' ',
      addFood: [],
      displayForm: false,
    };
  } //costructor braket

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
      <button style={{ margin: '10px' }} onClick={this.handleFormDisplay}>
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

  render() {
    const { foodList } = this.state;
    return (
      //foodform and addfood has to be outside the second return cos otherwise will print the form each time there is a new food. form for each food printed
      <div>
        <input
          style={{ width: '100%', height: '30px', margin: '10px' }}
          placeholder="Searching..."
          type="text"
          name="name"
        />

        {/* <button onClick={this.handleFormDisplay}> Add Food</button> */}

        {/* <FoodForm addFood={this.handleAddFood}></FoodForm> */}
        <div>{this.header()}</div>

        {foodList.map((item, index) => {
          //into the return i create the map for each element food in the array
          return <FoodBox key={index} food={item} index={index}></FoodBox>;
        })}
      </div>
    );
  }
} // class braket

export default App;
