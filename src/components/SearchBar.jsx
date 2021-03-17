import React, { Component } from 'react'
import 'bulma/css/bulma.css';


export default class SearchBar extends Component {

    searchPizza = event => {
        this.props.updateInput(event.target.value)
    }

    render() {
        return (
            <div>
                <input 
                    className="input" 
                    type="text" 
                    name="searchBar" 
                    id="searchBar" 
                    placeholder="Pizza"
                    onChange={this.searchPizza}
                    value={this.props.searchInput}
                />
            </div>
        )
    }
}
