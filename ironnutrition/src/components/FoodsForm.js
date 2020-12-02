import React, { Component, component } from 'react'

export default class FoodsForm extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            calories: "",
            image: "",
        }
    }

    handleInputChange = e => {

        const { name } = e.target
        const value = e.target.value
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.props.addFood(this.state)
        this.setState({
            name: "",
            calories: "",
            image: "",
        })
    }

    render() {


        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>Name:</label><br />
                <input type="text" name="name" value={this.state.name} placeholder='name' onChange={this.handleInputChange} />
                <br /><br />

                <label>Calories:</label><br />
                <input type="text" name="calories" value={this.state.calories} placeholder='calories' onChange={this.handleInputChange} />
                <br /><br />

                <label>Image:</label><br />
                <input type="text" name="image" value={this.state.image} placeholder='image' onChange={this.handleInputChange} />
                <br /><br />

                <button type="submit">Add a new food</button>
            </form>
        )
    }
}