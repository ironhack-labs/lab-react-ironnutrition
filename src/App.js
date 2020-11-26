import React, {Component} from 'react';
import './App.css';
import foodList from './foods.json';
import FoodBox from './components/FoodBox';

class App extends Component{
  state = {
    foodState : foodList,
  };
  render(){ 
    return (
      <div className="App">
      <h3 className="title">IronNutrition</h3>
         {this.state.foodState.map((foodItem, index) => (
         <FoodBox key={index} {...foodItem}/>
        ))};
      </div>
    );
  }
};

export default App;
