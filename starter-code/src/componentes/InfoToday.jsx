import React, { Component } from 'react';
import InfoElement from './InfoElement';

class InfoToday extends Component {
	render() {
		const array = this.props.newInfo.map((food, idx) => {
			return <InfoElement foodinfo={food} />;
		});

		return (
			<div>
				<h2>Today's foods</h2>
				<ul>{array}</ul>
				<p>Total Calories: </p>
			</div>
		);
	}
}

export default InfoToday;
