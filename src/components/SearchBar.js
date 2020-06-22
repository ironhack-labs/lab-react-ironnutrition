import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div className = "search">
                <input  
                type = "text"
                onChange={(e)=>this.props.search(e)} 
                placeholder="Search here"></input>
            </div>
        );
    }
}

export default SearchBar;
