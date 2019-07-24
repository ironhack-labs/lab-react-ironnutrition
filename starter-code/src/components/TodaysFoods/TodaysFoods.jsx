import React, { Component } from 'react';

class TodaysFoods extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let arr = this.props.foods;
    let retorno = '';
    let totalCalories = 0;
    let arrPrint = [];

    arr.map(food => {
      totalCalories += food.calories;
      retorno += <li>Name: food.name</li>;
    })
    return (
      <div>
        <ul>
          {arr.map(food => <li>{food.name}, {food.calories} calories</li>)}
        </ul>
        Total Calories: {totalCalories}
      </div>
    )
  }
}

export default TodaysFoods;