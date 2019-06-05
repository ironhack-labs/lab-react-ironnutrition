import React, { Component } from 'react';

class FoodBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			qty: 1
		};
	}

	handleChange = (e) => {
		console.log(e);
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	addToList = (props) => {
		this.props.add({ name: this.props.food.name, calories: this.props.food.calories * this.state.qty });
	};

	render() {
		const { name, image, calories } = this.props.food;
		return (
			<div className="box">
				<article className="media">
					<div className="media-left">
						<figure className="image is-64x64">
							<img src={image} alt={name} />
						</figure>
					</div>
					<div className="media-content">
						<div className="content">
							<p>
								<strong>{name}</strong> <br />
								<small>{calories}</small>
							</p>
						</div>
					</div>
					<div className="media-right">
						<div className="field has-addons">
							<div className="control">
								<input
									className="input"
									type="number"
									name="qty"
									value={this.state.qty}
									onChange={this.handleChange}
								/>
							</div>
							<div className="control">
								<button className="button is-info" onClick={this.addToList}>
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
