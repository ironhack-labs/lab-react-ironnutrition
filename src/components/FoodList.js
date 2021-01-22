import {Component, React} from 'react';
import foods from '../foods.json';
import FoodBox from './FoodBox';

class FoodList extends Component {
	constructor(props) {
		super(props);
		this.state = {foods};
	}

	render() {
		const FoodList = this.state.foods.map(item => {
			// console.log(item);
			const {id, name, image, calories, quantity} = item;
			// console.log(id, name, image);
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
					{FoodList}
				</div>
			</div>
		);
	}
}

export default FoodList;