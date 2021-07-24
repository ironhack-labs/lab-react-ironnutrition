import React, { Component } from "react";

class Search extends Component {

    state ={
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