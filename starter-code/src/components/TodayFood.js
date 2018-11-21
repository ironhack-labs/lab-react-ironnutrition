import React from 'react';

const TodayFood = ({food, index, onClick}) => (
  <li>{food.qty} {food.name} = {food.kcal} kcal&emsp;<i className="fa fa-trash" onClick={ () => onClick(index) }></i></li>
);

export default TodayFood;