import React, { Component } from 'react';

import FoodBox from './FoodBox';
import FoodAddForm from './FoodAddForm';
import 'bulma/css/bulma.css';

class FoodsList extends Component {
  /*
    state of the class
  */
  state = {
    foodList: this.props.foodItems,
  };

  /**
   * add food item clcked
   */
  showNewFoodItemForm = () => {
    console.log(' showNewFoodItemForm ...', super.state);
    this.props.flagShowList(false);
  };

  /*
   render() 
  */
  render() {
    console.log('FoodList=>render() -> state data: ', this.state);

    return (
      <div className="App">
        <h1 className="App-header"> Iron Nutrition </h1>
        <div>
          <button onClick={this.showNewFoodItemForm}> Add Food </button>
        </div>
        {this.state.foodList.map((food, idx) => (
          <FoodBox
            key={idx}
            name={food.name}
            calories={food.calories}
            picture={food.image}
            qty={food.quantity}
          />
        ))}
      </div>
    );
  }
}

export default FoodsList;
