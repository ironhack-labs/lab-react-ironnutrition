
import React, { Component } from 'react'
import foods from '../foods.json'
class Search extends Component {

    state = { }

    
    searchFood = (e) => {

        // Search foods and filter based on what is being typed
        let filtered = foods.filter((eachFood) => (
            eachFood.name.toLowerCase().includes(e.target.value.toLowerCase())
        ));

        // Call function from parent component to show search results
        this.props.showSearch(filtered)
    }

    render () {
        return (
            <div>
               <input className='search-bar' type='text' onChange={this.searchFood} placeholder='Search...' />
            </div>
        )
    }
}

export default Search