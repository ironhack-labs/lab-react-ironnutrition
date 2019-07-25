import React, { Component } from 'react';

export default class FoodBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.atributes.name,
			calories: this.props.atributes.calories,
			image: this.props.atributes.image,
			quantity: this.props.atributes.quantity || 1,
		};
	}
	render() {
		return (
			<div className="box">
				<article className="media">
					<div className="media-left">
						<figure className="image is-64x64">
							<img src={this.props.atributes.image} />
						</figure>
					</div>
					<div className="media-content">
						<div className="content">
							<p>
								<strong>{this.props.atributes.name}</strong> <br />
								<small>{this.props.atributes.calories} cal</small>
							</p>
						</div>
					</div>
					<div className="media-right">
						<div className="field has-addons">
							<div className="control">
								<input
									className="input"
									type="number"
									// value={this.state.quantity}
								/>
							</div>
							<div className="control">
								<button
									className="button is-info"
									onClick={() => {
										this.props.addToTheList(
											this.state.name,
											this.state.calories,
											this.state.quantity,
										);
									}}>
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
