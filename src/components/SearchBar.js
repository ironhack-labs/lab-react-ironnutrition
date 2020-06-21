import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state={
            search: ""
        }
    }
    
    render() {
        return (
            <div>
                <input  
                type = "text"
                onChange={(e)=>this.props.search(e)} 
                placeholder="What are you looking for?"></input>
            </div>
        );
    }
}

export default SearchBar;
