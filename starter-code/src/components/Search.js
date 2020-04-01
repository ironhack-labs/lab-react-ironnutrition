import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            filter: ""
        }
    }


    handleSearch = (event) => {
        debugger
        event.preventDefault();
        this.props.filterFood(this.state); 
        this.setState({
            filter: event.target.value
        })    
    }

    render(){
        return(
            <div>
                <input type="text" placeholder = "Search" value={this.state.filter} onChange={(e) => this.handleSearch(e)}/>
            </div>
        )
    }
}

export default Search;