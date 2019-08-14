import React from 'react'

const FoodBox = ({ foodName, foodCalories, foodImg, foodQuantity }) => {
	return (
		<div className='box'>
			<article className='media'>
				<div className='media-left'>
					<figure className='image is-64x64'>
						<img src={foodImg} />
					</figure>
				</div>
				<div className='media-content'>
					<div className='content'>
						<p>
							<strong>{foodName}</strong> <br />
							<small>{foodCalories}</small>
						</p>
					</div>
				</div>
				<div className='media-right'>
					<div className='field has-addons'>
						<div className='control'>
							<input className='input' type='number' value={foodQuantity} />
						</div>
						<div className='control'>
							<button className='button is-info'>+</button>
						</div>
					</div>
				</div>
			</article>
		</div>
	)
}

export default FoodBox
