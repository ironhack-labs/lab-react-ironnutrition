import React, { Component } from 'react';

class InfoElement extends Component {
	render() {
		return (
			<li>
				{this.props.foodinfo.quantity}
				{this.props.foodinfo.name}={this.props.foodinfo.calor * +this.props.foodinfo.quantity}
			</li>
		);
	}
}

export default InfoElement;
