import React from "react";

class FoodBox extends React.Component {
	state = {
		quantity: this.props.food.quantity
	};

	handleChange = e => {
		const {
			target: { name, value }
		} = e;
		this.setState({ [name]: value });
	};

	addTodayFood = () => {
		if (this.state.quantity <= 0) return;
		this.props.addToday({ ...this.props.food, quantity: parseInt(this.state.quantity, 10) });
	};

	render() {
		const { name, calories, image } = this.props.food;
		return (
			<div className="box">
				<article className="media">
					<div className="media-left">
						<figure className="image is-64x64">
							<img src={image} width="200" alt={name} />
						</figure>
					</div>
					<div className="media-content">
						<div className="content">
							<p>
								<strong>{name}</strong> <br />
								<small>{calories}cal</small>
							</p>
						</div>
					</div>
					<div className="media-right">
						<div className="field has-addons">
							<div className="control">
								<input onChange={this.handleChange} className="input" type="number" name="quantity" min="0" value={this.state.quantity} />
							</div>
							<div className="control">
								<button onClick={this.addTodayFood} className="button is-info">
									+
								</button>
							</div>
						</div>
					</div>
				</article>
			</div>
		);
	}
}

export default FoodBox;
