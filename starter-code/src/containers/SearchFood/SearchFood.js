import React, { Component } from 'react';
import './SearchFood.css';

class SearchFood extends Component {

    state = {
        searchStr: ""
    };


    handleChange = (event) => {
        const { value } = event.target;
        this.setState({ searchStr: value});
        this.props.searchFoods(value);
    };

    render(){
        return (
            <div className="searchInput">
                <input className="input" type="text" name="searchStr" value={this.state.searchStr} placeholder="Enter food's name" onChange={ this.handleChange } />
            </div>
        )
    }
}

export default SearchFood;