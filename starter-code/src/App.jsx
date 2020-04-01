import React, { useState } from 'react';
import './App.scss';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import { FoodBox } from './components/food-box/food-box';
import { FoodList } from './components/food-list/food-list';
import { TodaysFoods } from './components/todays-food/todays-food';
import { AddNewFoodForm } from './components/add-new-food-form/add-new-food-form';
import { SearchBar } from './components/search-bar/search-bar';


export const App = () => {
	const [myFoods, setMyFoods] = useState(foods);
	const [menu, setMenu] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [filteredList, setFilteredList] = useState(myFoods);

	const addNewFood = (food) => {
		setMyFoods([...myFoods, food]);
		setShowForm(false);
	};

	const addFoodToMenu = (food) => {
		const index = menu.findIndex((e) => e.name === food.name);

		if (index > -1) {
			const newMenu = [...menu];
			newMenu[index].quantity += food.quantity;
			setMenu(newMenu);
		} else {
			setMenu([...menu, food]);
		}
	};

	const deleteElementFromMenu = (food) => {
		setMenu(menu.filter((e) => e.name !== food.name));
	};


	return (
		<div className="App">
			<h1>IronNutrition</h1>
			<SearchBar myFoods={myFoods} setFilteredList={setFilteredList}/>
			<button className={'button'} onClick={() => setShowForm(true)}>Add new food</button>
			<AddNewFoodForm addNewFood={addNewFood} show={showForm}/>
			<div className={'content'}>
				<FoodList foods={filteredList} addFoodToMenu={addFoodToMenu}/>
				<TodaysFoods menu={menu}
							 deleteElementFromMenu={deleteElementFromMenu}/>
			</div>

		</div>
	);
};

