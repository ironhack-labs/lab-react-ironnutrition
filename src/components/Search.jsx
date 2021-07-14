import React, { Component } from 'react'

class Search extends Component {
    render() {
        const {onSearch} = this.props
        return (
            <div>
                <input onChange={onSearch} className="input is-normal" type="text" placeholder="search a food" name="search"></input>
            </div>
        )
    }
}

export default Search