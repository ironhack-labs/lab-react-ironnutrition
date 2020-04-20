import React, { Component } from 'react';

class SearchFood extends Component {
    constructor(props){
        super(props);
        this.state = {
            search:''
        }

    }

        handleSearchInput = (event) => {
            event.preventDefault();
            this.props.searchFood(this.state);
            this.setState({
                search: event.target.value
            })
    }

    render(){
        return (
            <div>
            <input id='search' type='text' placeholder='Search' value={this.state.search} onChange={(event) => this.handleSearchInput(event)}></input>
            </div>
        )
    }
}






export default SearchFood; 