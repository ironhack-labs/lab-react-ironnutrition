import React, { Component } from 'react'

export default class Search extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
        }
    }

    handleChange = (e) => {
        let { name, value} = e.currentTarget

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.filterSearch(this.state.name)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="new-food-form">

                <label>
                    Search: <input onChange={this.handleChange} value={this.state.name} type="text" name="name" />
                </label>  <br />

                <input type="submit" value="Search" />
            </form>
        )
    }
}
