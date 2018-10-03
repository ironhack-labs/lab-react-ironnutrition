import React, { Component } from "react";


export class SearchBox extends Component {
	constructor() {
		super();
	}
	
	render () {
		return (
			<div>
				<input type="text" className="input search-bar is-medium" name="search" placeholder="Search"/>
			</div>
		)
	}
}