import React, { Component } from "react";

class Search extends Component {
    constructor (props) {
        super(props)

        this.state = {
            search: ""
        }
    }

    render () {
        return (
            <form>
                <input type="text" onChange={(event) => this.props.onSearch(event.target.value)} />
            </form>
        )
    }
}

export default Search;