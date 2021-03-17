import React, { Component } from 'react'
import SearchBar from './SearchBar'
import FoodTable from './FoodTable'
import Form from './Form'
import foodData from '../foods.json';

class FilterableFoodTable extends Component {
    state = {
        foods: foodData,
        filterText: ''
    }

    handleChange = (filterText) => {
        this.setState({ filterText: filterText });
    }
    
    addFood = (value) => {
        this.setState({foods: [...this.state.foods, value]})
    }

    render() {

        return (
            <div>
                <SearchBar
                filterText={ this.state.filterText }
                onFilterTextChange={ this.handleChange }/>
                <FoodTable
                foods={ this.state.foods }
                filterText={ this.state.filterText }/>
                <h2>Add food</h2>
                <Form myProp={ this.addFood }/>
            </div>
        )
    }
}

export default FilterableFoodTable
