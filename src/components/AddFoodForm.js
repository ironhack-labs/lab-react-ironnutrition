/* eslint-disable react/prop-types */
import { Divider, Space, Input, Button, Form } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm( { addFood } ) {
	const [name, setName] = useState( '' );
	const [image, setImage] =useState( '' );
	const [calories, setCalories] =useState();
	const [servings, setServings] =useState();

	const handleName = ( e ) => setName( e.target.value );
	const handleImage = ( e ) => setImage( e.target.value );
	const handleCalories = ( e ) => setCalories( e.target.value );
	const handleServings = ( e ) => setServings( e.target.value );

	const handleSubmit = () => {
		if ( !name ) return;
		addFood( { name, image, calories, servings } );

		setName( '' );
		setImage( '' );
		setCalories();
		setServings();
	};

	return (
		<Form onFinish={handleSubmit}>
			<Divider>Add Food Entry</Divider>

			<Space direction="vertical" block>
				<Input
					placeholder='Name'
					value={name}
					type="text"
					onChange={handleName}

				/>
				<Input
					placeholder='Image'
					value={image}
					type="text"
					onChange={handleImage}

				/>
				<Input
					placeholder='Calories'
					value={calories}
					type="number"
					onChange={handleCalories}

				/>
				<Input
					placeholder='Servings'
					value={servings}
					type="number"
					onChange={handleServings}

				/>

				<Button type="primary" htmlType="submit">Create</Button>
			</Space>

		</Form>
	);
}

export default AddFoodForm;
