import React from "react";
import './Search.css';

class Search extends React.Component {
    /* state = {
        word: ''
    };

    doSearchFood = (event) => {
        this.setState({ word: event.target.value });

        this.props.searchFood(this.state.word);
    } */

    render(){
        return (
            <div>
                <input
                    type="text"
                    name="search"
                    value={this.props.search}
                    placeholder="Search"
                    onChange={this.props.searchFood}
                />
            </div>
        )
    }
};

export default Search;