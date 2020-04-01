import React from 'react';
import './food-list.scss';
import { FoodBox } from '../food-box/food-box';

export const FoodList = (props) => {
	return (
		<div className={'foods-box'}>
			{props.foods.map((food, index) =>
				<FoodBox key={index}
						 food={food}
						 addFoodToMenu={props.addFoodToMenu}
				/>
			)}
		</div>
	)
};