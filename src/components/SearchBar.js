import React, { Component } from 'react'

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchInput: '',
        }
    }

    handleSearch = (event) =>{
        const value = event.target.value;
        
        this.setState({
            searchInput: value
        });
        this.props.filterFood(value)
    }

    render() {
        return (
            <div>
                <input class="input is-info m-5" type="text" name="search"  value={this.state.searchInput} onChange={this.handleSearch} placeholder="Look for Food" />
            </div>
        )
    }
}

export default SearchBar;