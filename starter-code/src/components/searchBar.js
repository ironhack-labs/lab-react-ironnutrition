import React, { Component } from 'react';
import './searchBar.css';

class SearchBar extends Component {


    handlerChange = (change) =>{
        const{value} = change.target;
        console.log(value)
        this.props.searchFood(value)
    }
    render(){
        return(
            <input className='search-bar' type='text' name='search' onChange={e => this.handlerChange(e)} /> 
        );
    };
};

export default SearchBar;