import React from 'react';
import { Component } from 'react';
// import FoodBox from './FoodBox';
import foods from '../foods.json';

const allFoodList = [...foods];

class AddFood extends Component {
  state = {
    data: allFoodList,
  };
  // constructor(props) {
  //   super(props);
  //   this.state = { data: allFoodList };
  // }
  clickFormHandler = () => {
    console.log('CLICKED');
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="Name" value={this.state.name} />

          <label>Calories:</label>
          <input type="text" name="Calories" value={this.state.calories} />

          <label>Image:</label>
          <input type="checkbox" name="Image" checked={this.state.image} />

          <label>Quantity:</label>
          <input type="text" name="Quantity" value={this.state.quantity} />

          <button>Submit</button>
        </form>
      </div>
    );
  };

  render() {
    return <button onClick={this.clickFormHandler}>Add Food</button>;
  }
}

export default AddFood;
