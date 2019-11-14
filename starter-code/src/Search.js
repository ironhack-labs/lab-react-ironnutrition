import React, { Component } from 'react'
import './index.css'


export class Search extends Component {
    render() {
        return (
            <div>
                <input type="text" className="input search-bar" name="search" placeholder="Search" ></input>
            </div>
        )
    }
}

export default Search
