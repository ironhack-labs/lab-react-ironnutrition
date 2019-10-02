import React, { Component } from 'react';
import FoodBox from './foodbox'

class Search extends Component {

    render () {
        return (
            <div class="field is-grouped">
                <p class="control is-expanded">
                <input class="input" type="text" placeholder="Search Food"/>
                </p>
                <p class="control">
                <a class="button is-info">
                    Search
                </a>
                </p>
          </div>
        )
    }
}

export default Search;