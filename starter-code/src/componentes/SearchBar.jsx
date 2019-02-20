import React, { Component } from 'react';

class SearchBar extends Component {
	filter = (e) => {
		this.props.myfilter(e.target.value);
	};

	render() {
		return <input type="text" onChange={(e) => this.filter(e)} />;
	}
}

export default SearchBar;
