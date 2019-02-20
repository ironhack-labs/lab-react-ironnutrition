import React, { Component } from 'react';
import FoodItem from '../components/FoodItem';

class FoodBox extends Component{

render (){
  const foodsArr = this.props.foodsProps.map((food, index)=>{
    return <FoodItem food={food} key={index} />
  })

  return <div className="box">{foodsArr}</div>

}
}



export default FoodBox;