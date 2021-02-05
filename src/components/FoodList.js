import {Component, React} from 'react';
import foods from '../foods.json';
import FoodBox from './FoodBox';
import AddNewFood from './AddFood';
import TodayFoods from './TodayFoods';

class FoodList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			foods: foods,
			selectedFoods: []
		};
	}

	addNewFood = newFood => {
		const newFoods = [newFood, ...this.state.foods];

		this.setState({
			foods: newFoods
		});
	};

	selectedFood = selectedFood => {
		let selectedFoods = [selectedFood, ...this.state.selectedFoods];

		this.setState({
			selectedFoods: selectedFoods
		});
	};


	render() {
		const filteredFoodList = this.state.foods.filter(item => {
			return item.name.toLowerCase().includes(this.props.searchTerm.toLowerCase());
		});

		const foodList = filteredFoodList.map(item => {
			const {id, name, image, calories, quantity} = item;
			return (
				<FoodBox
					key={id}
					id={id}
					name={name}
					image={image}
					calories={calories}
					quantity={quantity}
					selectedFood={this.selectedFood}/>
			);
		});

		return (
			<div className="columns">
				<div className="column">
					<AddNewFood
						submitToAdd={this.addNewFood}/>
					{foodList}
				</div>
				<TodayFoods selectedFoods={this.state.selectedFoods}/>
			</div>
		);
	}
}

export default FoodList;