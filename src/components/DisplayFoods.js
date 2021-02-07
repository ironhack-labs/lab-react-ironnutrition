import React from 'react';
import foods from '../foods.json';
import FoodBox from './FoodBox';

class DisplayFoods extends React.Component {
  state = {
    foodItems: foods,
    input: '',
  };

  handleChange = (e) => {
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(this.state.input.toLowerCase())
    );

    this.setState({
      input: e.target.value,
      foodItems: filtered,
    });
  };

  addFood = (index) => {
    console.log("test");
  };

  render() {
    return (
      <div>
        <input
          class="input is-focused my-4"
          onKeyUp={this.handleChange}
          type="text"
        ></input>
        <div class="d=flex">
          <div>
            {this.state.foodItems.map((element, index) => (
              <FoodBox
                index={index.toString()}
                food={element.name}
                toAdd={this.addFood}
              ></FoodBox>
            ))}
            <div>
              <h2>Today's foods</h2>
              <ul></ul>
              <span>Total: {} cal</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayFoods;
