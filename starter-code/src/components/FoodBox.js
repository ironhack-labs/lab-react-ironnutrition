import React from 'react'

class Foodbox extends React.Component {
	state = {
		quantity : 0
	}
	handleQunatity = () => {
		this.setState({quantity: this.state.quantity + 1})
	}
	addButton = () => {
		this.props.add({
			name: this.props.food.name,
			calories: this.props.food.calories,
			quantity: this.state.quantity
		})
	}
	render(){
		return (
			<div className="box">
				<article className="media">
					<div className="media-left">
						<figure className="image is-64x64">
							<img src={this.props.food.image} alt="..."/>
						</figure>
					</div>
					<div className="media-content">
						<div className="content">
							<p>
								<strong>{this.props.food.name}</strong> <br />
								<small>{this.props.food.calories} cal</small>
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
									onChange={this.handleQunatity}
								/>
							</div>
							<div className="control">
								<button className="button is-info" onClick={this.addButton}>
									+
								</button>
							</div>
						</div>
					</div>
				</article>
			</div>
		)}
}

export default Foodbox