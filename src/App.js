import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';

import foods from './foods.json';
import FoodBox from './FoodBox';
import AddFood from './AddFood';


class App extends React.Component {

  state = {
    // create a copy of foods array
    // myFoods: foods.slice(0)
    myFoods: [...foods],
    displayAddFood: false
  };

  addNewFoodHandler = (newFood) => {
    this.setState({
      myFoods: [...this.state.myFoods, newFood],
      displayAddFood: false
    });
  }

  render() {
    return (
      <div className="App">

        {this.state.displayAddFood ? (<AddFood addNewFood={this.addNewFoodHandler} />) : (<button onClick={() => this.setState({displayAddFood: true})} className="button is-info">Add New Food</button>)}

        {this.state.myFoods.map((food, key) => {

          return <FoodBox key={key} name={food.name} image={food.image} calories={food.calories}></FoodBox>
        })}
      </div>
    )
  }
}

export default App;
