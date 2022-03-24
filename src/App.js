import React, { Component } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

class App extends Component {

  state = {
    foods: [...foods]
  }
  render() {

    const { foods } = this.state;
    
    return (
      <div className="IronNutrition">
        <FoodBox foods={ foods }/>
      </div>
    );
  }
}

export default App;
