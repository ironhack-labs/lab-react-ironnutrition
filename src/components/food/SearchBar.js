import React, {Component} from 'react'

class SearchBar extends Component {

    state = {

        searchbar: ''
    }

    handleSearchBar(event) {

        const {name, value} = event.target
        this.setState((prevState) => ({
            ...prevState,
            [name]:value
        }))
    }

    render() {

        const {searchbar} = this.state

        return (

            <div className="field is-grouped">
            <p className="control is-expanded">
                <input name="searchbar" className="input" type="text" placeholder="Search for a food" onChange={(event) => this.handleSearchBar(event)} />
            </p>
            <p className="control">
                <a className="button is-info">
                Search
                </a>
            </p>
            </div>

        )
    }
}

export default SearchBar