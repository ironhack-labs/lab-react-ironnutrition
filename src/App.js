import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import { Component } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import FoodForm from './components/FoodForm';

// function App() {
//   return (
//     <div>
//       <FoodForm></FoodForm>
//       <AddFood></AddFood>
//       <FoodBox></FoodBox>
//     </div>
//   );
// }
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
    // const allFoodList = this.state.data;
    console.log('allfood', allFoodList);
    return allFoodList.map((item, index) => (
      <div>
        <FoodBox key={index} food={item} index={index}></FoodBox>
        <FoodForm></FoodForm>
        <AddFood></AddFood>
      </div>
    ));
  }
}

export default App;
