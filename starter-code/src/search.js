import React, { Component } from "react";
import './App.css';
import food from './foods.json';

class Search extends Component {
    constructor(props){
        super(props)

        this.state = {
            search : '',
        }
    }

    SearchLive = (e) => {
        this.props.Searching(e.target.value);
        this.setState({search : e.target.value})
    }
    
    render(){
        return(
            <div>
                <input type='text' name='search' placeholder="Type the item you want" value={this.state.search} onChange={(e) => this.SearchLive(e)}></input>
            </div>
        )
    }
}

export default Search;