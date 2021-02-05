import {Component, React} from 'react';
import 'bulma/css/bulma.css';

class FoodBox extends Component {
	constructor(props) {
		super(props);
		const {id, name, calories, image, quantity} = props;
		this.state = {
			id: id,
			name: name,
			calories: calories,
			image: image,
			quantity: quantity
		};
	}

	handleInputChange = event => {
		const quantity = event.target.value;

		this.setState({
			quantity: parseInt(quantity)
		});
	};


	render() {
		return (
			<div className="box">
				<article className="media"
						 key={this.props.id}>
					<div className="media-left">
						<figure className="image is-64x64">
							<img src={this.props.image} alt={this.props.name}/>
						</figure>
					</div>
					<div className="media-content">
						<div className="content">
							<p>
								<strong>{this.props.name}</strong>
								<br/>
								<small>{this.props.calories}</small>
							</p>
						</div>
					</div>
					<div className="media-right">
						<div className="field has-addons">
							<div className="control">
								<input onChange={this.handleInputChange}
									   className="input"
									   type="number"
									   placeholder="0"
									   value={this.state.quantity}/>
							</div>
							<div className="control">
								<button className="button is-info"
										onClick={() => this.props.selectedFood(this.state)}>
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