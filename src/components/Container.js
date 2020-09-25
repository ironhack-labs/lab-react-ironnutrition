import React, { Component } from 'react';
import FoodList from './FoodsList';
import FoodAddForm from './FoodAddForm';
import foods from '../foods.json';

export default class Container extends Component {
  state = {
    foods: foods,
    showFoodList: true,
  };

  /** set and reset showFoodList property,
     which is set by the child components */
  toggleShowList = (value) => {
    this.setState(() => ({
      showFoodList: value,
    }));
  };

  /*** render()  */
  render() {
    console.log(' Container -> render()  called', this.state);
    return this.state.showFoodList ? (
      <div>
        <FoodList
          toggleShowList={this.toggleShowList}
          foodItems={this.state.foods}
        />
      </div>
    ) : (
      <div>
        <FoodAddForm toggleShowList={this.toggleShowList} />
      </div>
    );
  }
}
