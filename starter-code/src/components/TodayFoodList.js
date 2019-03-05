import React, {Component} from 'react';

class TodayFoodList extends Component{

  constructor(props){
    super(props);
  }

  

  render(){
    
    return (
      <div>
        <h2>Today's Foods</h2>
        <ul>
        {this.props.todayFoods.map((food, index) => {
          return (
            <li key={index}>{food.quantity} {food.name} = {food.quantity*food.calories} cal</li>
          );
        })}
        </ul>
        <p>Total: {this.props.todayFoods.reduce((accumulator, currentFood) => accumulator + currentFood.calories * currentFood.quantity, 0)} cal</p>
      </div>
    );
  }

}

export default TodayFoodList;