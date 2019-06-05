import React, { Component } from 'react';

const FoodList = (props) => {
	return (
		<li>
			{props.food.name} - {props.food.calories}
		</li>
	);
};

export default FoodList;
