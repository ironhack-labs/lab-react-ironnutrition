import React from 'react';
import './App.css';
import FoodList from './components/FoodList';

function App() {
	return (
		<div className="App">
			<div className="container">
				<h1 className="title">IronNutrition</h1>
				<div>
					<input type="text" className="input search-bar" name="search"
						   placeholder="Search" value=""/>
				</div>
				<FoodList/>
			</div>
		</div>
	);
}

export default App;
