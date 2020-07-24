import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
          <input onChange={this.props.searchInputChange} type="text" name="searchBar" placeholder="Find a food"/>
            </div>
        )
    }
}
