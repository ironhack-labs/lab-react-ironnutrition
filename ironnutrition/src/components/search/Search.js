import 'bulma/css/bulma.css';
import React, { Component } from 'react'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            search: ""
        }
    }

    inputSearch = e => {
        const { value } = e.target
        this.setState({ search: value })
        this.props.searchFor(value)
    }

    // searchForm = e => {
    //     e.preventDefault()
    //     this.props.searchFor(this.state.search)
    // }

    render() {
        return (
            <form>
                <div className="field">
                    <div className="control">
                        <input className="input" type="text" placeholder="Search" value={this.state.search} onChange={this.inputSearch} />
                    </div>
                </div>
            </form>
        )
    }
}

export default Search