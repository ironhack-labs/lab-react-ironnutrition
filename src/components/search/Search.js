import React, { Component } from 'react';

class Search extends Component {
    
    state = {
        search: ""
    }
    
    handleInput = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }, 
            this.props.filterFoodBoxList(e.target.value)
        );
    };
    
    render() {
        return (
            <div>
                <input type="search" name="search" value={this.state.search} onChange={this.handleInput} />
            </div>
        );
    }
}

export default Search;