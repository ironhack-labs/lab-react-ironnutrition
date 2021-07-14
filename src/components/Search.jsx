import React, { Component } from 'react'

class Search extends Component {
    render() {
        const {onSearchFood} = this.props 
        return (
            <div>
                <input onChange={onSearchFood} class="input is-normal" type="text" placeholder="Search a food here"></input>
            </div>
        )
    }
}

export default Search;