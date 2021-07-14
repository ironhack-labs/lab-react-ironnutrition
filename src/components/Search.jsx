import React, { Component } from 'react'

class Search extends Component {
    render() {
        const {onSearchFood} = this.props 
        return (
            <div>
                <input onChange={onSearchFood}  class="input is-rounded input is-danger" type="text" placeholder="Search a food here"></input>
            </div>
        )
    }
}

export default Search;