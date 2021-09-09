import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
	const [ showForm, setShowForm ] = useState(false);
	const [ theFood, setTheFood ] = useState('');
	const [ copyFood, setFood ] = useState(foods);

	const ShowFoods = () => {
		return copyFood.map((foodItem) => {
			return <FoodBox key={foodItem.name} food={foodItem} />;
		});
	};

	const handleChange = (e) => {
		setTheFood(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		let newFoodArray = [ ...copyFood ];
		newFoodArray.push({ name: theFood });
		setFood(newFoodArray);
	};

	const mealSearch = (e) => {
		//No Bruno
		let newFoodArray = [ ...foods ];
		const newMealSearch = newFoodArray.filter((newFoodMeal) => {
			return newFoodMeal.name.toLowerCase().includes(e.target.value.toLowerCase());
		});
		setFood(newMealSearch);
	};

	return (
		<div className="App">
			<input placeholder="search" onChange={mealSearch} />
			<br />

			<button onClick={() => setShowForm(!showForm)}>Add New Foods</button>
			{showForm ? (
				<form onSubmit={handleSubmit}>
					<input onChange={handleChange} placeholder="Add FoodName" />
					<button>Add Food</button>
				</form>
			) : (
				'Not Showing!'
			)}

			<ShowFoods />
		</div>
	);
}

export default App;
