import React from 'react';
import './App.css';
import FoodBox from './components/FoodBox'
import foods from './foods.json';

class App extends React.Component {

  state = {
    foodToDisplay: foods 
  }


  render() {
  return (
    <div>
      <h1>Iron-Nutrition</h1>
      <div className='foodbox-container'>
        {this.state.foodToDisplay.map((food) => (
          <FoodBox key={food.id} {...food} />
        ))}
      </div>
    </div>
  );
  }

}

export default App;
