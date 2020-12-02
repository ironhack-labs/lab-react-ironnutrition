import React, { Component } from 'react'

export default class NewFood extends Component {

    constructor() {
        super()

        this.state = {
            name: '',
            calories: 0,
            image: '',
            quantity: 0
        }
    }

    handleInputChange = e => {
        const { name } = e.target
        const value = e.target.value


        this.setState({ [name]: value })
        console.log(this.state.name)
    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.props.addFood(this.state)
        this.setState({
            name: '',
            calories: 0,
            image: '',
            quantity: 0
        })
    }


    render() {
        return (
            <>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label><br />
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                    <br /><br />

                    <label>Calories:</label><br />
                    <input type="number" name="calories" value={this.state.calories} onChange={this.handleInputChange} />
                    <br /><br />

                    <label>Image URL:</label><br />
                    <input type="text" name="image" checked={this.state.image} onChange={this.handleInputChange} />
                    <br /><br />

                    <label>Quantity:</label><br />
                    <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} />
                    <br /><br />

                    <input type="submit" value="Add new food" />
                </form>
            </>

        )
    }
}