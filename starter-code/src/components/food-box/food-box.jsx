import React, { useState } from 'react';
import './food-box.scss';


export const FoodBox = (props) => {
	const [quantity, setQuantity] = useState(1);

	const clickHandler = () => {
		const foodCopy = {...props.food};
		foodCopy.quantity = +quantity;
		props.addFoodToMenu(foodCopy);
	};


	return (
		<div className="box">
			<article className="media">
				<div className="media-left">
					<figure className="image is-64x64">
						<img src={props.food.image} alt={'food'}/>
					</figure>
				</div>
				<div className="media-content">
					<div className="content">
						<p>
							<strong>{props.food.name}</strong> <br/>
							<small>{props.food.calories} cal</small>
						</p>
					</div>
				</div>
				<div className="media-right">
					<div className="field has-addons">
						<div className="control">
							<input
								className="input"
								type="number"
								value={quantity}
								min={1}
								onChange={(event) => setQuantity(event.target.value)}/>
						</div>
						<div className="control">
							<button onClick={clickHandler} className="button is-info">
								+
							</button>
						</div>
					</div>
				</div>
			</article>
		</div>
	)
};