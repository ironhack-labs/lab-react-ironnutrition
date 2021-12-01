import './ListFood.css';
import 'bulma/css/bulma.css'
import React, {useState} from 'react';

function Search (props) {

  return (
	<div className="search-container">
		  <input type="search" placeholder="Search Food" onChange={props.searchFood()} name="search"></input>
	</div>
  );
}

export default Search;