import React from 'react';
import 'bulma/css/bulma.css';

const TodaysFoods = props => {

	const displayFoodItem = foodItem => {
		return <li>{foodItem.quantity} {foodItem.name} {foodItem.calories*foodItem.quantity} cal <button value={foodItem.name} onClick={props.removeItem}>Remove Item</button></li>
	}


  return (
    <div>
	<h1>Todays Foods</h1>
	{props.todaysFoodArray.map(foodItem => displayFoodItem(foodItem))}
    </div>
  );
};

export default TodaysFoods
