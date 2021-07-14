import React, { Component } from 'react'
import 'bulma/css/bulma.css';


class Search extends Component {
    render() {
        const {onSearch} = this.props
        return (
            <div>
            <input class="input is-info" type="text" placeholder="Info input" onChange={onSearch} label="Search for a food item..." name="search"/> 
            </div>
        )
    }
}

export default Search
