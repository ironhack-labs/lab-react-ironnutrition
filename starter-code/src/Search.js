import React, { Component } from 'react';
import foods from "./foods.json";

class Search extends Component {

    state = {
        foods
    }

    handleChange = e => {
        console.log(e.target.value)
        let searchList = [...this.state.foods]
        searchList.push(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
          <div>
            <input onChange={(e)=> this.handleChange(e)} name='search' placeholder="something...." />
          </div>
        );
    }
}

export default Search;  