import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class Search extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.onSearch} className="input is-link" type="text" placeholder="Search"></input>
            </div>
        )
    }
}

export default Search