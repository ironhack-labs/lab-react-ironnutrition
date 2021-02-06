import React from 'react'
import 'bulma/css/bulma.css';
import foods from '../foods.json';
import { render } from '@testing-library/react';
import FoodCard from './FoodCard'
import FoodBox from './FoodBox'

class Search extends React.Component {

    state = {
        originalList: foods,
        copyList: foods,
        input: '',
    }

    handleChange = (event) => {

        const filtered = this.state.originalList.filter((food) =>
            food.name.toLowerCase().includes(this.state.input.toLowerCase())
        );

        this.setState({
            input: event.target.value,
            copyList: filtered,
        });

    };

    render() {
        return <div>
            <input onKeyUp={this.handleChange} type="text" />

            <FoodBox foods={this.state.copyList} />

        </div>
    };

}

export default Search;