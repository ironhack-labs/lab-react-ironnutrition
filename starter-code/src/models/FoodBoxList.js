import React, { Component } from 'react';
import foods from '../foods.json'
import FoodBox from './FoodBox';
import AddFood from './AddFood';

class FoodBoxList extends Component {
  constructor(props){
    super(props)
    this.state = {
      foods: foods
    }
  }

  addFoodHandler = (food) => {
    const foodsCopy = this.state.foods;
    foodsCopy.push(food);
    this.setState({
      foods: foodsCopy
    })
  }

  render() {
    return (

      <div>
        <AddFood addFood={this.addFoodHandler} />
        {
          this.state.foods.map((oneFood, index) => {
            // return <ImprovedCard key={index} {...oneMovie} clickToDelete={this.deleteMovieHandler.bind(this, index)} />
            return(<FoodBox key={index} {...oneFood}></FoodBox>)
          })
        }
      </div>
    );
  }
}

export default FoodBoxList;