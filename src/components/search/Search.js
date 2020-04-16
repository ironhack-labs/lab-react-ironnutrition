import React, { Component } from 'react';

class Search extends Component {
    
    state = {
        search: ""
    }
    
    handleInput = (e) => {
        const filterFunc = this.props.filterFoodBoxList;
        this.setState(
            { [e.target.name]: e.target.value }, 
            filterFunc(e.target.value)
        );
    };
    
    render() {
        return (
            <div>
                <input type="search" name="search" value="" onChange={this.handleInput} />
            </div>
        );
    }
}

export default Search;