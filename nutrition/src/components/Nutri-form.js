import React, { Component } from 'react'


export default class NutriForm extends Component {

    constructor() {

        super()

        this.state = {
            name: '',
            calories: '',
            image: '',
            quantity: ''
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
            name: '',
            calories: '',
            image: false,
            quantity: ''
        })
    }

    render() {

        console.log(this.props)

        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>Name:</label><br />
                <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                <br /><br />

                <label>Calories:</label><br />
                <input type="text" name="calories" value={this.state.calories} onChange={this.handleInputChange} />
                <br /><br />

                <label>image:</label><br />
                <input type="text" name="image" checked={this.state.image} onChange={this.handleInputChange} />
                <br /><br />

                <label>Quantity:</label><br />
                <input type="text" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} />
                <br /><br />

                <input type="submit" value="Crear Alimento" />
            </form>
        )
    }
}