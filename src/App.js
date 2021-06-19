import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import { Component } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import FoodForm from './components/FoodForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: [...foods],
      searchInput: ' ',
      addFood: [],
      showform: false,
    };
  }
  handleAddFood = (foodToBeAdd) => {
    const { foodList } = this.state; //destructurization
    const copyOfFoodList = [...foodList]; //made copy of foodList

    copyOfFoodList.push(foodToBeAdd); //, push of the parameter passed by callabck from FoodForm.jsx to the new array

    this.setState({
      // foodList: [foodToBeAdd, ...foodList],  // option 2: instead of making push, adding directly
      foodList: copyOfFoodList, // made new state equal to my new array with the pushed element
    });
  };

  render() {
    const { foodList } = this.state;
    return (
      //foodform and addfood has to be outside the second return cos otherwise will print the form each time there is a new food. form for each food printed
      <div>
        <input placeholder="Searching..." type="text" name="name" />

        <FoodForm addFood={this.handleAddFood}></FoodForm>

        <AddFood></AddFood>

        {foodList.map((item, index) => {
          //into the return i create the map for each element food in the array
          return <FoodBox key={index} food={item} index={index}></FoodBox>;
        })}
      </div>
    );
  }
} // class braket

export default App;
