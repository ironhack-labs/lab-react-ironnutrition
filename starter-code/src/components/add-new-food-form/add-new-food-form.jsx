import React, { useState } from 'react';
import './add-new-food-form.scss';

export const AddNewFoodForm = (props) => {
	const [name, setName] = useState('');
	const [calories, setCalories] = useState(0);
	const [image, setImage] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		const food = {
			name,
			calories,
			image,
			quantity: 0
		};

		props.addNewFood(food);
	};

	return (
		props.show && <form onSubmit={submitHandler}>
			<input className={'input'}
				   type={'text'}
				   name={'name'}
				   placeholder={'food\'s name'}
				   onChange={(e) => setName(e.target.value)}
				   required
			/>
			<input className={'input'}
				   type={'number'}
				   name={'calories'}
				   placeholder={'calories'}
				   onChange={(e) => setCalories(e.target.value)}
				   required
			/>
			<input className={'input'}
				   type={'text'}
				   name={'image'}
				   placeholder={'image-url'}
				   onChange={(e) => setImage(e.target.value)}
				   required
			/>
			<button type={'submit'} className={'button is-danger'}>Create</button>
		</form>
	)
};