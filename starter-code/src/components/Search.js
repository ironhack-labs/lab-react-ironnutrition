import React, { Component } from 'react'

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            search: ""
        };
    }

    handleChange = event => {
        let { name, value } = event.target;
        this.props.searchBar(this.state);
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <input type="text" className="input search-bar" name="serch" placeholder="Search" onChange={e => this.handleChange(e)}></input>
            </div>
        )
    }
}
