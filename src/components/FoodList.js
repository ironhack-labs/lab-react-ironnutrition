import {Component, React} from 'react';
import foods from '../foods.json';
import FoodBox from './FoodBox';
import AddNewFood from './addFood';

class FoodList extends Component {
	constructor(props) {
		super(props);
		this.state = {foods};
	}

	addNewFood = newFood => {
		const newFoods = [newFood, ...this.state.foods];

		this.setState({
			foods: newFoods
		});
	};

	render() {
		const filteredFoodList = this.state.foods.filter(item => {
			return item.name.toLowerCase().includes(this.props.searchTerm.toLowerCase());
		});

		const FoodList = filteredFoodList.map(item => {
			const {id, name, image, calories, quantity} = item;
			return (
				<FoodBox
					key={id}
					name={name}
					image={image}
					calories={calories}
					quantity={quantity}/>
			);
		});

		return (
			<div className="columns">
				<div className="column">
					<AddNewFood
						submitToAdd={this.addNewFood}/>
					{FoodList}
				</div>
			</div>
		);
	}
}

export default FoodList;