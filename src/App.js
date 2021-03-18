import React from 'react';
import './App.css';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import FoodBox from "./components/FoodBox"
import FormFood from "./components/FormFood"

// function App() {
//   return (
//    <div>
//      <FoodBox/>
//    </div>
//   );
  class App extends React.Component {

    state = {
      foods: foods
    }
 
    addFoodHandler = (newFood) => {
  this.setState({foods: [newFood, ...this.state.foods]})
    }
 
    render() {
      return (
        <div className="App">
          <FormFood addFood={this.addFoodHandler}/>
          {this.state.foods.map((food) =>(
        <FoodBox food={food}/> )
        )}
  
        </div>
      );
    }
  }
 
  export default App;