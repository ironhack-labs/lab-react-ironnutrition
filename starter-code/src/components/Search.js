import React, { Component } from 'react';

class Search extends Component {
    state = {
        search: ''
    }

    handleInput = (e) => {
        const { foods, search } = this.props;
        const filteredFoods = foods.filter(food => (food.name.toLowerCase()).indexOf(e.target.value.toLowerCase()) >= 0);

        search(filteredFoods);

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { search } = this.state;

        return (
            <div>
                <input id="search" type="text" name="search" value={search} onChange={this.handleInput} placeholder='Search'></input>
            </div>
        );
    }
}

export default Search;