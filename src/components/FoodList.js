import React, { Component } from 'react'
import FoodItem from './FoodItem'

class FoodList extends Component {

  totalCal = todaysFood => {
    let totalCal = 0;
    todaysFood.forEach( (food) => {
      totalCal += (food.quantity * food.calories);
    });
    return totalCal;
  }

  render() {
    const {todaysFood, handleDelete} = this.props;
    return (
      <div className="todays-food-list">
        <h1 className="subtitle is-2">Today's foods</h1>
        { todaysFood.map( (food, index) => {
          return <FoodItem 
                    key={index} 
                    food={food} 
                    index={index} 
                    handleDelete={handleDelete}
                  />
        })}
        <p>{`Total: ${this.totalCal(todaysFood)} cal`}</p>
      </div>
    )
  }
}

export default FoodList;
