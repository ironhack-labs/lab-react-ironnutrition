import React, { Component } from 'react';

class Ingredient extends Component {
	state = {
		name: this.props.foodinfo.name,
		calor: this.props.foodinfo.calories,
		img: this.props.foodinfo.image,
		quantity: this.props.foodinfo.quantity
	};

	changesNumber = (e) => {
		const newState = { ...this.state };

		newState.quantity = e.target.value;

		this.setState(newState);
	};

	addToInfo = () => {
		this.props.onclick(this.state);
	};

	render() {
		return (
			<article className="media">
				<div className="media-left">
					<figure className="image is-64x64">
						<img src={this.props.foodinfo.image} />
					</figure>
				</div>
				<div className="media-content">
					<div className="content">
						<p>
							<strong>{this.props.foodinfo.name}</strong> <br />
							<small>{this.props.foodinfo.calories}</small>
						</p>
					</div>
				</div>
				<div className="media-right">
					<div className="field has-addons">
						<div className="control">
							<input
								className="input"
								type="number"
								value={this.state.quantity}
								onChange={this.changesNumber}
							/>
						</div>
						<div className="control">
							<button onClick={this.addToInfo} className="button is-info">
								+
							</button>
						</div>
					</div>
				</div>
			</article>
		);
	}
}

export default Ingredient;
