import React, { Component } from 'react';
import Ingredient from './Ingredient';

class FoodBox extends Component {
	render() {
		const array = this.props.listprop.map((food, idx) => {
			return <Ingredient onclick={this.props.addIngredients} foodinfo={food} />;
		});

		return <div className="box">{array}</div>;
	}
}

export default FoodBox;
