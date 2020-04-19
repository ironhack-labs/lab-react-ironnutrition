import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    state = {
        searchValue: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

        this.props.setFilterFoods(e.target.value);
    }

    render() {
        const { searchValue } = this.state;

        return (
            <div>
                <input className='Search-input' id="searchValue" type="text" name="searchValue" value={searchValue} onChange={this.handleInput} placeholder='Search'></input>
            </div>
        );
    }
}

export default Search;