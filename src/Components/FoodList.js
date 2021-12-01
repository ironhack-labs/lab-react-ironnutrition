import React from 'react';
import { Component } from 'react';
import FoodBox from './FoodBox';
import foods from '../foods.json';
import NewFood from './NewFood';

class FoodList extends Component {
  constructor() {
    super();
    this.state = { foods, showForm: false };
  }
  showForm() {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  addFood = (newFood) => {
    const arr = [...this.state.foods];
    arr.push(newFood);
    this.setState({
      foods: arr,
    });
    console.log('>>>>>>>', this.state.foods);
  };

  render() {
    return (
      <>
        {this.state.showForm && <NewFood addFood={this.addFood} />}
        <button onClick={() => this.showForm()}>Add a new food</button>
        {this.state.foods.map((eachFood) => (
          <FoodBox
            key={eachFood.name}
            name={eachFood.name}
            calories={eachFood.calories}
            quantity={eachFood.quantity}
            image={eachFood.image}
          />
        ))}
      </>
    );
  }
}

export default FoodList;
