import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';

import foods from './foods.json';
import FoodBox from './FoodBox'

class App extends React.Component {

  state = {
    myFoods: foods.slice(0)
  }

  render() {
    return (
      <div className="App">

        {this.state.myFoods.map((food) => {

          return <FoodBox name={food.name} image={food.image} calories={food.calories}></FoodBox>
        })}
      </div>
    )
  }
}

export default App;
