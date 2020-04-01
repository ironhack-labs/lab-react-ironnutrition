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
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <textarea type="submit" placeholder="Search"></textarea>
            </div>
        )
    }
}
