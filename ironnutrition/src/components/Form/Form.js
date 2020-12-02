import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            image: '',
            name: '',
            calories: '',
            quantity: ''
        }
    }

    handleImageChange = e => this.setState({ image: e.target.value })
    handleNameChange = e => this.setState({ name: e.target.value })
    handleCaloriesChange = e => this.setState({ calories: e.target.value })
    handleQuantityChange = e => this.setState({ quantity: e.target.value })

    handleFormSubmit = e => {
        e.preventDefault()

        // validation
        this.props.addFood(this.state)
        this.setState({
            image: '',
            name: '',
            calories: '',
            quantity: ''
        })
    }



    render() {
        return (
            <form onSubmit={this.handleFormSubmit} className="form">
                <label>Image</label><br />
                <input type='text' name='image' value={this.state.image} onChange={this.handleImageChange} />
                <br /><br />
                <label>Name</label><br />
                <input type='text' name='name' value={this.state.name} onChange={this.handleNameChange} />
                <br /><br />
                <label>Calories</label><br />
                <input type='text' name='calories' value={this.state.calories} onChange={this.handleCaloriesChange} />
                <br /><br />
                <label>Quantity</label><br />
                <input type='number' name='quantity' value={this.state.quantity} onChange={this.handleQuantityChange} />
                <br /><br />
                <input type='submit' value='Add new food' />
            </form>
        )
    }
}