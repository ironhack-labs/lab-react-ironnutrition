import React, { Component } from 'react';
import './SearchFood.css';

class SearchFood extends Component {

    state = {
        searchStr: ""
    };


    handleChange(event) {
        this.setState({ searchStr: event.target.value});
    }

    render(){
        return (
            <div className="searchInput">
                <input className="input" type="text" name="searchStr" value={this.state.searchStr} placeholder="Enter food's name" onChange={(e) => this.handleChange(e)} />
            </div>
        )
    }
}

export default SearchFood;