import React from 'react';

const TodaysFoods = (props) => {

  const { foods } = props;

  const calories = (array) => {
    return array.map(element => {
      return [element.quantity, element.calories];
    });
  }

  console.log(calories(foods));

  let foodSums = 0

  if (foods.length > 0) {
    foodSums = calories(foods).map(element => {
      return parseInt(element[0], 10)*element[1];
    }).reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
  }

  return (
    <div className="column content">
      <h2 className="subtitle">Today's foods</h2>
      <ul>
        {
          foods.map((element, index) => {
            return <li key={index}>{element.quantity} {element.name} = {element.calories * parseInt(element.quantity,10)} cal</li>
          })
        }
      </ul>
      <strong>Total: {foodSums} cal</strong>
    </div>
  )
}

export default TodaysFoods;