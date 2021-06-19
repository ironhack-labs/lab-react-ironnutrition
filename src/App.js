import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import { Component } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import FoodForm from './components/FoodForm';

const allFoodList = [...foods];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: allFoodList,
      showform: false,
    };
  }
  render() {
    return (
      //foodform and addfood has to be outside the second return cos otherwise will print the form each time there is a new food. form for each food printed
      <div>
        <FoodForm></FoodForm>
        <AddFood></AddFood>

        {allFoodList.map((item, index) => {
          //into the return i create the map for each element food in the array
          return <FoodBox key={index} food={item} index={index}></FoodBox>;
        })}
      </div>
    );
  }
} // class braket

export default App;
