import React, { Component } from "react";
import foods from '../foods.json';

export class SearchBox extends Component {
	constructor() {
		super();
		this.state = {
			foodList : foods
		}
	}
	
	getData () {
		//filter() + includes(). Lanzamos el filtro cuando tengamos al menos 3 letras.
		//y guardamos el resultado en el estado
	}

	render () {
		return (
			<div>
				<input type="text" className="input search-bar is-medium" name="search" onChange={(e) => this.getData()} placeholder="Search"/>
			</div>
		)
	}
}