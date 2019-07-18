import React, { Component } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import data from "./foods.json";
import "bulma/css/bulma.css";
import AddFood from "./components/AddFood";
import TodaysFood from "./components/TodaysFood";

class App extends Component {
	state = {
		foods: data,
		showForm: false,
		todayFoods: []
	};

	addFood = food => {
		this.setState(prevState => {
			return {
				foods: [...prevState.foods, food],
				showForm: false
			};
		});
	};

	show = () => {
		this.setState(prev => {
			return {
				showForm: true
			};
		});
	};

	addToday = food => {
		const todayFoods = [...this.state.todayFoods];
		const index = todayFoods.findIndex(todayFood => todayFood.name === food.name);
		if (index > -1) todayFoods[index].quantity += food.quantity;
		else todayFoods.push(food);

		this.setState({ todayFoods });
	};

	search = e => {
		this.setState({ foods: data.filter(food => food.name.toUpperCase().startsWith(e.target.value.toUpperCase())) });
	};

	render() {
		const { foods, showForm, todayFoods } = this.state;
		return (
			<div className="App">
				<h1>IronNutrition</h1>
				<button onClick={this.show}>Add a food</button>
				<input type="text" onChange={this.search} />
				{showForm ? <AddFood addFood={this.addFood} /> : ""}
				<div class="columns">
					<div class="column">
						{foods.map((food, i) => {
							return <FoodBox key={i} food={food} addToday={this.addToday} />;
						})}
					</div>
					<div class="column">
						<p>Today's food</p>
						{todayFoods.length > 0 ? (
							<ul>
								{todayFoods.map((todayFood, i) => (
									<TodaysFood key={i} {...todayFood} />
								))}
							</ul>
						) : (
							""
						)}
						<p>
							Total:{" "}
							{todayFoods.reduce((acc, todayFood) => {
								return acc + todayFood.quantity * todayFood.calories;
							}, 0)}{" "}
							cal
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
