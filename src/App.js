import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

class App extends React.Component {
  state = {
    foods: foods,

  }

  displayFoods = () => {
    return this.state.foods.map((food) => {
      return (
        <FoodBox name={food.name} calories={food.calories} image={food.image} quantity={food.quantity} />
      )
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>

        <div className="food-container">
          {this.displayFoods()}
        </div>



      
      </div>
    );
  }
};

export default App;
