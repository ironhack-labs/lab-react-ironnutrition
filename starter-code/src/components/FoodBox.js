import React from 'react'
import '../App.css'
import 'bulma/css/bulma.css';

const FoodBox = (props) => {

    return (
        <div className="box">
				<article className="media">
					<div className="media-left">
						<figure className="image is-64x64">
							<img src={props.foods.image ? props.foods.image : props.foods.image = '/img/random-food.jpg'} alt="img"/>
						</figure>
					</div>
					<div className="media-content">
						<div className="content">
							<p>
								<strong>{props.foods.name}</strong> <br />
								<small>{props.foods.calories}</small>
							</p>
						</div>
					</div>
					<div className="media-right">
						<div className="field has-addons">
							<div className="control">
								<input className="input" type="number" value="1" />
							</div>
							<div className="control">
								<button className="button is-info">+</button>
							</div>
						</div>
					</div>
				</article>
			</div>
    )
}

export default FoodBox
