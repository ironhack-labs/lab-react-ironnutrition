import React from 'react';
import './todays-food.scss';

export const TodaysFoods = (props) => {
	console.log(props);

	const total = props.menu.reduce((a, b) => {
		return a + (b.calories * b.quantity);
	}, 0);


	return (
		<div>
			<h2>Today's food</h2>
			{props.menu.map((e, index) =>
				<ul key={index}>
					<li>{e.quantity} {e.name} = {e.quantity * e.calories} cal
						<button className={'button'}
								onClick={() => props.deleteElementFromMenu(e)}>
							<span className="icon">
							  <i className="fas fa-trash"></i>
							</span>
						</button>
					</li>
				</ul>
			)}
			<p>Total: {total} cal</p>
		</div>
	)
};