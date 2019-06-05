import React, { Component } from 'react';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ''
		};
	}

	handleChange = (e) => {
		let { name, value } = e.target;

		//console.log(value);
		this.setState({ [name]: value }, () => {
			this.props.search(this.state.search);
		});
	};

	render() {
		return (
			<input
				className="search-bar"
				type="text"
				name="search"
				value={this.state.search}
				onChange={this.handleChange}
			/>
		);
	}
}

export default Search;
