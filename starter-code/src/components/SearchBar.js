import React from 'react'
import FoodInput from './FoodInput'

const SearchBar = props => {



    handleChange=() => {
        let {name, value} = e.target
        props.updateFoods(value)
    }

    return (
        <FoodInput 
        type="text" 
        placeholder="type a food" 
        handleChange={this.handleChange} 
        />
        )
}

export default SearchBar;