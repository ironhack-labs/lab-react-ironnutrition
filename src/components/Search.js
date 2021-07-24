import React, { Component } from "react";
import foods from '../foods.json';

class Search extends Component {

    state ={
        food : foods,
        input : ""
    }

    onSearch = (event) => {
        this.setState({
            input: event.target.value
        })
        this.props.filterFood(this.state.input)
    }

    render (){
        return (<div>
            <input
            className = "input"
            type="text"
            placeholder="Search Food..."
            value={this.state.input}
            onChange={this.onSearch}
        />
        </div>
        )
    }
}

export default Search;