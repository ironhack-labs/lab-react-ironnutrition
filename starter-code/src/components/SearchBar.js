import React, { Component } from 'react';
import { InputField } from './InputField';


export class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            query: ''
        }
    }
    handleChange(query) {
        console.log(query);
        this.setState({query});
        this.props.handleSearchBarChange(query);
    }
    
    render() {
        return(
            <input onChange={ e => this.handleChange(e.target.value)} placeholder="Search"/>
        )
    }
}