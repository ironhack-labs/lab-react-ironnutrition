import FoodBox from './components/FoodBox/FoodBox.js';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import foods from './foods.json';
import './App.css';

foods.map(food => food.id = uuidv4());

class App extends React.Component {
  state = {
    foods: [...foods]
  };

  render(){
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <div className="food-items-div container">
         {
            this.state.foods.map(food => {
              return (
                <div className="food-item">
                  <FoodBox food={food} />
                </div>
              )
            })
         } 
        </div>
      </div>
    );
  };
};

export default App;
