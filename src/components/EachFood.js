import React from 'react'
import { Component } from 'react'
import './EachFood.css'
import Foodbox from './Foodbox'
import foods from './foods.json';
import AddFood from './AddFood';


class EachFood extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
    };
  }

  createFood(newFood) {
    const foodCopy = [...this.state.foods];
    foodCopy.push(newFood);
    this.setState({
      foods: foodCopy,
    });

  }
  render() {
  
    const foodsMap = this.state.foods;
    return (
      <>
        <AddFood addFood={(food) => this.createFood(food)} />
        {
            foodsMap.map((elm, idx) => (
        
              <Foodbox
                key={idx}
                image={elm.image}
                quantity={elm.quantity}
                name={elm.name}
                calories={elm.calories}
              />
            ))
        }
      </>
    );
    
  }
}
export default EachFood