import React from 'react';

const FoodBox = ({ name, calories, quantity, image, id, onChange, onClick }) => {
	return (
		<div className='box'>
			<article className='media'>
				<div className='media-left'>
					<figure className='image is-64x64'>
						<img src={image} alt={name} />
					</figure>
				</div>
				<div className='media-content'>
					<div className='content'>
						<p>
							<strong>{name}</strong> <br />
							<small>{calories} cal</small>
						</p>
					</div>
				</div>
				<div className='media-right'>
					<div className='field has-addons'>
						<div className='control'>
							<input id={id} className='input' name={name} type='number' onChange={onChange} />
						</div>
						<div className='control'>
							<button className='button is-info' onClick={() => onClick(id)}>
								+
							</button>
						</div>
					</div>
				</div>
			</article>
		</div>
	);
};

export default FoodBox;
