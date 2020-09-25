import React, { Component } from 'react'
import FoodBox from './FoodBox'
import AddFood from './AddFood'
import foods from '../foods.json';


class Foods extends Component {
  state = {
    form: false,
    foods
  };

  handleClick = () => {
    this.setState({
      form: !this.state.form
    });
  };


  addFood = food => {
    const foods = [...this.state.foods];
    foods.push(food);
    this.setState({ foods });
  };


  render() {

    return (
      <div>
        <button className='button openFormBtn' onClick={this.handleClick}>Add Food</button>
        {this.state.form && <AddFood addFood={this.addFood} />}
        {this.state.foods.map((food, index) => (
          <FoodBox key={index} name={food.name} calories={food.calories} image={food.image} addFood={this.addFood} />
        ))}
      </div>
    );
  }
}

export default Foods;