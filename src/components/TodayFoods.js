import {React} from 'react';

function TodayFoods(props) {

	const list = props.selectedFoods.map(item => {
		const {id, name, quantity, calories} = item;
		return (
			<li key={id}>{quantity} {name} = {quantity * calories}</li>
		);
	});

	const totalCalories = props.selectedFoods.reduce((acc, value) => {
		return acc + (value.calories * value.quantity);
	}, 0);


	return (
		<div className="column content">
			<h2 className="subtitle">Today's foods</h2>
			<ul>
				{list}
			</ul>
			{totalCalories === 0 ? '' : <strong>Total: {totalCalories} cal</strong>}
		</div>
	);
}

export default TodayFoods;